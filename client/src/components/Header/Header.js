import React from "react";
import { Container, Grid, Image, Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/png/logo.png";
import RightHeader from "./RightHeader";
import ImageNoFound from "../../assets/png/avatar.png";
import "./Header.scss";
import "./Search/Search.scss";

export default function Header() {
  return (
    <div>
      <div className="header">
        <Container>
          <Grid>
            <Grid.Column width={4} className="header__logo">
              <Link to="/">
                <Image src={Logo} alt="Logo" size="small" />
              </Link>
            </Grid.Column>
            <Grid.Column width={9}>
              <Input
                icon="users"
                iconPosition="left"
                placeholder="Search users..."
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <RightHeader />
            </Grid.Column>
          </Grid>
        </Container>
      </div>

      {/* <div className="headerAlt">
        <Menu borderless="false">
          <Menu.Item as={Link} to="/">
            <Image src={Logo} size="tiny" centered />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Item icon="home" as={Link} to="/" />
          <Menu.Item icon="add" as={Link} to="" />
          <Menu.Item as={Link} to="/:username">
            <Image src={ImageNoFound} avatar centered />
          </Menu.Item>
        </Menu>
      </div> */}
    </div>
  );
}
