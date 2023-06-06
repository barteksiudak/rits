import { render, screen, waitFor } from '@testing-library/react';
import useFetch from "./useFetch";
import { AppStateProvider } from '../../store';

function UseFetchContainer() {
  const { isLoading } = useFetch({ url: 'test' });

  return <div>isLoading: {isLoading ? 'yes' : 'no'}</div>;
}

describe('useFetch', () => {
  it('is useFetch', () => {
    render(<AppStateProvider><UseFetchContainer /></AppStateProvider>);
    const isLoadingElement = screen.getByText('isLoading: yes');
    expect(isLoadingElement).toBeInTheDocument();
  });

  // todo - sometimes waitFor doesn't wait for the result. To be fixed later
  it.skip('should remove spinner after call', async () => {
    await render(<AppStateProvider><UseFetchContainer /></AppStateProvider>);
    const isLoadingElement = await waitFor(() => expect(screen.getByText('isLoading: no')).toBeInTheDocument());
  });
});
