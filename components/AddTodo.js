import { StyleSheet, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const AddTodo = ({ Submit }) => {
	const [text, setText] = useState("");
	const changeHandler = (val) => {
		setText(val);
	};
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="Add New Todo"
				onChangeText={changeHandler}
				value={text}
			/>
			<Button
				onPress={() => {
					Submit(text);
					setText("");
				}}
				title="Add Todo"
				color={"coral"}
			/>
		</View>
	);
};

export default AddTodo;

const styles = StyleSheet.create({
	input: {
		paddingHorizontal: 8,
		marginBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
});
