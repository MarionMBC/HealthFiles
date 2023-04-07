import React from 'react';
import { View } from 'react-native';
import { AirbnbRating } from '@rneui/themed';
import styles from '../styles/styles';


const Ratings =()=>{
  return (
    <View style={styles.rating}>
     
          <AirbnbRating />
      
    </View>
  );
  };

  export default Ratings;