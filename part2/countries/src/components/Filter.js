const Filter = ({ filter, setFilter }) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div>
            Find countries: <input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter;