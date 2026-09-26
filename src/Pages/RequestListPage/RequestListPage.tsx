import "./RequestListPage.scss";

export const RequestListPage = () => {
  return (
    <section className="request-list">
      <div className="request-list__wrapper">
        <h1 className="request-list__header">Заявки</h1>
        <ul className="request-list__list">
          {/* {requests.map((r) => (
              <RequestItem key={r.id} {...r} />
            ))} */}
        </ul>
      </div>
    </section>
  );
};
