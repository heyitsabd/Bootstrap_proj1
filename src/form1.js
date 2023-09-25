import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the alert

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace with your actual authentication logic (e.g., API call)
    const validEmail = 'user@example.com';
    const validPassword = 'password';

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      // Show the alert
      setShowAlert(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          {isLoggedIn && <p>Login successful!</p>}
          {showAlert && (
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
              Invalid email or password. Please try again.
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
//dfdsfsd
export default LoginForm;
