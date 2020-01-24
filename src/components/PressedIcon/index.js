import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AppIcon } from '../AppIcon';
import PropTypes from 'prop-types';
import { COLORS } from '../../common';

const PressedIcon = ({ onPress, disabled, name, style, activeOpacity, color, underlayColor, size, iconStyle }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor={underlayColor || COLORS.iconTransparent}
            style={[styles.iconContainer, style]}
            onPress={() => onPress != null ? onPress() : alert("Not working")}
            disabled={disabled}
        >
            <AppIcon name={name} style={styles.icon} color={color} size={size} iconStyle={iconStyle} />
        </TouchableOpacity>
    );

}

PressedIcon.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    size: PropTypes.number
}

export { PressedIcon };

const styles = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        margin: 0,
        textAlign: "center"
    }
})