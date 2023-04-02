import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
    return (
        <View style={styles.Welcome}>
            <Text style={styles.Title}>Welcome to Little&nbsp;Lemon</Text>
            <Text style={styles.Description}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Welcome: {
        flex: 1,
    },
    Title: {
        fontSize: 30,
        padding: 24,
        textAlign: "center",
        color: "#ffffff"
    },
    Description: {
        fontSize: 18,
        padding: 16,
        textAlign: "center",
        color: "#ffffff"
    }
});