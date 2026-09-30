import "./RequestListPage.scss";
import { REQUESTS_DATA } from "../../data/RequestsData";
import TitleElem from "../../components/textElem/Title/TitleElem";
import { RequestItem } from "../../components/RequestItem/RequestItem";
import { Link } from "react-router";

export const RequestListPage = () => {
  const handleRequestClick = (id: string) => {
    console.log(`Request ${id} clicked`);
    // Here we will add navigation to the detailed page in the future
  };

  return (
    <section className="request-list">
      <div className="container">
        <div className="request-list__wrapper">
          <TitleElem align="center">Список заявок</TitleElem>
          <ul className="request-list__group">
            {REQUESTS_DATA.map((request) => (
              <Link to={`/requests/${request.id}`} key={request.id}>
                <RequestItem
                  key={request.id}
                  industry={request.industry}
                  onClick={() => handleRequestClick(request.id)}
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
