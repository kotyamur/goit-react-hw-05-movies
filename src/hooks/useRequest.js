import * as api from 'api';
import { useState, useEffect } from 'react';

export const useRequest = (funcName, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      if (param === '') {
        return;
      }
      setIsLoading(true);
      try {
        setData(await api[funcName](param));
      } catch (e) {
        setError('Sorry, something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInfo();
  }, [funcName, param]);

  return [data, error, isLoading];
};
