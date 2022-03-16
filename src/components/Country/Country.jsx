function Country({ name, population, area, region }) {
    return (
        <div className="Country">
            <h2>Name: {name}</h2>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Region: {region}</h4>
        </div>
    );
}

export default Country;
