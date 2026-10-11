export interface QuickStartAlternativeI {
  title: string;
  text: string;
}

export interface QuickStartItemI {
  number: string;
  title: string;
  text: string;
  /** Список альтернатив (для шага, где есть развилка) */
  alternatives?: QuickStartAlternativeI[];
}

export const QUICK_START_ITEMS: QuickStartItemI[] = [
  {
    number: "01",
    title: "Выберите способ",
    text: "Два пути — оба ведут к результату",
    alternatives: [
      {
        title: "Найти самому",
        text: "Через каталог по опыту и теме",
      },
      {
        title: "Оставить заявку",
        text: "Эксперты сами предложат помощь",
      },
    ],
  },
  {
    number: "02",
    title: "Согласуйте в чате",
    text: "Формат, стоимость и условия оплаты",
  },
  {
    number: "03",
    title: "Получите результат",
    text: "Знания, поддержка и решение задачи",
  },
];