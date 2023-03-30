import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.App}>
      <StatusBar style="auto" translucent={false} />
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});