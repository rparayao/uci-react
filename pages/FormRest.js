/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ListFromRest from "./ListFromRest";
import { addCountryInfo } from "../redux/actions/index";
import { connect } from "react-redux";
import initializeStore from '../store/index.js';
import withRedux from 'next-redux-wrapper';


/**
 * fetches data from a REST api using react hooks
 * on startup its fetches list of country information from 
 * world banks web site and populate a dropdown list
 * 
 * From the drop down list the use can select a country and click submit
 * to fetch more detail from the same website and update the display
 * with more information.
 */
function formRestx(props) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  let countryName = "ABW";

  useEffect(() => {
    axios.get('http://api.worldbank.org/v2/country?format=json')
        .then(res => {
            let data = res.data;
            setCountries(data[1]);
          })
    },[]);
  

    /**
     * 
     * @param {*} name 
     */
  const getCountryInfo=(name)=>{
    axios.get('http://api.worldbank.org/v2/country/'+ name+ '?format=json')
        .then(res => {
            let data = res.data;
            let countryInfo = data[1][0];
            console.log("aaa" + JSON.stringify(countryInfo));
            props.addCountryInfo(countryInfo);
            setCountry(data[1][0]);
          })
  }

  /**
   * 
   * @param {*} event 
   */
  const onSubmit=event=>{
    getCountryInfo(countryName);
    event.preventDefault();
  };

  /**
   * 
   * @param {*} data 
   */
  const onChange=data=>{
    console.log(data.target.value)
    countryName = data.target.value;
  };

  return (
    <>
      <div id="leftdiv">
      <form onSubmit={onSubmit}>
        <label>
          Select country to travel:
        <select onChange={onChange}>
          {countries.map(country=><option key={country.id} value={country.id}>{country.name}</option>)}
        </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <style jsx>{`
        float: left
        height: 200px;
        `}</style>
      </div>
      <hr/>
      {country.length == 0 ? <></>: <ListFromRest message={country}/>}
    </>
  );
}


formRestx.getInitialProps = initializeStore => {}
function mapDispatchToProps(dispatch) {
  return {
    addCountryInfo: countryInfo => dispatch(addCountryInfo(countryInfo))
  };
}

const formRest = connect(
  null,
  mapDispatchToProps
)(formRestx);


export default withRedux(initializeStore)(formRest);