import { Card, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RepositoryShortInfo = () => {
  return (
    <section>
      <Card sx={{ minWidth: 800 }}>
        <CardContent>
          <p>repository name</p>
          <p>Description</p>
          <p>language</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default RepositoryShortInfo;
