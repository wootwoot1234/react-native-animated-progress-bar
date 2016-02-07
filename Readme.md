# react-native-animated-progress-bar  [![NPM version](https://img.shields.io/npm/v/react-native-animated-progress-bar.svg?style=flat-square)](https://www.npmjs.com/package/react-native-animated-progress-bar)

An animated progress bar for React Native.

* Uses React Native Animate.
* Uses flexbox for the size of progress bar so no need to specify the width, it will just fill the container it's in.
* The style is very customizable, just pass your style object to `backgroundStyle`, `progressStyle`, and `incompleteStyle` properties.

## Road Map, Feature Requests & Bug Fixes

I will add to this module as I need more features and I hope you will too, pull requests are always welcome.  I will not add features on request because I'm busy with other projects.  I want this to be a community written module so if there is a feature that's missing or bug, add it or fix it and send me a pull request.  If you don't know Objective C you can learn it.  We all were where you are now at some point.  [StackOverflow.com](http://stackoverflow.com/) is your friend.  :)

## Getting started

1. `npm install --save react-native-animated-progress-bar`

## Usage

Include the module

```javascript
var Progress = require('react-native-animated-progress-bar');
```

Set the the progress, values should be 0.0 to 1.0.
Set the styles, optional.

```javascript
  <ProgressBar
    progress={this.state.progress}
    backgroundStyle={{backgroundColor: "#EEE"}}
    progressStyle={{backgroundColor: "blue"}}
    incompleteStyle={{backgroundColor: "white"}} />
```

## Full Example

```javascript
'use strict';

var React = require('react-native');
var Progress = require('react-native-animated-progress-bar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ProgressBar = React.createClass({
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }
  render: function() {
    setTimeout((function() {
      this.setState({ progress: this.state.progress + (0.4 * Math.random())});
    }).bind(this), 1000);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Progress Bar!
        </Text>
        <ProgressBar
          progress={this.state.progress}
          backgroundStyle={{backgroundColor: "#EEE"}}
          progressStyle={{backgroundColor: "blue"}}
          incompleteStyle={{backgroundColor: "white"}} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('ProgressBar', () => ProgressBar);
```

## License

The MIT License (MIT)

Copyright (c) 2015 Tom Krones

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
