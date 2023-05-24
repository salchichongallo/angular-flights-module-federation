import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
  }),
])
  .catch((error) => console.log('Error loading remote entries', error))
  .then(() => import('./bootstrap'))
  .catch(console.error);
