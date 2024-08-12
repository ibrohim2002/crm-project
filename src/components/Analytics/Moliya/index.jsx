import React, { useEffect, useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
import { Container, Wrapper, Title } from "./style";
// import { finance } from "../../../mock/finance";
import moment, { weekdays } from "moment/moment";
import "moment/locale/uz-latn";
import Arrow from "../../../assets/icons/arrow.svg?react";
import ArrowUp from "../../../assets/statistics/arrow-up.svg?react";

export const Moliya = () => {
  const weekDays = [
    { short: "Yak", long: "Yakshanba" },
    { short: "Dush", long: "Dushanba" },
    { short: "Sesh", long: "Seshanba" },
    { short: "Chor", long: "Chorshanba" },
    { short: "Pay", long: "Payshanba" },
    { short: "Juma", long: "Juma" },
    { short: "Shan", long: "Shanba" },
  ];
  const url =
    "https://sheet.best/api/sheets/08c05757-65c7-4e6a-a744-36ad0714d2a1/tabs/moliya";

  const [finance, setFinance] = useState([]);
  const [active, setActive] = useState([0, 0, 0, 1, 0, 0, 0]);
  const [data, setData] = useState([]);

  const renderData = async (link) => {
    const response = await fetch(link);
    const data = await response.json();
    setFinance(data);
    setData(data[3]);
  };

  useEffect(() => {
    renderData(url);
  }, []);

  const onActive = (id) => {
    let res = active.map((value, i) => (i + 1 == id ? 1 : 0));
    setActive(res);
    setData(finance[id - 1]);
  };

  const onLeft = () => {
    let index = active.indexOf(1) == 0 ? 7 : active.indexOf(1);
    let res = active.map((a, i) => (i == index - 1 ? 1 : 0));
    setActive(res);
    setData(finance[index - 1]);
  };

  const onRight = () => {
    let index = active.indexOf(1) == 6 ? -1 : active.indexOf(1);
    let res = active.map((a, i) => (i == index + 1 ? 1 : 0));
    setActive(res);
    setData(finance[index + 1]);
  };

  return (
    <Container>
      <Title.Main>Moliya</Title.Main>
      <Container.Main>
        <Container.Month>
          <Arrow className="arrow" onClick={onLeft} />
          <Title>{moment().format("MMMM YYYY")}</Title>
          <Arrow onClick={onRight} />
        </Container.Month>
        <Container.Week>
          {finance.map((item, i) => {
            return (
              <Wrapper key={item.id}>
                <Title.Container
                  className={active[i] == 1 ? "active" : ""}
                  onClick={() => {
                    onActive(item.id,item.today);
                  }}
                >
                  <Title className="title">
                    {weekDays[(moment().day() + 4 + i) % 7].short}
                  </Title>
                  <Title className="title">{item.today}</Title>
                </Title.Container>
              </Wrapper>
            );
          })}
        </Container.Week>
        <Title>{finance[active.indexOf(1)]?.today}-{moment().format("MMMM, YYYY")}</Title>
        <Container.Price>
          <Title.Price>
            {+data?.students + +data?.video}
            <Title.Percent>
            <ArrowUp />
              +22%</Title.Percent>
          </Title.Price>
          <Container.Month>
            <Title>Talabalar</Title>
            <Title>{data?.students}</Title>
          </Container.Month>
          <Container.Month>
            <Title>Darsliklar sotuvi</Title>
            <Title>{data?.video}</Title>
          </Container.Month>
        </Container.Price>
      </Container.Main>
    </Container>
  );
};
