import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import theme from '../styles/theme.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Col, Row, Grid} from 'react-native-easy-grid';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'First Item',
    type: 'led',
    status: 0,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'Second Item',
    type: 'led',
    status: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    label: 'Third Item',
    type: 'button',
  },
];

const Item = ({label, type, status}) => {
  const icon = type === 'led' ? (status ? 'bulb' : 'bulb-outline') : 'toggle';

  return (
    <View>
      <Grid>
        <Col>
          <View style={styles.item}>
            <Icon
              name={icon}
              size={90}
              color={theme.PRIMARY_COLOR}
              style={'regular'}
            />
            <Text style={styles.title}>{label}</Text>
          </View>
        </Col>
        <Col>
          <View style={styles.item}>
            <Icon
              name={icon}
              size={90}
              color={theme.PRIMARY_COLOR}
              style={'regular'}
            />
            <Text style={styles.title}>{label}</Text>
          </View>
        </Col>
      </Grid>
    </View>
  );
};

const Devices = () => {
  const renderItem = ({item}) => (
    <Item label={item.label} type={item.type} status={item.status} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.BLACK_COLOR,
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Devices;
