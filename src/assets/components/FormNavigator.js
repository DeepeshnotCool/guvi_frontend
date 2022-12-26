import React from "react";
import {View, StyleSheet} from 'react-native';
import AppLink from './AppLink';

const FormNavigator = ({
    leftLinkText,
    rightLinkText,
    onLeftLinkPress,
    onRightLinkPress,
}) => {
    return (
        <View style={styles.linkContainer}>
            <AppLink onPress={onLeftLinkPress} text={leftLinkText}/>
            <AppLink onPress={onRightLinkPress} text={rightLinkText}/>
        </View>
    );
};

const styles = StyleSheet.create({
  linkContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
})

export default FormNavigator;
