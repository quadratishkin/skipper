export interface IFilterOption {
  value: string;   // id для бэка, например "react"
  label: string;   // отображаемое имя, например "React"
}

export interface IFilterGroup {
  title: string;              // "WEB-РАЗРАБОТКА"
  options: IFilterOption[];   // ["React", "TypeScript", ...]
  selected: string[];         // выбранные value
  onChange: (selected: string[]) => void;
}