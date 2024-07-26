import React from "react";
import { Button, Container, Input, Title, Wrapper } from "../Login/style";

export const Reset = () => {
  return (
    <Container>
      <Wrapper>
      <Title.Main>Reset Password</Title.Main>
        <Title.Description>Enter your email to reset your password.</Title.Description>
        <Title.Label>Phone</Title.Label>
        <Input placeholder="+998 90 000 00 00"/>
        <Button>Reset Password</Button>
      </Wrapper>
    </Container>
  );
};