// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

   firebaseConfig : {
    apiKey: 'AIzaSyAx75QItul2mOQiZpgbIljQb3nO_V0n3-s',
    authDomain: 'movie-56c7e.firebaseapp.com',
    databaseURL: 'https://movie-56c7e.firebaseio.com',
    projectId: 'movie-56c7e',
    storageBucket: 'movie-56c7e.appspot.com',
    messagingSenderId: '126640968860'
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
