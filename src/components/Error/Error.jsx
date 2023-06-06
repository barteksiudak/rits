import { useContext } from 'react';
import { AppStateContext } from '../../store';

import './errorStyles.css';

export default function Error() {
  const [{ error }, setAppState] = useContext(AppStateContext);

  const handleClose = (e) => {
    e.preventDefault();

    setAppState({ error: '' });
  }

  if (!error) {
    return null;
  }

  return (
    <div data-testid="error-container" className="error">
      <a data-testid="close-button" href="/" className="error-close" onClick={handleClose}>x</a>
      <div className="error-message">{error}</div>
    </div>
  );
};
