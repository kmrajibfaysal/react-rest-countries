/* eslint-disable react/destructuring-assignment */
function Country(props) {
    const { name, population, area, region } = props.country;
    return (
        <div className="Country">
            <h2>Name: {name.common}</h2>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Region: {region}</h4>
        </div>
    );
}

export default Country;
