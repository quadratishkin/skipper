import "./RequestListPage.scss";
import { REQUESTS_DATA } from "../../data/RequestsData";
import { RequestItem } from "../../components/RequestItem/RequestItem";

export const RequestListPage = () => {
  const handleRequestClick = (id: string) => {
    console.log(`Request ${id} clicked`);
    // Here we will add navigation to the detailed page in the future
  };

  return (
    <section className="request-list">
      <div className="container">
        <div className="request-list__wrapper">
          <h1 className="request-list__title">Список заявок</h1>
          <ul className="request-list__group">
            {REQUESTS_DATA.map((request) => (
              <RequestItem
                key={request.id}
                industry={request.industry}
                onClick={() => handleRequestClick(request.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
