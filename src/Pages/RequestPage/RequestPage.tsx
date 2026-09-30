import { useState } from "react";
import { useParams } from "react-router";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import DescriptionElem from "../../components/textElem/Description/DescriptionElem";
import TitleElem from "../../components/textElem/Title/TitleElem";
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

  if (!request) {
    return (
      <div className="container">
        <TitleElem align="center">Заявка не найдена</TitleElem>
      </div>
    );
  }

  const handleSkillClick = (skill: string, targetState: ActiveSkillState) => {
    const opposite = getOppositeState(targetState);

    setSkillStates((prev) => {
      if (prev[skill] === opposite) {
        setTimeout(() => {
          setSkillStates((inner) =>
            switchSkillState(inner, skill, opposite, targetState),
          );
        }, CLICK_DELAY);
        return prev;
      }
      return setSkillState(prev, skill, targetState);
    });
  };

  const handleSkillDoubleClick = (skill: string) => {
    setSkillStates((prev) => removeSkill(prev, skill));
  };

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
                  className={getSkillClassName(skillStates[skill] ?? null)}
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
          </div>
        </div>
      </div>
    </section>
  );
};
