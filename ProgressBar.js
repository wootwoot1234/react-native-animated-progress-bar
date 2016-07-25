'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
} from 'react-native';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: new Animated.Value(0),
            incompletePercentage: new Animated.Value(100),
        };
    }

    componentDidMount() {
        this.update(this.props.progress);
    }

    componentWillReceiveProps(newProps) {
        this.update(newProps.progress);
    }
    update(progress) {
        var percentage = progress * 100;
        var incompletePercentage = Math.abs(percentage - 100);
        Animated.timing(this.state.percentage, {
            easing: Easing.inOut(Easing.ease),
            duration: 500,
            toValue: percentage
        }).start();
        Animated.timing(this.state.incompletePercentage, {
            easing: Easing.inOut(Easing.ease),
            duration: 500,
            toValue: incompletePercentage
        }).start();

    }
    render () {
        var interpolatedPercentage = this.state.percentage.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
        });
        var interpolatedIncompletePercentage = this.state.incompletePercentage.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
        });
        return (
            <View style={[styles.container, this.props.backgroundStyle]}>
                <Animated.View style={[styles.complete, this.props.progressStyle, {flex: interpolatedPercentage}]}></Animated.View>
                <Animated.View style={[styles.incomplete, this.props.incompleteStyle, {flex: interpolatedIncompletePercentage}]}></Animated.View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 5,
    },
    complete: {
        height: 20,
    },
    incomplete: {
    }
});

module.exports = ProgressBar;
