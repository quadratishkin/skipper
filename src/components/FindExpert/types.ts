export interface IFindExpertCard {
  title: string;
  text: string;
  formType: "textarea" | "search";
  placeholder: string;
  buttonText: string;
  accent?: boolean;
  recommended?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}