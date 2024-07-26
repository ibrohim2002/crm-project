import React from "react";
import { Button, Container, Title, Wrapper } from "../Login/style";
import { Input } from "./style";

export const Verification = () => {
  return (
    <Container>
      <Wrapper>
        <Title.Main>Enter Verification Code</Title.Main>
        <Title.Description>
          We’ve sent a code to +998 90 000 00 00
        </Title.Description>
        <>
          <Input />
          <Input />
          <Input />
          <Input />
        </>
        <Button>Reset Password</Button>
        <Title.Description>
          Experiencing issues receiving the code?
        </Title.Description>
      </Wrapper>
    </Container>
  );
};
