import { useEffect } from "react"

function useFalser(isSubmit, setIsSubmit){
  useEffect(() => {
    if(isSubmit){
      setTimeout(() => {
        setIsSubmit(false)
      }, 3000)
    }
  }, [isSubmit])
}

export default useFalser