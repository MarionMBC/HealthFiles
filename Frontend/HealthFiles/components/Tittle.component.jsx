import React from 'react';
import {Text} from "react-native";
import styles from "../styles/styles";

const TittleComponent = ({title}) => {
    return (
        <Text style={styles.title}>{title}</Text>
    );
}




export default TittleComponent;