import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon, Grid, Menu } from "semantic-ui-react";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "#44484b",
  fontSize: "12pt",
};

const background = {
  backgroundColor: "#fac339",
};

const MainHeader = ({ user }) => {
  return (
    <>
      <Grid padded className="tablet mobile computer only">
        <Menu borderless fluid size="large" style={background}>
          <Link to="/">
            <Menu.Item header style={{ color: "white" }}>
              PHOTIFY
              <Icon name="camera retro" inverted size="large" />
            </Menu.Item>
          </Link>
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{ background: "#f1f3f3" }}
          >
            {" "}
            HOME{" "}
          </NavLink>
          {user ? (
            <>
              <Menu.Menu position="right">
                <NavLink
                  to="/logout"
                  exact
                  style={link}
                  activeStyle={{ background: "#f1f3f3" }}
                >
                  {" "}
                  LOGOUT{" "}
                </NavLink>
              </Menu.Menu>
            </>
          ) : (
            <>
              <Menu.Menu position="right">
                <NavLink
                  to="/login"
                  exact
                  style={link}
                  activeStyle={{ background: "#f1f3f3" }}
                >
                  {" "}
                  LOGIN{" "}
                </NavLink>
                <NavLink
                  to="/signup"
                  exact
                  style={link}
                  activeStyle={{ background: "#f1f3f3" }}
                >
                  {" "}
                  SIGNUP{" "}
                </NavLink>
              </Menu.Menu>
            </>
          )}
        </Menu>
      </Grid>
    </>
  );
};

export default MainHeader;
