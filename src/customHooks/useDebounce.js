import { useEffect, useState } from 'react'

const useDebounce = (input,delay=300) => {
      const [debounceValue,setDebounceValue] = useState(input)
      
      useEffect(()=>{
            
            const timer = setTimeout(()=>{
                  setDebounceValue(input);
            },delay)

            return ()=>{
                  clearTimeout(timer);
            }
      },[input,delay])
      
      return debounceValue  
}

export default useDebounce