import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/microfrontend-manifest.json')
  .catch((error) => console.log('Error loading remote entries', error))
  .then(() => import('./bootstrap'))
  .catch(console.error);
