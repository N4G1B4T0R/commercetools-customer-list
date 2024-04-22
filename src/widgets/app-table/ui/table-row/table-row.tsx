import { TableRowCell } from '../table-cell';
import { StyledRow } from './table-row.styles.tsx';
import { useContext } from 'react';
import { TableContext } from '../../lib/store/context.ts';
export const TableRow = () => {
  const { columns, data } = useContext(TableContext);
  return (
    <>
      {data?.map((item, itemIndex) => (
        <StyledRow key={`table-body-${itemIndex}`}>
          {columns?.map((column, columnIndex) => (
            <TableRowCell key={`table-row-cell-${columnIndex}`} item={item} column={column} />
          ))}
        </StyledRow>
      ))}
    </>
  );
};
