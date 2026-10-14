import "./RequestListPage.scss";
import { Link } from "react-router";

import { RequestItem } from "../../components/RequestItem/RequestItem";
import TitleElem from "../../components/textElem/Title/TitleElem";
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
