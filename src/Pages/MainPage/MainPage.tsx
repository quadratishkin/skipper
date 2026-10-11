import "./MainPage.scss";
import { Audience } from "../../components/Audience/Audience";
import { BecomeExpert } from "../../components/BecomeExpert/BecomeExpert";
import { FindExpertCard } from "../../components/FindExpertCard/FindExpertCard";
import { Process } from "../../components/Process/Process";
import DescriptionElem from "../../components/textElem/Description/DescriptionElem";
import TitleElem from "../../components/textElem/Title/TitleElem";
import { AUDIENCEDATA } from "../../data/AudienceData";

export const MainPage = () => {
  return (
    <>
      {/* ============ FIND EXPERT ============ */}
      <section className="findExpert">
        <div className="container">
          <TitleElem
            level={1}
            align="center"
            font="grotesk"
            fontWeight={700}
            className="findExpert__title"
          >
            Найдите эксперта под свою задачу
          </TitleElem>

          <DescriptionElem
            align="center"
            fontSize="18px"
            className="findExpert__subtitle"
          >
            Два способа — выберите, какой удобнее.
          </DescriptionElem>

          <div className="findExpert__grid">
            <FindExpertCard
              label="Оставить заявку"
              title="Опишите задачу"
              text="Эксперты сами предложат помощь. Вы выберете, с кем работать."
              formType="textarea"
              placeholder="Например: нужна помощь с выбором направления и планом перехода"
              buttonText="Получить отклики"
            />

            <FindExpertCard
              label="Найти самому"
              title="Найдите эксперта"
              text="Изучите профили, опыт и отзывы. Напишите напрямую тому, кто подходит."
              formType="search"
              placeholder="Тема или направление"
              buttonText="Перейти в каталог"
              accent
            />
          </div>
        </div>
      </section>

      <Process />

      <BecomeExpert />

      {/* ============ FOR WHOM ============ */}
      <section className="forWhom">
        <div className="container">
          <div className="forWhom__wrapper">
            <TitleElem level={2} fontWeight={700} className="forWhom__title">
              Кому будет полезно
            </TitleElem>
            <DescriptionElem fontSize="18px" className="forWhom__description">
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
    </>
  );
};
