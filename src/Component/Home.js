import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Containerlogin = styled.div`
  max-width: 50vw;
  position: relative;
  left: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Botao = styled.button`
  width: 24vw;
  height: 6vh;
  margin-top: 2vh;
  border-radius: 10px 10px;
`;

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Containerlogin>
      <h2>Bem Vindos!</h2>
      <p>Faça login com seu e-mail e senha.</p>

      <Formulario>
        <div>
          <span>Login</span>
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <span>Senha</span>
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Botao>
            <Link to="/salas"> Entrar na Sala </Link>
          </Botao>
        </div>
      </Formulario>
    </Containerlogin>
  );
}
