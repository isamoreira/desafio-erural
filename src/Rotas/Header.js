import React, { Component } from "react";
import Home from "../Component/Home.js";
import Salas from "../Component/Sala.js";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  max-width: 60vw;
  height: 6vh;
  background-color: gray;
`;

const Lista = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  justify-content: space-evenly;
  padding: 1vh;
`;

export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav>
          <Lista>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/salas"> Salas</Link>
            </li>
          </Lista>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salas" element={<Salas />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
