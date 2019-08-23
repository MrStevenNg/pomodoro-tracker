import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";

class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.container}
                onPress={() => {
                    this.props.navigation.navigate("TitleScreen");
                }}
            >
                <Text style={styles.buttonStyle}>&lt;</Text>
            </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        // marginLeft: wp("10%")
    },
    buttonStyle: {
        fontSize: "1rem",
        fontWeight: "bold",
        backgroundColor: "#272647",
        color: "#fff",
        textAlign: "left",
        paddingVertical: hp("3.425%"),
        paddingHorizontal: wp("10%")
    }
});

export default withNavigation(BackButton);
