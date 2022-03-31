import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
const TodoItem = ({ item, Delete }) => {
	return (
		<View style={styles.itemCard}>
			<Text style={styles.text}>{item.text}</Text>
			<TouchableOpacity onPress={() => Delete(item.id)}>
				<MaterialIcon name="delete" color="red" size={30} />
			</TouchableOpacity>
		</View>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	itemCard: {
		padding: 16,
		marginVertical: 10,
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: "solid",
		borderRadius: 10,
		elevation: 1,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		flex: 2,
		fontSize: 18,
	},
});
