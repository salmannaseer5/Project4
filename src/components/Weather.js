import React, { Component } from 'react';
import {View, Text} from 'react-native';
import axios from axios;

class Weather extends Component {
    state = {
        city: "Bucuresti",
        country: "Romania",
        weatherType: "Clear",
        temperature: 21,
        searchedCity: "Bucuresti",
        val: new Animated.Value(0),
        currentColor: "rgba(255,255,255,0.5)",
        nextColor: this._randomColor(),
        icon: weatherIcon()
    };

    componentWillMount(){
        axios.get('http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric').then(response => console.log(response));
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