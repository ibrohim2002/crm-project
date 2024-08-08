import React from "react";
import { Container, Title, Wrapper } from "./style";
import { socials } from "../../../mock/socials";

export const Media = () => {
  return (
    <>
      <Title.Container>Ijtimoiy tarmoqlar</Title.Container>
      <Container>
        {socials.map((item) => {
          const { icon: Icon } = item;
          return (
            <Wrapper key={item.id}>
              <Container.Card>
                <Icon />
                <Title>{item.title}</Title>
              </Container.Card>
              <Container.Card>
                <Title.Percent>{item.percent}%</Title.Percent>
                <Title.Number>{item.number}k</Title.Number>
              </Container.Card>
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};
