import { useContext, useEffect, useRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Error from './Error';
import { AppStateProvider, AppStateContext } from '../../store';

function FakeErrorComponent() {
  const [, setAppState] = useContext(AppStateContext);
  const setAppStateRef = useRef(setAppState);

  useEffect(() => {
    setAppStateRef.current({ error: 'error message' });
  }, []);

  return <Error />;
}

describe('Error', () => {
  it('doesn\'t exist at start', () => {
    render(<AppStateProvider><Error /></AppStateProvider>);
    const errorElement = screen.queryByTestId('error-container');
    expect(errorElement).toBeNull();
  });
  it('should be displayed if has some error message', () => {
    render(<AppStateProvider><FakeErrorComponent /></AppStateProvider>);
    const errorElement = screen.getByText('error message');
    expect(errorElement).toBeInTheDocument();
  });
  it('can be closable', () => {
    render(<AppStateProvider><FakeErrorComponent /></AppStateProvider>);
    fireEvent.click(screen.getByTestId('close-button'));

    const errorElement = screen.queryByTestId('error-container');
    expect(errorElement).toBeNull();
  });
});
