import React, { useEffect } from 'react'
import { consultarMedias } from '../../servicios/MedServicios'

export default function Medias() {

  useEffect(() => {
    consultarTodo()
  }, [])


  const consultarTodo = async () => {
    try {
      const { datos } = await consultarMedias()
      console.log(datos)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
