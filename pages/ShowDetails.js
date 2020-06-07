/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */

import React from "react";
import { connect } from "react-redux";
import withRedux from 'next-redux-wrapper';
import initializeStore from '../store/index.js';


function ShowDetailsx(props) {

  return (
    <>
      {props.country?<>
       <b>Name:</b> {props.country.name}<br/>
       <b>Capital:</b> {props.country.capitalCity}<br/>
       <b>Region:</b> {props.country.region.value}<br/>
       </>: <></>}
    </>      
  );
}

ShowDetailsx.getInitialProps = initializeStore => {}
function mapStateToProps(state) {
  return { country: state.country };
};


const ShowDetails = connect(
  mapStateToProps,
  null
)(ShowDetailsx);


//export default ShowDetails;
export default withRedux(initializeStore)(ShowDetails);