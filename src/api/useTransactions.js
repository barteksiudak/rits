import { useContext, useEffect, useRef } from "react";
import { useFetch } from "../compositions/http";
import { TRANSACTIONS } from "./endpoints";
import { TransactionsContext } from "../store";

export default function useTransactions() {
  const { data, error, isLoading } = useFetch({ url: `${TRANSACTIONS}?period=3` });
  const [transactions, setTransactions] = useContext(TransactionsContext);

  const setTransactionsRef = useRef(setTransactions);

  useEffect(() => {
    if (!error) {
      setTransactionsRef.current(data || []);
    }
  }, [data, error]);

  return {
    data,
    transactions,
    isLoading,
    error,
  }
}
