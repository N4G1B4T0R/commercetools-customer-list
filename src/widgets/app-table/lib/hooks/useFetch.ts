import { useState, useEffect } from 'react';
import { CustomerPagedQueryResponse } from '@commercetools/platform-sdk';

import { FetchCustomers } from 'shared/sdk/customers.ts';

const limit = 6;

interface ICustomerList {
  loading: boolean;
  error: Error | null;
  data: any;
  total: number;
  currentPage: number;
  limit: number;
  setCurrentPage: (val: number) => void;
}

export const useCustomerList = (fetch: FetchCustomers): ICustomerList => {
  const [data, setData] = useState<CustomerPagedQueryResponse | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (currentPage - 1 < 0) return;
        const offset = (currentPage - 1) * limit;
        const response = await fetch(offset, limit);
        if (response) {
          setData(response.body);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [limit, currentPage]);

  return {
    loading,
    error,
    currentPage,
    setCurrentPage,
    data: data?.results || [],
    total: data?.total || 0,
    limit
  };
};
