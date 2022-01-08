import React from "react";
import Input from "../../atoms/Input/Input";

type LoginFormProps = {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
};

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
}: LoginFormProps) => (
  <>
    <div>
      <label>Username: </label>
      <Input
        identifier="username"
        type="text"
        value={username}
        onChange={(value) => setUsername(value)}
      />
    </div>
    <div>
      <label>Password: </label>
      <Input
        identifier="password"
        type="password"
        value={password}
        onChange={(value) => setPassword(value)}
      />
    </div>
  </>
);

export default LoginForm;
