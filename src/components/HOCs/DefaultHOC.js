import React, { Component } from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { Button, ButtonWrapper } from "../common";

import { clearHistory } from "../../actions";

class DefaultHOC extends Component {
    handlePress = () => {
        // Function Goes Here.
        null;
    };

    render() {
        return (
            <View>
                <ButtonWrapper function={this.handlePress}>
                    <Button
                        text={"Sample Text"}
                        backgroundColor={"#000"}
                        color={"#fff"}
                        width={"90%"}
                        borderColor={"#008080"}
                    />
                </ButtonWrapper>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { clearHistory } = state;
    return {
        clearHistory
    };
};

const DefaultHOCWithNavigation = withNavigation(DefaultHOC);

export default connect(
    mapStateToProps,
    { clearHistory }
)(DefaultHOCWithNavigation);
