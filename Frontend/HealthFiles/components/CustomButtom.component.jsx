import React from "react";
import { TouchableHighlight, Text } from "react-native";

const CustomButtom = ({ title, onClick }) => {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: "#429adc",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
      }}
      onPress={() => {
       onClick();
      }}
    >
      <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default CustomButtom;
