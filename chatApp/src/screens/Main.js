import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Users from '../tabs/Users';
import Setting from '../tabs/Setting';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Users /> : <Setting />}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(0)}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/Gauravbhadauria/rnfirebasechatapp/main/src/images/users.png',
            }}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 0 ? 'white' : 'gray'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(0)}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/Gauravbhadauria/rnfirebasechatapp/main/src/images/setting.png',
            }}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});
