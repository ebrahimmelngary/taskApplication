import React, { useState, useEffect, useCallback } from 'react'; // Hooks addition
// built in components 
import { FlatList, ScrollView, RefreshControl, View } from 'react-native';
// high order component connect redux with UI screen
import { connect } from 'react-redux';
// get actions function 
import { bindActionCreators } from 'redux';
// action functions use it as a (props)
import { Fetch_Home_Data } from '../../redux/actions/Home'
// global components
import { AppText } from '../../components';
// common colors
import { COLORS, ICONS } from '../../common';
import styles from './styles';
//screen components
import HeaderCard from './HeaderCard';
import {HomeCard} from './HomeCard';
const Home = ({ navigation, Fetch_Home_Data, data }) => {
  // Hooks state area
  const [refreshing, setRefreshing] = useState(false)
  // get data from redux action
  useEffect(() => {
    Fetch_Home_Data()

  }, [])

  // refershing time
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  // on refresh func 
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, [refreshing])
  console.log('sss', data)
  return (
    <View style={styles.container} >
      <HeaderCard title={'Brookly, NY'} disabled />
      <View style={styles.headerCards}>
        <HeaderCard style={styles.card} title={'0 - 2500$'} />
        <HeaderCard style={styles.card} title={'1bt'} iconName={ICONS.downArrow} />
        <HeaderCard style={styles.card} title={'1bt'} iconName={ICONS.downArrow} />
      </View>
      <FlatList
        data={data}
        refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
        renderItem={({ item }) => <HomeCard item={item} onPress={() => navigation.navigate('DetailsScreen', { item })} />}
        keyExtractor={(item, index) => `item--${index}`}

      />
    </View>
  );
}
const mapStateToProps = state => {
  return {
    // add reducer state here
    data: state.Home.homeData
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    // add action fun here
    Fetch_Home_Data
  }, dispatch)
}

// Header name and styles
Home.navigationOptions = () => {
  return {
    // header name
    title: "Home"
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

