import React, { Component } from "react";
import { View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import BackButton from "../../components/BackButton";
import HeaderText from "../../components/HeaderText";

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BackButton />
                <HeaderText />
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        backgroundColor: "#000144",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: hp("10%"),
        width: wp("100%")
    }
});
