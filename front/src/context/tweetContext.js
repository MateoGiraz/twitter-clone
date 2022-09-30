import axios from 'axios'
import { createContext, useContext } from 'react'
import useUser from './userContext'

const TweetContext = createContext()
const useTweet = () => useContext(TweetContext)

export const TweetProvider = ({ children }) => {
  const { currentUser } = useUser()

  const postTweet = ({ data, image }) => {
    const newTweet = {
      data,
      image,
      user: currentUser.username
    }
    return new Promise((res, rej) => {
      axios
        .post(`http://localhost:2000/users`, newTweet)
        .then(() => res())
        .catch((e) => res(e))
    })

  }
  const getTweets = () => {
    return new Promise((res, rej) => {
      axios
        .get(`http://localhost:2000/tweets`)
        .then((e) => res(e))
        .catch((e) => rej(e))
    })
  }

  const getTweetsByUser = (username) => {
    return new Promise((res, rej) => {
      axios
        .get(`http://localhost:2000/tweets/${username}`)
        .then((e) => res(e))
        .catch((e) => rej(e))
    })
  }

  const deleteTweet = (id) => {
    return new Promise((res, rej) => {
      axios
        .delete(`http://localhost:2000/tweets/${id}`)
        .then((e) => res(e))
        .catch((e) => rej(e))
    })
  }

  const data = {
    postTweet,
    getTweets,
    getTweetsByUser,
    deleteTweet
  }

  return (
    <TweetContext.Provider value={data}>
      {children}
    </TweetContext.Provider>
  )
}

export default useTweet
