import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

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

export default Countries;
