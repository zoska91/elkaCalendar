import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { routes } from "./routes";

import { isInitialized } from "./components/Firebase/firebase";
import ReactNotification from "react-notifications-component";

import Indicator from "./components/Shared/Indicator";

import LoginPage from "./pages/LoginPage";
import InstructorAddLessonPage from "./pages/InstructorAddLessonPage";
import InstructorHomePage from "./pages/InstructorHomePage";
import InstructorListOfStudetnsPage from "./pages/InstructorListOfStudetnsPage";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ReactNotification />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.addLesson} component={InstructorAddLessonPage} />
          <Route exact path={routes.homeInstructor} component={InstructorHomePage} />
          <Route exact path={routes.listOfStudents} component={InstructorListOfStudetnsPage} />
          <Route exact path={routes.createAccountPage} component={CreateAccountPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  ) : (
    <div id="loader">
      <Indicator />
    </div>
  );
}

export default App;
