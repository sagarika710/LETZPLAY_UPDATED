// import React, { useState, useEffect, useRef } from 'react';
// import GoogleApiWrapper from '../../components/googleMaps';
// import csc from 'country-state-city';
// import {
//     ListGroup, ListGroupItem, FormInput, FormSelect, Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from "shards-react";
// const AddListingS4 = (props) => {
//     const cityRef = useRef();
//     const navigator = window.navigator;
//     const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
//     const [address,setAddress] = useState();
//     useEffect(() => {
//         if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 console.log(position);
//                 setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
//             })
//         } else {
//             console.log("Geolocation not available");
//         }
//     }, [])
//     const [suggestions, setSuggestions] = useState();
//     const [vehicleLoc, setVehicleLoc] = useState();
//     const [country, setCountry] = useState(null);
//     const [city, setCity] = useState(null);
//     const [state, setState] = useState(null);
//     const [cityInput, setCityInput] = useState();
//     const suggestCity = (cityText) => {
//         const cities = csc.getCitiesOfCountry(country);
//         console.log(cityText);
//         const suggestions = [];
//         for (let city of cities) {
//             if (city.name.toLowerCase().indexOf(cityText.toLowerCase()) !== -1) {
//                 // console.log(city);
//                 if (suggestions.length <= 6) suggestions.push(city);
//             }
//         }
//         console.log(suggestions);
//         setSuggestions(suggestions);

//     }
//     const getStateFromCity = (cityObject) => {
//         let state = csc.getStatesOfCountry(cityObject.countryCode)
//             .filter((ele, index) => {
//                 if (ele.isoCode === cityObject.stateCode) {
//                     console.log(ele.isoCode);
//                     console.log(cityObject);
//                     return true
//                 } else {
//                     return false
//                 }
//             })
//         props.setListing({state:state[0]});
//     }
//     const renderSuggestions = () => {
//         if (suggestions) {
//             return suggestions.map((ele, index) => {
//                 return <>
//                     <ListGroupItem className={"suggestions"} style={{cursor:"pointer"}} onClick={() => {
//                         setSuggestions([]);
//                         props.setListing({
//                             city:ele,
//                             coordinates:{
//                                 latitude: ele.latitude,
//                                 longitude: ele.longitude
//                             }
//                         })
//                         setCityInput(ele.name);
                       
//                         setLocation({
//                             latitude: ele.latitude,
//                             longitude: ele.longitude
//                         })
//                         console.log(ele);
//                         console.log(ele.stateCode);
//                         let state = getStateFromCity(ele);
//                         console.log(state);
//                     }}>{ele.name}</ListGroupItem>
//                 </>
//             })
//         }

//     }
//     const renderCountries = () => {
//         return csc.getAllCountries().map((ele, index) => {
//             return <option value={ele.isoCode}>{ele.name}</option>
//         })
//     }
//     return <>
//         <div className="container mb-4">
//             <div className="row">
//                 <div className="col-md-2" />
//                 <div className="col-xl-6 col-md-12">
//                     <div className="mt-4">
//                         <h2 className="font-weight-bold mb-4">Vehicle location</h2>
//                     </div>
//                     <form onSubmit={(e) => { e.preventDefault(); console.log("Do nothing"); return false }}>
//                         <div className="mb-5 border-bottom pb-5 bg_from">
//                             <h4 className="font-weight-bold mb-3">Where is your car located?</h4>
//                             <FormSelect onChange={(e) => {
//                                 setCountry(e.target.value);
//                                 let selectedCountry = csc.getCountryByCode(e.target.value);
//                                 props.setListing({country:selectedCountry})
//                             }}>
//                                 <option value="default" selected disabled>Choose a country first</option>
//                                 {renderCountries()}
//                             </FormSelect>

//                             <FormInput
//                                 value={cityInput}
//                                 style={{ margin: "0.5em 0 0.5em 0" }}
//                                 disabled={!country ? true : false}
//                                 onChange={(e) => {
//                                     setCityInput(e.currentTarget.value);
//                                     suggestCity(e.currentTarget.value);
//                                 }}
//                                 onFocusOut = {(e)=>{setSuggestions([])}}
//                                 type={'text'}
//                                 placeholder={'Start typing the city name'} />
//                             <ListGroup>
//                                 {
//                                     renderSuggestions()
//                                 }
//                             </ListGroup>
//                         </div>
                        
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>
// }

// export default AddListingS4;
