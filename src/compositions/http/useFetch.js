import { useEffect, useState, useContext, useRef } from "react";
import http from './http';
import { AppStateContext } from "../../store";

// todo - get errors from backend message when the API will be ready.
const ERROR_MESSAGE = 'Something went wrong!';

export default function useFetch({ url }) {
  const [{ isLoading, error }, setAppState ] = useContext(AppStateContext);
  const [data, setData] = useState();

  const setAppStateRef = useRef(setAppState);

  useEffect(() => {
    setAppStateRef.current({ isLoading: true });
  }, []);

  useEffect(() => {
    http({ url }).then(({ data, ok, status }) => {
      if (!ok || status < 200 || status >= 300) {
        setAppStateRef.current({ error: ERROR_MESSAGE })
        return;
      }
      setData(data);
    }).catch(() => {
      setAppStateRef.current({ error: ERROR_MESSAGE })
    }).finally(() => {
      setAppStateRef.current({ isLoading: false });
    })
  }, [url]);

  return {
    isLoading,
    data,
    error,
  };
}
