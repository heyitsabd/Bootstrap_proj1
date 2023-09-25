import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS for styling
import { Link } from 'react-router-dom';
import Customer from './Customer'
import { Button } from 'react-bootstrap';
import LoginForm from './form1';

function Nav() {
  const ptr1="/Dashboard";
  const ptr2='/Customer';
  const [state,setState]=useState(null);
  function change(){
    if(state==null||state=="Hello"){
      setState("Hii")
    }
    
  }

  return (
    <div className="App">
      <div className="container-fluid" >
        <div className="row">
          {/* Sidebar */}
          <nav id="sidebar" className="col-md-3 col-lg-2 nav_bar_styling" >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <Link to="/" >
                    Dashboard
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to='/Customer'>
                    Customers
                    </Link>
                  </a>
                </li>
                
              </ul>
          </nav>
          
          {/* Main content */}
          {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}
            {/* Your content goes here */}
            {/* <h1>Dashboard</h1> */}
            {/* Additional content */}
          {/* </main> */}
          <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" ></section>
          
        </div>
      </div>
      <Button variant="primary" className="col-md-2 ms-sm-auto col-lg-2 px-md-4 LogSign" ><Link to='/LoginForm'>Primary</Link></Button>{' '}
    </div>
  );
}

export default Nav;
