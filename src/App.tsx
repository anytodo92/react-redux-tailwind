import SearchForm from './components/SearchForm';
import DataTable from './components/DataTable';

import { useState, useCallback } from 'react';
import { DataTableData, DataTableConfig } from './types';
import { useAppDispatch } from './hooks/store';
import { setLockedUI } from './store/slices/metaSlice';

const initialUserList = [
  {
    manager: 'Yes',
    name: 'James Brown',
    expiration_date: '2024-09-15',
  },
  {
    manager: 'Yes',
    name: 'John Miller',
    expiration_date: '2024-05-27',
  },
  {
    manager: 'No',
    name: 'David Thomas',
    expiration_date: '2024-07-19',
  },
  {
    manager: 'No',
    name: 'Joseph Martin',
    expiration_date: '2024-07-23',
  },
  {
    manager: 'Yes',
    name: 'William Clark',
    expiration_date: '2024-02-08',
  },
  {
    manager: 'No',
    name: 'Michael Robinson',
    expiration_date: '2024-06-05',
  },
  {
    manager: 'No',
    name: 'James Mia',
    expiration_date: '2024-05-17',
  },
];

function App() {
  const dispatch = useAppDispatch();
  
  const [tableConfig] = useState<DataTableConfig>({
    columns: [
      {
        name: 'Name',
        field: 'name',
      },
      {
        name: 'Manager',
        field: 'manager',
      },
      {
        name: 'Expiration Date',
        field: 'expiration_date'
      }
    ]
  });

  const [userList, setUserList] = useState<DataTableData[]>(initialUserList);

  const search = useCallback((keyword: string): void => {
    dispatch(setLockedUI(true));

    let new_ = userList;
    if (keyword.length > 0) {
      new_ = userList.filter((v) => v.name.indexOf(keyword) > -1 || v.manager === keyword)
    }
    
    setTimeout(() => {
      setUserList([...new_]);
      dispatch(setLockedUI(false));
    }, 1000);
  }, []);

  return (
    <main className="w-full px-20 mt-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
        <h1 className="w-500 font-bold text-3xl">Vite + React + Redux + Tailwind CSS Demo</h1>
        <br />
        <SearchForm onSearch={search} />
        <DataTable config={tableConfig} dataList={userList} />
      </div>
    </main>
  )
}

export default App
