import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tasks from '../components/Tasks';


const Home = () => {

    const [ datas, setDatas ] = useState([]);
    let count = 0;

    useEffect(() => {
        axios.get('https://to-do-crud-3kmn-dev.fl0.io/todo')
        .then((res) => {
            setDatas(res.data);
        })
    }, []);

    const getAllToDo = () => {
        axios.get('https://to-do-crud-3kmn-dev.fl0.io/todo')
            .then((res) => {
                setDatas(res.data);
            })
    };

    datas.map((data) => {
        count++
    })

  return (
    <>
    <div className="taskCreated" style={count <= 3 ? {gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 250px))' } : {gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'} }>
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