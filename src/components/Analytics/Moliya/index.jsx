import React from "react";
import { Container, Wrapper, Title } from "./style";
import { finance } from "../../../mock/finance";

export const Moliya = () => {
  return (
    <div>
      <Title.Main>Moliya</Title.Main>
      <Container>
        {finance.map((item) => {
          return (
            <Wrapper key={item.id}>
              <Title.Container>
                <Title className="title">{item.days}</Title>
                <Title className="title">{item.dates}</Title>
              </Title.Container>
            </Wrapper>
          );
        })}
      </Container>
    </div>
  );
};
