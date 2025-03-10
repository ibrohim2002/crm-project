import React from "react";
import { Container, Wrapper, Title } from "./style";
import { useState, useEffect } from "react";
import img from "../../../assets/image.png";

export const Emails = () => {
  const url =
    "https://api.sheetbest.com/sheets/b9919168-806d-4ce7-b4fc-30667c9c0808/tabs/roles";

  const [mail, setMail] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setMail(res));
  }, []);
  return (
    <Container>
      <Title.Container>Email xabarlari</Title.Container>
      <Container.Main>
        {mail.map((item) => {
          return (
            <Wrapper key={item.id}>
              <Wrapper.Profile>
                <input type="checkbox" name="" id="" />
                <img src={img} />
                <Wrapper.Message>
                  <Title>{item.name}</Title>
                  <Title.Job>{item.title}</Title.Job>
                </Wrapper.Message>
              </Wrapper.Profile>
              <Title.Message>{item.message}</Title.Message>
              <Title.Time>{item.day}</Title.Time>
            </Wrapper>
          );
        })}
      </Container.Main>
    </Container>
  );
};
