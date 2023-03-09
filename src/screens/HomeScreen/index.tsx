import {View} from 'react-native';
// import React, { useState } from 'react';
import Home from '../../components/Home';

const HomeScreen = ({navigation}: {navigation: any}) => {
  // const [search, setSearch] = useState('')
  return (
    <View>
      <Home navigation={navigation} />
      {/* <Search setSearch={setSearch} navigation={navigation} />
      <Categories search={search} navigation={navigation} /> */}
    </View>
  );
};

export default HomeScreen;
