import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form } from "./styles";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await api
      .post("/session", { email, password })
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem('JWT', token);
        localStorage.setItem('user', JSON.stringify(user));
        history.push("/home");
      })
      .catch(() => {
        alert("Erro no login.");
      });
  }

  return (
    <Container>
      <img src={logoImg} />
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          icon={FiMail}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
