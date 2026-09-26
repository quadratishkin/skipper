import "./MainPage.scss";
import { Fragment } from "react";
import { ProblemBlock } from "../../components/ProblemBlock/ProblemBlock";
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
            <h1 className="meaning__title">Что такое платформа Skipper?</h1>
            <p className="meaning__description">
              Платформа-посредник между экспертом и менти. Мы помогаем найти
              специалиста по нужной теме и получить легальный доход за
              консультации.
            </p>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="container">
          <div className="problem__wrapper">
            <h2 className="problem__header">Проблемы участников</h2>
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
            <h2 className="forWhom__title">Кому будет полезно</h2>
            <p className="forWhom__description">
              Платформа подойдёт и тем, кто хочет зарабатывать на экспертизе, и
              тем, кто ищет знания.
            </p>
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
            <p className="howItWorks__description">
              Четыре шага от знакомства до результата.
            </p>
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
