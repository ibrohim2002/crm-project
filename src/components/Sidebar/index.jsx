import React, { useState } from "react";
import { Title, Container, Submenu, Wrapper } from "./style";
import Profile from "../Profile/index.jsx";
import { Arrow } from "./style";

import ExitIcon from "../../assets/icons/exit.svg?react";

import { sidebar } from "../../mock/sidebar.js";

const Sidebar = () => {
  const [open, setOpen] = useState(
    JSON.parse(localStorage.getItem("open")) || []
  );
  const [state, setState] = useState("Analitics");

  const onChange = (e, id, name) => {
    setState(name);
    if (open.includes(id)) {
      let res = open.filter((val) => id !== val);
      setOpen(res);
      localStorage.setItem("open", JSON.stringify(res));
    } else {
      setOpen([...open, id]);
      localStorage.setItem("open", JSON.stringify([...open, id]));
    }
  };
  return (
    <Container>
      <Title.Main>Webbrain.crm</Title.Main>
      <Profile />
      {sidebar.map((value) => {
        const { icon: Icon } = value;
        return (
          <Wrapper key={value.id}>
            <Title
              active={state === value.title}
              onClick={(e) => {
                onChange(e, value.id, value.title);
              }}
            >
              <Icon className="icon" />
              {value.title}
              {value.child && <Arrow className="icon arrow" />}
            </Title>
            {open.includes(value.id) && (
              <Submenu>
                {value.child &&
                  value.child.map((child) => {
                    return <Title key={child.id}>{child.title}</Title>;
                  })}
              </Submenu>
            )}
          </Wrapper>
        );
      })}
      <Title.Exit>
        <ExitIcon className="icon" />
        Chiqish
      </Title.Exit>
    </Container>
  );
};
export default Sidebar;
