import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const colors = ['white', 'gray', 'red', 'yellow', 'blue', 'orange', 'green'];

export type UserType = {
  name: string;
  avatar: string;
}

const Main = () => {

  const [user, setuser] = useState<UserType>({
    name: 'Chưa có tên',
    avatar: 'https://i.pinimg.com/564x/5f/9a/0d/5f9a0d287a0a9c4b2869a83cd8bef9c5.jpg'
  })

  const [LastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa nhập thông tin');

  const [FooterColor, setFooterColor] = useState(colors[0]);

  // Cập nhật thông tin cho tài khoản
  const handleUpdateInfor = useCallback((_user: UserType) => {
    setuser(_user);
  }, []);

  // hàm để ramdom màu cho footer
  const handleRandomColor = useCallback(() => {
    const numberRan = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRan]);
  }, []);

  // Mỗi lần thông user thay đôi, sẽ cập nhật lại thời gian sửa đổi
  useEffect(() => {
    const currentDate = new Date();
    const datetime =
      currentDate.getDate() +
      '/' + 
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear() +
      ' ' +
      currentDate.getHours() +
      ':' +
      currentDate.getMinutes() +
      ':' +
      currentDate.getSeconds();
    
    setLastTimeUpdate(datetime);
  }, [user]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0.2)'}/>
      <Header user={user} />
      <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor}/>
      <Footer timeUpdate = {LastTimeUpdate} 
      backgroundColor = {FooterColor}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9900FF',
    padding: 20,
    gap: 10
  }
})