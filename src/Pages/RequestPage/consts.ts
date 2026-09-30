export const CLICK_DELAY = 100;

export const SKILL_BASE_CLASS = "request-body__skill";

/** Модификаторы классов для состояний скилла */
export const SKILL_MODIFIERS = {
  plus: "request-body__skill--confirmed",
  minus: "request-body__skill--rejected",
} as const;