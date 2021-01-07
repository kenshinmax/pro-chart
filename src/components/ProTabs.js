import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import ProTable from './ProTable';
import Prochart from './Prochart';

export default function ProTabs() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Table">
   <ProTable/>
  </Tab>
  <Tab eventKey="profile" title="Chart">
    <Prochart/>
  </Tab>
  <Tab eventKey="contact" title="Other" disabled>
    
  </Tab>
</Tabs>
  );
}
