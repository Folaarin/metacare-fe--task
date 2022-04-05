import React from "react";
import './tabs.styles.css'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box} from "@mui/material";

import EfficiencyAnalytics from "../../pages/efficiency-analytics/efficiency-analytics.component";



function TabPanel(props) {
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

const TabsHome = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{textTransform:'capitalize'}} label="Efficiency" {...a11yProps(0)} />
                    <Tab label="Volume" {...a11yProps(1)} />
                    <Tab label="Customer Satisfaction" {...a11yProps(2)} />
                    <Tab label="Backlog" {...a11yProps(3)} />
                </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <EfficiencyAnalytics />
                    
                </TabPanel>
                <TabPanel value={value} index={1}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                Item Four
                </TabPanel>
            </Box>
    )
} 


export default TabsHome