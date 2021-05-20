import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

/* icons */
import CreateIcon from "../assets/img/create-icon.png";

/* components */
import Header from "../components/Header";
import PrimaryMenu from "../components/PrimaryMenu";
import MeetMenu from "../components/MeetMenu";
import Content from "../components/Content";
import Details from "../components/Details";
import SendMail from "../components/SendMail";

/* reduce */
import { selectModalDialog, openModalDialog } from "../features/mail/mailSlice";
import { login, selectUser } from "../features/user/userSlice";

/* login page */
import Login from './login'
import { auth } from "../firebase";

const App = () => {
  const modalOpen = useSelector(selectModalDialog);
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        )
      }
    })
  }, [])

  return (
    <Router>

      { !user ? (
        <Login />
      ) : (
      <div className="relative">
        <Header />
        <div className="flex items-start">
          <div className="w-full max-w-xxs">
            <div className="py-4 px-2">
              <button onClick={() => dispatch(openModalDialog())} className="flex items-center justify-center border border-gray-200 rounded-full shadow pr-6 pl-3 py-2 focus:outline-none">
                <img src={CreateIcon} alt="Gmail Clone" className="mr-3" />
                Oluştur
              </button>
            </div>
            <PrimaryMenu />
            <MeetMenu />
          </div>
          <div className="flex-auto">
            <Switch>
              <Route exact path="/">
                <Content />
              </Route>
              <Route path="/email">
                <Details />
              </Route>
            </Switch>
          </div>
        </div>
        {modalOpen && <SendMail />}
      </div>
      )}

    </Router>
  );
};

export default App;
