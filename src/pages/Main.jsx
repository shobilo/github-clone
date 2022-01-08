import { Input, Stack, Pagination, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import RepositoryList from "../components/RepositoryList";
import MUISelect from "../components/UI/Select";
import { useFetching } from "../hooks/useFetching";
import APIworker from "../services/APIworker";
import { getPagesCount } from "../services/pages";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [repositoriesLimit, setRepositoriesLimit] = useState(3)
  const [totalPages, setTotalPages] = useState(0)

  const [fetchRepositories, isRepositoriesLoading, fetchRepositoriesError] =
    useFetching(async () => {
      const response = await APIworker.getRepositories(searchInput, selectedSort, selectedOrder, repositoriesLimit, currentPage);
      setRepositories(response.data.items);
      const totalPages = getPagesCount(response.data.total_count, repositoriesLimit)
      setTotalPages(totalPages)
    });

  useEffect(() => {
    if (searchInput === ""){
      setRepositories([])
      setTotalPages(0)
    }
    else {
      fetchRepositories();
    }
  }, [searchInput, selectedSort, selectedOrder, repositoriesLimit, currentPage]);

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
          <RepositoryList repositories={repositories} />
        )}

        <Stack direction="row">
          <MUISelect
            value={selectedSort}
            onChange={(sort) => setSelectedSort(sort)}
            label="Sort by"
            options={[
              { value: "stars", label: "Stars" },
              { value: "forks", label: "Forks" },
              { value: "help-wanted-issues", label: "Help wanted issues" },
              { value: "updated", label: "Last updated" }
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
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          showFirstButton
          showLastButton
        />
      </Stack>
    </main>
  );
};

export default Main;
