import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import banner from "../../assets/landing_banner.svg";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="logo-container">
          <img src={logoImg} alt="ListEventos" />
        </div>
        <h2>
          Organize seu calendário de <br /> eventos
        </h2>
        <div className="button-container">
          <a id="register">
            <FaUserPlus size={24} />
            Cadastrar
          </a>
          <Link to="/login" id="login">
            <FaSignInAlt size={24} />
            Logar
          </Link>
        </div>
      </Content>
      <img src={banner} alt="banner" width={500} height={350} />
    </Container>
  );
};

export default LandingPage;
