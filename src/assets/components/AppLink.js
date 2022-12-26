import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const AppLink = ({text, onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.link}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    link:{
        color: '#00D100',
        fontSize: 16,
    },
})

export default AppLink;