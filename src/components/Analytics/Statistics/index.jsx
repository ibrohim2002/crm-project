import React from "react";
import { statistics } from "../../../mock/statistics";
import { Title, Wrapper } from "./style";
import { Container } from "./style";

export const Statistics = () => {
  console.log(statistics);
  return (
    <Container>
      {statistics.map((item) => {
        return (
          <Wrapper key={item.id} color={item.backColor}>
            <Title>{item.title}</Title>
            <Title.Number>{item.number}</Title.Number>
            <img src='../../../assets/statistics/student.png'/>
          </Wrapper>
        );
      })}
    </Container>
  );
};
