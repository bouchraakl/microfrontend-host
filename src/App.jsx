import React, { Suspense } from 'react';

const  RemoteMicroFrontend = React.lazy(() => import('remoteApp/MicroFrontend'));

const App = () => {
  return (
      <div>
          <h1>Host Application</h1>
          <Suspense fallback={<div>Loading Micro-Frontend...</div>}>
              <RemoteMicroFrontend />
          </Suspense>
      </div>
  );
};

export default App;
