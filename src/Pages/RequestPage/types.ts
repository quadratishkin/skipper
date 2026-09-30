export interface IRequest {
  id: string;
  industry: string;
  skills?: string[];
}

export type SkillState = "plus" | "minus" | null;
export type SkillStatesMap = Record<string, SkillState>;
export type ActiveSkillState = Exclude<SkillState, null>;

export interface RequestPageProps {
  request: IRequest;
}