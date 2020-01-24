import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, DEVICE_WIDTH, DEVICE_HEIGHT, ICONS } from '../../common';
import { AppText, PressedIcon } from '../../components';

const HomeCard = ({ onPress, disabled, item }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.container}
            onPress={() => onPress != null ? onPress() : alert("Not working")}
            disabled={disabled}
        >
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <PressedIcon name={ICONS.bookmark} style={styles.bookMark} />
            </View>

            <View style={styles.detailsView}>
                <View style={styles.statusPrice} >
                    <View style={[styles.status, { backgroundColor: item.color }]}>
                        <AppText style={styles.statusText}>{item.status}</AppText>
                    </View>
                    <AppText style={styles.price}>{item.price}</AppText>
                </View>
                <AppText style={styles.title}>{item.title}</AppText>
                <View style={styles.nameIcon}>
                    <AppText style={styles.nameText}>{item.name}</AppText>
                    <PressedIcon name={ICONS.heart} />
                </View>
            </View>

        </TouchableOpacity>
    );

}

HomeCard.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    size: PropTypes.number
}

export { HomeCard };

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH * 0.85,
        height: DEVICE_HEIGHT * 0.32,
        alignSelf: 'center',
        marginVertical: DEVICE_WIDTH * 0.015,
        borderRadius: 10,

    },
    detailsView: {
        width: DEVICE_WIDTH * 0.75,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        elevation: 1,
        shadowColor: '#000',
        borderWidth: 0.5,
        borderColor: "#eee",
        shadowOffset: { height: 2, width: 2 }

    },
    imageView: {
        width: DEVICE_WIDTH * 0.85,
        height: DEVICE_HEIGHT * 0.25,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { height: 2, width: 2 },

    },
    image: {
        width: DEVICE_WIDTH * 0.85,
        height: DEVICE_HEIGHT * 0.25,
        borderRadius: 10,

    },
    bookMark: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    statusPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '35%',
        padding: 5,
        alignItems: 'center',
    },
    status: {
        width: '40%',
        height: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusText: {
        fontSize: DEVICE_WIDTH * 0.04,
        alignSelf: 'center',
        color: '#fff'
    },
    price: {
        fontWeight: 'bold',
        fontSize: DEVICE_WIDTH * 0.04
    },
    title: {
        fontSize: DEVICE_WIDTH * 0.040,
        paddingLeft: 50,
        fontWeight: 'bold',
        marginTop:10,
        textAlignVertical: 'center'
    },
    nameIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '30%',
        justifyContent: 'space-between',
        paddingLeft: 50,

    },
    nameText: {
        fontSize: DEVICE_WIDTH * 0.03,
        color: '#ccc'
    }

})