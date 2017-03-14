import React from 'react';

import Todos from './todos/todos';
import Menu from './common/menu';

import AppRoutes from './routes';

const App = () => {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Menu />   
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--3-col"></div>
              <div className="mdl-cell mdl-cell--6-col">
                <AppRoutes />
              </div>
              <div className="mdl-cell mdl-cell--3-col"></div>
            </div>
          </div>
        </main>
      </div>
    );
};

export default App;