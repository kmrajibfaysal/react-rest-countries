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
        <div>
            <h1>Visiting Every country of the World!!</h1>
            <h3>Available countries: {countries.length}</h3>
        </div>
    );
}

export default App;
