import React from "react";
import { Button, Container, Input, Title, Wrapper } from "./style";

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title.Main>Login to your account</Title.Main>
        <Title.Description>Enter your details to login.</Title.Description>
        <Title.Label>Email address</Title.Label>
        <Input placeholder="Enter your email address"/>
        <Title.Label>Password</Title.Label>
        <Input placeholder="Enter your Password" type="password"/>
        <Button>Login</Button>
      </Wrapper>
    </Container>
  );
};
