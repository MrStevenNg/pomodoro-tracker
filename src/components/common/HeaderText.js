import React, { Component } from "react";
import { Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";

export default class HeaderText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Settings Screen</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        // alignSelf: "flex-start"
    },
    textStyle: {
        fontSize: "1rem",
        fontWeight: "bold",
        marginRight: wp("8%"),
        color: "#fff",
        textAlign: "right"
    }
});
