import { Card, CardContent } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RepositoryListItem = (props) => {
  const { full_name, name, description, language } = props.repository;
  const isAuth = useSelector((state) => state.user.isAuth);
  let navigate = useNavigate();

  const authCheck = (event) => {
    event.preventDefault();

    if (isAuth) {
      navigate(`/${full_name}`);
    } else {
      alert('You can not open others repositories while you are unauthorized')
    }
  };

  return (
    <section>
      <Card sx={{ minWidth: 800 }}>
        <CardContent>
          <Link to={`/${full_name}`} onClick={authCheck}>
            <h1>{name}</h1>
          </Link>
          <p>{description}</p>
          <p>{language}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default RepositoryListItem;
