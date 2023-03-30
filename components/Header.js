import { StyleSheet, Text, View } from 'react-native';

export default Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    padding: 8
  },
  HeaderText: {
    color: "#ff0000"
  }
});