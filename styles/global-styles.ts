import { StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
    },

    title: {
        fontSize: 35,
        color: Colors.text,
        fontFamily: "SpaceMono",
    },

    CalculatorContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: 50,
    },

    MainResult: {
        fontSize: 70,
        color: Colors.textSecondary,
        fontFamily: "SpaceMono",
        fontWeight: "400",
    },

    SubResult: {
        fontSize: 40,
        color: Colors.textTertiary,
        fontFamily: "SpaceMono",
        textAlign: "right",
        fontWeight: "300",
    },

    row: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    Button: {
        marginHorizontal: 10,
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.buttonBackground,
    },

    ButtonText: {
        fontSize: 30,
        color: Colors.text,
        textAlign: "center",
        padding: 6,
        fontFamily: "SpaceMono",
    },
});
