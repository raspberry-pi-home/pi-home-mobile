import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import theme from '../styles/theme.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Col} from 'react-native-easy-grid';

const Item = ({item: {label, type, status, pin}}) => {
  const [itemStatus, setItemStatus] = React.useState(status);
  const icon =
    type === 'led' ? (itemStatus ? 'bulb' : 'bulb-outline') : 'toggle';
  console.log(pin, icon, status, itemStatus);
  const onPressDevice = () => {
    fetch('http://192.168.0.106:5000/api/devices/change-status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pin: pin,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setItemStatus(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    setItemStatus(status);
  }, [status]);

  return (
    <View style={styles.item}>
      <Icon
        name={icon}
        size={90}
        color={theme.PRIMARY_COLOR}
        style={'regular'}
        onStartShouldSetResponder={() => onPressDevice()}
      />
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

const Device = ({item}) => {
  return (
    <Col>
      <Item item={item} />
    </Col>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.WHITE_COLOR,
    padding: '20%',
    margin: '5%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.BLACK_COLOR,
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Device;
