/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    return (
        <div>
            <h1>Hello world!</h1>
            <LoadCountries />
        </div>
    );
}

function LoadCountries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);
    return (
        <div className="loadCountries">
            <h1>Visiting Every country of the World!!</h1>
            <h3>Available countries: {countries.length}</h3>
            {countries.map((country) => (
                <Country
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                    region={country.region}
                />
            ))}
        </div>
    );
}

function Country({ name, population, area, region }) {
    return (
        <div className="country">
            <h2>Name: {name}</h2>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Region: {region}</h4>
        </div>
    );
}

export default App;
