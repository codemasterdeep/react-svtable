import React from 'react';

const RowActionMenu = ({ hideAction, actions, row, handleAction }) => {
  return (
    <React.Fragment>
      <div className='sv-action-popup'>
        <ul>
          {actions.map((action) => (
            <li
              key={action.label}
              onClick={() => handleAction(action.name, row)}
            >
              {action.icon && <span>{action.icon}</span>}
              {action.label}
            </li>
          ))}
        </ul>
      </div>
      <div
        className='sv-popup-cover'
        onClick={() => {
          hideAction(false);
        }}
      ></div>
    </React.Fragment>
  );
};

export default RowActionMenu;
