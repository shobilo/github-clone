import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import RepositoryListItem from "./RepositoryListItem";

const RepositoryList = ({ repositories }) => {
  if (repositories.length === 0) {
    return (
      <Grid container justifyContent="center">
        <Typography sx={{fontSize: "2rem"}}>
          There are no repositories to show
        </Typography>  
      </Grid>
    );
  }

  return (
    <Stack spacing={3}>
      {repositories.map((repository) => (
        <RepositoryListItem repository={repository} key={repository.id} />
      ))}
    </Stack>
  );
};

export default RepositoryList;
