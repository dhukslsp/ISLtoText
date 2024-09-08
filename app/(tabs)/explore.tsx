import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TextInput, Button, View, Text } from 'react-native';
import React from 'react';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

export default function TabTwoScreen() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const onPressLearnMore = () => {
    console.log("The button got pressed");
  }
  return (
    <View style = {{flex:1}}>
      <View style={styles.v1}>
        <Text>djkh</Text>
      </View>
      <View style = {styles.v2}>
        <ThemedText style = {{textAlign:'center',marginTop:20}} type = "defaultSemiBold">Translaion </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  v1:{
    flex:0.4
  },
  v2:{
    flex:0.6,
    backgroundColor:"D0D0D0"
  }
});
