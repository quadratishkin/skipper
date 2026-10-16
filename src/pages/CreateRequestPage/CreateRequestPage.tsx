import { useSearchParams } from "react-router";

export const CreateRequestPage = () => {
  const [searchParams] = useSearchParams();
  const initialDescription = searchParams.get("description") ?? "";

  return (
    <section className="create-request">
      <div className="container">
        <h1>Создание заявки</h1>
        <p>Описание: {initialDescription || "(пусто)"}</p>
      </div>
    </section>
  );
};
