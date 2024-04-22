import { useContext } from 'react';
import { StyledHeadCell } from './table-header.styles.tsx';
import { TableContext } from '../../lib/store/context.ts';

export const TableHeader = () => {
  const { columns } = useContext(TableContext);
  return (
    <tr>
      {columns?.map((column, columnIndex: number) => (
        <StyledHeadCell key={`table-head-cell-${columnIndex}`} style={{ width: column.width }}>
          {column.title}
        </StyledHeadCell>
      ))}
    </tr>
  );
};
