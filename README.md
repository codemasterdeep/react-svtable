# react-svtable

## Description

`react-svtable` is a React component library for creating interactive data tables. It provides a simple and customizable way to display tabular data with features like sorting, pagination, selection, and actions.

## Installation

You can install `react-svtable` via npm or yarn:

```bash
npm install react-svtable
# or
yarn add react-svtable
```

#Usage
To use react-svtable, import the DataTable component into your React application:

```bash
import React, { useState } from 'react';
import DataTable from 'react-svtable';

const Contacts = () => {
    const [columns] = useState([
        { name: 'name', label: 'Name', sort: true },
        { name: 'email', label: 'Email', sort: true },
        { name: 'mobile', label: 'Mobile', sort: true },
    ]);
    const [contacts] = useState([
    {
        name: 'Codemaster',
        email: 'codemaster@example.com',
        mobile: '9988099880',
    },
    { name: 'Tony Stark', email: 'tony@stark.com', mobile: '9988199881' },
    { name: 'Bruce Banner', email: 'banner@hulk.com', mobile: '9988299882' },
    { name: 'Micky', email: 'micky@diseny.com', mobile: '9988399883' },
    ]);

return (
    <React.Fragment>
        <h1>Contacts</h1>
        <DataTable
            title='Datatable'
            columns={columns}
            data={contacts}
            recordPerPage={10}
            isSelectable={true}
            selectedRows={[2,3]}
            isPagination={true}
            sortable={true}
            hasActionMenu={true}
            actions={[
            { name: 'preview', label: 'Preview', icon: '>>' },
            { name: 'edit', label: 'Edit', icon: '' },
            { name: 'delete', label: 'Delete', icon: '' },
            ]}
            getActionValue={(action, value) => {
            console.log('action:', action, 'Row:', value);
            }}
        />
    </React.Fragment>
    );
};

export default Contacts;
```

## Props

- **title**: Title of the table.
- **columns**: An array of column objects defining the columns of the table. Each column object should have properties like `name`, `label`, and `sort`.
- **data**: An array of objects representing the data to be displayed in the table.
- **recordPerPage**: Number of records to display per page.
- **isSelectable**: Boolean indicating whether rows can be selected.
- **selectedRows**: Array of indices of initially selected rows.
- **isPagination**: Boolean indicating whether pagination should be enabled.
- **sortable**: Boolean indicating whether columns should be sortable.
- **hasActionMenu**: Boolean indicating whether an action menu should be displayed for each row.
- **actions**: An array of action objects defining the actions available in the action menu. Each action object should have properties like `name`, `label`, and `icon`.
- **getActionValue**: A callback function that receives the selected action and the corresponding row data when an action is performed.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
