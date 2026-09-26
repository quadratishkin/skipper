export interface NavItemI {
  page: Pages;
  to: string;
  label: string;
};

export enum Pages {
  MAIN = "MAIN",
  USERS = "USERS",
  MESSENGER = "MESSENGER",
  DEVELOPERS = "DEVELOPERS",
  REGISTRATION = "REGISTRATION",
  AUTHORIZATION = "AUTHORIZATION",
  REQUEST_LIST = 'REQUEST_LIST',
  PROFILE = "PROFILE"
}

export const NAV_ITEMS: NavItemI[] = [
  { page: Pages.MAIN, to: "/", label: "Главная" },
  { page: Pages.USERS, to: "/users", label: "Пользователи" },
  { page: Pages.MESSENGER, to: "/messenger", label: "Чаты" },
  { page: Pages.DEVELOPERS, to: "/developers", label: "Разработчики" },
  { page: Pages.PROFILE, to: "/profile", label: "Профиль" },
  { page: Pages.REQUEST_LIST, to: "/request-list", label: "Заявки" },
  { page: Pages.REGISTRATION, to: "/registration", label: "Регистрация" },
  { page: Pages.AUTHORIZATION, to: "/authorization", label: "Авторизация" },
];