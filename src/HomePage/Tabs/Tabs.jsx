import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Tabs.css"
import Costs from "./Comnponents/Costs"
import Included from './Comnponents/Included';
import Price from "./Comnponents/Price"
import Show from "./Comnponents/Show"
import Negotitate from "./Comnponents/Negotitate"

function CustomTabPanel(props) 
{
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="How much Does it cost" {...a11yProps(0)} />
          <Tab label="What's included" {...a11yProps(1)} />
          <Tab label="How do I price my house" {...a11yProps(2)} />
          <Tab label="Who Will show my house" {...a11yProps(3)} />
          <Tab label="What about offers and negotiation" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Costs/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Included/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Price/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Show/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Negotitate/>
      </CustomTabPanel>
    </Box>
  );
}
