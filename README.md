# webpack-boilerplate

Webpack project to describe how build resources in all projects.

## Why

It's not because you don't use frontend framwork or ui library that you cannot use modern tools.

This project try to describe how you can structure your app to keep your code clean and following concepts as DRY and KISS.

## How to use

In this scenario we want one file dedicated to a page.

The "/src/entries.js" file is the entry point for what you expose to webpack and what will be build.

```js
{
  app: 'app.js',
  pages: {
    user: 'user.js',
    admin: {
      index: 'admin.js',
      stats: 'stats.js'
    }
  }
}
```

The build result will be following exactly the json entry path. So each time you add an entry, you now exactly what will be produced.

### Build the project

> npm run build

or

> npm run watch

## TODO

* use css-loader to build css and get him from dist folder
* add external library like jquery and expose it to each modules
* create prod build
