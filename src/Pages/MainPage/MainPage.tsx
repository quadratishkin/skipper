import "./MainPage.scss";
import { Fragment } from "react";
import { ProblemBlock } from "../../components/ProblemBlock/ProblemBlock";
import TitleElemH1 from "../../components/textElem/Title/TitleElem";
import DescriptionElem from "../../components/textElem/Description/DescriptionElem";
import { AUDIENCEDATA } from "../../data/AudienceData";
import { PROBLEMS } from "../../data/ProblemsBlocksData";
import { Audience } from "../../components/Audience/Audience";
import { StepCard } from "../../components/StepCard/StepCard";
import { ALIGNMENTSFORARROWS, STEPS } from "../../data/StepsData";
import { StepsArrow } from "../../components/StepsArrow/StepsArrow";
import { useInView } from "../../hooks/useInView";
import TitleElemH2 from "../../components/textElem/TitleH2/TitleElemH2";

export const MainPage = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <>
      <section className="meaning">
        <div className="container">
          <div className="meaning__wrapper">
            <TitleElemH1 align="center">
              Что такое платформа Skipper?
            </TitleElemH1>
            <DescriptionElem align="center">
              Платформа-посредник между экспертом и менти. Мы помогаем найти
              специалиста по нужной теме и получить легальный доход за
              консультации.
            </DescriptionElem>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="container">
          <div className="problem__wrapper">
            <TitleElemH2 align="center">Проблемы участников</TitleElemH2>
            <ul className="problem__group">
              {PROBLEMS.map(({ group, reasons }) => (
                <ProblemBlock key={group} group={group} reasons={reasons} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="forWhom">
        <div className="container">
          <div className="forWhom__wrapper">
            <TitleElemH2 fontWeight={700} marginBottom="8px">
              Кому будет полезно
            </TitleElemH2>
            <DescriptionElem marginBottom="24px">
              Платформа подойдёт и тем, кто хочет зарабатывать на экспертизе, и
              тем, кто ищет знания.
            </DescriptionElem>
            <ul className="forWhom__group">
              {AUDIENCEDATA.map(({ icon, title, text }) => (
                <Audience key={title} icon={icon} title={title} text={text} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="howItWorks last-section">
        <div className="container">
          <div className="howItWorks__wrapper">
            <h2
              className="howItWorks__title visually-hidden"
              aria-label="Как это работает"
            >
              Как это работает
            </h2>
            <TitleElemH1 align="center">
              Четыре шага от знакомства до результата.
            </TitleElemH1>
            <ul
              ref={ref}
              className={`howItWorks__group${
                isInView ? " howItWorks__group--visible" : ""
              }`}
            >
              {STEPS.map(({ title, text }, index) => (
                <Fragment key={title}>
                  <StepCard title={title} text={text} />
                  {index < STEPS.length - 1 && (
                    <StepsArrow
                      align={
                        ALIGNMENTSFORARROWS[index % ALIGNMENTSFORARROWS.length]
                      }
                    />
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
