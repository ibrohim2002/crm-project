import React from "react";
import { Container, Wrapper, Title } from "./style";
import { useContext } from "react";
import { MailContext } from "../../../context/mailContext";

export const Emails = () => {
  const [data] = useContext(MailContext);
  return (
    <div>
      Email xabarlari
      <Container>
        {data.map(item=>{
            return (
                <Wrapper>
                    <img src="../"/>
                    <div>
                        <Title>{item.name}</Title>
                        <Title.Job>{item.title}</Title.Job>
                    </div>
                        <Title>{item.question}</Title>
                </Wrapper>
            )
        })}
      </Container>
    </div>
  );
};
