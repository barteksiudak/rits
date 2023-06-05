import './listStyles.css';

export default function List({ children }) {
  return (
    <>
      <div className="list">
        {children}
      </div>
      {/* {!items.length && <div className="list-empty">There is nothing to show</div>} */}
    </>
  );
}