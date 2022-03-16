import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);
    return (
        <div className="Countries">
            <h1>Visiting Every country of the World!!</h1>
            <h3>Available countries: {countries.length}</h3>
            <div className="countries-container">
                {countries.map((country) => (
                    <Country country={country} key={country.cca3} />
                ))}
            </div>
        </div>
    );
}

export default Countries;
