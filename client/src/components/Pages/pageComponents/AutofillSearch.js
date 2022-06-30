import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete"

const AutofillSearch = ({getCoinByName, liveCoinData, getSearchResult}) => {

  if (liveCoinData.length === 0) {
    return null
  };

  if (liveCoinData.length > 0) {

    const searchableCoins = liveCoinData.map((coin, i) => (
      {
        id: i,
        abbreviation: coin.abbreviation,
        name: coin.name
      }
    ));

    const handleOnSearch = (string, results) => {};
    const handleOnHover = (result) => {};
    const handleOnSelect = (item) => {
      getSearchResult(item);
    };
    const handleOnFocus = () => {};
    const handleOnClear = () => {};

    const searchText = " for a coin here"

    return (
      <>
        <div id="autofillSearch">
          <p>Or search for a coin here:</p>
        </div>
        <div className="search-container">
          <ReactSearchAutocomplete
            inputValue=''
            items={searchableCoins}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            clearOnSelect={true}
            styling={{ zIndex: 4 }} // To display it on top of the search box below
          />
          </div>
        <div style={{ marginTop: 0 }}></div>
      </>
    )
  }
}

export default AutofillSearch;