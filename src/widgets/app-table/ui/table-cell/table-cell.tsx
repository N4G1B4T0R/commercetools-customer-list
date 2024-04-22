import { StyledCell, StyledSkeleton } from './table-cell.styles.tsx';
import { FC, useContext } from 'react';
import { IColumnType } from '../../interfaces.ts';
import { TableContext } from '../../lib/store/context.ts';

interface IProps {
  item: any;
  column: IColumnType<unknown>;
}

const TableRowCell: FC<IProps> = ({ item, column }) => {
  const { loading } = useContext(TableContext);

  const val = item[column.key];

  const _render = () => {
    if (loading) {
      return <StyledSkeleton />;
    }
    return column.render ? column.render(column, item) : val || '-';
  };

  return <StyledCell>{_render()}</StyledCell>;
};

export { TableRowCell };
