import React from "react";
import { Container, Wrapper, Title } from "./style";
import { useContext } from "react";
import { MailContext } from "../../../context/mailContext";

export const Emails = () => {
  const [data] = useContext(MailContext);
  return (
    <div>
      <Title.Container>Email xabarlari</Title.Container>
      <Container>
        {data.map((item) => {
          return (
            <Wrapper key={item.id}>
              <input type="checkbox" name="" id="" />
              <img src={item.image} />
              <div>
                <Title>{item.name}</Title>
                <Title.Job>{item.title}</Title.Job>
              </div>
              <Title>{item.question}</Title>
              <Title.Job>{item.time}</Title.Job>
            </Wrapper>
          );
        })}
      </Container>
    </div>
  );
};
