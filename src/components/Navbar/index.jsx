import React, { useState } from "react";
import {
  Container,
  Text,
  Input,
  Wrapper,
  Search,
  InputContainer,
  Data,
  Languages,
  LangBtn,
} from "./style";

export const Navbar = () => {
  const [lang, setLang] = useState(localStorage.getItem('language') || "O’zbekcha");
  const [modal, setModal] = useState(0);
  const time = new Date();
  const onLanguage = (name) => {
    localStorage.setItem("language", name);
    setLang(name)
    setModal(!modal)
  };
  
  const onButton = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <InputContainer>
        <Search />
        <Input type="text" placeholder="Search" />
      </InputContainer>
      <Wrapper>
        <Text.Time>
          {(time.getHours() < 10 ? "0" : "") + time.getHours()}:
          {(time.getMinutes() < 10 ? "0" : "") + time.getMinutes()}
          <span className="time">{time.getHours() > 11 ? "PM" : "AM"}</span>
        </Text.Time>
        <Data
          type="date"
          id="start"
          name="trip-start"
          defaultValue={time.toJSON().slice(0, 10)}
          min="2024-01-01"
          max="2024-12-31"
        />
        <div style={{ position: "relative" }}>
          <LangBtn.Main onClick={onButton}>{lang}</LangBtn.Main>
          {modal ? (
            <Languages>
              <LangBtn onClick={() => onLanguage("O’zbekcha")}>
                O’zbekcha
              </LangBtn>
              <LangBtn onClick={() => onLanguage("Russian")}>Russian</LangBtn>
              <LangBtn onClick={() => onLanguage("English")}>English</LangBtn>
            </Languages>
          ) : (
            ""
          )}
        </div>
      </Wrapper>
    </Container>
  );
};
