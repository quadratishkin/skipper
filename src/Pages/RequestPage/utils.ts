// RequestPage.utils.ts
import { SKILL_BASE_CLASS, SKILL_MODIFIERS } from "./consts";
import type { ActiveSkillState, SkillState, SkillStatesMap } from "./types";

/** Возвращает состояние, противоположное переданному */
export const getOppositeState = (state: ActiveSkillState): ActiveSkillState =>
  state === "plus" ? "minus" : "plus";

/** Возвращает модификатор класса по состоянию */
export const getSkillModifier = (state: SkillState): string => {
  if (state === "plus" || state === "minus") {
    return SKILL_MODIFIERS[state];
  }
  return "";
};

/** Собирает className для скилла */
export const getSkillClassName = (state: SkillState): string =>
  [SKILL_BASE_CLASS, getSkillModifier(state)]
    .filter(Boolean)
    .join(" ");

/** Устанавливает состояние скилла */
export const setSkillState = (
  states: SkillStatesMap,
  skill: string,
  state: ActiveSkillState
): SkillStatesMap => ({ ...states, [skill]: state });

/** Удаляет скилл из карты состояний */
export const removeSkill = (states: SkillStatesMap, skill: string): SkillStatesMap => {
  const next = { ...states };
  delete next[skill];
  return next;
};

/** Меняет состояние, только если текущее совпадает с ожидаемым */
export const switchSkillState = (
  states: SkillStatesMap,
  skill: string,
  from: ActiveSkillState,
  to: ActiveSkillState
): SkillStatesMap => {
  if (states[skill] !== from) return states;
  return { ...states, [skill]: to };
};