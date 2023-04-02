import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './screens/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.App}>
      <StatusBar style="auto" translucent={false} />
      <Header />
      <Login />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#495E57',
    alignItems: 'center'
  }
});