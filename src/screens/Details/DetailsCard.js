import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, View, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, DEVICE_WIDTH, DEVICE_HEIGHT, ICONS } from '../../common';
import { AppText, PressedIcon } from '../../components';
import MaterialTabs from 'react-native-material-tabs';

const DetailsCard = ({ item, navigation }) => {
    //state area using hooks
    const [selectedTab, setSelectedTab] = useState(0);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <View style={styles.imageView}>
                <ImageBackground style={styles.image} source={{ uri: item.image }}  >
                    <View style={styles.iconsView}>
                        <PressedIcon name={ICONS.bookmark} style={styles.bookMark} />
                        <PressedIcon name={ICONS.leftArrow} onPress={() => navigation.goBack()} color={"#000"} />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.detailsView}>
                <View style={styles.statusPrice} >
                    <View style={[styles.status, { backgroundColor: item.color }]}>
                        <AppText style={styles.statusText}>{item.status}</AppText>
                    </View>
                    <AppText style={styles.price}>{item.price}</AppText>
                </View>
                <View style={styles.nameIcon}>
                    <AppText style={styles.nameText}>{item.name}</AppText>
                    <PressedIcon name={ICONS.heart} />
                </View>
                <AppText style={styles.descption}>{item.descrption}</AppText>
                <MaterialTabs
                    items={item.options}
                    selectedIndex={selectedTab}
                    onChange={setSelectedTab}
                    barColor="#fff"
                    inactiveTextColor="gray"
                    indicatorColor="green"
                    activeTextColor="#000"
                    textStyle={{fontSize:11}}
                />
            </View>

        </SafeAreaView>
    );

}

DetailsCard.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    size: PropTypes.number
}

export { DetailsCard };

const styles = StyleSheet.create({
    container: {
        height: DEVICE_HEIGHT,
        alignSelf: 'center',
        marginVertical: DEVICE_WIDTH * 0.015,
        borderRadius: 10,

    },
    detailsView: {
        width: DEVICE_WIDTH * 0.75,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 1,
        shadowColor: '#000',
        borderWidth: 0.5,
        borderColor: "#eee",
        shadowOffset: { height: 2, width: 2 }

    },
    imageView: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.25,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { height: 2, width: 2 }
    },
    image: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.33,

    },
    iconsView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bookMark: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    statusPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        padding: 5,
        alignItems: 'center',
    },
    status: {
        width: '40%',
        height: 30,
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

    nameIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        justifyContent: 'space-between',
        paddingLeft: 50,

    },
    nameText: {
        fontSize: DEVICE_WIDTH * 0.04,
        fontWeight: 'bold'
    },
    descption: {
        padding: 10,
        alignSelf: 'center'
    },

})