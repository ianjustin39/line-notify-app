import React from 'react';
import { HashRouter as Switch, Route, Redirect } from 'react-router-dom';
import SendNotify from '../components/sendNotify'
import Setting from '../components/setting'
import Description from '../components/description'

function Routes() {
  return (

    <div className="mx-auto w-75 mt-4">
    <Switch>
    <Redirect from='/' to='/sendNotify' />
      <Route
        path='/sendNotify'
        children={<SendNotify />}
      />
      <Route
        path='/description'
        children={<Description />}
      />
      <Route
        path='/setting'
        children={<Setting />}
      />
    </Switch>
    </div>
  );
}

export default Routes;