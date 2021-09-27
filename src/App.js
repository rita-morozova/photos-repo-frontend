import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import Container from "./components/container/Container";
import MainHeader from "./components/header/MainHeader";
import LoginForm from "./components/login/LoginForm";
import SignupForm from "./components/signup/SignupForm";

const URL = "https://photos-repo.herokuapp.com/";
const token = localStorage.getItem("token");

const App = () => {
  const [user, setUser] = useState("");
  const history = useHistory();

  useEffect(() => {
    findUser();
  }, []);

  ////Find User Profile
  const findUser = () => {
    const _token = token;
    if (_token) {
      fetch(`${URL}/profile`, {
        headers: {
          Authorization: `Bearer ${_token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => setUser(user.user));
    }
  };

  ////////////Handle Login and SignUp
  const renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login") {
      return <LoginForm handleSubmit={handleLogin} />;
    } else if (routerProps.location.pathname === "/signup") {
      return <SignupForm handleSubmit={handleSignup} />;
    }
  };

  const handleLogin = (info) => {
    handleAuthFetch(info, `${URL}/login`);
  };

  const handleSignup = (info) => {
    handleSignupFetch(info, `${URL}/users`);
  };

  const handleAuthFetch = (info, request) => {
    fetch(request, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) throw Error(data.error);
        localStorage.setItem("token", data.token);
        setUser(data.user);
        history.push("/");
      })
      .catch((errors) => alert(errors));
  };

  const handleSignupFetch = (info, request) => {
    fetch(request, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: info.username,
          password: info.password,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.error) throw Error(data.error);
        localStorage.setItem("token", data.token);
        console.log(data.token);
        setUser(data.user);
        history.push("/");
      })
      .catch((error) => alert(error));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("");
    return <Redirect to="/" push={true} />;
  };

  return (
    <div className="App">
      <MainHeader user={user} />
      <Switch>
        <Route exact path="/" component={() => <Container user={user} />} />
        <Route exact path="/login" component={renderForm} />
        <Route exact path="/signup" component={renderForm} />
        <Route exact path="/logout" component={() => handleLogout()} />
      </Switch>
    </div>
  );
};

export default App;
