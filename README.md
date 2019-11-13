# A simple Web page using Material Design Components

This repository is a simple project using HTML, JavaScript and SCSS that outputs a Web page using components from the [Material Design System](https://material.io/).

The Node.js project contained in this repository is set up to compile the JavaScript written in `app/index.js` into a single bundled `dist/index_bundle.js` file, and compile the Sass written in `app/index.scss` into a single CSS bundle file `dist/index_bundle.css`.
The `dist/index.html` file uses both the `dist/index_bundle.js` and `dist/index_bundle.css` files. 

## Getting started

Install Node.js and Npm on your computer.
This project has been tested on `node` version 10.15.3 and `npm` version 6.4.1.

Git clone this repository to your computer.

Within the project directory, run `npm install` command to install required Node.js modules.

Run `npm start` command, you should see a message *webpack is watching the files...*.

Edit the `app/index.js` and `app/index.scss` files, whenever you save these files with changes, webpack will re-bundle them into the output files `dist/index_bundle.js` and `index_bundle.css` respectively.

Open the `dist/index.html` file in your favourite Web browser to see the results!

## Generating minified code

By default the bundled code is not minified so as to aid debugging.
Edit the `webpack.config.js` file and change all of the `mode: "development"` options to `mode: "production"` and the resulting bundled code will be minified.

## More information

Information on the set up of this project can be found in the [Material Design Getting Started Guide for Web](https://material.io/develop/web/docs/getting-started/) (scroll down to the *Using MDC Web with Sass and ES2015* section).
