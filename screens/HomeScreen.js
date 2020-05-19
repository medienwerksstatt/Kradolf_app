import React, { Component } from 'react'
import {SafeAreaView, StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions, TouchableHighlight, Alert, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Logo from '../images/Logo.svg'
import Waves from '../images/Welle-klein-oben_NEU.svg'
import Colors from '../Colors';
import WavesBottom from '../images/Welle-klein-unten_NEU.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faBell, faAmbulance, faArrowDown, faCompressArrowsAlt, faNewspaper, faGavel, faPhotoVideo, faPhoneSquareAlt, faEnvelope, faTrain } from '@fortawesome/free-solid-svg-icons'
import StartServices from '../components/StartServices'
import StartServicesSbb from '../components/StartServicesSbb'
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './NewsScreen';




const {height, Width} = Dimensions.get('window');
export default function HomeScreen({navigation}) {
    
        const image = require('../images/Splashscreen.jpg');
    return (

        <View styles={styles.container}>
           <ImageBackground source={image} style={{width: '100%', height: '100%'}}>

                <View style={styles.headerLogo}>
                        <Waves style={styles.waves} />
                        <Logo style={styles.logo} />
                </View>

                <View style={styles.services}>
                    <StartServices bgcolor={Colors.news} containerStyles={styles.servicesNews} icon={faBell} textColor={'white'} iconColor={'white'} text={'News aus der Gemeinde'} tap={()=> navigation.navigate('News')}  />
                    <StartServices bgcolor={Colors.sbb} containerStyles={styles.servicesNews} icon={faTrain} textColor={'white'} iconColor={'white'} text={'Sbb Tageskarte'} tap={()=> navigation.navigate('Sbb')} />
                    <StartServices bgcolor={Colors.events} containerStyles={styles.servicesNews} icon={faCompressArrowsAlt} textColor={'white'} iconColor={'white'} text={'Veranstaltungen'} tap={()=> navigation.navigate('Veranstaltungen')} />
                    <StartServices bgcolor={Colors.mitteilung} containerStyles={styles.servicesNews} icon={faNewspaper} textColor={'white'} iconColor={'white'} text={'MitteilunngsBlat'} />
                    <StartServices bgcolor={Colors.frist} containerStyles={styles.servicesNews} icon={faGavel} textColor={'black'} text={'Fristverlängerung'} />
                    <StartServices bgcolor={Colors.fotos} containerStyles={styles.servicesNews} iconColor={'white'} textColor={'white'} icon={faPhotoVideo} text={'Fotos'} />     
                </View>

                <View style={styles.containerFooter}>
                        <View style={{ alignItems: 'center', justifyContent:'center', flexDirection: 'row', zIndex: 1}}>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} size={25} style={{paddingHorizontal: 20}} />
                            <FontAwesomeIcon icon={faEnvelope} size={25} style={{paddingHorizontal: 20}} />
                        </View>
                        {/* <WavesBottom style={styles.WavesFooter}/> */}
                </View>
            </ImageBackground>
        </View>


    )
    
}




const styles = StyleSheet.create({

    headerLogo: {
        height: '30%',
        width: '100%',
        opacity: 0.9, 
        marginTop:- 75
    },  
  

    container: {
        flex: 1,
    },

    services: {
        flex:1,
        // justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
        
    },

   
    servicesNews: {
        height:'15%',
        width: '70%',
        alignItems: "center",
        justifyContent: "center"
        
    },

   
    WavesFooter: {
       width: '100%',
       height: 300,
       opacity: .9,
       marginTop:-100
    },

    containerFooter: {
        position: 'relative',
        bottom: -140
        // backgroundColor: 'yellow'
    },
   

    waves: {
        marginTop: 0,
        position: "absolute",
        resizeMode: 'cover'
        
        
    },

    logo: {
       
        height: 66,
        marginTop: 95
        
    }

    
})




