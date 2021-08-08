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
        <div className="content-header">
          <h1>Meus eventos</h1>
          <Link to="/createEvent">Criar evento</Link>
        </div>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <div className="event-header">
                <strong>
                  {new Date(event.start_date).toUTCString().split(" ")[1]}{" "}
                  {new Date(event.start_date).toUTCString().split(" ")[2]}{" "}
                  {new Date(event.start_date).getHours()}:
                  {String(new Date(event.start_date).getMinutes()).padStart(
                    2,
                    "0"
                  )}
                  {" às "}
                  {new Date(event.end_date).getHours()}:
                  {String(new Date(event.end_date).getMinutes()).padStart(
                    2,
                    "0"
                  )}{" "}
                  {new Date(event.end_date).toUTCString().split(" ")[1]}{" "}
                  {new Date(event.end_date).toUTCString().split(" ")[2]}{" "}
                </strong>
                <div>
                  <FaPencilAlt
                    size={18}
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
