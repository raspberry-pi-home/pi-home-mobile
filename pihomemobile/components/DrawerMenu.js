import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Button,
} from 'react-native';
import theme from '../styles/theme.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {navigate} from '../RootNavigation';

const menuData = [
  {icon: 'home', name: 'Home', screenName: 'Home', key: 1},
  {icon: 'users', name: 'Devices', screenName: 'Devices', key: 2},
  {icon: 'cog', name: 'Configuration', screenName: 'Configuration', key: 3},
];

class DrawerMenu extends Component {
  render() {
    const {drawerRef} = this.props;
    const closeDrawer = () => {
      drawerRef?.current?.closeDrawer();
    };

    return (
      <>
        <View style={styles.containerImage}>
          <Image source={require('../resources/images/icon-128x128.png')} />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuData}
            renderItem={({item}) => (
              <DrawerItem
                screenName={item.screenName}
                icon={item.icon}
                name={item.name}
                key={item.key}
                closeDrawer={closeDrawer}
              />
            )}
          />
        </View>
      </>
    );
  }
}

const DrawerItem = ({icon, name, screenName, closeDrawer}) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => {
      navigate(`${screenName}`, {isStatusBarHidden: false});
      closeDrawer();
    }}>
    <Icon
      name={icon}
      size={25}
      color={theme.PRIMARY_COLOR}
      style={{margin: 15}}
    />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.WHITE_COLOR,
    paddingTop: 30,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: theme.WHITE_COLOR,
  },
  menuItem: {
    flexDirection: 'row',
  },
  menuItemText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: '300',
    margin: 15,
  },
  menuItem: {
    flexDirection: 'row',
  },
});

export default DrawerMenu;
