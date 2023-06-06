import { useContext } from 'react';
import Spinner from '../Spinner';
import './containerStyles.css';
import { AppStateContext } from '../../store/appStore';

export default function Container({ dataTestid, children }) {
  const [{ isLoading }] = useContext(AppStateContext);

  return <div data-testid={dataTestid} className="container">{isLoading ? <Spinner /> : children}</div>;
}
