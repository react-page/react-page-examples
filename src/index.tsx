import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '@react-page/core/lib/index.css';
import '@react-page/ui/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '@react-page/plugins-background/lib/index.css';

import Simple from './Simple';
import ImagePlugin from './builtin-plugins/image';
import SpacerPlugin from './builtin-plugins/spacer';
import SimpleReadonly from './SimpleReadonly';

const ReactPageExamples = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Simple />
        </Route>
        <Route path="/simple">
          <Simple />
        </Route>
        <Route path="/simple-readonly">
          <SimpleReadonly />
        </Route>
        <Route path="/builtin-plugins/image">
          <ImagePlugin />
        </Route>
        <Route path="/builtin-plugins/spacer">
          <SpacerPlugin />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<ReactPageExamples />, document.getElementById('root'));
