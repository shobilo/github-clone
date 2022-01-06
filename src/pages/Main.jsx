import { Input, Stack, Pagination } from "@mui/material";
import React, { useState } from "react";
import RepositoryList from "../components/RepositoryList";
import MUISelect from "../components/UI/Select";
import { useRepositories } from "../hooks/useRepositories";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState("1");
  const [selectedSort, setSelectedSort] = useState("");

  const [repositories, setRepositories] = useState([
    { id: 1, name: "toolkit", description: "useful", language: "TypeScript" },
    { id: 2, name: "framework", description: "react", language: "JavaScript" },
    { id: 3, name: "trash", description: "pascal", language: "HTML" },
  ]);
  const sortedAndSearchedRepositories = useRepositories(repositories, selectedSort, searchInput)

  const onPageChanged = (event, value) => {
    setPage(value);
  };

  return (
    <main>
      <Stack spacing={4}>
        <Input
          placeholder="Input here the repository name"
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
        />
        <RepositoryList repositories={sortedAndSearchedRepositories} />
        <MUISelect
          value={selectedSort}
          onChange={sort => setSelectedSort(sort)}
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
