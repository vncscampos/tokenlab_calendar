import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSignOutAlt, FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import { Container, Header, Content } from "./styles";
import logoImg from "../../assets/logo.svg";
import colors from "../../styles/colors";

import formatDate from "../../utils/formatDate";

import api from "../../services/api";

interface IEvent {
  id: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

const Home: React.FC = () => {
  const history = useHistory();
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

  async function handleRemove(id: string) {
    const token = localStorage.getItem("JWT");

    api.defaults.headers.Authorization = `Bearer ${token}`;

    await api
      .delete(`/event/${id}`)
      .then(() => {
        loadEvents();
      })
      .catch(() => {
        alert("Não foi possivel remover o evento");
      });
  }

  async function handleUpdate(event: IEvent) {
    history.push("/event", event);
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} />
        <span onClick={handleLogout}>
          <FaSignOutAlt size={24} />
          <p>Sair</p>
        </span>
      </Header>
      <Content>
        <div className="content-header">
          <h1>Meus eventos</h1>
          <Link to="/event">Criar evento</Link>
        </div>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <div className="event-header">
                <strong>{formatDate(event.start_date, event.end_date)}</strong>
                <div>
                  <FaPencilAlt
                    size={18}
                    onClick={() => handleUpdate(event)}
                    style={{ color: colors.soft_blue, cursor: "pointer" }}
                  />
                  <FaTrashAlt
                    size={18}
                    style={{
                      marginLeft: 24,
                      color: colors.red,
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemove(event.id)}
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
