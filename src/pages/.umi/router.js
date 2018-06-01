import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/list",
        "exact": true,
        "component": require('../list.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": () => React.createElement(require('C:/Users/Administrator/AppData/Roaming/nvm/v6.10.2/node_modules/umi/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/login' })
      },
      {
        "component": () => React.createElement(require('C:/Users/Administrator/AppData/Roaming/nvm/v6.10.2/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/404","exact":true,"component":"./src\\\\pages\\\\404.js"},{"path":"/","exact":true,"component":"./src\\\\pages\\\\index.js"},{"path":"/list","exact":true,"component":"./src\\\\pages\\\\list.js"},{"path":"/login","exact":true,"component":"./src\\\\pages\\\\login.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
