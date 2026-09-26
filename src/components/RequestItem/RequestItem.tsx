import "./RequestItem.scss";

interface RequestItemProps {
  industry: string;
  onClick: () => void;
}

export const RequestItem = ({ industry, onClick }: RequestItemProps) => {
  return (
    <div className="request-item" onClick={onClick}>
      <span className="request-item__industry">{industry}</span>
      <span className="request-item__arrow">→</span>
    </div>
  );
};
