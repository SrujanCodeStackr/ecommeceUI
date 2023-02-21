import React from 'react'
import useFetch from './useFetch'

const FetchApi = () => {
      const BASE_URL = "https://jsonplaceholder.typicode.com/users"
      const {data,loading,error} = useFetch(BASE_URL);
      console.log(data)
  return (
    <div>
      <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Something worng </h3>}
      </div>
    </div>
  )
}

export default FetchApi