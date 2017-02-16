This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It demonstrates a problem using scroll-into-view with absolute positioning with a table.

## Getting Started
clone the repo

```
git clone git@github.com:LaurieSReynolds/scroll-firefox-bug.git
```

cd into scroll-firefox-bug

```
cd scroll-firefox-bug
```

install packages

```
npm install
```

Start the application - this will launch a browser window.

```
npm start
```

Navigate to the appplication

```
In a browser window, enter http://localhost:3000
```

Steps to reproduce the problem

* Make the browser window short enough so that you need to scroll down to see the last rows
* Scroll down to the bottom
* Click one of the bottom rows

Expected behavior
The clicked row will scroll into view and be highlighted in green

This works fine in Safari and Chrome.

In Firefox, it scrolls to the top.

Removing 'position: absolute' in the index.css file for the .table-body-container fixes the problem.

** I didn't take the time to fix styling.  In our application, the layout is correct and identical in all three browser - Safari, Firefox, Chrome
