import React from 'react'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
function Customer() {
  return (
    <div>   
        <NavBar></NavBar>
        <section className="col-md-9 ms-sm-auto col-lg-10 px-md-2 cust">This is customer page</section>
    </div>
  )
}

export default Customer
