import './listStyles.css';

export default function List({ children }) {
  return (
    <>
      <div className="list">
        {children}
      </div>
    </>
  );
}