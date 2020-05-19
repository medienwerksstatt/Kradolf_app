import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Sbb from '../images/sbb-logo'

export default function StartServices({icon, bgcolor, containerStyles, text, iconColor, textColor, tap, iconImg}) {



    return (
        <TouchableOpacity style={[containerStyles, {backgroundColor: bgcolor}]} onPress={tap}>
            <View style={styles.centerIcon}>
                <Sbb width={'100%'} height={45} />
                <Text style={{textAlign:"center",  fontSize: 16, color:textColor, fontWeight: '700', textTransform: 'uppercase', paddingHorizontal: 20}}>{text}</Text>
            </View> 
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    
    centerIcon: {
        justifyContent: "center",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        
    },
})

