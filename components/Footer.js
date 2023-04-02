import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.Footer}>
            <Text style={styles.FooterText}>All rights reserved by Little Lemon, 2023</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Footer: {
        width: "100%",
        marginTop: "auto",
        backgroundColor: "#F4CE14",
    },
    FooterText: {
        fontWeight: "500",
        textAlign: "center",
    }
});