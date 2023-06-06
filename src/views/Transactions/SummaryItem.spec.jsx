import { render, screen } from '@testing-library/react';
import SummaryItem from './SummaryItem';

const pointsMock = {
  first: 5,
  second: 4,
  third: 3,
};

describe('SummaryItem', () => {
  it('is SummaryItem', () => {
    render(<SummaryItem dataTestid="summary-test" summary={{ userName: 'Test', points: pointsMock }} />);
    const summaryElement = screen.getByTestId('summary-test');
    expect(summaryElement).toBeInTheDocument();
  });
  it('displays 3 points', () => {
    render(<SummaryItem summary={{ userName: 'Test', points: pointsMock }} />);
    const poinstItemElement = screen.getAllByTestId('points-item');
    expect(poinstItemElement).toHaveLength(3);
  });
  it('displays total', () => {
    render(<SummaryItem summary={{ userName: 'Test', points: pointsMock }} />);
    const poinstItemElement = screen.getByText('12');
    expect(poinstItemElement).toBeInTheDocument();
  });
});
