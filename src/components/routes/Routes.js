import { Route, Switch } from 'react-router-dom';

import StreamCreate from '../streams/StreamCreate';
import StreamDelete from '../streams/StreamDelete';
import StreamEdit from '../streams/StreamEdit';
import StreamList from '../streams/StreamList';
import StreamShow from '../streams/StreamShow';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={StreamList}></Route>
      <Route exact path='/streams/new' component={StreamCreate}></Route>
      <Route exact path='/streams/edit/:id' component={StreamEdit}></Route>
      <Route exact path='/streams/delete/:id' component={StreamDelete}></Route>
      <Route exact path='/streams/:id' component={StreamShow}></Route>
    </Switch>
  );
};

export default Routes;
