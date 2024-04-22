import { createContext } from 'react';
import { IColumnType } from '../../interfaces.ts';

export interface ITableContext {
  loading: boolean;
  total: number;
  limit: number;
  currentPage: number;
  error: Error | null;
  data: Record<string, unknown>[] | [];
  columns: IColumnType<unknown>[];
  setCurrentPage: (val: number) => void;
}

export const TableContext = createContext<ITableContext>({
  data: [],
  loading: false,
  currentPage: 1,
  total: 0,
  limit: 0,
  error: null,
  columns: [],
  setCurrentPage: () => {}
});
