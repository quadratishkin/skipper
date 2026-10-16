import { FindExpertCard } from "./FindExpertCard";
import { DescriptionElem } from "../textElem/Description/DescriptionElem";
import { TitleElem } from "../textElem/Title/TitleElem";
import "./FindExpert.scss";

export const FindExpert = () => {
  return (
    <section className="find-expert">
      <div className="container">
        <TitleElem
          level={1}
          align="center"
          font="grotesk"
          fontWeight={700}
          className="find-expert__title"
        >
          Найдите эксперта под свою задачу
        </TitleElem>

        <DescriptionElem
          align="center"
          fontSize="18px"
          className="find-expert__subtitle"
        >
          Два способа — выберите, какой удобнее.
        </DescriptionElem>

        <div className="find-expert__grid">
          <FindExpertCard
            title="Опишите задачу"
            text="Эксперты сами предложат помощь. Вы выберете, с кем работать."
            formType="textarea"
            placeholder="Например: нужна помощь с выбором направления и планом перехода"
            buttonText="Получить отклики"
            to="/requests/new"
            paramName="description"
          />

          <FindExpertCard
            title="Найдите эксперта"
            text="Изучите профили, опыт и отзывы. Напишите напрямую тому, кто подходит."
            formType="search"
            placeholder="Тема или направление"
            buttonText="Перейти в каталог"
            to="/catalog"
            paramName="query"
            accent
            recommended
          />
        </div>
      </div>
    </section>
  );
};
