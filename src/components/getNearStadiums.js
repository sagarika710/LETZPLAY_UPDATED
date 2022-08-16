import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../Redux/slices/userSlice';
import {apicaller} from '../screens/api';

export const getNearStadiums = () => {
  let user = useSelector(getUser);
  return new Promise((resolve, reject) => {
    apicaller(
      'search/near',
      JSON.stringify({
        currentLocation: [user.latitude, user.longitude],
        radius: 500000000000,
      }),
      'post',
    )
      .then(res => {
        console.log(res.data.data);
        let locresult = res.data.data.map(a => {
          return {...a.sportsCentre, currentDistance: a.currentDistance};
        });
        console.log(
          'loclength ',
          locresult.length,
          'locsearchlength ',
          res.data.data.length,
        );
        resolve(locresult);
      })
      .catch(e => {
        console.log('location search error ', e);
        reject(e);
      });
  });
};
