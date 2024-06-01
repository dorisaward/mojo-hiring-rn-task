import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import SPACING from "../assets/styles/spacing";


type Props = {
    children: React.ReactNode | React.ReactNode[],
    containerStyle?: StyleProp<ViewStyle>,
}

const Stack = ({ children, containerStyle }: Props) => {
    if (!Array.isArray(children)) {
        return (
            <View style={[styles.content, styles.blockSpacingLarge, containerStyle]}>
                <View style={[styles.block]}>
                    {children}
                </View>
            </View>
        )
    }
    return (
        <View style={[styles.content, containerStyle]}>
            {children.map((child, i) => {
                switch (child) {
                    case i === 0: return (
                        <View style={[styles.block, styles.blockSpacingLarge]} key={i}>
                            {child}
                        </View>
                    );
                    case i === children.length - 1: return (
                        <View style={[styles.block, styles.blockLastItem]} key={i}>
                            {child}
                        </View>
                    );
                    default: return (
                        <View style={styles.block} key={i}>
                            {child}
                        </View>
                    );
                }
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        width: "100%",
        maxWidth: 800,
        padding: SPACING.large,
    },
    block: {
        marginBottom: SPACING.regular,
        alignSelf: "stretch",
    },
    blockSpacingSmall: {
        marginBottom: SPACING.small,
    },
    blockSpacingLarge: {
        marginBottom: SPACING.large,
    },
    blockLastItem: {
        marginBottom: 0,
    },
});

export default Stack;