import React, { useEffect } from "react";
import { statistics } from "../../../mock/statistics";
import student from "../../../assets/statistics/student.png";
import mentors from "../../../assets/statistics/mentors.png";
import branch from "../../../assets/statistics/branch.png";
import StudentIcon from "../../../assets/statistics/studentIcon.svg?react";
import MentorsIcon from "../../../assets/statistics/mentorIcon.svg?react";
import BranchIcon from "../../../assets/statistics/branchIcon.svg?react";
import ArrowUp from "../../../assets/statistics/arrow-up.svg?react";
import { Image, Title, Wrapper } from "./style";
import { Container } from "./style";
import { useState } from "react";

export const Statistics = () => {
  const url = import.meta.env.VITE_BASE_URL;

  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    fetch(url + '/tabs/analytics')
      .then((res) => res.json())
      .then((res) => setStatistics(res));
  }, []);
  return (
    <div>
      <Title.Container>Analytics</Title.Container>
      <Container>
        {statistics.map((item) => {
          let icon;
          let image;
          switch (item.title) {
            case "Talabalar":
              icon = <StudentIcon />;
              image = student
              break;
            case "Mentorlar":
              icon = <MentorsIcon />;
              image = mentors
              break;
            case "Filiallar":
              icon = <BranchIcon />;
              image = branch
              break;
            default:
              "";
          }
          return (
            <Wrapper key={item.id} color={item.backColor}>
              <Container.Card>
                {icon}
                <Title>{item.title}</Title>
                <Title.Plus color={item.backColor}>+</Title.Plus>
              </Container.Card>
              <Container.Card>
                <ArrowUp/>
                <Title.Number>{item.number}</Title.Number>
                <Image src={image}/>
              </Container.Card>
            </Wrapper>
          );
        })}
      </Container>
    </div>
  );
};
