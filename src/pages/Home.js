import React from 'react'
import Filter from '../components/Filter'
import Header from '../components/Header'
import Table from '../components/Table'

const Home = () => {
  return (
    <div>
        <Header/>
        <Table/>
        <Filter/>
    </div>
  )
}

export default Home