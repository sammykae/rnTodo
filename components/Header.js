import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>TODO APP </Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		height: 70,
		backgroundColor: "coral",
		paddingTop: 20,
	},
	text: {
		fontSize: 20,
		color: "#ffffff",
		textAlign: "center",
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
