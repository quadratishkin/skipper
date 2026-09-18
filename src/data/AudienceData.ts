import Advisory from "../images/advisory.svg?react";
import Coach from "../images/coach.svg?react";
import Programmer from "../images/programmer.svg?react";
import Scientist from "../images/scientist.svg?react";
import Lawyer from "../images/lawyer.svg?react";
import Social from "../images/social.svg?react";
import type { AudienceI } from "../components/Audience/AudienceTypes";

export const AUDIENCEDATA: AudienceI[] = [
  {
    icon: Advisory,
    title: "Клиенты Т-Банка",
    text: "Физические лица и малый бизнес, которые хотят получать или оказывать экспертные консультации.",
  },
  {
    icon: Coach,
    title: "Бизнес-тренеры и коучи",
    text: "Те, кто ищет клиентов через личный бренд и хочет системно работать с заказами.",
  },
  {
    icon: Programmer,
    title: "IT-специалисты",
    text: "Выступаете на конференциях, преподаёте или готовы делиться опытом с новичками.",
  },
  {
    icon: Scientist,
    title: "Зрелые специалисты",
    text: "Учителя и эксперты в своей области, которые уже пробуют себя в роли ментора.",
  },
  {
    icon: Lawyer,
    title: "Юристы",
    text: "Консультируете население онлайн и хотите легально получать доход за экспертизу.",
  },
  {
    icon: Social,
    title: "Инвестиционные и налоговые консультанты",
    text: "Помогаете клиентам принимать финансовые решения и хотите расширить поток заказов.",
  },
];