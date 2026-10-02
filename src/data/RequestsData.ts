import type { IRequest } from "../Pages/RequestPage/types";

export const REQUESTS_DATA: IRequest[] = [
  {
    id: "1",
    industry: "Графический дизайн",
    skills: ["PixelPerfect", "React", "Scss", "Ts"],
    work: [
      {
        startAt: "01.01.2020",
        endAt: "31.12.2022",
        placeWork: "Studio Design",
        worker: "Senior Designer",
        description: "Разработка комплексных дизайн-систем для крупных e-commerce проектов. Создание адаптивных макетов и интерактивных прототипов. Тесное взаимодействие с командой разработки для обеспечения Pixel Perfect реализации."
      },
      {
        startAt: "01.01.2023",
        endAt: "02.10.2026",
        placeWork: "Tech Corp",
        worker: "Lead UI Designer",
        description: "Управление командой дизайнеров и постановка технических задач. Полный редизайн основного продукта компании с целью улучшения UX. Оптимизация пользовательских путей и проведение A/B тестов интерфейсных решений."
      }
    ]
  },
  {
    id: "2",
    industry: "Frontend разработка",
    skills: ["React", "Redux", "TypeScript"],
    work: [
      {
        startAt: "01.01.2018",
        endAt: "31.12.2020",
        placeWork: "First Job",
        worker: "Junior Frontend",
        description: "Верстка простых статичных страниц по макетам из Figma. Постепенное изучение основ React и современного JavaScript. Работа с базовыми CSS-фреймворками для ускорения разработки."
      },
      {
        startAt: "01.06.2021",
        endAt: "30.05.2023",
        placeWork: "Web Agency",
        worker: "Frontend Developer",
        description: "Создание сложных адаптивных интерфейсов на React с использованием Redux. Оптимизация производительности приложений и уменьшение времени первой отрисовки. Внедрение строгой типизации TypeScript в проект."
      }
    ]
  },
  {
    id: "3",
    industry: "UX/UI анализ",
    skills: ["Figma", "User Research"],
    work: [
      {
        startAt: "15.03.2019",
        endAt: "15.03.2021",
        placeWork: "UX Lab",
        worker: "UX Researcher",
        description: "Проведение глубинных пользовательских интервью и анализ поведения. Построение детальных карт пути пользователя (CJM) и User Flow. Создание гипотез для улучшения конверсии интерфейса."
      }
    ]
  },
  {
    id: "4",
    industry: "Backend разработка (Node.js)",
    skills: ["Express", "MongoDB", "Redis"],
    work: [
      {
        startAt: "01.01.2016",
        endAt: "31.12.2018",
        placeWork: "Old Tech",
        worker: "Junior Backend",
        description: "Поддержка и сопровождение устаревших API сервисов. Написание простых SQL запросов для выгрузки отчетности. Исправление критических ошибок в легаси-коде."
      },
      {
        startAt: "01.11.2018",
        endAt: "10.01.2022",
        placeWork: "Backend Systems",
        worker: "Node.js Developer",
        description: "Разработка высоконагруженных REST API на Express. Проектирование схем данных в MongoDB и кэширование в Redis. Оптимизация запросов к базе данных для снижения нагрузки на сервер."
      }
    ]
  },
  {
    id: "5",
    industry: "Маркетинг и SEO",
    skills: ["Google Analytics", "Content Strategy"],
    work: [
      {
        startAt: "20.05.2020",
        endAt: "15.08.2023",
        placeWork: "Digital Agency",
        worker: "SEO Specialist",
        description: "Комплексное продвижение сайтов в поисковых системах. Разработка контент-стратегий на основе семантического ядра. Анализ эффективности каналов трафика через Google Analytics."
      }
    ]
  },
  {
    id: "6",
    industry: "Project Management",
    skills: ["Jira", "Agile", "Scrum"],
    work: [
      {
        startAt: "01.01.2017",
        endAt: "31.12.2020",
        placeWork: "Manage IT",
        worker: "Project Manager",
        description: "Ведение IT-проектов по методологии Scrum и Kanban. Управление бэклогом продукта и проведение ежедневных стендапов. Контроль сроков реализации задач и координация работы команды."
      }
    ]
  },
  {
    id: "7",
    industry: "Стажер Frontend",
    skills: ["HTML", "CSS", "JS"],
    work: []
  },
];