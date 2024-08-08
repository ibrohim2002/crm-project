import React from "react";
import { Container, Wrapper } from "./style";
import { Statistics } from "./Statistics";
import { Media } from "./Media";
import { Emails } from "./Emails";
import { Moliya } from "./Moliya";

const Analytics = () => {
  return (
    <Container>
      <Statistics />
      <Media />
      <Wrapper>
        <Emails />
        <Moliya />
      </Wrapper>
    </Container>
  );
};

export default Analytics;
