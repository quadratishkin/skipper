import { ProcessStep } from "./ProcessStep";
import { PROCESS_STEPS } from "../../data/ProcessData";

import "./Process.scss";

export const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="process__head">
          <h2 className="process__title">
            Два способа найти эксперта. <br />
            Один понятный процесс.
          </h2>
          <p className="process__lead">
            Выберите и напишите эксперту напрямую или оставьте заявку и получите
            отклики. Условия в обоих случаях обсудите в чате.
          </p>
        </div>

        <ol className="process__list">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              text={step.text}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
