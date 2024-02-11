import './App.css';
import { DataTable } from './lib';
// import ADataTable from './lib/components/ADataTable';

function App() {
  const columns = [
    { name: 'name', label: 'Name', sort: false },
    { name: 'email', label: 'Email', sort: false },
    { name: 'mobile', label: 'Mobile', sort: false },
  ];
  const sampleData = [
    {
      id: 1,
      name: 'Hardeep Singh',
      email: 'Hardeep@gmail.com',
      mobile: '9988099880',
    },
    { id: 2, name: 'Deepak', email: 'deepak@gmail.com', mobile: '9988099880' },
    {
      id: 3,
      name: 'Johnplayer',
      email: 'Johnplayer@gmail.com',
      mobile: '9988099880',
    },
    { id: 4, name: 'Angel', email: 'angel@gmail.com', mobile: '9988099880' },
    {
      id: 5,
      name: 'Hardeep Singh',
      email: 'Hardeep@gmail.com',
      mobile: '9988099880',
    },
    { id: 6, name: 'Deepak', email: 'deepak@gmail.com', mobile: '9988099880' },
    {
      id: 7,
      name: 'Johnplayer',
      email: 'Johnplayer@gmail.com',
      mobile: '9988099880',
    },
    { id: 8, name: 'Angel', email: 'angel@gmail.com', mobile: '9988099880' },
    {
      id: 9,
      name: 'Hardeep Singh',
      email: 'Hardeep@gmail.com',
      mobile: '9988099880',
    },
    { id: 10, name: 'Deepak', email: 'deepak@gmail.com', mobile: '9988099880' },
    {
      id: 11,
      name: 'Johnplayer',
      email: 'Johnplayer@gmail.com',
      mobile: '9988099880',
    },
    { id: 12, name: 'Angel', email: 'angel@gmail.com', mobile: '9988099880' },
    {
      id: 13,
      name: 'Hardeep Singh',
      email: 'Hardeep@gmail.com',
      mobile: '9988099880',
    },
    { id: 14, name: 'Deepak', email: 'deepak@gmail.com', mobile: '9988099880' },
    {
      id: 15,
      name: 'Johnplayer',
      email: 'Johnplayer@gmail.com',
      mobile: '9988099880',
    },
    { id: 16, name: 'Angel', email: 'angel@gmail.com', mobile: '9988099880' },
  ];

  return (
    <div>
      <DataTable
        title='Datatable'
        columns={columns}
        data={sampleData}
        recordPerPage={10}
        isSelectable={true}
        selectedRows={[]}
        isPagination={true}
        sortable={true}
        onSort={() => {}}
        hasActionMenu={true}
        actions={[
          { name: 'preview', label: 'Preview', icon: '' },
          { name: 'edit', label: 'Edit', icon: '' },
          { name: 'delete', label: 'Delete', icon: '' },
        ]}
        getActionValue={(action, value) => {
          console.log('action:', action, 'Value:', value);
        }}
      />
    </div>
  );
}

export default App;
