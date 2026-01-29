import { Button, Flex, Input } from "antd";
import AuthWrapper from "./AuthWrapper";
import "./stylesheet/login.css";

const Login = () => {
  return (
    <AuthWrapper>
      <div className="login_container">
        <h3>Login</h3>

        <Flex vertical gap="large">
          <Input size="large" placeholder="Email" type="email" />
          <Input size="large" placeholder="Password" type="password" />

          <Button type="primary" size="large">
            Submit
          </Button>
        </Flex>
      </div>
    </AuthWrapper>
  );
};

export default Login;
