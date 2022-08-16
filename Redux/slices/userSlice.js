import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';
export var UserSlice = createSlice({
  name: 'user',
  initialState: {
    phone: null,
    id: null,
    name: null,
    dob: null,
    email: null,
    token: null,
    latitude: null,
    longitude: null,
    locationOf: null,
    stadid: null,
    sportid: null,
    slotid: null,
    slotdate: null,
    slottime: null,
    sname: null,
    surl: null,
    referralpoint: null,
    service: [],
    bookingid: null,
    planid: null,
    planname: null,
    km: null,
    stadmemid: null,
    expdate: null,
  },
  reducers: {
    setPhone: (state, action) => {
      console.log('Phone number set', JSON.stringify(action.payload));
      state.phone = action.payload;
    },
    setId: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.id = action.payload;
    },
    setName: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.name = action.payload;
    },
    setDOB: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.dob = action.payload;
    },
    setEmail: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.email = action.payload;
    },
    setToken: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.token = action.payload;
    },

    setStadid: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.stadid = action.payload;
    },
    setKm: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.km = action.payload;
    },
    setSportid: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.sportid = action.payload;
    },
    setSlotid: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.slotid = action.payload;
    },
    setService: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.service = action.payload;
    },

    setSlotdate: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.slotdate = action.payload;
    },

    setSlottime: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.slottime = action.payload;
    },
    setSname: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.sname = action.payload;
    },
    setSurl: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.surl = action.payload;
    },
    setLocationOf: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.locationOf = action.payload;
    },
    setreferralpoint: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.referralpoint = action.payload;
    },
    setLoc: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    setBookingid: (state, action) => {
      state.bookingid = action.payload;
    },
    setPlanid: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.planid = action.payload;
    },
    setPlanname: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.planname = action.payload;
    },
    setStadmemid: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.stadmemid = action.payload;
    },
    setExpdate: (state, action) => {
      console.log('From Redux', JSON.stringify(action.payload));
      state.expdate = action.payload;
    },
    logout: (state, action) => {
      (state.phone = null),
        (state.id = null),
        (state.name = null),
        (state.dob = null),
        (state.email = null),
        (state.token = null),
        (state.stadid = null);
      state.sportid = null;
      state.slotid = null;
      state.service = [];
      (state.latitude = null), (state.longitude = null);
      (state.planid = null), (state.planname = null), (state.locationOf = null);
      state.sname = null;
      state.surl = null;
      state.bookingid = null;
      state.km = null;
      state.stadmemid = null;
      state.expdate = null;
    },
  },
});
export const getStadid = state => {
  return state.user.stadid;
};
export const getSportid = state => {
  return state.user.sportid;
};
export const getSlotid = state => {
  return state.user.slotid;
};
export const getService = state => {
  return state.user.service;
};
export const getUserPhone = state => {
  return state.user.phone;
};
export const getName = state => {
  return state.user.name;
};
export const getDob = state => {
  return state.user.dob;
};
export const getEmail = state => {
  return state.user.email;
};
export const getToken = state => {
  return state.user.token;
};
export const getLoc = state => {
  return state.user.latitude;
};
export const getLat = state => {
  return state.user.latitude;
};
export const getLang = state => {
  return state.user.longitude;
};
export const getId = state => {
  return state.user.id;
};
export const getlocationOf = state => {
  return state.user.locationOf;
};
export const getSlotdate = state => {
  return state.user.slotdate;
};
export const getSlottime = state => {
  return state.user.slottime;
};
export const getSname = state => {
  return state.user.sname;
};
export const getSurl = state => {
  return state.user.surl;
};
export const getreferralpoint = state => {
  return state.user.referralpoint;
};
export const getBookingid = state => {
  return state.user.bookingid;
};
export const getPlanid = state => {
  return state.user.planid;
};
export const getplanname = state => {
  return state.user.planname;
};
export const getkm = state => {
  return state.user.km;
};
export const getstadmemid = state => {
  return state.user.stadmemid;
};
export const getexpdate = state => {
  return state.user.expdate;
};
export const {
  setPhone,
  setToken,
  logout,
  setDOB,
  setId,
  setEmail,
  setName,
  setLoc,
  setLocationOf,
  setService,
  setSlotid,
  setSportid,
  setStadid,
  setSlotdate,
  setSlottime,
  setSname,
  setSurl,
  setreferralpoint,
  setBookingid,
  setPlanid,
  setPlanname,
  setKm,
  setStadmemid,
  setExpdate,
} = UserSlice.actions;
export default UserSlice.reducer;
