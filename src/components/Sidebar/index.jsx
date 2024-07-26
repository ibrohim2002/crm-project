import React from "react";
import { Title, Container } from "./style";
import Profile from "../Profile/index.jsx"

const Sidebar = () => {
  return (
    <div>
      <Container>
        <Title.Main>Webbrain.crm</Title.Main>
        <Profile/>
        <Title>
          Analitika<span>{">"}</span>
        </Title>
        <Title>
          Buyurtma<span>{">"}</span>
        </Title>
        <Title>
          Moliya<span>{">"}</span>
        </Title>
        <Title>
          Talaba<span>{">"}</span>
        </Title>
        <Title>
          Guruhlar<span>{">"}</span>
        </Title>
        <Title>
          Kurslar<span>{">"}</span>
        </Title>
        <Title>
          HR<span>{">"}</span>
        </Title>
        <Title>
          Sozlamalar<span>{">"}</span>
        </Title>
        <Title.Exit>Chiqish</Title.Exit>
      </Container>
    </div>
  );
};
export default Sidebar;
