import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Color,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Jadwal} from '../database/db';
import style from '../assets/OrderStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Order = ({route, navigation}) => {
  const {data} = route.params;

  const OnSubmit = () => {
    navigation.navigate('OrderDetails', {
      data: data,
    });
  };

  const calldata = () => {
    let checkPelabuhan = Jadwal.filter(x => {
      return (
        x.pelabuhan_awal == data.pelabuhan_awal &&
        x.pelabuhan_tujuan == data.pelabuhan_tujuan &&
        x.kelas == data.kelas
      );
    });

    if (checkPelabuhan.length > 0) {
      return checkPelabuhan.map((printJadwal, i) => {
        return (
          <View key={i} style={style.container}>
            <Text style={style.text}>Kapalzy</Text>
            <Text style={style.text2}>
              Kuota tersedia ({printJadwal.kuota}){' '}
            </Text>
            <Text style={style.text3}>Rincian Tiket</Text>
            <View style={style.container2}>
              <Text style={style.text4}>{printJadwal.pelabuhan_awal}</Text>
              <FontAwesome5
                style={style.Icon}
                name="arrow-right"
                size={20}
                color="#082f82"
              />
              <Text style={style.text5}>{printJadwal.pelabuhan_tujuan}</Text>
              <Text style={style.text6}>Jadwal Masuk Pelabuhan</Text>
              <Text style={style.text7}>{data.tanggal}</Text>
              <Text style={style.text7}>{data.Jam} WIB</Text>
              <Text style={style.text6}>Layanan</Text>
              <Text style={style.text7}>{printJadwal.kelas}</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#082f82',
                  bottom: '30%',
                  right: '1%',
                }}
              />
              <Text style={style.text8}>Dewasa x 1</Text>
              <Text style={style.text9}>{printJadwal.harga}</Text>
            </View>
            <Text style={style.text10}>Total</Text>
            <Text style={style.text11}>{printJadwal.harga}</Text>
            <View style={style.container3}>
              <TouchableOpacity style={style.button} 
              onPress={OnSubmit}>
                <Text style={style.textButton}>Konfirmasi Tiket</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      });
    }
  };

  return <View>{calldata()}</View>;
};

export default Order;
