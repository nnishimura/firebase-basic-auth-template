# Firebase basic auth template

Project template for firebase + basic auth + multi-site hosting. Intended for publishing prototype.

*KNOWN ISSUE:* basic auth only works for root path.

## Getting Started

First time only:

```
npm i firebase-tools -g
cd functions
npm install
```

Update `firebase.json` and `.firebaserc` with your project details.

## How to deploy

Deploy your project:

```
firebase deploy --only hosting:<target-name>
```

Deploys all applications:

```
firebase deploy
```

## Known issue

Basic auth only works for root path. You can use this apparoch to get around this issue
But you won't be able to deploy for each site

## Reference

https://stackoverflow.com/questions/31323630/is-it-possible-to-require-a-password-to-access-a-site-hosted-on-firebase
