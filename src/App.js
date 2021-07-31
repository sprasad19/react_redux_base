import "./App.scss";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import  Home  from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Helmet titleTemplate="%s - Netflix" defaultTitle="Netflix">
        <meta name="description" content="Dot Kris Web Application" />
      </Helmet>
      <Switch>
        <Route
          exact
          path="/"
          render={
            () => (
              // checkToken(token) ? (
              //   <Redirect to="/dashboard" />
              // ) : (
              //   // <Suspense fallback={null}>
              <Home />
            )
            // </Suspense>
            // )
          }
        ></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
