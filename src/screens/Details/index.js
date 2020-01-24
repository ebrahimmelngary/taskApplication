import React, { useState, useEffect, useCallback } from 'react'; // Hooks addition
// built in components 
import { View, Text, FlatList, ScrollView, RefreshControl, Image } from 'react-native';
// high order component connect redux with UI screen
import { connect } from 'react-redux';
// get actions function 
import { bindActionCreators } from 'redux';
// global components
import { AppText, HomeCard, AppIcon, PressedIcon } from '../../components';
// common colors
import { COLORS, ICONS } from '../../common';
// screen components
import { DetailsCard } from './DetailsCard';
import styles from './styles';
const Details = ({ navigation }) => {
  // data from home screen
  const item = navigation.getParam('item')

  return (
    <View style={styles.container}>
      <DetailsCard item={item} navigation={navigation} />
    </View>
  );
}
const mapStateToProps = state => {
  return {
    // add reducer state here
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    // add action fun here

  }, dispatch)
}

// Header name and styles
Details.navigationOptions = () => {
  return {
    // header name
    header: null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

