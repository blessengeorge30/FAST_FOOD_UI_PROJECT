import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { foodItems } from '../constants';

export default function FoodDetailsScreen(props) {

  let currentPrice = 13.42;



  const [Value, setValue] = useState(1);

  const add = () => {
    setValue(Value + 1);
  }

  const sub = () => {
    if (Value > 0) {
      setValue(Value - 1);
    }
  }
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image
        style={{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          height: '48%',
          width: '100%',
          position: 'absolute',
        }}
        source={require('../assets/splashbg.jpg')}
        blurRadius={30}  />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
          <Image source={require('../assets/back.png')} style={{ height: 25, width: 25, marginVertical: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Image source={require('../assets/heart.png')} style={{ height: 20, width: 20, marginVertical: 25 }} />
        </TouchableOpacity>
      </View>
      <View style={{ top: -15, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ height: 200, width: 200 }} source={require('../assets/pizza.png')} />
        <Text style={{ fontSize: 35, fontWeight: '500', color: 'white', marginRight: 15 }}>
          Cheezy Pizza
        </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 30 }}>
          <View style={{ borderRadius: 12, backgroundColor: '#eeeee4', flexDirection: 'row', elevation: 4 }}>
            <TouchableOpacity style={styles.button} onPress={sub}>
              <Image source={require('../assets/minus.png')} style={{ height: 15, width: 15 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, color: 'black', marginVertical: 6 }}>{Value}</Text>
            <TouchableOpacity style={styles.button2} onPress={add}>
              <Image source={require('../assets/plus.png')} style={{ height: 15, width: 15 }} />
            </TouchableOpacity>
          </View>

        </View>


        <View style={{ flexDirection: 'row' }}>
          <Animatable.View delay={80} animation="slideInDown">
            <Image source={require('../assets/calories.png')} style={{ height: 25, width: 25, marginHorizontal: 42 }} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginRight: 5, marginHorizontal: 35, marginVertical: 10 }}>130 cal</Text>
          </Animatable.View>
          <Animatable.View delay={180} animation="slideInDown">
            <Image source={require('../assets//clock.png')} style={{ height: 25, width: 25, marginHorizontal: 42 }} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginRight: 5, marginHorizontal: 28, marginVertical: 10 }}>15-20 min</Text>
          </Animatable.View>
          <Animatable.View delay={280} animation="slideInDown">
            <Image source={require('../assets/chat.png')} style={{ height: 25, width: 25, marginHorizontal: 42 }} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginRight: 5, marginHorizontal: 30, marginVertical: 10 }}>4.6 votes</Text>
          </Animatable.View>
          <Animatable.View delay={380} animation="slideInDown">
            <Image source={require('../assets/weight.png')} style={{ height: 25, width: 25, marginHorizontal: 38 }} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginRight: 5, marginHorizontal: 35, marginVertical: 10 }}>350 g</Text>
          </Animatable.View>


        </View>

        <View style={{ marginRight: 200, marginTop: 22 }}>
          <Animatable.Text
            animation="slideInUp"
            style={{ fontSize: 38,marginBottom: 10,marginLeft:16, fontWeight: 'bold', color: 'black' }}>
            Description
          </Animatable.Text>
        </View>
        <View>
          <Animatable.Text
            delay={100} animation="slideInUp"
            style={{ fontSize: 16, color: 'grey', marginHorizontal: 15, marginTop: 5 }}>A mouthwatering pizza is a culinary wonder that delights your senses and satisfies your hunger. The crispy crust is the foundation of this masterpiece, topped with a tangy tomato sauce that perfectly balances the flavors.</Animatable.Text>
        </View>
      </View>

      {/* add to cart button */}
      <View style={{ marginHorizontal: 15, flexDirection: 'row', }}>
        <Animatable.Text delay={100} animation="slideInLeft" style={{ fontSize: 35, color: 'black', marginHorizontal: 5, marginTop: 50, fontWeight: 600, flex: 2 }}>
          ${currentPrice * Value}
        </Animatable.Text>
        <Animatable.View delay={100} animation="slideInRight">
          <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 10, marginHorizontal: 15, marginTop: 55, height: 50, width: 200, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 300 }}>Add to Cart</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 55,
    borderColor: 'white',
    elevation: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    // paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 1,
    marginRight: 20,
  },
  button1: {
    height: 45,
    width: 55,
    borderColor: 'white',
    elevation: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 235,
  },
  button2: {
    height: 45,
    width: 55,
    borderColor: 'white',
    elevation: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    // paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 1,
    marginLeft: 20,

  },
  button3: {
    height: 45,
    width: 55,
    borderColor: 'white',
    elevation: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 28,
    marginHorizontal: 20

  },
});
