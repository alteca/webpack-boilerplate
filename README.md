# webpack-boilerplate

A Webpack project to describe how to build resources in all kind of projects.

## Why

Not using frontend framework or ui library doesn't mean you can't use modern tools.
This project is trying to describe how you can structure your app to keep your code clean, also, it helps you using principles as DRY or KISS.


## How to use

In this scenario, each page must have its own file.
The "/src/entries.js" file is the input, it describes the pages that will be built by Webpack.

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

The compiled files will be located as described in the json input. This way, every time you add an entry, you'll know exactly what will be generated.

### Build the project

> npm run build

or

> npm run watch

## TODO

* use css-loader to build css and get him from dist folder
* add external library like jquery and expose it to each modules
* create prod build
