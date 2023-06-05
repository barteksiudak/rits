import './containerStyles.css';

export default function Container({ dataTestid, children }) {
  return <div data-testid={dataTestid} className="container">{children}</div>;
}
