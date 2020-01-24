import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, Button } from '../../components';
import { COLORS } from '../../common';
import { AppIcon } from '../AppIcon';


class EmptyScreen extends Component {
    render() {
        const { name, message, navigation, onPress, title, style, messageStyle } = this.props
        return (
            <View style={[styles.container, style]}>
                <View style={{ justifyContent: 'center' }}>
                    <AppIcon name={name} size={150} color={'#eee'} style={{alignSelf:'center'}} />
                    <AppText style={[{ color: '#ccc', fontWeight: 'bold', fontSize: 16, alignSelf: 'center', marginTop: 20 }, messageStyle]}>{message}</AppText>
                </View>
            </View>
        )
    }
}

export { EmptyScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        alignSelf:'center'
    }
})