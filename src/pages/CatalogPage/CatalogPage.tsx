import { useState } from "react";
import { useSearchParams } from "react-router";

import "./CatalogPage.scss";
import { FilterGroup } from "../../components/FilterGroup/FilterGroup";
import { DescriptionElem } from "../../components/textElem/Description/DescriptionElem";
import { TitleElem } from "../../components/textElem/Title/TitleElem";

// Мок-данные фильтров (потом с бэка)
const FILTER_GROUPS = [
  {
    title: "WEB-РАЗРАБОТКА",
    options: [
      { value: "react", label: "React" },
      { value: "typescript", label: "TypeScript" },
      { value: "nodejs", label: "Node.js" },
      { value: "nextjs", label: "Next.js" },
      { value: "vuejs", label: "Vue.js" },
      { value: "python", label: "Python" },
    ],
  },
  {
    title: "БАЗЫ ДАННЫХ И АРХИТЕКТУРА",
    options: [
      { value: "system-design", label: "System Design" },
      { value: "postgresql", label: "PostgreSQL" },
      { value: "microservices", label: "Микросервисы" },
      { value: "redis", label: "Redis" },
      { value: "distributed", label: "Распределенные системы" },
    ],
  },
];

export const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") ?? "";

  // Выбранные фильтры (пока не связаны с URL)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__wrapper">
          <aside className="catalog__filters">
            <TitleElem level={2} fontSize={20} fontWeight={700}>
              Фильтр по специализациям
            </TitleElem>

            {FILTER_GROUPS.map((group) => (
              <FilterGroup
                key={group.title}
                title={group.title}
                options={group.options}
                selected={selectedFilters}
                onChange={setSelectedFilters}
              />
            ))}
          </aside>

          <div className="catalog__content">
            <TitleElem level={1} fontWeight={700}>
              Каталог менторов
            </TitleElem>

            <DescriptionElem>
              Поиск: {initialQuery || "(пусто)"}
            </DescriptionElem>
          </div>
        </div>
      </div>
    </section>
  );
};
