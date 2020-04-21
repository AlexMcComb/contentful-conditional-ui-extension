# Entry editor extension

This is a [entry editor extension](https://www.contentful.com/developers/docs/extensibility/ui-extensions/) for the conditional field in the Floors content type of the AMMP app.

Requires the Contentful CLI:

`npm install -g contentful-cli`

Login to Contentful tha opens a browser window and gives you a token to enter:

`contentful login`

Command to view the Contentful spaces available:

`contentful space list`

To use a Contentful space:

`contentful space use (Space ID)`

To use an environment within a space:

`contentful space use --environment-id (Environemnt name)`

Push a development version to your space 

`npm run start`

It uses a boolean value to toggle visible of a field `abstract` so an editor can choose if this field is needed or not.



