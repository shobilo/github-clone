import { Card, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RepositoryShortInfo = (props) => {
  const {full_name, name, description, language} = props.repository

  return (
    <section>
      <Card sx={{ minWidth: 800 }}>
        <CardContent>
          <Link to={`/${full_name}`}>
            <h1>{name}</h1>
          </Link>
          <p>{description}</p>
          <p>{language}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default RepositoryShortInfo;
