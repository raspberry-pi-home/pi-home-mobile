import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import Device from './Device';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default () => {
  let [devices, setDevices] = React.useState('');
  const fetchData = React.useCallback(() => {
    fetch('http://192.168.0.106:5000/api/devices')
      .then(response => response.json())
      .then(response => {
        setDevices(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3f3f3'}}>
      <FlatList
        data={devices}
        renderItem={({item}) => <Device item={item} />}
        keyExtractor={item => item.pin}
        numColumns={2}
      />
      {/* Rest of the app comes ABOVE the action button component !*/}
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log('notes tapped!')}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
