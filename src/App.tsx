import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmailSent from './pages/EmailSent';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import ChooseNewPassword from './pages/ChooseNewPassword';
import SuccessChange from './pages/SuccessChange';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('Data') || '{}'));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <ForgotPassword data={data} />} />
        <Route path="/email-sent" exact component={EmailSent} />
        <Route path="/choose-new-password" exact component={ChooseNewPassword} />
        <Route path="/change-password" render={() => <ChangePassword data={data} />} />
        <Route path="/success" exact component={SuccessChange} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
