import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import{ fetchCountries } from '../../api';

import styles from './CountryPicker.module.css'


const CountryPicker = ({handelCountryChange}) => {
    const[fectchedCountries, setFetchedCountries]= useState([]);

    useEffect(() => {
        const fetchedAPICountry = async() => {
            const countryData= await fetchCountries();
            setFetchedCountries(countryData);
        }
        fetchedAPICountry();
    },[])
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect default="" onChange={(e) => handelCountryChange(e.target.value) }>
               <option value="">Worldwide</option>
                {fectchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker
