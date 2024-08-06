import React, { useState } from "react";
import { Container, Text, Input, Wrapper } from "./style";

export const Navbar = () => {
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyuy",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const time = new Date();
  let month = months[time.getMonth()];
  return (
    <Container>
      <Input type="text" placeholder="Search" />
      <Wrapper>
        <Text.Time>
          {time.getHours()}:{time.getMinutes()}
          <span className="time">{time.getHours() > 11 ? "PM" : "AM"}</span>
        </Text.Time>
        <select name="" id="">
          <option value="O'zbekcha">
            {time.getDate()}-{month.toLowerCase()} {time.getFullYear()}
          </option>
        </select>
        <select name="" id="">
          <option value="O'zbekcha">O'zbekcha</option>
          <option value="Русский">Русский</option>
          <option value="English">English</option>
        </select>
      </Wrapper>
    </Container>
  );
};
