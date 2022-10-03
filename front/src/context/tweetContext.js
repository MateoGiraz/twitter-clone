 import axios from 'axios'
import { createContext, useContext } from 'react'

const TweetContext = createContext()
const useTweet = () => useContext(TweetContext)

export const TweetProvider = ({ children }) => {
  const postTweet = ({ data, user, uploaded, image }) => {
    const newTweet = {
      data,
      image: image || 'https://i.stack.imgur.com/l60Hf.png',
      uploadedFile: uploaded,
      user: user.username
    }
    return new Promise((res, rej) => {
      axios
        .post(`http://localhost:2000/tweets`, newTweet)
        .then(() => res(newTweet))
        .catch((e) => res(e))
    })

  }
  const getTweets = () => {
    return new Promise((res, rej) => {
      axios
        .get(`http://localhost:2000/tweets`)
        .then((response) => res(response.data))
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
