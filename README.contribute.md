# Contributing

## Overview

The use of Bower for dependencies is not sanctioned in Origami v2. Use npm with webpack or browserify instead.

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
| [React](https://facebook.github.io/react/)  |   Fast-rendering, composable client-side components.    | [Powering Up with React](https://www.codeschool.com/courses/powering-up-with-react) |
| [Babel](http://babeljs.io) |  Compiles ES6 to ES5 to enjoy the new version of JavaScript today. Also transpiles JSX via babel-preset-react. | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes source maps and hot reloading via [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Mocha](http://mochajs.org) | Automated tests with [expect](https://www.npmjs.com/package/expect) for assertions and [React Test Utils](https://facebook.github.io/react/docs/test-utils.html) for DOM testing without a browser. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [ESLint](http://eslint.org/)| Lint JavaScript as configured in .eslintrc. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html) | Compiled CSS styles with variables, mixins, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |

This archetype includes a working example component that puts the above to use.

## Continuous Integration

To hook up your project to Origami continuous integration, a one-time manual process is currently required. 

Please send your request for one of the following GitHub or BitBucket options to: pearson-design-accelerator@pearson.com 
or [HipChat](https://pearson.hipchat.com/chat/room/1469228)

### GitHub

GitHub repositories will integrate with [Travis CI](https://travis-ci.org/Pearson-Higher-Ed/), which will publish to the
 **public** scope in Pearson's npm organization.

### BitBucket

BitBucket repositories will integrate with [Solano CI](https://ci.solanolabs.com), which will publish to the **private**
scope in Pearson's npm organization.

## Initial Machine Setup
1. Install [Git](https://git-scm.com/downloads). 
2. Install [Node 4.0.0 or greater](https://nodejs.org) - Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
3. On a Mac? You're all set. If you're on Windows, complete the steps for your OS below.  

**On Windows:**

1. Install Ruby as the runtime engine for SCSS.
2. Install [Python 2.7](https://www.python.org/downloads/). Some node modules may rely on node-gyp, which requires Python on Windows.

### Quick Start

See the project working before changing anything!

In your local repo:

    npm install
    npm start

Navigate to: **localhost:8081/pagination**

#### Where are the files being served from?

Webpack serves your component in memory when you `npm run dev`. No physical files are written. When the component is 
built using `npm run build`, physical files are written to /build.

Additionally, Hot Module Replacement is activated in the webpack dev server; saved changes to /src are automatically 
reloaded in the browser. Changes to the demo/index.html itself, however, do require a manual page refresh.

### Using ElementsSDK

Pearson has created a base styling library to assist developers in creating a user interface with styles 
that are pre-approved by the design team.  For the purposes of this component archetype the incorporation of 
ElementsSDK is for the purposes of the demo only, but it is possible that the component archetype demo does 
not pull in the latest version of ElementsSDK.  Should the demo need to be on the latest ElementsSDK 
version, please update the package.json file to reflect the current version of [ElementsSDK](https://github.com/Pearson-Higher-Ed/elements)

Additionally, given the scope of ElementsSDK, developers will need to consider if incorporating ElementsSDK 
into their component as a direct dependency is warranted.  

### Build

Build the bundle(s) manually at any time, and minify all JavaScript for production:

    npm run build

### Test

The project is wired to unit test with the popular [Mocha](https://mochajs.org/) framework and the [expect](https://github.com/mjackson/expect) assertion library.

It is also enabled for the following options:

- [shallow rendering](https://github.com/airbnb/enzyme) with AirBnb's Enzyme test suite

Linting will run automatically prior to executing the test suite.

    npm test    

### Spec Compliance

Determine if your component passes a series of checks for Origami v2 compliance.

    npm run verify

### Translations for Internationalization

It is expected that applications will pass in translated text for dynamic content, and your component simply needs to 
render whatever is passed in.

### Publish to Pearson npm Registry

FOR PUBLIC PACKAGES ONLY, add the following npm script to the package.json:

    "postpublish": "npm access public && echo 'Package scope set to public!'"

**Do not manually version or tag your project**. Instead, when you are ready to publish an update to npm, manually run 
the release script in the master branch. It handles all of that and publishes to npm on your behalf using the 
pearson-ux account.

Additionally, there is no need to manually maintain a change log - if you follow the 
[commitizen](https://commitizen.github.io/cz-cli/) conventions for commit messages, a change log will automatically be 
generated during the release process.

Before you run the release script, ensure that you don't have to manually authenticate every time you perform a network 
operation with Git.

    npm run release

### How do I debug?

Source maps are enabled for the webpack dev server. Using Chrome's dev tools - open the "Sources" tab, navigate to 
`top/webpack://./`, and you will find the original source files for which you can set breakpoints in Chrome's debugger.

**To take advantage of source maps, you must enable JavaScript source maps in your browser**.

Optionally, install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
for additional React debugging support in Chrome dev tools under the "React" tab.
