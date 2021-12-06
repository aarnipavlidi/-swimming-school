import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_LOGGED_ADMIN } from '../graphql/queries';

const useAdmin = () => {

  const [currentAdminData, setCurrentAdminData] = useState('');
  const { loading, error, data } = useQuery(CURRENT_LOGGED_ADMIN);

  useEffect(() => {
    if (data) {
      setCurrentAdminData(data.me)
    }
  }, [data]);

  return { currentAdminData, loading }
};

export default useAdmin;
