import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function MyComponent() {
  const [showAlert, setshowAlert] = useState(true);

  const toggleAlert = () => {
    setshowAlert(!showAlert); // Toggle the value of 'showAlert'
  };

  return (
    <div>
      <Button onClick={toggleAlert}>Toggle Alert</Button>

      <Alert show={showAlert} variant="success">
        This is a success alert.
      </Alert>
    </div>
  );
}

export default MyComponent;
