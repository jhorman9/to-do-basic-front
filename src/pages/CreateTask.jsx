import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const CreateTask = () => {

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    axios.post('http://localhost:8000/todo', data)
        .then(res => {
            reset();
        })
        .catch(error => console.log(error));
};

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="home__content" >
          <div className="mb-3">
              <label className="form-label">Titulo</label>
              <input { ...register('title') } type="text" className="form-control" placeholder="Escribe aqui" required />
          </div>
          <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <textarea { ...register('description') } className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escribe aqui'></textarea>
          </div>
          <div className="form-check">
              <input { ...register('isCompleted') } className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label">
                  Tarea completada
              </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Crear tarea</button>
      </div>
  </form>
  )
}

export default CreateTask