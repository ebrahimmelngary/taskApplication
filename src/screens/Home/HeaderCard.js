import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DEVICE_WIDTH } from '../../common';
import { AppText, AppIcon } from '../../components';


const HeaderCard = ({ title, style, disabled, iconName }) => {
    return (
        <TouchableOpacity style={[styles.headerCard, style]} disabled={disabled} activeOpacity={0.6}>
            <AppText>{title}</AppText>
            <AppIcon name={iconName} />
        </TouchableOpacity>
    )
}


export default HeaderCard;

const styles = StyleSheet.create({
    headerCard: {
        width: DEVICE_WIDTH * 0.85,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 45,
        borderWidth: 1,
        elevation: 1,
        borderColor: '#ccc',
        alignSelf: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    }
})