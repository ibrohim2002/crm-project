import React from "react";
import { statistics } from "../../../mock/statistics";
import { Image, Title, Wrapper } from "./style";
import { Container } from "./style";

export const Statistics = () => {
  return (
    <div>
<Title.Container>Analytics</Title.Container>
    <Container>
      {statistics.map((item) => {
        const { icon: Icon } = item;
        return (
          <Wrapper key={item.id} color={item.backColor}>
            <Container.Card>
              <Icon />
              <Title>{item.title}</Title>
            </Container.Card>
            <Container.Card>
              <Title.Number>{item.number}</Title.Number>
              <Image src={item.image} />
            </Container.Card>
          </Wrapper>
        );
      })}
    </Container>
          </div>
  );
};
