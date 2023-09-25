import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert,Button,Breadcrumb, BreadcrumbItem, ThemeProvider } from 'react-bootstrap';
import MyComponent from './Alert';
import Nav from './NavBar';
import BreadcrumbExample from './BreadCrumb';
import { Route,Switch } from 'react-router-dom';

function App() {
  
  return (
   
    <div className="App">
<div>
<Nav ></Nav>
{/* <MyComponent></MyComponent> */}
</div>

{/* <Button
        type="button"
        className="btn btn-success"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
      >
        Tooltip
      </Button>

      <Alert variant='secondary'>This</Alert>
      
     <BreadcrumbExample></BreadcrumbExample>

<MyComponent></MyComponent> */}
<Alert variant='secondary'>This</Alert>

    </div>
  
  );
}

export default App;
