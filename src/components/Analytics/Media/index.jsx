import React from "react";
import { Container, Title, Wrapper } from "./style";
import { socials } from "../../../mock/socials";

export const Media = () => {
  return (
    <>
      Ijtimoiy tarmoqlar
      <Container>
        {socials.map((item) => {
          const { icon: Icon } = item;
          return (
            <Wrapper key={item.id}>
              <Container>
                <Icon />
                <Title>{item.title}</Title>
              </Container>
              <Container>
                <Title.Percent>{item.percent}</Title.Percent>
                <Title.Number>{item.number}</Title.Number>
              </Container>
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};
