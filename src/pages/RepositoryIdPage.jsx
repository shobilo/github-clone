import APIworker from "./../services/APIworker";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "./../hooks/useFetching";
import { Card, CircularProgress } from "@mui/material";
import { CardContent } from "@mui/material";
import moment from "moment";

const RepositoryIdPage = () => {
  const params = useParams();
  const [repository, setRepository] = useState({});

  const [fetchRepository, isRepositoryLoading, fetchRepositoryError] =
    useFetching(async () => {
      const response = await APIworker.getCurrentRepository(
        params.owner,
        params.repository
      );
      setRepository(response.data);
    });

  useEffect(() => {
    fetchRepository();
  }, []);

  return (
    <main>
      {fetchRepositoryError ? (
        <h1>Error has occurred: {fetchRepositoryError}</h1>
      ) : isRepositoryLoading ? (
        <CircularProgress />
      ) : (
        <Card sx={{ minWidth: 800 }}>
          <CardContent>
            <h1>Name: {repository.name}</h1>
            <p>Description: {repository.description}</p>
            <p>Language: {repository.language || "not a program"}</p>
            <p>Owner: {repository?.owner?.login || "no data"}</p>
            <p>
              Created at:{" "}
              {moment(repository.created_at).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <p>
              Updated at:{" "}
              {moment(repository.updated_at).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <p>Stars: {repository.stargazers_count}</p>
            <p>Forks: {repository.forks}</p>
            <p>Subscribers: {repository.subscribers_count}</p>
          </CardContent>
        </Card>
      )}
    </main>
  );
};

export default RepositoryIdPage;
