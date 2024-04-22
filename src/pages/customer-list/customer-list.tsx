import { AppTable } from 'widgets';
import { fetchCustomers } from 'shared/sdk/customers.ts';
import { columns } from './columns.ts';

const CustomerList = () => (
  <div className="container">
    <AppTable fetch={fetchCustomers} columns={columns} />
  </div>
);
export default CustomerList;
