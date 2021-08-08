import React from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form } from "./styles";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import logoImg from "../../assets/logo.svg";

const Login: React.FC = () => (
  <Container>
    <img src={logoImg} />
    <Form>
      <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
      <Input
        name="password"
        icon={FiLock}
        type="password"
        placeholder="Senha"
      />
      <Button type="submit">Entrar</Button>
    </Form>
  </Container>
);

export default Login;
