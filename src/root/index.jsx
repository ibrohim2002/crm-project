import React from "react";
import { Login } from "../components/Login";
import { Verification } from "../components/Verification";
import { Reset } from "../components/Reset";
import { NewPassword } from "../components/NewPassword";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Container, Wrapper } from "./style";
import Analytics from "../components/Analytics";
import { Order } from "../components/Orders";

export const Root = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Wrapper>
          <Navbar />
          {/* <Analytics/> */}
          <Order />
        </Wrapper>
      </Container>
    </>
  );
};
