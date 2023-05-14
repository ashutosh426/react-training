import React from "react";
import buyCookieActionCreator from "../actions/buyCookieActionCreator";
import { connect } from "react-redux";
const CookiesComponent = (props) => {
  return (
    <div className="container m-5 p-5 text-center">
      <h2>Cookie Redux Demo</h2>
      <h4 className="m-5">Number of cookies : {props.numOfCookiesProps}</h4>
      <button
        type="button"
        className="btn btn-success"
        onClick={props.buyCookieProps}
      >
        Buy a Cookie
      </button>
    </div>
  );
};
///FOR LINKING THIS CONPONENT TO REDUX
// 1.create 2 functions mapStatetoProps and mapDispatchToProps
const mapStatetoProps = (state) => {
  return {
    numOfCookiesProps: state.numOfCookies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCookieProps: () => dispatch(buyCookieActionCreator()),
  };
};

//2.create a HOC by using the connect function of react-redux library
//this will attach two props(numOfCookiesProps, buyCookieProps)  to this component and gives us the HOC component

export default connect(mapStatetoProps, mapDispatchToProps)(CookiesComponent);

//3. we need to provide the redux store to roor component which is App.js
//so in App.js file wrap the JSX with Provider and specify the store
