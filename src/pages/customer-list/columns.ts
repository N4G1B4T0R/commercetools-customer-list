import { convertDateFormat } from 'shared/utils';
import { IColumnType } from 'widgets/app-table/interfaces.ts';
import { Customer } from '@commercetools/platform-sdk';
export const columns: IColumnType<Customer>[] = [
  {
    key: 'customerNumber',
    title: 'Customer number',
    width: 110
  },
  {
    key: 'externalId',
    title: 'External ID',
    width: 118
  },
  {
    key: 'firstName',
    title: 'First Name',
    width: 126
  },
  {
    key: 'lastName',
    title: 'Last Name',
    width: 124
  },
  {
    key: 'company',
    title: 'Company',
    width: 113
  },
  {
    key: 'email',
    title: 'Email',
    width: 181
  },
  {
    key: 'createdAt',
    title: 'Date created',
    width: 180,
    render: (_, { createdAt }) => convertDateFormat(createdAt)
  },
  {
    key: 'lastModifiedAt',
    title: 'Date modified',
    width: 180,
    render: (_, { lastModifiedAt }) => convertDateFormat(lastModifiedAt)
  }
];
