import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Device from './Device';
import {useFocusEffect} from '@react-navigation/native';

export default () => {
  let [devices, setDevices] = React.useState('');
  const fetchData = React.useCallback(() => {
    fetch('http://192.168.0.106:5000/api/devices?type=led')
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        setDevices(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [fetchData]),
  );

  console.log(devices);
  return (
    <SafeAreaView>
      <FlatList
        data={devices}
        renderItem={({item}) => <Device item={item} />}
        keyExtractor={item => item.pin}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
