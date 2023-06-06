import './App.css';
import { AppStateProvider, TransactionsProvider } from './store';
import { Transactions } from './views';
import { Error } from './components';

function App() {
  return (
    <AppStateProvider>
      <Error />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </AppStateProvider>
  );
}

export default App;
