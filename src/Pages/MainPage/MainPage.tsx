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
import { RiSearchLine } from "react-icons/ri";
import { QUICK_START_ITEMS } from "../../data/QuickStartData";
import QuickStartItem from "../../components/QuickStartItem/QuickStartItem";

export const MainPage = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <TitleElem
              level={1}
              font="grotesk"
              fontWeight={600}
              margin="0 0 24px"
              letterSpacing="-2.2px"
            >
              Найдите того, <br />
              кто поможет <span className="hero__accent">разобраться.</span>
            </TitleElem>

            <DescriptionElem fontSize="17px" className="hero__description">
              Найдите эксперта в каталоге, изучите его опыт и напишите напрямую.
              Или опишите задачу и выберите специалиста из откликнувшихся.
            </DescriptionElem>

            <form className="hero__form" onSubmit={(e) => e.preventDefault()}>
              <div className="hero__search">
                <RiSearchLine className="hero__search-icon" size={20} />
                <input
                  type="text"
                  className="hero__input"
                  placeholder="Тема или направление"
                  aria-label="Тема или направление"
                />
                <button type="submit" className="hero__submit">
                  Найти эксперта
                </button>
              </div>
            </form>

            <div className="hero__examples">
              <span className="hero__examples-label">Например:</span>
              <button type="button" className="hero__example">
                Дизайн
              </button>
              <button type="button" className="hero__example">
                Разобрать код
              </button>
              <button type="button" className="hero__example">
                Развить бизнес
              </button>
            </div>

            <p className="hero__help">
              Не знаете, кого выбрать?{" "}
              <a href="#" className="hero__help-link">
                Опишите задачу
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="quickStart">
        <div className="container">
          <ul className="quickStart__group">
            {QUICK_START_ITEMS.map(({ number, title, text }) => (
              <QuickStartItem
                key={number}
                number={number}
                title={title}
                text={text}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="describeTask">
        <div className="container">
          <div className="describeTask__wrapper">
            <div className="describeTask__content">
              <TitleElem
                level={2}
                font="grotesk"
                fontWeight={500}
                letterSpacing="-1.5px"
                className="describeTask__title"
              >
                Предпочитаете <br />
                получить отклики?
              </TitleElem>

              <DescriptionElem
                fontSize="14px"
                className="describeTask__description"
              >
                Если не хотите выбирать в каталоге, опишите задачу. Эксперты
                предложат помощь, а вы решите, с кем работать.
              </DescriptionElem>

              <button
                type="button"
                className="describeTask__btn"
                onClick={() => {
                  /* TODO: переход на страницу создания заявки */
                }}
              >
                Получить отклики
              </button>
            </div>

            <div className="describeTask__preview">
              <div className="describeTask__card">
                <span className="describeTask__card-label">ПРИМЕР ЗАДАЧИ</span>
                <TitleElem
                  level={3}
                  font="grotesk"
                  fontWeight={700}
                  fontSize={20}
                  margin="0 0 16px"
                >
                  Хочу сменить профессию
                </TitleElem>
                <DescriptionElem
                  fontSize="15px"
                  className="describeTask__card-label__description"
                >
                  Нужна помощь с выбором направления и планом перехода.
                </DescriptionElem>
                <div className="describeTask__card-footer">
                  <span className="describeTask__tag">Карьера</span>
                  <span className="describeTask__hint">
                    Сначала обсудим в чате
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <TitleElem level={2} fontWeight={700} margin="0 0 8px">
              Кому будет полезно
            </TitleElem>
            <DescriptionElem fontSize="18px">
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
