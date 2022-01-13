import React from "react";
import { IconButton, Stack, TextField, Tooltip } from "@mui/material";
import MUISelect from "./UI/Select/index";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import { FILTER_OPTIONS } from "../constants/sessionStorage";

const RepositoryFilter = (props) => {
  const {
    searchInput, setSearchInput,
    selectedSort, setSelectedSort,
    selectedOrder, setSelectedOrder,
    repositoriesLimit, setRepositoriesLimit,
    setCurrentPage,
  } = props.fields;

  const onResetClicked = () => {
    sessionStorage.setItem(FILTER_OPTIONS, "{}");
    setCurrentPage(1);
    setSearchInput("");
    setSelectedSort("");
    setSelectedOrder("");
    setRepositoriesLimit("")
  };

  return (
    <Stack direction="column">
      <Stack sx={{ flexGrow: "1", alignItems: "center", justifyContent: "center"}} direction="row">
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
          isNone={true}
        />
        <MUISelect
          value={selectedOrder}
          onChange={(order) => setSelectedOrder(order)}
          label="Order by"
          options={[
            { value: "asc", label: "Ascending" },
            { value: "desc", label: "Descending" },
          ]}
          isNone={true}
        />
        <MUISelect
        value={repositoriesLimit}
        onChange={(limit) => setRepositoriesLimit(limit)}
        label="Limit"
        options={[
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" }
        ]}
        isNone={false}
      />
        <Tooltip title="Reset filter">
          <IconButton onClick={onResetClicked}>
            <RestorePageIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <TextField
        variant="outlined"
        sx={{ flexGrow: "1", backgroundColor: "white" }}
        placeholder="Input here the repository name"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </Stack>
  );
};

export default RepositoryFilter;
