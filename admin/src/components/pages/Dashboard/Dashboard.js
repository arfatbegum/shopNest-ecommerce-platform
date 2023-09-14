import React from 'react';
import OverviewCards from './OverviewCards';
import Charts from './Charts';
import OrdersList from '../Orders/OrdersList';


const Dashboard = () => {
  return (
    <div>
      <OverviewCards />
      <Charts />
      <OrdersList/>
    </div>
  );
};

export default Dashboard;