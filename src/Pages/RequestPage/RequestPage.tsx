import { useState } from "react";
import { useParams } from "react-router";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import DescriptionElem from "../../components/textElem/Description/DescriptionElem";
import TitleElem from "../../components/textElem/Title/TitleElem";
import TextArea from "../../components/TextArea/Textare";
import { REQUESTS_DATA } from "../../data/RequestsData";
import { CLICK_DELAY } from "./consts";
import {
  getOppositeState,
  getSkillClassName,
  removeSkill,
  setSkillState,
  switchSkillState,
} from "./utils";
import type { ActiveSkillState, SkillStatesMap } from "./types";
import "./RequestPage.scss";

export const RequestPage = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const [skillStates, setSkillStates] = useState<SkillStatesMap>({});

  const request = REQUESTS_DATA.find((r) => r.id === requestId);

  const handleSkillClick = (skill: string, targetState: ActiveSkillState) => {
    const opposite = getOppositeState(targetState);
    const current = skillStates[skill];

    if (current === opposite) {
      setTimeout(() => {
        setSkillStates((prev) =>
          switchSkillState(prev, skill, opposite, targetState),
        );
      }, CLICK_DELAY);
    } else {
      setSkillStates((prev) => setSkillState(prev, skill, targetState));
    }
  };

  const handleSkillDoubleClick = (skill: string) => {
    setSkillStates((prev) => removeSkill(prev, skill));
  };

  if (!request) {
    return (
      <div className="container">
        <TitleElem align="center">Заявка не найдена</TitleElem>
      </div>
    );
  }

  const skills = request.skills ?? [];

  return (
    <section className="request-page">
      <div className="container">
        <div className="request-page__wrapper">
          <TitleElem align="center">Заявка</TitleElem>

          <div className="request-body">
            <TitleElem level={2}>{request.industry}</TitleElem>

            <div className="request-body__skills-list">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`request-body__skill ${getSkillClassName(skillStates[skill] ?? null)}`}
                >
                  <DescriptionElem fontSize="22px">{skill}</DescriptionElem>

                  <div className="request-body__btns">
                    <button
                      className="request-body__btn"
                      onClick={() => handleSkillClick(skill, "plus")}
                      onDoubleClick={() => handleSkillDoubleClick(skill)}
                    >
                      <CgMathPlus size={22} />
                    </button>

                    <button
                      className="request-body__btn"
                      onClick={() => handleSkillClick(skill, "minus")}
                      onDoubleClick={() => handleSkillDoubleClick(skill)}
                    >
                      <CgMathMinus size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {request.work && request.work.length > 0 && (
              <>
                <TitleElem level={3}>Опыт работы</TitleElem>
                <div className="request-body__work-experience">
                  {request.work.map((job, index) => (
                    <div key={index} className="request-body__work-item">
                      <TitleElem level={3} margin="0 0 8px">
                        {job.placeWork}
                      </TitleElem>
                      <div className="request-body__work-item__header">
                        <DescriptionElem fontSize="20px">
                          {job.worker}
                        </DescriptionElem>
                        <DescriptionElem fontSize="16px">
                          {job.startAt} — {job.endAt}
                        </DescriptionElem>
                      </div>
                      <DescriptionElem>{job.description}</DescriptionElem>
                    </div>
                  ))}
                </div>
              </>
            )}

            <TitleElem level={3}>Укажите замечания</TitleElem>
            <TextArea
              placeholder="Введите комментарий..."
              height="100px"
              fontSize="22px"
              padding="10px"
            />

            <div className="request-page__actions">
              <button>Принять</button>
              <button>Отклонить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
