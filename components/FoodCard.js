import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { foodItems } from '../constants';

export default function FoodCard({ item, index }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <Animatable.View
      delay={index * 100}
      animation="slideInRight"
      style={{
        width: 200,
        height: 260,
        marginVertical: 1,
        marginRight: 26,
        padding: 2,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.2)',
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
        <Image source={item.image} style={{ height: 120, width: 120 }} />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 18, paddingVertical: 3 }}>
        <Text style={{ color: 'white', fontSize: 22 }}>{item.name}</Text>
        <Text style={{ color: 'white' }}>{item.ingredients}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 25, color: 'white', marginHorizontal: 25, marginVertical: 12 }}>
          ${item.price}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('FoodDetails')}

        >
          <Image source={require('../assets/shopping.png')} style={{ marginLeft: 20,marginTop:15, height: 35, width: 35 }} />
        </TouchableOpacity>

      </View>
    </Animatable.View>

    </TouchableOpacity>
    
  );
}
