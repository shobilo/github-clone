import { Stack, Pagination, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import RepositoryList from "../components/RepositoryList";
import { useFetching } from "../hooks/useFetching";
import APIworker from "../services/APIworker";
import { getPagesCount } from "../services/pages";
import { FILTER_OPTIONS } from "../constants/sessionStorage";
import RepositoryFilter from "../components/RepositoryFilter";

const Main = () => {
  
  const options = JSON.parse(sessionStorage.getItem(FILTER_OPTIONS));
  const [currentPage, setCurrentPage] = useState(options?.currentPage || 1);
  const [searchInput, setSearchInput] = useState(options?.searchInput || "");
  const [selectedSort, setSelectedSort] = useState(options?.selectedSort || "");
  const [selectedOrder, setSelectedOrder] = useState(options?.selectedOrder || "");
  const [repositoriesLimit, setRepositoriesLimit] = useState(options?.repositoriesLimit || 1);
  const [repositories, setRepositories] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const filterOptions = {
    searchInput,
    selectedSort,
    selectedOrder,
    repositoriesLimit,
    currentPage
  }

  const [fetchRepositories, isRepositoriesLoading, fetchRepositoriesError] =
    useFetching(async () => {
      const response = await APIworker.getRepositories(
        ...Object.values(filterOptions)
      );
      setRepositories(response.data.items);
      const totalPagesCount = getPagesCount(
        response.data.total_count,
        repositoriesLimit
      );

      setTotalPages(totalPagesCount);
    });

  useEffect(() => {
    if (searchInput === "") {
      setRepositories([]);
      setTotalPages(0);
    } else {
      fetchRepositories();
    }
    sessionStorage.setItem(FILTER_OPTIONS, JSON.stringify(filterOptions));
  }, [ ...Object.values(filterOptions) ]);

  return (
    <main>
      <Stack spacing={4}>
        <RepositoryFilter
          fields={
            {searchInput, setSearchInput,
            selectedSort, setSelectedSort,
            selectedOrder, setSelectedOrder,
            repositoriesLimit, setRepositoriesLimit,
            setCurrentPage}
          }
        />

        {fetchRepositoriesError ? (
          <h1>Error has occurred: {fetchRepositoriesError}</h1>
        ) : isRepositoriesLoading ? (
          <CircularProgress />
        ) : (
          <RepositoryList repositories={repositories} />
        )}

        <Grid
          container
          justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            color="secondary"
            showFirstButton
            showLastButton
          />
        </Grid>
        
      </Stack>
    </main>
  );
};

export default Main;
