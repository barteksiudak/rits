import { useRef } from 'react';
import './summaryStyles.css';

export default function SummaryItem({ summary: { userName, points }, dataTestid }) {
  const totalRef = useRef(0);

  return (
    <div data-testid={dataTestid} className="summary-container">
      <strong className="summary-user-name">{userName}</strong>
      <div className="summary-points">
        {Object.entries(points).map(([period, value], i) => {
          totalRef.current += value;
          return (
            <div data-testid="points-item" key={`points-${userName}${i}`}>
              {period}: <strong>{value}</strong>
            </div>
          );
        })}
      </div>
      <div className="summary-total">Total: <strong>{totalRef.current}</strong></div>
    </div>
  );
}
