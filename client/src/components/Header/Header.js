import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import Logo from "../../assets/png/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className="header_logo">
            <p>Logo</p>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>Search</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>Options</p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
