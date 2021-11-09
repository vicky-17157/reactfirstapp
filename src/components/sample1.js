import React from 'react';
function Greeting(props) {
    return <h1>Hello, {props.name} {props.number} are you from {props.city} welcome to {props.team}</h1>;
  }

function Getgreet() {
    return (
    <div>
        <Greeting name="kevin" number="17" city="belgium" team="manchester city"/>
        <Greeting name="diago" number="19" city="brazil" team="atletico"/>
        <Greeting name="neymar" number="10" city="sao paulo" team="psg"/>
      </div>
    );
  }
  
  export default Getgreet;  