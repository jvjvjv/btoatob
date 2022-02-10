# Btoa(toB): A Base64 Encoder/Decoder for JSON
A quick JavaScript mini-app to help me with stuff at work.

## History

So, I threw this together in abbout 20 minutes in 2020, using AngularJS of all things. Since its initial creation, I've made _very_ incremental_ changes, but this still remains a useful tool with a terrible architecture. This page also dangerously uses the JavaScript `eval()` method on purpose.

## Description

On the left pane you can enter JSON and it will be converted to a base64 string. On the right, the exact opposite: Pasting a base64 string will translate it to JSON.

I needed this for work because we would have to use two different websites to help transform JSON to base64 and back. And they didn't even validate the JSON.

## Installation

### Step One: Clone the repository

```bash
$ git clone https://github.com/jvjvjv/btoatob.git <directory>
```

### Step Two: Build

```bash
$ npm run build
```

### Alternate Step Two: Serve using Node.js

```bash
$ npm run serve
```
## Changelog

### 1.2.0

On a suggestion from a coworker, I added a "Copy" button to copy an output to the clipboard.

### 1.1.3

Switched to a Webpack-based build/development architecture, which has the `<s>`benefit of creating larger build files and`</s>` will allow for future development in a different framework, if desired. I also gave the product a new title.

AlpineJS is great for small projects like this, though, so I have no intention of switching it up any time soon. With this in mind, I replaced the Bootstrap CSS with PureCSS.

### 1.1.2

Added NPM serve alternate, because forcing anyone who is cool enough to develop against this to use PHP as a webserver is not right.

### 1.1.1

Moved code from index to JS file

### 1.1.0

Switched from AngularJS to Alpine

### 1.0.1

Resized a window.

### 1.0.0

Initial Release
