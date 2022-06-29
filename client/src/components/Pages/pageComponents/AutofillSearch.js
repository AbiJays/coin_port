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

        // console.log('searchable', searchableCoins)


        const handleOnSearch = (string, results) => {
            // console.log(string, results);
        }

        const handleOnHover = (result) => {
            // console.log(result);
          };
        
          const handleOnSelect = (item) => {
            // console.log(item);
            getSearchResult(item);
          };
        
          const handleOnFocus = () => {
            // console.log("Focused");
          };
        
          const handleOnClear = () => {
            // console.log("Cleared");
          };
        
        //   const formatResult = (item) => {
        //     console.log(item);
        //     return (
        //       <div className="result-wrapper">
        //         <span className="result-span">id: {item.id}</span>
        //         <span className="result-span">name: {item.name}</span>
        //       </div>
        //     );
        //   };

        

          return (
              <>
                  <div style={{ width: 400, margin:20 }}></div>
                  <ReactSearchAutocomplete
                      items={searchableCoins}
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      onClear={handleOnClear}
                      styling={{ zIndex: 4 }} // To display it on top of the search box below
                      autoFocus
                      />
                  <div style={{ marginTop: 20 }}>This text will be covered!</div>
              </>
          )
    }
}

export default AutofillSearch;