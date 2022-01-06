import { Input, Stack, Pagination } from "@mui/material";
import React, { useState, useMemo } from "react";
import RepositoryList from "../components/RepositoryList";
import MUISelect from "../components/UI/Select";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState("1");
  const [selectedSort, setSelectedSort] = useState("");

  const [repositories, setRepositories] = useState([
    { id: 1, name: "toolkit", description: "useful", language: "TypeScript" },
    { id: 2, name: "framework", description: "react", language: "JavaScript" },
    { id: 3, name: "trash", description: "pascal", language: "HTML" },
  ]);

  const sortedRepositories = useMemo(getSortedRepositories, [
    selectedSort,
    repositories,
  ]);

  const sortedAndSearchedRepositories = useMemo(() => {
    return sortedRepositories.filter((repository) =>
      repository.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [sortedRepositories, searchInput]);

  const onSearchInputChanged = (event) => {
    setSearchInput(event.target.value);
  };

  const onPageChanged = (event, value) => {
    setPage(value);
  };

  const onSortSelected = (sort) => {
    setSelectedSort(sort);
  };

  function getSortedRepositories() {
    if (selectedSort) {
      return [...repositories].sort((a, b) => {
        return a[selectedSort].localeCompare(b[selectedSort]);
      });
    }
    return repositories;
  }

  return (
    <main>
      <Stack spacing={4}>
        <Input
          placeholder="Input here the repository name"
          value={searchInput}
          onChange={onSearchInputChanged}
        />
        <RepositoryList repositories={sortedAndSearchedRepositories} />
        <MUISelect
          value={selectedSort}
          onChange={onSortSelected}
          label="Sort by"
          options={[
            { value: "name", label: "Name" },
            { value: "description", label: "Description" },
            { value: "language", label: "Language" },
          ]}
        />
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
