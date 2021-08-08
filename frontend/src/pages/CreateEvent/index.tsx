import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { Container, Content } from "./styles";
import banner from "../../assets/create_banner.svg";
import colors from "../../styles/colors";
import Button from "../../components/Button";

import api from "../../services/api";

const CreateEvent: React.FC = () => {
  const [description, setDescription] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endDate, setEndDate] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const start_date = startDate + "T" + startHour + ":00-03:00";
    const end_date = endDate + "T" + endHour + ":00-03:00";

    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('JWT')}`;

    await api.post("/event", { description, start_date, end_date }).then((response => {
        alert('Evento criado com sucesso!');
        window.location.reload();
        
    })).catch(() => {
        alert('Não foi possivel criar evento!');
    });
  }

  return (
    <Container>
      <Content>
        <Link to="/home">
          <FaArrowLeft size={24} color={colors.soft_blue} />
          Voltar
        </Link>
        <div className="center-container">
          <section>
            <img src={banner} />
          </section>
          <section>
            <form onSubmit={handleSubmit}>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva o evento"
              />
              <div className="input-date">
                <p id="start">Início:</p>
                <input
                  type="time"
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="input-date">
                <p>Término:</p>
                <input
                  type="time"
                  value={endHour}
                  onChange={(e) => setEndHour(e.target.value)}
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <Button type="submit">Criar evento</Button>
            </form>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default CreateEvent;
