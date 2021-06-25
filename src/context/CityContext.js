import React, { createContext } from 'react'
import data from '../data/english.json'
import hindiData from '../data/hindi.json'
export const CityContext = createContext();


export const CityProvider = (props) => {
    

    const formatEnglishData = () => { //This method is used to format the data to make it easier to map through
        
        let length = 2;
        let formattedData = []; 

        for (let i = 1; i < length; i++) { 
            let varName = data[`compare-tabs_1_city_${i}_name`]; 
            let varAqi = data[`compare-tabs_1_city_${i}_aqi`];
            let varCigg = data[`compare-tabs_1_city_${i}_cigg`]; 

            let cityDetails = {
            cityID: i,
            name: varName,
            aqi: varAqi,
            cigg: varCigg
            }

             formattedData.push(cityDetails);
        
            if (data[`compare-tabs_1_city_${i + 1}_name`]) { //Increases the length by 1 
                length++ 
            }

        }
        return formattedData;
    }
    
    
    const formatHindiData = () => {

        let length = 2;
        let formattedHindiData = [];
    
        for (let i = 1; i < length; i++) {
            let varName = hindiData[`compare-tabs_1_city_${i}_name`];
            let varAqi = hindiData[`compare-tabs_1_city_${i}_aqi`];
            let varCigg = hindiData[`compare-tabs_1_city_${i}_cigg`];
    
            let cityHindiDetails = {
                cityID: i,
                name: varName,
                aqi: varAqi,
                cigg: varCigg
            }
    
            formattedHindiData.push(cityHindiDetails);
            if (hindiData[`compare-tabs_1_city_${i + 1}_name`]) {
                length++
            }
    
        }
            return formattedHindiData;
    }

        const cityFinder = (id) => {
            let varName = data[`compare-tabs_1_city_${id}_name`];
            let varAqi = data[`compare-tabs_1_city_${id}_aqi`];
            let varCigg = data[`compare-tabs_1_city_${id}_cigg`];
    
            let cityDetails = {
                cityID: id,
                name: varName,
                aqi: varAqi,
                cigg: varCigg
            }
            return cityDetails;
        }
    
        const cityHindiFinder = (id) => {
            let varName = hindiData[`compare-tabs_1_city_${id}_name`];
            let varAqi = hindiData[`compare-tabs_1_city_${id}_aqi`];
            let varCigg = hindiData[`compare-tabs_1_city_${id}_cigg`];
    
            let cityHindiDetails = {
                cityID: id,
                name: varName,
                aqi: varAqi,
                cigg: varCigg
            }
            return cityHindiDetails;
        }
    
   
   
  

    return (
        <CityContext.Provider value={{ formatEnglishData, formatHindiData, cityFinder, cityHindiFinder }}>
            {props.children}
        </CityContext.Provider>
    )
}

export default CityContext
