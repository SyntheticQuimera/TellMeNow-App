import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import RegisterForm from "../../components/Auth/RegisterForm/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import logo from "../../assets/png/logo.png";
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Container fluid className="auth">
      <div className="container-form">
        <Image src={logo} />
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              Create an account!
              <span onClick={() => setShowLogin(!showLogin)}>Register</span>
            </>
          ) : (
            <>
              Do you have an account?
              <span onClick={() => setShowLogin(!showLogin)}>Log In</span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
}
