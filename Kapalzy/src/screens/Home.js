import React, {useState} from 'react';
import moment from 'moment';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  View,
  Text,
  StyleSheet,
  Colors,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../assets/FormHomeStyle';

const Home = ({navigation}) => {
  const [text, onChangeText] = useState({
    pelabuhan_awal: '',
    pelabuhan_tujuan: '',
    tanggal: '',
    kelas: '',
    Jam: '',
  });

  const clickHandler = textInput => {
    return value => {
      onChangeText({...text, [textInput]: value});
    };
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showtime, setShowTime] = useState(false);
  const [time, setTime] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    onChangeText({
      ...text,
      tanggal: moment(selectedDate).format('MMMM D, YYYY'),
    });
  };

  const onChangetime = (event, selectedTime) => {
    const currentDate = selectedTime;
    setShowTime(false);
    setTime(currentDate);
    onChangeText({...text, Jam: onlyGetHoursAndMinutes(selectedTime)});
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showModeTime = currentMode => {
    setShowTime(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showModeTime('time');
  };

  const onlyGetHoursAndMinutes = date => {
    return date.getHours() + ':' + date.getMinutes();
  };

  const OnSubmit = () => {
    navigation.navigate('Order', {
      data: text,
    });
  };

  return (
    <View style={style.box}>
      <Text style={style.text2}>Kapalzy</Text>
      <View style={style.box2}>
        <Text style={style.text}>Pelabuhan Awal</Text>
        <View style={style.formSingle}>
          <Ionicons style={style.Icon} name="boat" size={20} color="#082f82" />
          <Picker
            selectedValue={text.pelabuhan_awal}
            style={{width: '80%', color: '#000000'}}
            onValueChange={itemValue =>
              onChangeText({...text, pelabuhan_awal: itemValue})
            }>
            <Picker.Item label="Pilih Pelabuhan" value="0" />
            <Picker.Item label="Tanjung Priok" value="Tanjung Priok" />
            <Picker.Item label="Teluk Betung" value="Teluk Betung" />
            <Picker.Item label="Tanjung Perak" value="Tanjung Perak" />
            <Picker.Item label="Air Buaya" value="Air Buaya" />
          </Picker>
        </View>
      </View>

      <View style={style.box2}>
        <Text style={style.text}>Pelabuhan Tujuan</Text>
        <View style={style.formSingle}>
          <Ionicons style={style.Icon} name="boat" size={20} color="#082f82" />
          <Picker
            selectedValue={text.pelabuhan_tujuan}
            style={{width: '80%', color: '#000000'}}
            onValueChange={itemValue =>
              onChangeText({...text, pelabuhan_tujuan: itemValue})
            }>
            <Picker.Item label="Pilih Pelabuhan" value="0" />
            <Picker.Item label="Tanjung Priok" value="Tanjung Priok" />
            <Picker.Item label="Teluk Betung" value="Teluk Betung" />
            <Picker.Item label="Tanjung Perak" value="Tanjung Perak" />
            <Picker.Item label="Air Buaya" value="Air Buaya" />
          </Picker>
        </View>
      </View>

      <View style={style.box2}>
        <Text style={style.text}>Kelas Layanan</Text>
        <View style={style.formSingle}>
          <MaterialCommunityIcons
            style={style.Icon}
            name="room-service"
            size={20}
            color="#082f82"
          />
          <Picker
            selectedValue={text.kelas}
            style={{width: '80%', color: '#000000'}}
            onValueChange={itemValue =>
              onChangeText({...text, kelas: itemValue})
            }>
            <Picker.Item label="Pilih Layanan" value="0" />
            <Picker.Item label="Ekonomi" value="Ekonomi" />
            <Picker.Item label="Eksekutif" value="Eksekutif" />
          </Picker>
        </View>
      </View>

      <View style={style.box2}>
        <Text style={style.text}>Tanggal Masuk Pelabuhan</Text>
        <View style={style.formSingle}>
          <Ionicons
            style={style.Icon2}
            name="calendar"
            size={20}
            color="#082f82"
          />
          <Text style={{paddingRight: 120}} onPress={showDatepicker}>
            {moment(date).format('MMMM D, YYYY')}
          </Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>

      <View style={style.box2}>
        <Text style={style.text}>Waktu Masuk Pelabuhan</Text>
        <View style={style.formSingle}>
          <Ionicons style={style.Icon3} name="time" size={20} color="#082f82" />
          <Text style={{paddingRight: 185}} onPress={showTimepicker}>
            {onlyGetHoursAndMinutes(time)}
          </Text>
          {showtime && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChangetime}
            />
          )}
        </View>
      </View>

      <View style={style.box2}>
        <View style={style.formSingle2}>
          <Text style={style.text4}>Dewasa</Text>
          <Text style={style.text3}>1 Orang</Text>
        </View>
      </View>

      <View style={style.box3}>
        <TouchableOpacity style={style.button} onPress={OnSubmit}>
          <Text style={style.textButton}>Bikin Tiket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
