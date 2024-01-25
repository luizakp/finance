import ReactOnRails from 'react-on-rails';

import ProgramRoutes from '../bundles/ProgramRoutes/components/ProgramRoutes';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ProgramRoutes,
});
