import "./RequestItem.scss";

interface RequestItemProps {
  industry: string;
}

export const RequestItem = ({ industry }: RequestItemProps) => {
  return (
    <div className="request-item">
      <span className="request-item__industry">{industry}</span>
      <span className="request-item__arrow">→</span>
    </div>
  );
};
