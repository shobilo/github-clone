import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import MUISelect from "./UI/Select/index";
import RestorePageIcon from '@mui/icons-material/RestorePage';
import { FILTER_OPTIONS } from "../constants/localStorage";

const RepositoryFilter = (props) => {
  const {
    searchInput, setSearchInput,
    selectedSort, setSelectedSort,
    selectedOrder, setSelectedOrder,
    setCurrentPage,
  } = props.fields;

  const onResetClicked = () => {
    localStorage.setItem(FILTER_OPTIONS, "{}");
    setCurrentPage(1);
    setSearchInput("");
    setSelectedSort("");
    setSelectedOrder("");
  };

  return (
    <Stack sx={{ alignItems: "center" }} direction="row">
      <TextField
        variant="outlined"
        sx={{ flexGrow: "1", backgroundColor: "white" }}
        placeholder="Input here the repository name"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <MUISelect
        value={selectedSort}
        onChange={(sort) => setSelectedSort(sort)}
        label="Sort by"
        options={[
          { value: "stars", label: "Stars" },
          { value: "forks", label: "Forks" },
          { value: "help-wanted-issues", label: "Help wanted issues" },
          { value: "updated", label: "Last updated" },
        ]}
      />
      <MUISelect
        value={selectedOrder}
        onChange={(order) => setSelectedOrder(order)}
        label="Order by"
        options={[
          { value: "asc", label: "Ascending" },
          { value: "desc", label: "Descending" },
        ]}
      />
      <IconButton onClick={onResetClicked}>
        <RestorePageIcon />
      </IconButton>
    </Stack>
  );
};

export default RepositoryFilter;
