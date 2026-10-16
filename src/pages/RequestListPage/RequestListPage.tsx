import "./RequestListPage.scss";
import { Link } from "react-router";

import { RequestItem } from "../../components/RequestItem/RequestItem";
import { TitleElem } from "../../components/textElem/Title/TitleElem";
import { REQUESTS_DATA } from "../../data/RequestsData";

export const RequestListPage = () => {
  const handleRequestClick = (id: string) => {
    return id;
  };

  return (
    <section className="request-list">
      <div className="container">
        <div className="request-list__wrapper">
          <TitleElem align="center">Список заявок</TitleElem>
          <ul className="request-list__group">
            {REQUESTS_DATA.map((request) => (
              <li key={request.id}>
                <Link
                  to={`/requests/${request.id}`}
                  className="request-list__link"
                  onClick={() => handleRequestClick(request.id)}
                >
                  <RequestItem industry={request.industry} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
