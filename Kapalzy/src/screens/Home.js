import React, { useState } from 'react';
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../assets/FormHomeStyle';

const Home = ({navigation}) => {
    const [text, onChangeText] = useState({
        pelabuhan_awal: '',
        perlabuhan_tujuan: '',
        tanggal: '',
        kelas_layanan: '',
        Jam: '',
        orang: '',
    });

    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (
    
        <View style={style.box}>
          <Text style={style.text2}>Kapalzy</Text>
            <View style={style.box2}>
                <Text style={style.text}>Pelabuhan Awal</Text>
                <View style={style.formSingle}>
                    <Ionicons style={style.Icon} name="boat" size={20} color="#082f82"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Pelabuhan Awal"
                        value={text.keberangkatan}
                        onChangeText={clickHandler('keberangkatan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            
            <View style={style.box2}>
                <Text style={style.text}>Pelabuhan Tujuan</Text>
                <View style={style.formSingle}>
                    <Ionicons style={style.Icon} name="boat" size={20} color="#082f82"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Pelabuhan Tujuan"
                        value={text.tujuan}
                        onChangeText={clickHandler('tujuan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={style.box2}>
                <Text style={style.text}>Kelas Layanan</Text>
                <View style={style.formSingle}>
                    <MaterialCommunityIcons style={style.Icon} name="room-service" size={20} color="#082f82"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Pelabuhan Tujuan"
                        value={text.kelas_layanan}
                        onChangeText={clickHandler('kelas_layanan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={style.box2}>
                <Text style={style.text}>Tanggal Masuk Pelabuhan</Text>
                <View style={style.formSingle}>
                    <Ionicons style={style.Icon} name="calendar" size={20} color="#082f82"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Tanggal Masuk Pelabuhan"
                        value={text.tanggal}
                        onChangeText={clickHandler('tanggal')}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={style.box2}>
                <Text style={style.text}>Tanggal Masuk Pelabuhan</Text>
                <View style={style.formSingle}>
                    <Ionicons style={style.Icon} name="time" size={20} color="#082f82"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Jam Masuk Pelabuhan"
                        value={text.jam}
                        onChangeText={clickHandler('jam')}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={style.box2}>
                <View style={style.formSingle}>
                    <FontAwesome style={style.Icon} name="users" size={20} color="#082f82"/>
                    <TextInput
                        style={style.Input}
                        placeholder="Masukkan Jumlah Penumpang"
                        value={text.orang}
                        onChangeText={clickHandler('orang')}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={style.box3}>
                <TouchableOpacity 
                    style={style.button}
                    onPress={() => navigation.navigate('ResultPage', {data: text})}
                >
                    <Text style={style.textButton}>Buat Ticket</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;