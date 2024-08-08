import React from "react";
import { Container, Wrapper, Title } from "./style";
import { finance } from "../../../mock/finance";

export const Moliya = () => {
  return (
    <div>
      <Title.Container>Moliya</Title.Container>
      <Container>
        {finance.map((item) => {
          return (
            <Wrapper key={item.id}>
              <div>
                <Title>{item.days}</Title>
                <Title>{item.dates}</Title>
              </div>
            </Wrapper>
          );
        })}
      </Container>
    </div>
  );
};
