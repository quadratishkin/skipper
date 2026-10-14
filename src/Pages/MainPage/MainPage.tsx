import "./MainPage.scss";
import { BecomeExpert } from "../../components/BecomeExpert/BecomeExpert";
import { Faq } from "../../components/Faq/Faq";
import { FindExpert } from "../../components/FindExpert/FindExpert";
import { Process } from "../../components/Process/Process";

export const MainPage = () => {
  return (
    <>
      <FindExpert />
      <Process />
      <BecomeExpert />
      <Faq />
    </>
  );
};
