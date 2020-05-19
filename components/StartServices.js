import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Sbb from '../images/SBB.svg'

export default function StartServices({icon, bgcolor, containerStyles, text, iconColor, textColor, tap, iconImg}) {



    return (
        <TouchableOpacity activeOpacity={.8} style={[containerStyles, {backgroundColor: bgcolor}]} onPress={tap}>
            <View style={styles.centerIcon}>
                <FontAwesomeIcon icon={icon} style={{textAlign: 'center', color: iconColor}} size={25} />
                
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

