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
import { Navigate, Route, Routes } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/analitika" element={<Analytics/>}/>
            <Route path="/buyurtma" element={<Order/>}/>
            <Route path="/" element={<Navigate to="/analitika"/>}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
          </Routes>
        </Wrapper>
      </Container>
    </>
  );
};
