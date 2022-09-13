import { useEffect } from "react"

function useFalser(value, setValue){
  useEffect(() => {
    if(value){
      setTimeout(() => {
        setValue(false)
      }, 3000)
    }
  }, [value])
}

export default useFalser