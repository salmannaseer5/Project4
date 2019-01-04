import React, { Component } from 'react';
import {View, Text} from 'react-native';
import axios from axios;

class Weather extends Component {
    state = {
        city: "",
        country: "",
        weatherType: "",
        temperature: 21,
        searchedCity: "",
        val: new Animated.Value(0),
        currentColor: "rgba(255,255,255,0.5)",
        nextColor: this._randomColor(),
        icon: weatherIcon()
    };

    getInitialState() {
        return {
          city: "Washington",
          country: "United States",
          weatherType: "Clear",
          temperature: 45,
          searchedCity: "Washington",
          val: new Animated.Value(0),
          currentColor: "rgba(255,255,255,0.5)",
          nextColor: this._randomColor(),
          icon: weatherIcon()
        };
      }

    componentWillMount(){
        axios.get('http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric')
        .then(response => this.setState({
        temperature: weatherList.main.temp,
        city: weatherList.name,
        country: weatherList.sys.country,
        weatherType: weatherList.weather[0].main,
        currentColor: current,
        nextColor: this._randomColor(),
        icon: weatherIcon(weatherList.weather[0].icon)
        }));
    }
    render () {
        return (
            <View>
                <Text>Weather</Text>
            </View>
        );
    }
}

export default Weather;