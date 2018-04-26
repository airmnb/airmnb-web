# AIRMNB - web
Building the web version of AIRMNB using react, redux, obseravble.

## Getting Started
To setup the project in you local machine:
```
git clone https://github.com/airmnb/airmnb-web.git
git checkout master
npm i
```
Run `npm link` in your local airmnb-react-components to create a symlink locally, and run `npm link airmnb-react-components` in this project to use that symlinked library.

## Redux Devtool
Redux comes with a very useful tool to debug its store, the app is already integrated with this tool, however to be able to use it don't a chrome extenstion from [Redux Devtool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).
Installing this tool will add a **Redux** tab to chrome inspector, by selecting this tab, it show live time store disppatched action.

## Development
1. run `npm start` to watch and serve the project.
2. run `npm run build` to build the project.
3. run `npm run test` to run the unit test.