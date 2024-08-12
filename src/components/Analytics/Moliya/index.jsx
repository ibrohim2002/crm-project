import React, { useEffect, useState } from "react";
import { Container, Wrapper, Title } from "./style";
// import { finance } from "../../../mock/finance";
import moment from "moment/moment";
import "moment/locale/uz-latn";
import Arrow from "../../../assets/icons/arrow.svg?react";

export const Moliya = () => {
  const url =
    "https://sheet.best/api/sheets/08c05757-65c7-4e6a-a744-36ad0714d2a1/tabs/moliya";

  const [finance, setFinance] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setFinance(res));
  }, []);
  return (
    <Container>
      <Title.Main>Moliya</Title.Main>
      <Container.Main>
        <Container.Month>
          <Arrow className="arrow" />
          <Title>{moment().format("MMMM YYYY")}</Title>
          <Arrow />
        </Container.Month>
        <Container.Week>
          {finance.map((item) => {
            return (
              <Wrapper key={item.id}>
                <Title.Container>
                  {/* <Title className="title">{item.days}</Title> */}
                  <Title className="title">{item.today}</Title>
                </Title.Container>
              </Wrapper>
            );
          })}
        </Container.Week>
        <Title>{moment().format("Do-MMMM, YYYY")}</Title>
        {/* {finance.map((item) => {
          return ( */}
        <Container.Price>
          <Title.Price>8520000</Title.Price>
          <Container.Month>
            <Title>Talabalar</Title>
            <Title>2245000</Title>
          </Container.Month>
          <Container.Month>
            <Title>Darsliklar sotuvi</Title>
            <Title>11142000</Title>
          </Container.Month>
        </Container.Price>
        {/* );
        })} */}
      </Container.Main>
    </Container>
  );
};
