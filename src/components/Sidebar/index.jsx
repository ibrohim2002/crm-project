import React from "react";
import { Title, Container } from "./style";
import Profile from "../Profile/index.jsx";
import {Arrow} from "./style"

import { sidebar } from "../../mock/sidebar.js";

const Sidebar = () => {
  return (
    <div>
      <Container>
        <Title.Main>Webbrain.crm</Title.Main>
        <Profile />
        {sidebar.map((value) => {
          const {icon:Icon} = value
          return (
            <Title key={value.id}>
              <Icon />
              {value.title}
              <Arrow/>
            </Title>
          );
        })}
        <Title.Exit>Chiqish</Title.Exit>
      </Container>
    </div>
  );
};
export default Sidebar;
