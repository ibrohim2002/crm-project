import React from "react";
import { Container, Wrapper, Title } from "./style";
import { useState, useEffect } from "react";
import img from "../../../assets/image.png";

export const Emails = () => {
  const url =
    "https://sheet.best/api/sheets/08c05757-65c7-4e6a-a744-36ad0714d2a1/tabs/roles";

  const [mail, setMail] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setMail(res));
  }, []);
  return (
    <div>
      <Title.Container>Email xabarlari</Title.Container>
      <Container>
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
      </Container>
    </div>
  );
};
