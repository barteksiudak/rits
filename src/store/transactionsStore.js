import { createContext, useState } from 'react';

const defaultData = {
  transactions: [],
  usersPoints: {},
};

export const TransactionsContext = createContext(defaultData);

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const formatMonth = (currentDate) => `${MONTH_NAMES[currentDate.getMonth()]}/${currentDate.getFullYear()}`;
const getLastThreeMonths = () => {
  const date = new Date();
  const lastMonth = date.getMonth() - 3
  date.setMonth(lastMonth);
  const firstDate = formatMonth(date);
  date.setMonth(lastMonth + 1);
  const secondDate = formatMonth(date);
  date.setMonth(lastMonth + 2);
  const thirdDate = formatMonth(date);

  return {
    [firstDate]: 0,
    [secondDate]: 0,
    [thirdDate]: 0,
  }
}

export function calculatePoints(amount) {
  const over100 = Math.max(amount - 100, 0);

  return over100 * 2 + (Math.max(amount - over100 - 50, 0));
}

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState(defaultData);

  const updateTransactions = (transactionsData = []) => {
    const usersPoints = transactionsData.reduce((acc, cur) => {
      const points = acc[cur.userId] ? acc[cur.userId].points : getLastThreeMonths();
      const formatedMonth = formatMonth(new Date(cur.date));
      const monthSummary = points[formatedMonth] + calculatePoints(cur.amount);

      return {
        ...acc,
        [cur.userId]: {
          points: {
            ...points,
            [formatedMonth]: monthSummary,
          },
          userName: cur.userName,
        },
      };
    }, {});

    setTransactions({
      ...transactions,
      transactions: transactionsData,
      usersPoints,
    });
  }

  return (
    <TransactionsContext.Provider value={[transactions, updateTransactions]}>
      {children}
    </TransactionsContext.Provider>
  )
}
