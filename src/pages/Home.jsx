import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tasks from '../components/Tasks';


const Home = () => {

    const [ datas, setDatas ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/todo')
        .then((res) => {
            setDatas(res.data);
        })
    }, []);

    const getAllToDo = () => {
        axios.get('http://localhost:8000/todo')
            .then((res) => {
                setDatas(res.data);
            })
    };


  return (
    <>
    <div className="taskCreated">
        {
            datas?.map((data, index) => (
                <div key={index} className="card">
                    <Tasks key={data.id} data={data} getAllToDo={getAllToDo} />
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Home