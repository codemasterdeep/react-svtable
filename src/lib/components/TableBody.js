import React, { useState } from 'react';
import RowActionMenu from './RowActionMenu';

const TableBody = ({
  data = [],
  columns = [],
  isSelectable,
  handleCheckBox,
  checkBox,
  rowsPerPage,
  page,
  hasActionMenu,
  actions = {},
  handleAction = () => {},
}) => {
  const [showActionMenu, setShowActionMenu] = useState(null);
  const hasChecked = (index) => {
    if (checkBox.selectAll) {
      return !(checkBox.unselected.indexOf(index) > -1);
    } else {
      return checkBox.selected.indexOf(index) > -1;
    }
  };

  const getRowIndex = (index, page, rowsPerPage) => {
    if (page === 1) {
      return page + index;
    } else if (page > 1) {
      return 1 + index + rowsPerPage * (page - 1);
    }
  };

  const handleActionMenu = (index) => {
    setShowActionMenu(index);
  };

  /**Render HTML**/
  return (
    <tbody className='sv-table-body'>
      {data && data.length > 0 && rowsPerPage > 0 ? (
        data.map((record, index) => (
          <tr key={getRowIndex(index, page, rowsPerPage)}>
            {isSelectable && (
              <td key={'selectable-' + getRowIndex(index, page, rowsPerPage)}>
                <div className='sv-selectable'>
                  <input
                    type='checkbox'
                    name={'selectable-' + index}
                    checked={hasChecked(getRowIndex(index, page, rowsPerPage))}
                    onChange={() => {}}
                  />
                  <span
                    className='checkmark'
                    onClick={() =>
                      handleCheckBox(
                        'selected',
                        getRowIndex(index, page, rowsPerPage)
                      )
                    }
                  ></span>
                </div>
              </td>
            )}
            {columns.map((column) => (
              <td key={column.name + '-' + index}>
                {record[column.name] ? record[column.name] : ''}
              </td>
            ))}
            {hasActionMenu && actions.length > 0 && (
              <td
                className='sv-action'
                style={{ textAlign: 'right', marginRight: '5px' }}
              >
                <img
                  src={require('./images/more-2-fill.png')}
                  alt=''
                  width='20'
                  height='20'
                  onClick={() =>
                    handleActionMenu(getRowIndex(index, page, rowsPerPage))
                  }
                />

                {showActionMenu === getRowIndex(index, page, rowsPerPage) && (
                  <RowActionMenu
                    showActionMenu={showActionMenu}
                    hideAction={handleActionMenu}
                    row={record}
                    actions={actions}
                    handleAction={handleAction}
                  />
                )}
              </td>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={columns && columns.length > 0 ? columns.length : 0}>
            <p className='text-center'> No Record Found.</p>
          </td>
        </tr>
      )}
    </tbody>
  );
};
export default TableBody;
