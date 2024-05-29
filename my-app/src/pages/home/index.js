import { useState } from 'react'

import Edit from './components/Edit';
import List from './components/list';
import './index.css'

const Home = () => {

    const [data, setData] = useState([1,2,3])
    return <div className = "app">
        <Edit />
        <List listData={data}/>
    </div>
}

export default Home