import React from 'react';

const TableHeader = ({
  columns = [],
  isSelectable,
  handleCheckBox,
  checkBox,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  handleSort,
  hasActionMenu,
}) => {
  /**Render HTML **/
  return (
    <thead className='sv-table-head'>
      <tr>
        {isSelectable && (
          <th
            key={'selectAll'}
            style={{ width: '30px' }}
          >
            <div className='sv-selectable'>
              <input
                type='checkbox'
                name='selectAll'
                checked={checkBox.selectAll}
                onChange={() => {}}
              />
              <span
                className='checkmark'
                onClick={() => handleCheckBox(!checkBox.selectAll)}
              ></span>
            </div>
          </th>
        )}
        {columns.map((column) => (
          <th
            key={column.name ? column.name : ''}
            onClick={() => handleSort(column.name, sortOrder)}
          >
            {column.label ? column.label : ''}
            <img
              src={
                sortOrder === 'asc' && sortField === column.name
                  ? require('./images/sort-asc.png')
                  : require('./images/sort-desc.png')
              }
              alt=''
              align='right'
            />
          </th>
        ))}
        {hasActionMenu && (
          <th className='sv-action'>
            <img
              src={require('./images/barcode-fill.png')}
              alt=''
              width='30'
              height='30'
            />
          </th>
        )}
      </tr>
    </thead>
  );
};
export default TableHeader;
