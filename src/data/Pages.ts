export interface INavItem {
  page: Pages;
  to: string;
  label: string;
}

export enum Pages {
  MAIN,
  CATALOG,
  MESSENGER,
  DEVELOPERS,
  AUTH,
  REQUEST_LIST,
  REQUEST,
  PROFILE,
}

export const NAV_ITEMS: INavItem[] = [
  { page: Pages.CATALOG, to: "/catalog", label: "Каталог" },
  { page: Pages.MESSENGER, to: "/messenger", label: "Чаты" },
  { page: Pages.DEVELOPERS, to: "/developers", label: "Разработчики" },
  { page: Pages.REQUEST_LIST, to: "/request-list", label: "Заявки" },
  { page: Pages.AUTH, to: "/auth", label: "Авторизация" },
];