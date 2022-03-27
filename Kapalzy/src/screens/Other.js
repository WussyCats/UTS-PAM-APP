import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import style from '../assets/OtherStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Other = ({navigation}) => {
  return (
    <View style={style.container}>
      <Image
        source={require('../assets/image/DSC_0598.JPG.jpg')}
        style={style.image}
      />
      <View style={style.container2}>
        <Text style={style.text}>Identitas Akun</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#082f82',
            bottom: '15%',
            right: '1%',
          }}
        />
        <Text style={style.text2}>Muhammad Farisi Z.P.U</Text>
        <Text style={style.text2}>119140201</Text>
        <Text style={style.text2}>PAM RB</Text>
        <Text style={style.text2}>Tugas UTS PAM 2022</Text>
      </View>
    </View>
  );
};

export default Other;
