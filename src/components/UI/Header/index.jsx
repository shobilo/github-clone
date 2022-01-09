import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  FormControlLabel,
  Stack,
  Switch,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./../../../redux/user/actions";

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const onAuthSwitched = () => {
    localStorage.setItem('isAuth', !isAuth)
    dispatch(setAuth(!isAuth))
  }

  return (
    <header>
      <Stack direction="row">
        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          <ButtonGroup
            color="primary"
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Main
              </Link> 
            </Button>
            <Button>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/about"
              >
                About
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
        <Stack direction="row">
          <FormControlLabel
            control={
              <Switch
                label="Authorization status"
                checked={isAuth}
                onChange={onAuthSwitched}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label={`Auth: ${isAuth}`}
          />
        </Stack>
      </Stack>
    </header>
  );
};

export default Header;
