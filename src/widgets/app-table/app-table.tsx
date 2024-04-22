import { TableHeader, TableRow, Pagination } from './ui';
import { TableContext } from './lib/store/context.ts';
import { useCustomerList } from './lib/hooks/useFetch.ts';
import { AppButton, AppTypography } from 'shared/UI-kit';
import { ReactComponent as PlusIcon } from 'shared/assets/icons/plus.svg';
import { FetchCustomers } from '../../shared/sdk/customers.ts';
import { FC } from 'react';
import { IColumnType } from './interfaces.ts';
import { StyledTable } from './app-table.styles.tsx';

interface IProps {
  fetch: FetchCustomers;
  columns: IColumnType<any>[];
}

const AppTable: FC<IProps> = ({ fetch, columns }) => {
  const mainClass = 'grid-table';
  const { data, loading, error, currentPage, total, setCurrentPage, limit } =
    useCustomerList(fetch);

  return (
    <TableContext.Provider
      value={{ data, columns, loading, error, setCurrentPage, currentPage, total, limit }}>
      <div className="top-bar-wrapper">
        <AppTypography id={`${mainClass}__title`} variant="h1">
          Customers{' '}
          <AppTypography id={`${mainClass}__result`} variant="body1">
            {total} results
          </AppTypography>
        </AppTypography>
        <AppButton id={`${mainClass}__btn`} variant="outlined" startIcon={<PlusIcon />}>
          Add Customer
        </AppButton>
      </div>
      <StyledTable>
        <thead id={`${mainClass}__head`}>
          <TableHeader />
        </thead>
        <tbody id={`${mainClass}__body`}>
          <TableRow />
        </tbody>
      </StyledTable>
      <Pagination />
    </TableContext.Provider>
  );
};

export { AppTable };
