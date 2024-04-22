import { ClientResponse, CustomerPagedQueryResponse } from '@commercetools/platform-sdk';
import apiRoot from './client.ts';

const { REACT_APP_CTP_PROJECT_KEY } = process.env;

export type FetchCustomers = (
  offset: number,
  limit: number
) => Promise<void | ClientResponse<CustomerPagedQueryResponse>>;
export const fetchCustomers: FetchCustomers = async (offset: number, limit: number) =>
  await apiRoot()
    .withProjectKey({ projectKey: REACT_APP_CTP_PROJECT_KEY ?? '' })
    .customers()
    .get({
      queryArgs: {
        offset: offset,
        limit: limit
      }
    })
    .execute()
    .catch((err: Error) => console.log(err));
