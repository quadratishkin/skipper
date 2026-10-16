# Skipper

Сервис поиска экспертов и заявок на консультацию: каталог экспертов, создание и ведение заявок, переписка, личный кабинет.

## Стек

- React 19 + TypeScript
- Vite
- React Router
- react-hook-form + zod — формы и валидация
- SCSS (БЭМ)

## Скрипты

- `npm run dev` — dev-сервер Vite
- `npm run build` — проверка типов (`tsc -b`) и прод-сборка в `dist/`
- `npm run preview` — локальный предпросмотр прод-сборки
- `npm run lint` — ESLint

## API

- **dev**: `API_URL = "/api"` (переменная окружения не задана) — запросы проксируются на `https://dev.tskipper.ru` через `server.proxy` в `vite.config.ts`; прокси действует только на dev-сервере.
- **prod**: при `npm run build` подхватывается `.env.production` и абсолютный `VITE_API_URL` вшивается в сборку.

## Структура

- `src/api/` — запросы к API, работа с токеном, валидация ответов
- `src/components/` — переиспользуемые компоненты
- `src/pages/` — страницы
- `src/data/` — статические данные для страниц
- `src/global/` — глобальные стили, SCSS-переменные и миксины
- `src/images/` — статические ассеты
