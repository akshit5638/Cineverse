import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import axios from 'axios'

const App = () => {
  const apiTesting = () => {

    fetchDataFromApi("/movie/popular")
      .then(res => console.log(res))
      .catch(err => console.log('something went wrong'))
  }
  useEffect(() => {
    apiTesting();
  }, [])
  return (

    <div>App</div>
  )
}

export default App