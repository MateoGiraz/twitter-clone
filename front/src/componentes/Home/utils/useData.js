import { useEffect, useState } from "react"

const useData = (getTweets, setTweets) => {
  const [loading,setLoading]= useState(true)
  const [error,setError] = useState()

  useEffect(()=>{
    setLoading(true)
    getTweets()
    .then(data=>setTweets(data))
    .catch(e=>setError(e))
    .finally(()=>setLoading(false))
  },[])

  return {loading, error}
}

export default useData


