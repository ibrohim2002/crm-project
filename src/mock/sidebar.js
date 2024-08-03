import Analitics from "../assets/icons/analitics.svg?react";
import Orders from "../assets/icons/orders.svg?react";
import Finance from "../assets/icons/finance.svg?react";
import Student from "../assets/icons/student.svg?react";
import Groups from "../assets/icons/groups.svg?react";
import Courses from "../assets/icons/courses.svg?react";
import Hr from "../assets/icons/hr.svg?react";
import Settings from "../assets/icons/settings.svg?react";

export const sidebar = [
  {
    id: 1,
    title: "Analitika",
    icon: Analitics,
  },
  {
    id: 2,
    title: "Buyurtma",
    icon: Orders,
    child: [
      {id:'2-1',title: "Buyurtmalar ro'yxati"},
      {id:'2-2',title: "Birinchi darsga yozilish"},
      {id:'2-3',title: "Yangi talabalar ro'yxati"},
    ]
  },
  {
    id: 3,
    title: "Moliya",
    icon: Finance,
  },
  {
    id: 4,
    title: "Talaba",
    icon: Student,
    child: [
      {id:'4-1',title: "Davomat"},
      {id:'4-2',title: "Talabalar ro'yxati"},
      {id:'4-3',title: "Aktiv"},
      {id:'4-4',title: "Arxiv"},
      {id:'4-5',title: "Ota-ona"},
    ]
  },
  {
    id: 5,
    title: "Guruhlar",
    icon: Groups,
    child: [
      {id:'5-1', title: "Guruhlar"},
      {id:'5-2', title: "Dars jadvali"},
      {id:'5-3', title: "Xonalar"},
    ]
  },
  {
    id: 6,
    title: "Kurslar",
    icon: Courses,
    child: [
      {id:'6-1', title: "Kurslar ro'yxati"},
      {id:'6-2', title: "Kurslar yo'nalishi"},
    ]
  },
  {
    id: 7,
    title: "HR",
    icon: Hr,
    child: [
      {id:'7-1',title: "Rollar"},
      {id:'7-2',title: "Xodimlar"},
    ]
  },
  {
    id: 8,
    title: "Sozlamalar",
    icon: Settings,
    child: [
      {id:'8-1',title:"Umumiy sozlamar"},
      {id:'8-2',title:"Manager"},
      {id:'8-3',title:"O'qituvchi"},
      {id:'8-4',title:"Talaba"},
    ]
  },
];
