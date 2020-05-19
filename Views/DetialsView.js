import React from 'react'
import {Text, SafeAreaView, View, ScrollView, Image , StyleSheet} from 'react-native'
import Colors from '../Colors';
import HTMLView from 'react-native-htmlview'


export default function DetialsView({route}) {

    const { content, img, rubrik, name, date } = route.params;

    console.log(content)

    

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{height: 200,  width: '100%', backgroundColor: 'red'}}>
                    <Image source={{uri: img}} style={{height: 200}} />
                </View>
                <Text style={[styles.rubrik, styles.contentContainer]}>{rubrik}</Text>
               <View style={styles.contentContainer}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.title}>{name}</Text>

                <HTMLView
                    value={content.replace(/(\r\n|\n|\r)/gm, "")}
                    lineBreak={'\n'}					
                    stylesheet={htmlstyles}	
                    paragraphBreak={null}
                    onLinkPress={(url) => console.log('clicked link: ', url)}
                />
               </View>


                
            </ScrollView>
        </SafeAreaView>
    )
}


var htmlstyles =StyleSheet.create({
    a: {
            fontWeight: '300',
            fontSize:15,
            color: '#da2a39',
            borderBottomWidth: 0.2,
            textDecorationLine: "underline",
            marginBottom: 0
    },

    strong:{
    fontWeight:'bold'
    },


    p: {
       marginTop: 20,
       lineHeight: 20
    }
    


})

const styles = StyleSheet.create({

    rubrik: {
        backgroundColor: Colors.news,
        color: 'white',
        padding: 6,
        fontWeight: 'bold',
        fontSize: 15
    },

    contentContainer: {
        paddingHorizontal: 12
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

   

    date: {
        fontWeight: 'bold',
        paddingTop: 25
    }


})