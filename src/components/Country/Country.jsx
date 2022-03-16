/* eslint-disable react/destructuring-assignment */
import './Country.css';

function Country(props) {
    const { area, name, flags, flag, population } = props.country;
    return (
        <div className="Country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt={flag} />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
}

export default Country;
