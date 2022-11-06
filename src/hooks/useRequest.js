import { useState, useEffect } from 'react';

export const useRequest = (callback, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      setIsLoading(true);
      try {
        setData(await callback());
      } catch (e) {
        setError('Sorry, something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, params);

  return [data, error, isLoading];
};
