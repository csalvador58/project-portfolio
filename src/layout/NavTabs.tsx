import * as React from 'react';
import { IconButton, Tabs, Tab } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import WorkIcon from '@mui/icons-material/Work';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label='icon label tabs example'
      indicatorColor='secondary'
      textColor='secondary'
    >
      <Tab icon={<PersonIcon />} label='About' />
      <Tab icon={<WorkIcon />} label='Experience' />
      <Tab icon={<LaptopMacIcon />} label='Projects' />
      <Tab icon={<ContactPageIcon />} label='Contact' />
    </Tabs>
  );
}