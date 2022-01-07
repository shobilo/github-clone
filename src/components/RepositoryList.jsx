import { Stack } from "@mui/material";
import React from "react";
import RepositoryShortInfo from "./RepositoryShortInfo";

const RepositoryList = ({ repositories }) => {
  if (repositories.length === 0) {
    return <h1>There is no a single repository</h1>;
  }

  return (
    <Stack spacing={3}>
      {repositories.map((repository) => (
        <RepositoryShortInfo repository={repository} key={repository.id} />
      ))}
    </Stack>
  );
};

export default RepositoryList;
