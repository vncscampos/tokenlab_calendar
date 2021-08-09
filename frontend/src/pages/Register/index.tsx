import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Container, Form } from "./styles";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

const Register: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await api
      .post("/user", { name, email, password })
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => {
        alert("Erro ao criar usuário.");
      });
  }

  return (
    <Container>
      <img src={logoImg} />
      <Form onSubmit={handleSubmit}>
        <Input
          name="nome"
          icon={FiUser}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
