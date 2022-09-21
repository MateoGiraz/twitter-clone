import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import useUser from './userContext'

const TweetContext = createContext()
const useTweet = () => useContext(TweetContext)

export const TweetProvider = ({ children }) => {
  const { currentUser } = useUser()

  const postTweet = ({ data, image }) => {
    const newTweet = {
      data,
      image,
      user: currentUser,
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
        .catch((e) => res(e))
    })
  }

  const getTweetsByUser = () => {}

  const toExport = {
    postTweet,
    getTweets,
  }

  return (
    <TweetContext.Provider value={toExport}>{children}</TweetContext.Provider>
  )
}

export default useTweet
