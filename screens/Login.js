import { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, Text, StyleSheet, TextInput, Platform, Alert, Pressable } from "react-native";

export default function Welcome() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [thoughts, setThoughts] = useState("");

    return (
        <ScrollView style={styles.Welcome}>
            <Text style={styles.Title}>Welcome to Little&nbsp;Lemon</Text>
            <Text style={styles.Description}>Log in to continue</Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "position"}
            >
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.NameInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email Address"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.NameInput}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Your Password"
                        secureTextEntry={true}
                        keyboardType="default"
                    />
                    <Pressable
                        style={styles.Button}
                        onPress={() => {
                            Alert.alert("Logging in...");
                        }}>
                        <Text style={styles.ButtonText}>Log In</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
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
    },
    InputContainer: {
        gap: 16
    },
    NameInput: {
        fontSize: 18,
        lineHeight: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    Button: {
        width: "70%",
        alignSelf: "center",
        padding: 10,
        borderRadius: 10,
        marginTop: 16,
        backgroundColor: "#F4CE14",
    },
    ButtonText: {
        fontSize: 26,
        textAlign: "center",
        color: "#ffffff",
    }
});