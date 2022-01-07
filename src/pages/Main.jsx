import { Input, Stack, Pagination, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import RepositoryList from "../components/RepositoryList";
import MUISelect from "../components/UI/Select";
import { useFetching } from "../hooks/useFetching";
import { useRepositories } from "../hooks/useRepositories";
import APIworker from "../services/APIworker";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState("1");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [repositories, setRepositories] = useState([]);

  const [fetchRepositories, isRepositoriesLoading, fetchRepositoriesError] =
    useFetching(async () => {
      const response = await APIworker.getRepositories("angular");
      setRepositories(response.data.items);
    });

  const customRepositories = useRepositories(
    repositories,
    selectedSort,
    searchInput,
    selectedOrder
  );

  useEffect(() => {
    fetchRepositories();
  }, []);

  const onPageChanged = (event, value) => {
    setPage(value);
  };

  return (
    <main>
      <Stack spacing={4}>
        <Input
          placeholder="Input here the repository name"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />

        {fetchRepositoriesError && (
          <h1>Error has occurred: {fetchRepositoriesError}</h1>
        )}
        
        {isRepositoriesLoading ? (
          <CircularProgress />
        ) : (
          <RepositoryList repositories={customRepositories} />
        )}

        <Stack direction="row">
          <MUISelect
            value={selectedSort}
            onChange={(sort) => setSelectedSort(sort)}
            label="Sort by"
            options={[
              { value: "name", label: "Name" },
              { value: "description", label: "Description" },
              { value: "language", label: "Language" },
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
