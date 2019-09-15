import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import DrawerNavigation from './src/components/navigation/DrawerNavigation';
import store from './src/store/store';
import {getToken} from './src/components/accounts/helpers';

const App = () => {
  useEffect(() => store.dispatch(getToken()), []);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <DrawerNavigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    marginTop: 0,
  },
});

export default App;
