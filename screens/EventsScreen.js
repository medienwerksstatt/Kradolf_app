import React, { Component } from 'react'
import {View, Text, SafeAreaView, FlatList, StyleSheet, ScrollView} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';






export default class EventsScreen extends Component {



    state = {
        datasource: [],
        
    }

    componentDidMount() {
        this.fetchData();
    }

    



    fetchData = () => {
        fetch("https://ks.medienwerkstatt-ag.ch/wp-json/mecexternal/v1/calendar/5906")
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
                datasource: responseJson.content_json
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
          
          return postingDatum = `${monat[monatZahl]} ${jahr}` 

    }


    filterValue = () => {

      const dataArray = Object.entries(this.state.datasource);
     
    

    }



  
  
    
    render() {
      
     

   
      
      return (
        
        <>

      
        <Text>hellou</Text>
       
         </>


        );
       
    }
      
}      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          
        },
        item: {
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 32,
        },
      });
