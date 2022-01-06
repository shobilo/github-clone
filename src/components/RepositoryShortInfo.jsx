import { Card, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RepositoryShortInfo = (props) => {
  const {name, description, language} = props.repository

  return (
    <section>
      <Card sx={{ minWidth: 800 }}>
        <CardContent>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{language}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default RepositoryShortInfo;
