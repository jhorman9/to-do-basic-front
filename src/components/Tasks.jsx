import axios from 'axios';
import React from 'react'

const Tasks = ({ data, getAllToDo }) => {

    const UpdateData = (e) => {
    
    axios.put(`https://to-do-crud-3kmn-dev.fl0.io/todo/${data.id}`, { isCompleted: e.target.checked })
        .then(res => {
            getAllToDo();
        })
        .catch(error => console.log(error));
    };

    const deleteData = () => {
        axios.delete(`https://to-do-crud-3kmn-dev.fl0.io/todo/${data.id}`)
        .then(res => {
            console.log(res.data);
            getAllToDo();
        })
        .catch(error => console.log(error));
    }

  return (
    <>
    <div className="card-header">
        { data.isCompleted == true  ? <span className='fw-bold' style={{color: "green"}}>Completado</span> : <span className='fw-bold' style={{color: "#5f0000"}}>No completado</span>}
        <span onClick={deleteData} className='delete fw-bold' style={{cursor: 'pointer'}}>x</span>
    </div>
    <div className="card-body" style={data.isCompleted ? {background: 'green'} : {background: '#5f0000', color: 'white'} }>
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
    </div>
    <div className="card-footer">
        <div class="form-check">
            <input onChange={UpdateData} checked={data.isCompleted} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label">
                Tarea completada
            </label>
        </div>
    </div>
    </>
  )
}

export default Tasks