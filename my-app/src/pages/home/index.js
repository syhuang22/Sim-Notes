import { useState, useEffect} from "react";
import {API_GET_DATA} from '../../global/constants'
import Edit from "./components/Edit";
import List from "./components/list";
import "./index.css";

async function fetchData() {
    const res = await fetch(API_GET_DATA)
    const {data} = await res.json()
    return data
}

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // // bindling event
    // return () => {
    //     //unbinding event

    // }
    fetchData()

  }, [data])

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
