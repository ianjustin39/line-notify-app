import React from 'react';
import { HashRouter as Switch, Route } from 'react-router-dom';
import SendNotify from '../components/sendNotify'
import Setting from '../components/setting'
import Description from '../components/description'

function Routes() {
  return (

    <div class="mx-auto w-75 mt-4">
    <Switch>
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
      <Route path='/' children={<></>} />
    </Switch>
    </div>
  );
}

export default Routes;