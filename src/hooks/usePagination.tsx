import { useEffect, useState } from "react";

interface Props<T> {
  data: T[];
  pageSize: number;
}

export const usePagination = <T, >({
  data,
  pageSize = 5
}: Props<T>) => {
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPage: 1,
    pageSize: pageSize
  });

  useEffect(() => {
    handlePaginteData(pagination.page, pagination.pageSize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handlePaginteData = (page: number, pageSize: number) => {
    const totalPage = Math.ceil(data.length / pageSize);
    const startPage = page === 1 ? 0 : (page * pageSize) - pageSize;
    const endPage = page * pageSize;
    const newData = [...data].slice(startPage, endPage);

    setPaginatedData(newData);
    setPagination(old => ({
      ...old,
      page,
      totalPage,
      pageSize
    }));

  }

  const handleChangePage = (newPage: number) => {
    handlePaginteData(newPage, pagination.pageSize);
  }

  const handleChangePageSize = (newPageSize: number) => {
    handlePaginteData(1, newPageSize);
  }

  return {
    paginatedData,
    pagination,
    handleChangePage,
    handleChangePageSize
  }
}
