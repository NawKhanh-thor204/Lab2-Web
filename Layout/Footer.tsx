
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface FooterProps {
  timeUpdate : string;
  backgroundColor : string
}

const Footer: React.FC<FooterProps> = ({timeUpdate,backgroundColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style = {{fontWeight: 'bold'}}>Thời gian cập nhật thông tin: {timeUpdate}</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10
  }
})