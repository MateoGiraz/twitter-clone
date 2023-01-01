import { useEffect, useState } from "react"

const useData = (asyncFunc, dependencies=[]) => {
  const [loading,setLoading]= useState(true)
  const [error,setError] = useState()
  const [data, setData] = useState()

  useEffect(()=>{
    setLoading(true)
    asyncFunc()
    .then(data=>setData(data))
    .catch(e=>setError(e))
    .finally(()=>setLoading(false))
  }, dependencies)

  return {loading, error, data}
}

export default useData


