import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className="Header">
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
        >
          <Link to="/">
            <Tab value="one" label="Main" />
          </Link>

          <Link to="/about">
            <Tab value="two" label="About" />
          </Link>
        </Tabs>
      </Box>
    </header>
  )
}

export default Header
