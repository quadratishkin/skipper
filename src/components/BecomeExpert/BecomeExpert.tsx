import { BecomeExpertStep } from "./BecomeExpertStep";
import { BECOME_EXPERT_STEPS } from "../../data/BecomeExpertData";
import "./BecomeExpert.scss";

export const BecomeExpert = () => {
  return (
    <section className="become-expert">
      <div className="container">
        <div className="become-expert__wrapper">
          <div className="become-expert__content">
            <h2 className="become-expert__title">
              То, что вы знаете, кому-то нужно прямо сейчас.
            </h2>
            <p className="become-expert__lead">
              Делитесь профессиональным опытом, помогайте решать задачи и
              зарабатывайте на консультациях.
            </p>
            <button type="button" className="become-expert__btn">
              Стать экспертом
            </button>
          </div>

          <div className="become-expert__card">
            <h3 className="become-expert__card-title">Как стать экспертом</h3>

            <ol className="become-expert__list">
              {BECOME_EXPERT_STEPS.map((step) => (
                <BecomeExpertStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  text={step.text}
                />
              ))}
            </ol>

            <p className="become-expert__note">
              Работаете в нескольких сферах? Для каждой можно подать отдельную
              заявку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
