import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { UserType } from './Main'

interface BodyProps {
  onUpdateInfor: (user: UserType) => void;
  onClickChangeBgFooter: () => void;
}
const Body: React.FC<BodyProps> = ({ onUpdateInfor, onClickChangeBgFooter }) => {

  const [name, setname] = useState('')
  const [linkImage, setlinkImage] = useState('')

  const handleChangeInfor = () => {
    if (name.length > 0 && linkImage.length > 0) {
      onUpdateInfor({ name, avatar: linkImage });
      Alert.alert('Thêm thành công')
    } else {
      Alert.alert('Không được để trống')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Nhập tên mới' onChangeText={(txt) => {
        setname(txt)
      }} />

      <TextInput style={styles.input} placeholder='Dán địa chỉ avatar mới' onChangeText={(txt) => {
        setlinkImage(txt)
      }} />

      <View style = {{alignItems: 'center', gap: 10}}>
      <TouchableOpacity style = {styles.btn} onPress={() => handleChangeInfor()}>
        <Text>CẬP NHẬT THÔNG TIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.btn} onPress={() => onClickChangeBgFooter()}>
        <Text>ĐỔI MÀU FOOTER</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '83%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    padding: 20, 
    borderWidth: 1, 
    borderRadius: 10,
    margin: 12
  },
  btn: {
    padding: 10,
    backgroundColor: '#0066FF',
    borderRadius: 10
  }
})