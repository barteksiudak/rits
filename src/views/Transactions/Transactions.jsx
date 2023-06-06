import useTransactions from '../../api/useTransactions';
import { Container, List, ListItem } from './../../components';
import SummaryItem from './SummaryItem';

export default function Transactions() {
  const { transactions: { usersPoints } } = useTransactions();

  return <Container dataTestid="transactions-view">
    <h2>Points for transactions</h2>
    <List>
      {Object.entries(usersPoints).map(([key, entry]) => (
        <ListItem key={key}>
          <SummaryItem dataTestid="summary-item" key={`summary-${key}`} summary={entry} />
        </ListItem>
      ))}
    </List>
  </Container>;
}
