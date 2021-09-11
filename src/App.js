import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import LoginPage from "./individual/pages/Login/LoginPage";
import Header from "./individual/components/Header/Header";
import { useSelector } from "react-redux";
import GdprConsent from "./individual/pages/GdprConsent";

import IndividualMainPage from "./individual/pages/IndividualMainPage";
import IndividualRouter from "./individual/pages/IndividualRouter";
import InstitutionalMainPage from "./institutional/pages/MainPage";
import InstitutionalRouter from "./institutional/pages/InstitutionalRouter";

function App(props) {
  const history = useHistory();
  const userInfo = useSelector((state) => state.userLogin?.userLogin);

  // if (userInfo) {
  //   const { userType } = userInfo;
  //   if (userType === "individual") {
  //     <Route path="/individual" exact component={IndividualMainPage} />;
  //     <Route path="/individual/:section" component={IndividualRouter} />;
  //   }
  //   if (userType === "institutional") {
  //     return (
  //       <div className="app">
  //         <Header />
  //         <Switch>
  //           <Route
  //             path="/institutional"
  //             exact
  //             component={InstitutionalMainPage}
  //           />
  //           <Route
  //             path="/institutional/:section"
  //             component={InstitutionalRouter}
  //           />
  //         </Switch>
  //       </div>
  //     );
  //   }
  //   if (userType === "admin") {
  //   }
  // } else {
  // }

  if (true) {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login_register" exact component={LoginPage} />
          <Route path="/individual" exact component={IndividualMainPage} />
          <Route
            path="/institutional"
            exact
            component={InstitutionalMainPage}
          />
          <Route
            path="/institutional/:section"
            component={InstitutionalRouter}
          />
          <Route path="/individual/:section" component={IndividualRouter} />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Header />
        <Route path="/gdpr-consent" exact component={GdprConsent} />
        <Switch>
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
