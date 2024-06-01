import { StatusBar } from "expo-status-bar";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import Stack from "./components/Stack";
import SPACING from "./assets/styles/spacing";

export default function App() {
    return (
        <View style={styles.container}>
            <Stack containerStyle={styles.content}>
                <View style={styles.header}>
                    <Image
                        source={require("./assets/logo.png")}
                        style={styles.logo}
                    />
                    <View>
                        <Text style={[styles.text, styles.textHeading]}>
                            RN Task
                        </Text>
                    </View>
                </View>
                <Text style={[styles.text, styles.textLarge]}>
                    Hello! Please find a short set of tasks to complete
                    below. Implement your changes in this project directly,
                    including against this file.
                </Text>
                <Stack containerStyle={styles.main}>
                    <Text style={[styles.text, styles.textBold]}>
                        Task 1
                    </Text>
                    <Text style={styles.text}>
                        Build a custom{" "}
                        <Text
                            style={[styles.textBold, styles.textItalic]}
                        >
                            &lt;Stack /&gt;
                        </Text>{" "}
                        component for applying consistent spacing values
                        to child components. The component should allow
                        for easy management of layout and spacing,
                        providing a convenient way to stack multiple
                        elements with consistent spacing. Use it to
                        stack all &lt;View /&gt; elements that include{" "}
                        <Text style={styles.textItalic}>block*</Text>{" "}
                        styles. Ensure that the component is robust and
                        capable of efficiently handling a substantial
                        number of complex child elements.{" "}
                        <Text
                            onPress={() =>
                                Linking.openURL(
                                    "https://mui.com/material-ui/react-stack/"
                                )
                            }
                            style={styles.link}
                        >
                            Here is an example of a stack component.
                        </Text>
                        </Text>
                        <Text style={[styles.text, styles.textBold]}>
                            Task 2
                        </Text>
                        <Text style={styles.text}>
                            This project should be able to run on native
                            devices (e.g. Expo Go), but currently something
                            is broken, please fix it.
                        </Text>
                        {/**
                         * Install the "Expo Go" app on your own mobile device, you should
                         * then be able to run by scanning the QR code from the CLI
                         */}
                    </Stack>
                <Footer />
            </Stack>
            <StatusBar style="auto" />
        </View>
    );
}


const LINE_HEIGHT = 1.4;

const FONT_SIZES = {
    small: 12,
    regular: 16,
    large: 18,
    heading: 24,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        width: "100%",
        maxWidth: 800,
        padding: SPACING.large,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    logo: {
        width: 131,
        height: 44,
    },
    main: {
        backgroundColor: "#f6f6f6",
        borderRadius: 12,
        padding: SPACING.regular,
    },
    text: {
        fontSize: FONT_SIZES.regular,
        lineHeight: FONT_SIZES.regular * LINE_HEIGHT,
        textAlign: "left",
    },
    textSmall: {
        fontSize: FONT_SIZES.small,
        lineHeight: FONT_SIZES.small * LINE_HEIGHT,
    },
    textLarge: {
        fontSize: FONT_SIZES.large,
        lineHeight: FONT_SIZES.large * LINE_HEIGHT,
    },
    textHeading: {
        fontSize: FONT_SIZES.heading,
        lineHeight: FONT_SIZES.heading * LINE_HEIGHT,
        fontWeight: "bold",
    },
    textBold: {
        fontWeight: "bold",
    },
    textItalic: {
        fontStyle: "italic",
    },
    link: {
        color: "blue",
        textDecorationLine: "underline",
    },
});
