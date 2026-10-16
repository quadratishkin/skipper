export interface IFindExpertCard {
  title: string;
  text: string;
  formType: "textarea" | "search";
  placeholder: string;
  buttonText: string;
  to: string;                    
  paramName: string;             
  accent?: boolean;
  recommended?: boolean;
}