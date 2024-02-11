import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './table.scss';
import { TablePagination } from './TablePagination';

const DataTable = ({
  title = null,
  data = [],
  columns = [],
  isPagination = true,
  isSelectable = true,
  hasActionMenu = true,
  getActionValue = () => {},
  recordPerPage = 10,
  selectedRows = [],
  actions = [],
}) => {
  const [totalPage, setTotalPage] = useState(1);
  const [checkBox, setCheckBox] = useState({
    selectAll: false,
    selected: [],
    unselected: [],
  });
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dataPerPage, setDataPerPage] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setTotalPage(Math.ceil(data.length / rowsPerPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, rowsPerPage]);

  useEffect(() => {
    setRowsPerPage(recordPerPage);
  }, [recordPerPage]);

  useEffect(() => {
    if (selectedRows && selectedRows.length > 0) {
      setCheckBox({ ...checkBox, selected: selectedRows });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRows]);

  useEffect(() => {
    if (data && data.length > 0) {
      handleData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, page]);

  /** METHODS **/
  const handleCheckBox = (type, value) => {
    if (type === 'all') {
      setCheckBox({
        ...checkBox,
        selectAll: value,
        selected: [],
        unselected: [],
      });
      getActionValue('select', {
        ...checkBox,
        selectAll: value,
        selected: [],
        unselected: [],
      });
    } else if (['selected'].indexOf(type) > -1) {
      let selectedValues = checkBox.selectAll
        ? checkBox.unselected
        : checkBox.selected;

      if (selectedValues.indexOf(value) > -1) {
        selectedValues = selectedValues.filter((item) => item !== value);
      } else {
        selectedValues.push(value);
      }

      if (checkBox.selectAll) {
        setCheckBox({ ...checkBox, unselected: selectedValues });
        getActionValue('select', { ...checkBox, unselected: selectedValues });
      } else {
        setCheckBox({ ...checkBox, selected: selectedValues });
        getActionValue('select', { ...checkBox, selected: selectedValues });
      }
    }
  };

  const handleSort = (field, sortOrder, pageData = dataPerPage) => {
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    setSortField(field);
    let sortedData = [];

    setSortOrder(newSortOrder);
    if (field !== 'id') {
      // Implement your sorting logic here
      sortedData = [...pageData].sort((a, b) => {
        return newSortOrder === 'asc'
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      });
    } else {
      sortedData = [...pageData].sort((a, b) =>
        newSortOrder === 'asc' ? a[field] - b[field] : b[field] - a[field]
      );
    }
    // Set the sorted data to the state or perform any other actions
    setDataPerPage([...sortedData]);
  };

  const handleAction = (type, value) => {
    getActionValue(type, value);
  };

  const handleData = () => {
    let pageData = [];
    if (rowsPerPage > 0 && data.length > 0) {
      pageData = data.slice(
        (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage
      );
    } else {
      pageData = data;
    }
    const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    handleSort(sortField, newSortOrder, pageData);
  };
  /** RNDER HTML */
  return (
    <div className='sv-table-responsive'>
      {title && <h3>{title}</h3>}
      <div className='sv-table-wrapper'>
        <table className='sv-table'>
          <TableHeader
            columns={columns}
            isSelectable={isSelectable}
            handleCheckBox={(value) => handleCheckBox('all', value)}
            checkBox={checkBox}
            handleSort={handleSort}
            hasActionMenu={hasActionMenu}
            sortOrder={sortOrder}
            setSortOrder={sortOrder}
            sortField={sortField}
          />
          <TableBody
            data={dataPerPage}
            columns={columns}
            isSelectable={isSelectable}
            handleCheckBox={handleCheckBox}
            checkBox={checkBox}
            rowsPerPage={rowsPerPage}
            page={page}
            hasActionMenu={hasActionMenu}
            actions={actions}
            handleAction={handleAction}
          />
        </table>
      </div>
      <div className='sv-table-footer'>
        {isPagination && data.length > rowsPerPage && (
          <TablePagination
            totalPage={totalPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            setPage={setPage}
            page={page}
          />
        )}
      </div>
    </div>
  );
};
export default DataTable;
