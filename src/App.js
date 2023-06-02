import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InputFields from "./InputFields";
import Options from "./Options";
import HistoryTable from "./HistoryTable";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HistoryIcon from '@mui/icons-material/History';
import CalculateIcon from '@mui/icons-material/Calculate';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const [inputValues, setInputValues] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const InputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const OptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    let calculatedResult = 0;

    if (selectedOption === "add") {
      calculatedResult = Number(inputValues.input1) + Number(inputValues.input2);
    } else if (selectedOption === "subtract") {
      calculatedResult = Number(inputValues.input1) - Number(inputValues.input2);
    } else if (selectedOption === "multiply") {
      calculatedResult = Number(inputValues.input1) * Number(inputValues.input2);
    } else if (selectedOption === "divide") {
      calculatedResult = Number(inputValues.input1) / Number(inputValues.input2);
    }

    setResult(calculatedResult);

    const historyItem = {
      input1: inputValues.input1,
      input2: inputValues.input2,
      operation: selectedOption,
      result: calculatedResult,
    };

    setHistory((prevHistory) => [...prevHistory, historyItem]);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box sx={{ display: 'flex' }}>
                  <CssBaseline />
                  <CustomAppBar position="fixed" open={open}>
                    <Toolbar>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Typography variant="h6" noWrap component="div">
                        Calculator App
                      </Typography>
                    </Toolbar>
                  </CustomAppBar>
                  <Drawer
                    sx={{
                      width: drawerWidth,
                      flexShrink: 0,
                      '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                      },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                  >
                    <DrawerHeader>
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                      </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                      {[
                        { text: 'Calculate', icon: <CalculateIcon />, onClick: handleSubmit },
                        { text: 'History', icon: <HistoryIcon />, link: '/history' }
                      ].map((item) => (
                        <ListItem
                          key={item.text}
                          disablePadding
                          sx={{ display: 'block' }}
                          component={Link}
                          to={item.link}
                          onClick={item.onClick}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? 'initial' : 'center',
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                  </Drawer>
                  <Main open={open}>
                    <DrawerHeader />
                    <>
                      <InputFields InputChange={InputChange} /><br />
                      <Options OptionChange={OptionChange} selectedOption={selectedOption} />
                      <p>
                        <h3>Result: {result}</h3>
                      </p>
                    </>
                  </Main>
                </Box>
              </>
            }
          />
          <Route path="/history" element={<HistoryTable history={history} />} />
        </Routes>
      </Router>
    </div>
  );
}
