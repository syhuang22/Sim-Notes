import { useState, useEffect, useRef} from "react";
import {API_GET_DATA} from '../../global/constants'
import Edit from "./components/Edit";
import List from "./components/list";
import "./index.css";

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const {data} = await res.json()
    setData(data)
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
        return 
    }
    fetchSetData(data)
        .then(data=> submittingStatus.current = false)
  }, [data])

  useEffect(() => {
    // // bindling event
    // return () => {
    //     //unbinding event

    // }
    fetchData(setData)

  }, [data])

  return (
    <div className="app">
      <Edit add={setData} submittingStatus = {submittingStatus}/>
      <List listData={data} deleteData={setData} submittingStatus = {submittingStatus} />
    </div>
  );
};

export default Home;
