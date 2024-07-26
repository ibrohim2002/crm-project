import React from "react";
import { Button, Container, Input, Title, Wrapper } from "../Login/style";

export const NewPassword = () => {
  return (
    <Container>
      <Wrapper>
        <Title.Main>New Password</Title.Main>
        <Title.Description>Set up a new password to protect your account.</Title.Description>
        <Title.Label>New password</Title.Label>
        <Input placeholder="Enter new password" type="password"/>
        <Title.Label>Confirm password</Title.Label>
        <Input placeholder="Enter your new password again" type="password"/>
        <Title.Label>Weak password. Must contain at least</Title.Label>
        <Title.Label>At least 1 uppercase</Title.Label>
        <Title.Label>At least 1 number</Title.Label>
        <Title.Label>At least 8 characters</Title.Label>
        <Button>Continue</Button>
      </Wrapper>
    </Container>
  );
};