import * as React from "react";
import "./style.scss";
import { Button, Container, Input } from "../../components";
const Login = (): JSX.Element => {
  return (
    <Container>
      <div className="login-wrapper">
        <form
          role="form"
          action="/login/"
          className="form-signin"
          method="post"
        >
          <h2 className="form-signin-heading">
            Welcome back,
            <br />
            Please sign in with your Munzee account.
          </h2>
          <Input
            inputType="input"
            className="form-input"
            placeholder="Password"
            type="password"
          />
          <Input
            inputType="input"
            className="form-input"
            placeholder="Username"
          />
          <Button className="login-btn" icon={<i className="fa fa-lock"></i>}>
            Sign in
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
