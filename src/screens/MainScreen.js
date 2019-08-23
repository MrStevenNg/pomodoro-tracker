import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import LogicContainer from "../components/common/LogicContainer";

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LogicContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default withNavigation(MainScreen);
