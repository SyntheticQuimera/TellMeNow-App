import React from "react";
import { Grid, Image } from "semantic-ui-css";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../gql/user";
import ImageNoFound from "../../assets/png/avatar.png";
import "./Profile.scss";

export default function Profile(props) {
  const { username } = props;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username },
  });

  if (loading) return null;
  if (error) return <h1>User not found</h1>;
  const { getUser } = data;

  console.log(getUser);
  return (
    <>
      <Grid className="profile">
        <Grid.Column widht={5} className="profile__left">
          <span>Left</span>
        </Grid.Column>
        <Grid.Column widht={11} className="profile__right">
          <span>Right</span>
        </Grid.Column>
      </Grid>
    </>
  );
}
