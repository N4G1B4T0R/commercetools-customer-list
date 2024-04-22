import { ChangeEvent, useContext } from 'react';
import { TableContext } from '../../lib/store/context.ts';
import { ReactComponent as LeftIcon } from 'shared/assets/icons/left.svg';
import { ReactComponent as RightIcon } from 'shared/assets/icons/right.svg';
import {
  PageButton,
  PageNumberInput,
  PaginationWrapper,
  Text
} from './pagination.styles.tsx';
export const Pagination = () => {
  const mainClass = "pagination";
  const { total, currentPage, setCurrentPage, loading, limit } = useContext(TableContext);

  const totalPages = Math.ceil(total) / limit;
  const currentItems =  currentPage * limit;

  const _onChange = (event: ChangeEvent<HTMLInputElement> ) => {
    const value = +event.target.value;
    if (value > totalPages) return;
    setCurrentPage(value);
  };

  return (
    <PaginationWrapper id={mainClass}>
      <PageButton
        id={`${mainClass}__prev`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage <= 1 || loading}>
        <LeftIcon />
      </PageButton>

      <Text>Page</Text>
      <PageNumberInput
        id={`${mainClass}__input`}
        name="page"
        type="number"
        value={currentPage}
        min={1}
        max={totalPages}
        onChange={_onChange}
      />

      <Text id={`${mainClass}__total`}>of {total}</Text>

      <PageButton
        id={`${mainClass}__next`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentItems >= total || loading}>
        <RightIcon />
      </PageButton>
    </PaginationWrapper>
  );
};
