import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from "react-native";
// import Icon from 'react-native-vector-icons/AntDesign';   
// import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";


const Profile = () => {
    // const renderItem = (item) => {
    //     return (

    //       <View style={{ backgroundColor: 'white', flex: 1 }}>
    //         <View>
    //           <View style={{ flexDirection: 'row', }}>
    //             <Image style={{ height: 30, width: 30, marginLeft: 30 ,marginVertical :15,}} source={item.image} />

    //             <Text style={{color: 'black',fontWeight: 'bold',fontSize:18,marginLeft:15,marginTop:15 }}>{item.name}</Text>
    //           </View>
    //           <Text style={{color: 'grey', fontWeight: 'bold',fontSize:15,position:'absolute',marginTop:34,marginLeft:75 }}>{item.name1}</Text>  

    //           <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'white', marginHorizontal: 10 }}></View>
    //         </View>
    //       </View>
    //     );

    //   };
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/splashbg.jpg')}
                style={styles.backgroundImage}>
                <View style={{ flexDirection: 'row', marginTop: 50, marginBottom: 70 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../assets/bestlin1.png')}
                            style={styles.button1}>
                        </Image>
                    </View>
                    {/* <View style={{marginTop:24,marginRight:40}}>
        <Text style={{fontSize: 29,fontWeight: 'bold',color: 'white'}}>BLESSEN GEORGE</Text>
        <Text style={{ fontSize:18,color: 'grey'}}>+91 8137066525</Text>
        <Text style={{ fontSize:18,color: 'grey'}}>blessen.george30@gmail.com</Text>
        </View> */}


                </View>
            </ImageBackground>
            <View style={{ height: 800, backgroundColor: 'white', borderRadius: 5, }}>
                <View style={styles.headercard}>
                    {/* <View style={{ flexDirection: 'row'}}>
        <Text style={styles.cardtext}>Setup payment methods 1/3</Text>
        <View style={{alignSelf:'flex-end',}}>
        <Icon  name="arrowright" size={24} color="white "/>

        </View>
        </View> */}
                    {/* <View style={{ flexDirection: 'row'}}>
            <Image source={require('../assets/applepay.png')}
                    style={styles.bank}>
                </Image>
                <Image source={require('../assets/binancecard.png')}
                    style={styles.bank1}>
                </Image>
                <Image source={require('../assets/google1.png')}
                    style={styles.bank2}>
                </Image> 
               
                </View> */}
                    {/* <View style={{ flexDirection: 'row'}}>
                <Text style={{fontSize:14,marginLeft:46,marginTop:15,color:'white'}}>Apple pay</Text> 
                <Text style={{marginLeft:60,marginTop:15,color:'white'}}>Binance Pay</Text> 
                <Text style={{marginLeft:48,marginTop:15,color:'white'}}>Google pay</Text> 
            </View> */}

                </View>
                <View>
                    {/* <ScrollView>
            {
                        PRODUCT_PROFILEITEMS?.map((item) => {
                            return renderItem(item)
                        })
                    }
            </ScrollView> */}
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'black',
        flex: 1
    },
    logo: {
        height: 125,
        width: 125,
        marginLeft: 22

    },
    backgroundImage: {

    },
    headercard: {
        borderWidth: 0,
        width: '89%',
        height: 400,
        backgroundColor: '#282928',
        marginTop: -55,
        marginHorizontal: 20,
        borderRadius: 30,
        elevation: 15


    },
    cardtext: {
        marginTop: 12,
        marginLeft: 24,
        color: 'white',
        fontSize: 18,
        marginRight: 110
    },
    button1: {
        height: 155,
        width: 155,
        borderColor: 'white',
        elevation: 55,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 100,
        justifyContent: 'center',
        marginVertical: 40,
        marginHorizontal: 135

    },
    bank: {
        height: 65,
        width: 65,
        marginTop: 30,
        marginLeft: 40,

    },
    bank1: {
        height: 45,
        width: 45,
        marginTop: 38,
        marginLeft: 60,

    },
    bank2: {
        height: 50,
        width: 50,
        marginTop: 38,
        marginLeft: 58,

    },


})
export default Profile;
