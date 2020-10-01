import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '@react-page/core/lib/index.css';
import '@react-page/ui/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '@react-page/plugins-background/lib/index.css';

import { SimpleExample } from './SimpleExample';
import { SimpleReadonlyExample } from './SimpleReadonly';
import { ImagePluginExample } from './builtin-plugins/image';
import { SpacerPluginExample } from './builtin-plugins/spacer';
import { BasicContentPluginExample } from './content/BasicContentPluginExample';

const ReactPageExamples = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SimpleExample />
        </Route>
        <Route path="/simple">
          <SimpleExample />
        </Route>
        <Route path="/simple-readonly">
          <SimpleReadonlyExample />
        </Route>
        <Route path="/content/basic">
          <BasicContentPluginExample />
        </Route>
        <Route path="/builtin-plugins/image">
          <ImagePluginExample />
        </Route>
        <Route path="/builtin-plugins/spacer">
          <SpacerPluginExample />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<ReactPageExamples />, document.getElementById('root'));
