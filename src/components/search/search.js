import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = (onSearchChange) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    fetch(
      `${GEO_API_URL}/cities?miniPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      OnChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
