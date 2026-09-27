import "./MainPage.scss";
import { Fragment } from "react";
import { ProblemBlock } from "../../components/ProblemBlock/ProblemBlock";
import TitleElem from "../../components/textElem/Title/TitleElem";
import DescriptionElem from "../../components/textElem/Description/DescriptionElem";
import { AUDIENCEDATA } from "../../data/AudienceData";
import { PROBLEMS } from "../../data/ProblemsBlocksData";
import { Audience } from "../../components/Audience/Audience";
import { StepCard } from "../../components/StepCard/StepCard";
import { ALIGNMENTSFORARROWS, STEPS } from "../../data/StepsData";
import { StepsArrow } from "../../components/StepsArrow/StepsArrow";
import { useInView } from "../../hooks/useInView";

export const MainPage = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <>
      <section className="meaning">
        <div className="container">
          <div className="meaning__wrapper">
            <TitleElem level={1} align="center">
              Что такое платформа Skipper?
            </TitleElem>
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
            <TitleElem level={2} align="center">
              Проблемы участников
            </TitleElem>
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
            <TitleElem level={2} fontWeight={700} marginBottom="8px">
              Кому будет полезно
            </TitleElem>
            <DescriptionElem marginBottom="24px" fontSize="18px">
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
            <TitleElem level={1} align="center">
              Четыре шага от знакомства до результата.
            </TitleElem>
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
