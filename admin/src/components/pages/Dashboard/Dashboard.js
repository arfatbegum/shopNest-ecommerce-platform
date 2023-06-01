import React from 'react';
import OverviewCards from './OverviewCards';
import Charts from './Charts';
import Orders from './Orders';

const Dashboard = () => {
  return (
    <div>
      <OverviewCards />
      <Charts />
      <Orders/>
    </div>
  );
};

export default Dashboard;