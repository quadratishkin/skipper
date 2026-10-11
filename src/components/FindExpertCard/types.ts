export interface IFindExpertCard {
  /** Метка над заголовком, например "ОСТАВИТЬ ЗАЯВКУ" */
  label: string;
  /** Заголовок карточки */
  title: string;
  /** Описание под заголовком */
  text: string;
  /** Форма: textarea или search-input */
  formType: "textarea" | "search";
  /** Плейсхолдер для поля */
  placeholder: string;
  /** Текст кнопки */
  buttonText: string;
  /** Акцентная карточка (синий фон, белая кнопка) */
  accent?: boolean;
  /** Обработчик отправки формы */
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}