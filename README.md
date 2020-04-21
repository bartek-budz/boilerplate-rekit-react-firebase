## About

The goal of this project is to deliver a "scratch" aka "boilerplate" aka "template" aka "starter kit" of a Progressive Web App based on [React](https://reactjs.org) with serverless backend powered by [Firebase](https://firebase.google.com), for those wanting to utilize these technologies along with [Rekit Studio](https://rekit.js.org) as IDE, to quickly prototype their ideas.

The scratch in currently under development, aiming to provide at least the following features:

- Email & password authorization with Firebase purely as a backend (~80% done, to be implemented: e-mail verification)
- User account management (ability to change e-mail, password etc.) - to be done
- Multi-language support (powered by [i18next](https://www.i18next.com)) that interacts with Firebase - e.g. email to confirm password reset is sent in the language selected by the user in the app, then the language setting is propagated in the password reset link (done)


## Getting started

### Prerequisites
 - install [npm](https://www.npmjs.com)
 - sign up to [Firebase Console](https://console.firebase.google.com)
 - install [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli)

### Build the app
- clone this repo
- in the main project folder, execute `npm install` to download all the dependencies
- then execute `npm run-script build` to build the project

### Set up Firebase
- go to [Firebase Console](https://console.firebase.google.com)
- if you haven't done it yet, create a new firebase project (free subscription should be enough)
- enable email & password authentication
- go to authentication -> templates -> edit one of the e-mail templates -> edit action URL template (by default it is like `https://(your-app-id).firebaseapp.com/__/auth/action`) - set it to `https://(your-app-id).firebaseapp.com/auth/action` (remove `__` before `/auth`)
- go to project settings, add web app (if you want to use Firebase hosting, you can choose it at this point or later) 
- at the end you should be able to generate similar config: 

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY,
  authDomain: "YOUR-APP-ID.firebaseapp.com",
  databaseURL: "https://YOUR-APP-ID.firebaseio.com",
  projectId: "YOUR-APP-ID",
  storageBucket: "YOUR-APP-ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

- in the root project dir, create dotenv config file (e.g. `.env.local` ), populate it with your firebase project config properties as follows:
```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR-APP-ID.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://YOUR-APP-ID.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=YOUR-APP-ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR-APP-ID.appspot.com
REACT_APP_FIREBASE_MESSAGE_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
```
also, for proper handling of continueUrl in email messages, add the `REACT_APP_BASE_URL` property with your app base URL, e.g.
```
REACT_APP_BASE_URL=https://YOUR-APP-ID.firebaseapp.com
```
- in the root project dir, execute `firebase init`
- select hosting from Firebase features
- select your project or create a new one
- enter `build` when asked for a public directory
- enter `Y` when asked whether to configure as single-page app
- for other options use defaults