import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Divider, FormControlLabel, Stack, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./../../../redux/user/actions";

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <header className="Header">
      <Stack direction="row">
        <Box sx={{ width: "100%" }}>
          <ButtonGroup color="primary" variant="outlined" aria-label="outlined button group">
            <Button >
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Main</Link>
            </Button>
            <Button >
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/about">About</Link>
            </Button>
          </ButtonGroup>
        </Box>
        <Stack direction="row">
          <FormControlLabel control={<Switch
            label="Authorization status"
            checked={isAuth}
            onChange={() => dispatch(setAuth(!isAuth))}
            inputProps={{ "aria-label": "controlled" }}
          />}
          label={`Auth: ${isAuth}`}
          />  
        </Stack>
      </Stack>
      <Divider>Content</Divider>
    </header>
  );
};

export default Header;
