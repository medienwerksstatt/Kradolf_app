import React from 'react'
import {Text, StyleSheet, View, SafeAreaView, FlatList, Image} from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function NewsCard({img, rubrik, date, title, press}) {
    return (
       <TouchableOpacity activeOpacity={.8} >
            <View style={[styles.container]}>
                <View style={styles.card}>
                    <View style={styles.newsImg}>
                        <Image source={{uri: img}} style={{height: null, width: null, resizeMode: 'cover', flex:1}} />
                    </View>
                </View>
                    <View style={styles.cardFooter}>
                        <Text style={styles.rubrik}>{rubrik}</Text>
                        <Text style={styles.date}>{date}</Text>
                        <Text style={styles.title}>{title.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
                    </View> 
        </View>
       </TouchableOpacity>
               
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 25
    
    },

    card: {
        height:200,
        width: '95%',
        borderWidth: 0.2,
        borderTopWidth: 0.2,      
    },


    newsImg :{
        height: 200
    },  

    cardFooter: {
        
        width: '95%',
        borderWidth:0.2,
        borderTopWidth:0,
        backgroundColor: 'white'
        
    },

    rubrik: {
        backgroundColor: Colors.news,
        paddingVertical: 3,
        paddingLeft: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    date: {
        paddingLeft: 15,
        marginTop:15,
        fontWeight: 'bold',
        color: 'black'

    },
    title: {
        paddingLeft: 12,
        paddingRight: 18,
        marginTop: 10,
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10
    }


})

