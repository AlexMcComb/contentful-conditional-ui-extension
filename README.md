# Entry editor extension

This is a [entry editor extension](https://www.contentful.com/developers/docs/extensibility/ui-extensions/) for the conditional field in the Floors content type of the AMMP app.
https://www.contentful.com/developers/docs/tutorials/general/uiextensions-entry/


The sample extension can be used as a starting point:

https://github.com/contentful/extensions/tree/master/samples/entry-editor-extension/


Creating a UI extension requires the Contentful CLI:

`npm install -g contentful-cli`

Login to Contentful tha opens a browser window and gives you a token to enter:

`contentful login`

Command to view the Contentful spaces available:

`contentful space list`

To use a Contentful space:

`contentful space use (Space ID)`

To use an environment within a space:

`contentful space use --environment-id (Environemnt name)`

Next, push a development version to your space and create a build folder

`npm run start`

To create the final version make sure to run:

`npm run deploy`

Make sure the index.html in the build folder is filled out with all contents of the app, not just a plain html file

Be sure to add the extension to Contentful, and make sure the fields match the content type json.

`Settings -> Extensions -> Add Extension -> Install from Github` -> add a link to the extensions.json file

It uses a boolean value to toggle visible of a field `abstract` so an editor can choose if this field is needed or not.


