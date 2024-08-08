import student from "../assets/statistics/student.png";
import mentors from "../assets/statistics/mentors.png";
import branch from "../assets/statistics/branch.png";
import studentIcon from "../assets/statistics/studentIcon.svg?react";
import mentorsIcon from "../assets/statistics/mentorIcon.svg?react";
import branchIcon from "../assets/statistics/branchIcon.svg?react";

export const statistics = [
  {
    id: 1,
    title: "Talabalar",
    number: 285,
    backColor: "#f6ffed",
    image: student,
    icon: studentIcon,
  },
  {
    id: 2,
    title: "Mentorlar",
    number: 36,
    backColor: "#fffbe6",
    image: mentors,
    icon: mentorsIcon,
  },
  {
    id: 3,
    title: "Filiallar",
    number: 3,
    backColor: "#e6f7ff",
    image: branch,
    icon: branchIcon,
  },
];
