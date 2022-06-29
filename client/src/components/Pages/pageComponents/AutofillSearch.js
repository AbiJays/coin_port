import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete"

const AutofillSearch = ({getCoinByName, liveCoinData, getSearchResult}) => {

    if (liveCoinData.length === 0) {
        return null
    }

    if (liveCoinData.length > 0) {

        const searchableCoins = liveCoinData.map((coin, i) => (
            {
                id: i,
                abbreviation: coin.abbreviation,
                name: coin.name
            }
        ))



        const handleOnSearch = (string, results) => {
            // console.log(string, results);
        }

        const handleOnHover = (result) => {
            // console.log(result);
          };
        
          const handleOnSelect = (item) => {
            // console.log(item);
            getSearchResult(item);
            // searchText = ""


          };
        
          const handleOnFocus = () => {
            // console.log("Focused");
          };
        
          const handleOnClear = () => {
            // console.log("Cleared");
          };


        const searchText = "or search for a coin here"

          return (
              <>
                  <div id="autofillSearch">
                    <p>Or search for a coin here:</p>
                  </div>
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
                    //   autoFocus
                      />
                  <div style={{ marginTop: 0 }}></div>
              </>
          )
    }
}

export default AutofillSearch;