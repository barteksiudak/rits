import { render, screen } from '@testing-library/react';
import Transactions from "./Transactions";
import { AppStateProvider } from '../../store';

jest.mock('../../api/useTransactions', () => ({
  __esModule: true,
  default: () => ({
    transactions: {
      usersPoints: {
        a: { userName: 'test1', points: [] },
        b: { userName: 'test2', points: [] },
      },
    },
  }),
}));

describe('Transactions View', () => {
  it('is Transactions', () => {
    render(<AppStateProvider><Transactions /></AppStateProvider>);
    const transactionsElement = screen.getByTestId('transactions-view');
    expect(transactionsElement).toBeInTheDocument();
  });
  it('has two summary items', () => {
    render(<AppStateProvider><Transactions /></AppStateProvider>);
    const summaryElement = screen.getAllByTestId('summary-item');
    expect(summaryElement).toHaveLength(2);
  })
});
