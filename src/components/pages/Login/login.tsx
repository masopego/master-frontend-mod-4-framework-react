import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import LoginForm from "../../organisms/LoginForm/LoginForm";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <form onSubmit={handleNavigation}>
      <Title>Hello from login page</Title>
      <LoginForm
        username={username}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
      />
      <Button type="submit">login</Button>
    </form>
  );
};
