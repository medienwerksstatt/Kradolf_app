import React, { Component } from 'react'
import  Colors  from '../Colors'
import NewsCard from '../components/NewsCard'
import Logo from '../images/Logo.svg'
import Waves from '../images/Welle-klein-oben_NEU.svg'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {View, StyleSheet, Text, TouchableOpacity, Alert, SafeAreaView, FlatList} from 'react-native'
import getDataFromApi from '../api/index'





export default class NewsScreen extends Component {
    
    state = {

        dataSource: [],
        isLoading: false
    
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch("http://kradolf-schoenenberg.ch/wp-json/wp/v2/news?_embed")
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
            dataSource: responseJson
            });


        })
        .catch(error=>console.log(error)) //to catch the errors if any
    }

     getDateString = (date) => {
        let jetzt = new Date(date),
            tag = jetzt.getDate(),
            tagZahl = jetzt.getDay(),
            wochentag = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ],
            monatZahl = jetzt.getMonth(monat),
            monat = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September',    
                    'Oktober','November','Dezember'],

           
            jahr = jetzt.getFullYear();

            let postingDatum;
            
            return postingDatum = `${tag}. ${monat[monatZahl]} ${jahr}` 

    }
    
    
    render() {
        

        return (
            <SafeAreaView style={{ flex: 1}}>
            {this.state.dataSource.length > 0 ? (
              <FlatList
                keyExtractor={item => item.id.toString()}
                data={this.state.dataSource}
                renderItem={({ item }) => (

                    
                    <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate('Details', {
                      name: item.title.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
                      content: item.content.rendered,
                      img: item._embedded['wp:featuredmedia']['0'].source_url,
                      rubrik: item._embedded['wp:term']['0']['0'].name,
                      date: this.getDateString(item.date)
                    })}>

                        <NewsCard 
                        
                            title={item.title.rendered} 
                            date={this.getDateString(item.date)} 
                            img={item._embedded['wp:featuredmedia']['0'].source_url}
                            rubrik={item._embedded['wp:term']['0']['0'].name}
                        />
                    
                    </TouchableWithoutFeedback>
                  )
                }
              />
  
  
            )
            : (
  
              <View style={styles.container}>
                <Text style={{fontSize:18 }}>Daten werden geladen...</Text>
              </View>
            )}
  
  
          </SafeAreaView>

        );
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
  
      },

    headerLogo: {
        height: 80,
        width: '100%',
        opacity: 0.9, 
        
    },  
  


    
})
