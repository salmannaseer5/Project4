import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Dimensions} from 'react-native';
import axios from axios;


const API_KEY = '6e6b8fd7122d6e611ee00b5947836165';
const DEFAULT_ZIPCODE = 20002;

class TheWeatherApp extends Component {
  constructor(){
    super();
    this.state = {
      zipcode: DEFAULT_ZIPCODE,
      days: [],
    }
  }

  _getForecast(zipcode)
  {
    const request_url = "https://home.openweathermap.org/api_keys" + API_KEY + "/forecast/q/" + zipcode + ".json";
    axios.get(request_url).then( (response) => {
      if(response.status == 200 ) {
        var weather = response.data.forecast.simpleforcast.forecastday;
        var forecast = [];
        weather.forEach( (element, index) => {
          forecast = forecast.concat([
          {
            date: element.date.weekday,
            temperature:
            {
              high:
              {
                fahrenheit: element.low.fahrenheit,
                celsius: element.low.celsius
              },
              low:
              {
                fahrenheit: element.low.fahrenheit,
                celsius: element.low.celsius
              }
            },
          condition: element.avehumidity,
          wind:
          {
            mph: element.avewind.mph,
            dir: element.avewind.dir
          },
          average_humidity: element.avehumidity,
          icon_url: element.icon_url
         }
          ])
        })
        this.setState({days: forecast});
      }
    })
  }

  render() {
    if (this.state.days.length <= 0)
    {
      this._getForecast(this.state.zipcode)
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        {
          this.state.days.map( (element, index)  => {
            return ( 
              <View key={index} style={{marginTop: 10, borderWidth: 2, justifycontent: 'center', alignItems: 'center', backgroundColor: "white", width: Dimensions.get('window').width /1.25}}>
              <Image style={{width: 50, height:50}}
              source={{uri: element.icon_uri}}
              />
              <Text>{element.condition}</Text>
              <Text>High: {element.temperature.high.fahrenheit}F | {element.temperature.high.celsius}C</Text>
              <Text>Low: {element.temperature.low.fahrenheit}F | {element.temperature.low.celsius}C</Text>
              <Text>Wind: {element.wind.dir} @ {element.wind.mph}MPH</Text>
              <Text style={{fontWeight: "900"}}>{element.date}</Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
