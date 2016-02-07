'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    PropTypes,
    } = React;

class ProgressBar extends React.Component {
    render () {
        var incompletePercentage = Math.abs(this.props.percentage - 100);
        return (
            <View style={[styles.container, this.props.backgroundStyle]}>
                <View style={[styles.complete, this.props.progressStyle, {flex: this.props.percentage}]}></View>
                <View style={[styles.incomplete, this.props.incompleteStyle, {flex: incompletePercentage}]}></View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 5,
        //backgroundColor: "pink"
    },
    complete: {
        height: 20,
        //backgroundColor: "purple"
    },
    incomplete: {
        // height: 20,
        // backgroundColor: "#EEE",
    }
});

module.exports = ProgressBar;
