import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import { Container, Header, Content } from "./styles";
import logoImg from "../../assets/logo.svg";
import colors from "../../styles/colors";

import api from "../../services/api";

interface IEvent {
  id: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

const Home: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    const token = localStorage.getItem("JWT");

    api.defaults.headers.Authorization = `Bearer ${token}`;

    await api
      .get("/event")
      .then((response) => {
        setEvents(response.data);
      })
      .catch(() => {
        alert("Não foi possivel carregar os eventos");
      });
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} />
        <Link to="/">
          <FaSignOutAlt size={24} />
          <p>Sair</p>
        </Link>
      </Header>
      <Content>
        <h1>Meus eventos</h1>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <div className="event-header">
                <strong>{event.start_date} - {event.end_date}</strong>
                <div>
                  <FaPencilAlt size={18} style={{ color: colors.soft_blue }} />
                  <FaTrashAlt
                    size={18}
                    style={{ marginLeft: 24, color: colors.red }}
                  />
                </div>
              </div>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
};

export default Home;
