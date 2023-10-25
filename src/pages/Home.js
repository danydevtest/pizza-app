import React from 'react';
import {Link} from 'react-router-dom';
import {imagenes} from "../imagenes"

function Home() {

  const handleClick=()=>{
    console.log("Hiciste click");
  }

  return (
    <div className="row p-4">
    <div className="col-xs-12 col-sm-6 col-md-3 p-2">
    <div className="card">
      <img src={imagenes.mole} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <Link to="/fempleado" class="btn btn-primary">
          Altas empleado
        </Link>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-6 col-md-3 p-2">
    <div className="card">
      <img src={imagenes.tacos} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <Link to="/fproducto" className="btn btn-primary" onClick={handleClick}>
          Productos
        </Link>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-6 col-md-3 p-2">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-6 col-md-3 p-2">
    <div className="card">
      <img src={imagenes.burritos} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Home