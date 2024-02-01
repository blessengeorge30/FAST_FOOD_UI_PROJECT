import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { categories, foodItems } from '../constants'
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import FoodCard from '../components/FoodCard';

const Home = () => {
  const navigation = useNavigation();
  const profile = () => {
    navigation.navigate("Profile")
  }

  const [activeCategory, setActiveCategory] = useState('Burger');
  return (
    <View style={styles.container} >
      <ImageBackground blurRadius={35} source={require('../assets/splashbg.jpg')} style={styles.backgroundImage} >
        {/* <SafeAreaView className="flex-1"> */}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/menu.png')} style={{ height: 15, width: 15, tintColor: 'black' }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} onPress={profile} >
            <Image source={require('../assets/bestlin1.png')} style={{ height: 53, width: 53 }} />
          </TouchableOpacity>


        </View>
        <View style={{ marginTop: 20, marginBottom: 15 }}>
          <Text style={{ marginHorizontal: 15, fontSize: 55, color: 'white', fontWeight: '500' }}>Fast and</Text>
          <Text style={{ marginHorizontal: 15, fontSize: 62, color: '#d6d6cd', fontWeight: '500' }}>
            <Text style={{ fontWeight: '700', color: '#bebeb6' }}>Delicious</Text> Food
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput placeholder='Search'

            placeholderTextColor='grey' style={styles.inputtxtbutton}>
          </TextInput>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/adjust.png')} style={{ height: 20, width: 20, tintColor: 'black' }} />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ marginTop: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 28 }}
        >
          {categories.map((category, index) => {
            const isActive = category === activeCategory;
            return (
              <Animatable.View
                delay={index * 120}
                animation="slideInDown" // animation type
                key={index}>
                <TouchableOpacity
                  key={index}
                  style={{ marginRight: 29 }}
                  onPress={() => setActiveCategory(category)}
                >
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: isActive ? 'bold' : 'normal' }}>
                    {category}
                  </Text>
                  {
                    isActive ? (
                      <View className="flex-row justify-center">
                        <Image source={require('../assets/line.png')}
                          style={{ marginHorizontal: 8 }} />
                      </View>
                    ) : null
                  }
                </TouchableOpacity>
              </Animatable.View>
            );
          })}
        </ScrollView>

        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal showsHorizontalScrollIndicator={false}
        >
          {
            foodItems.map((item, index) => <FoodCard item={item} index={index} key={index} />)
          }
        </ScrollView>







        {/* </SafeAreaView> */}

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,

  },
  button: {
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
    marginHorizontal: 15

  },
  button1: {
    height: 55,
    width: 55,
    borderColor: 'white',
    elevation: 55,
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: "row",
    borderRadius: 100,
    justifyContent: 'center',
    marginVertical: 28,
    marginHorizontal: 245

  },
  inputtxtbutton: {
    height: 45,
    width: '70%',
    borderColor: 'white',
    elevation: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 15

  },
})
export default Home;





