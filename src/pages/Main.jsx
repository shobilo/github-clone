import { Input, Stack, Pagination } from "@mui/material";
import React, { useState } from "react";
import RepositoryList from "../components/RepositoryList";
import MUISelect from "../components/UI/Select";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState("1");
  const [selectedSort, setSelectedSort] = useState("")

  const [repositories, setRepositories] = useState([
    { id: 1, name: "toolkit", description: "useful", language: "TypeScript" },
    { id: 2, name: "framework", description: "react", language: "TypeScript" },
    { id: 3, name: "trash", description: "pascal", language: "TypeScript" },
  ]);

  const getSortedRepositories = () => {
    if (selectedSort) {
      return [...repositories].sort((a, b) => {
        return a[selectedSort].localeCompare(b[selectedSort])
      })
    }
    return repositories
  }

  const sortedRepositories = getSortedRepositories()
 
  const onSearchInputChanged = (event) => {
    setSearchInput(event.target.value);
  };

  const onPageChanged = (event, value) => {
    setPage(value);
  };

  const onSortSelected = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <main>
      <Stack spacing={4}>
        <Input
          placeholder="Input here the repository name"
          value={searchInput}
          onChange={onSearchInputChanged}
        />
        <RepositoryList repositories={sortedRepositories} />
        <Stack spacing={2}>
          <MUISelect
            value={selectedSort}
            onChange={onSortSelected}
            label="Sort by"
            options={[
              {value: "name", label: "Name"},
              {value: "description", label: "Description"}
            ]}
          />
        </Stack>
        <Pagination
          count={30}
          page={page}
          onChange={onPageChanged}
          showFirstButton
          showLastButton
        />
      </Stack>
    </main>
  );
};

export default Main;
