import { StyleSheet, Text, View } from 'react-native';

export default Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>Little Lemon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    padding: 8,
    width: "100%",
    backgroundColor: "#F4CE14",
  },
  HeaderText: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  }
});