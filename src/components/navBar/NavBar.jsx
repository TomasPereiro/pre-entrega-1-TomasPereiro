import styles from './styles.module.css'
import React, { Component }  from 'react';
import CarWidget from '../carWidget/CarWidget';
const NavBar = () => {
    return(
      <div className={styles['nombre']}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand nombre"  >The Beach</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           
              <li class="nav-item">
                <a class="nav-link" href="#">Ropa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Accesorios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Joyeria</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Todos</a>
              </li>
              <li>
              <CarWidget/>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    )
}
export default NavBar;

