import { SyntheticEvent, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (
    _event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
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
      <Tab icon={<ContactPageIcon />} label='Contact' />
    </Tabs>
  );
}
