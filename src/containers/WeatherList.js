import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap';



class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => Math.round(weather.main.temp - 273));
        const humiditys = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const {lon,lat} = cityData.city.coord;
        console.log(temps);
        console.log(humiditys);
        console.log(pressures);
        console.log(lon);
        console.log(lat);

        return (
            <tr key={cityName}>
                <td className="mapSection"><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color={`red`} unit="C"/>
                </td>
                <td>
                <Chart data={pressures} color={`yellow`} unit="hPa"/>
                
                </td>
                <td>
                <Chart data={humiditys} color={`green`} unit="%" />
                </td>
            </tr>

        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({ weather }) { // same as const weather=state.weather 
    return ({ weather }); //weather:weather both are samw thats why only write weather
}
export default connect(mapStateToProps)(WeatherList);