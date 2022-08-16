import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {
  getToken,
  getStadid,
  setActiveBookingExtras,
  getSlotdate,
  getSlottime,
  getService,
  getId,
  getSportid,
  getSlotid,
  getEmail,
  getName,
  getUserPhone,
} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
// packages import
import Iconf from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import RBSheet from 'react-native-raw-bottom-sheet';

import DatePicker from 'react-native-date-picker';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
// components import
import BookingScreenBottomSheet from '../components/BookingScreenBottomSheet';
import {apicaller} from './api';
import RazorpayCheckout from 'react-native-razorpay';
// initialisations
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BookingScreen2({navigation}) {
  const [names, setNames] = useState();
  const [phone, setPhone] = useState();
  const [email, setemail] = React.useState(false);
  const [update, setUpdate] = useState('');
  const [DOB, setDOB] = React.useState();
  const [extra, setExtra] = React.useState(1);
  const refRBSheet = useRef();
  const refRBSheetOne = useRef();
  const forwardSlashRegex = /\/.*\//;

  const name = 'Some Sports';
  const dispatch = useDispatch();
  console.log('dob', DOB);
  console.log('email', email);
  console.log('phone', phone);
  console.log('names', names);
  const [isSelf, setIsSelf] = useState(true);
  const [extraMems, setExtraMems] = useState([]);
  const [namedata, setNamedata] = useState([]);
  const [selfOtherData, setSelfOtherData] = useState([]);
  const [extraName, setExtraName] = useState('');
  const [ids, setIds] = useState('');
  const [extraPhone, setExtraPhone] = useState('');
  const [extraPhonetes, setExtraPhonetes] = useState('');
  const [extraEmail, setExtraEmail] = useState('');
  const [extraDOB, setExtraDOB] = useState('');
  const [extraNameOne, setExtraNameOne] = useState('');
  const [extraPhoneOne, setExtraPhoneOne] = useState('');
  const [extraEmailOne, setExtraEmailOne] = useState('');

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const Token = useSelector(getToken);
  const id = useSelector(getStadid);
  const da = useSelector(getSlotdate);
  const tim = useSelector(getSlottime);
  const services = useSelector(getService);
  const userid = useSelector(getId);
  const sportsid = useSelector(getSportid);
  const slot_id = useSelector(getSlotid);
  const [doberr, setDoberr] = useState(false);
  const [errn, setErrn] = useState(false);
  const [emailerror, setEmailerror] = useState();
  const [othersSelected, setOthersSelected] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const emailRd = useSelector(getEmail);
  const nameRd = useSelector(getName);
  const phoneRd = useSelector(getUserPhone);
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  console.log('okm', services);
  useEffect(() => {
    apicaller(`sports-center/${id}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('sports-center', res.data.sports_centre_image);
        setData(res.data);
      })
      .catch(e => {
        console.log(e.value);
      });
  }, []);
  function sum(a, b) {
    return {price_per_hr: a.price_per_hr + b.price_per_hr};
  }
  console.log('services', services);
  const price = services.reduce(sum);

  console.log(price.price_per_hr * 0.18);
  function booking() {
    setisLoading(true);
    var axios = require('axios');
    var data = JSON.stringify({
      user: userid,
      services: services,
      sports_category_id: sportsid,
      sports_center_id: id,
      booking_for: namedata,
      booking_for_other_with_self: selfOtherData,
      booking_time: new Date().toLocaleTimeString(),
      slot_id: slot_id,
      price: price.price_per_hr,
      other_charges: 0,
    });

    console.log('data is', data);

    apicaller('addbookings', data, 'post', null)
      .then(function (response) {
        console.log('addbooking', JSON.stringify(response.data._id));
        // setIds(response.data._id);
        console.log('Booking Response', response.data);
        // setisLoading(false);
        // razor(response.data._id);
        // console.log('Booking Response', response.data._id);

        // call();
        apicaller(
          `get-order-id/${response.data._id}`,
          null,
          'get',
          `Bearer ${Token}`,
        )
          .then(res => {
            console.log('link', res.data);
            setisLoading(false);
            razor(res.data.order_id);
          })
          .catch(e => {
            console.log(e.value);
          });
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  //useEffect(() => { }, [namedata]);
  // console.log('namedata', namedata);

  async function call() {
    console.log(ids);
    apicaller(`get-order-id/${ids}`, null, 'get', `Bearer ${Token}`)
      .then(res => {
        console.log('link', res.data);
        setisLoading(false);
        razor(res.data.order_id);
      })
      .catch(e => {
        console.log(e.value);
      });
  }
  function razor(opid) {
    console.log('opid', opid);
    var options = {
      description: 'LetzPlay Sports Booking Payment',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_AAbStcgvQzjGfV',

      order_id: opid, //Replace this with an order_id created using Orders API.
      prefill: {
        email: emailRd,
        contact: phoneRd,
        name: nameRd,
      },
      theme: {color: '#FAC516'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
        console.log('RP data is', data);
        console.log('Razor Pay data is', data.status);
        navigation.navigate('BookingSuccess');
        setisLoading(false);
      })
      .catch(error => {
        // handle failure
        console.log('Razor Pay error data is', error);
        alert(`Error: ${error.code} | ${error.description}`);
        setisLoading(false);
      });
  }
  const [referral, setReferral] = useState();
  useEffect(() => {
    apicaller('setting-key-value?key=reffreal_point', null, 'get', null).then(
      res => {
        console.log('referral', res.data.setting);
        setReferral(res.data.setting.value);
      },
    );
  }, []);
  console.log(referral);
  // if (namedata) {
  //   if (namedata == 1) {
  //     setExtra(2);
  //   } else if (namedata) {
  //     setExtra(namedata);
  //   }
  // }
  //   function delet(da) {
  //     {
  //       const index = namedata.indexOf(da);

  //       if (index > -1) {
  //         namedata.splice(index, 1); // 2nd parameter means remove one item only
  //         console.log('sliststate', namedata);
  //  setExtraPhonetes('bfrtb');
  //         //  alert(da.service_name + ' removed');
  //       }
  //     }
  //   }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setIsSelf(true);
            setNamedata([]);
          }}
          style={{
            height: 64,
            marginHorizontal: 10,
            flexDirection: 'row',
            borderWidth: isSelf ? 2 : 1,
            borderColor: isSelf ? 'orange' : '#E7E7E7',
            padding: 10,
            borderRadius: 10,
          }}>
          <DatePicker
            mode="date"
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setShow(
                date.getFullYear().toString() +
                  '/' +
                  (date.getMonth() + 1).toString() +
                  '/' +
                  date.getDate().toString(),
              );
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <View
            style={{
              backgroundColor: '#FAC516',
              height: 40,
              width: 40,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffffff'}}>
              <Icons name="user-alt" size={20} />
            </Text>
          </View>
          <Text
            style={{
              color: '#222222',
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              marginLeft: 30,
              alignSelf: 'center',
            }}>
            Self
          </Text>
        </TouchableOpacity>

        <ScrollView>
          <View
            style={{
              display: selfOtherData.length > 0 ? 'flex' : 'none',
              marginHorizontal: 10,
              height: 100,
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#222',
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 0.5,
              }}>
              Members
            </Text>
            {selfOtherData &&
              selfOtherData.map(qwe => (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#222',
                        fontFamily: 'ReadexPro-Medium',
                      }}>
                      {qwe.other_user_name}
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        color: '#222',
                        fontFamily: 'ReadexPro-Medium',
                      }}>
                      {qwe.other_user_phone}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#222',
                        fontFamily: 'ReadexPro-Medium',
                      }}>
                      {qwe.other_user_dob}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        // alert(qwe.other_user_phone);

                        const indexO = selfOtherData.indexOf(qwe);
                        alert(indexO);
                      }}>
                      <Text style={{color: 'red', marginLeft: 6}}>
                        <Icon name="trash" size={15} />
                      </Text>
                      <Text style={{color: 'red', fontSize: 7}}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ))}
          </View>
          {isSelf ? (
            <TouchableOpacity
              onPress={() => {
                refRBSheetOne.current.open();
              }}
              style={{
                flexDirection: 'row',
                margin: 10,

                borderBottomColor: '#DFDDDD',
                borderBottomWidth: 1,
                paddingBottom: 10,

                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'ReadexPro-Bold',
                  letterSpacing: 1,
                  fontSize: 16,
                  color: '#292a2e',
                }}>
                Add More Members With You
              </Text>
              <TouchableOpacity
                onPress={() => {
                  refRBSheetOne.current.open();
                }}>
                <Text style={{color: '#0003C1', marginLeft: 10}}>
                  <Icon name="plus-square-o" size={15} />
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ) : null}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            setIsSelf(false);
            refRBSheet.current.open();
            setSelfOtherData([]);
          }}
          style={{
            height: 64,
            marginHorizontal: 10,
            flexDirection: 'row',
            borderWidth: isSelf ? 1 : 2,
            borderColor: isSelf ? '#E7E7E7' : 'orange',
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View
            style={{
              backgroundColor: '#FAC516',
              height: 40,
              width: 40,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffffff'}}>
              <Icons name="user-friends" size={20} />
            </Text>
          </View>
          <Text
            style={{
              color: '#222222',
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              marginLeft: 30,
              alignSelf: 'center',
            }}>
            Others
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            display: namedata.length > 0 ? 'flex' : 'none',
            marginHorizontal: 10,
            height: 100,
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#222',
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 0.5,
            }}>
            Members
          </Text>
          {namedata &&
            namedata.map(qwe => (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#222',
                      fontFamily: 'ReadexPro-Medium',
                    }}>
                    {qwe.other_user_name}
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      color: '#222',
                      fontFamily: 'ReadexPro-Medium',
                    }}>
                    {qwe.other_user_phone}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#222',
                      fontFamily: 'ReadexPro-Medium',
                    }}>
                    {qwe.other_user_dob}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      //delet(qwe);
                      const index = namedata.indexOf(qwe);

                      if (index > -1) {
                        namedata.splice(index, 1); // 2nd parameter means remove one item only
                        console.log('namedata', namedata);
                        setNamedata(namedata);
                        //  alert(da.service_name + ' removed');
                      }
                    }}>
                    <Text style={{color: 'red', marginLeft: 6}}>
                      <Icon name="trash" size={15} />
                    </Text>
                    <Text style={{color: 'red', fontSize: 7}}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </>
            ))}
        </View>
        {isSelf ? null : (
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 30,
              flexDirection: 'row',

              borderBottomColor: '#DFDDDD',
              borderBottomWidth: 1,
              paddingBottom: 15,

              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                fontSize: 16,
                color: '#292a2e',
              }}>
              Add More Member
            </Text>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.open();
              }}>
              <Text style={{color: '#0003C1', marginLeft: 10}}>
                <Icon name="plus-square-o" size={15} />
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            marginHorizontal: 10,
            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: 'ReadexPro-Bold',
                letterSpacing: 1,
                fontSize: 14,
                color: '#222222',
                marginVertical: 5,
              }}>
              Booking Details
            </Text>
            <TouchableOpacity
              style={{
                padding: 5,

                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(`geo:0,0?q=${data.latitude},${data.longitude}`)
              }>
              <Iconm name="directions" size={15} />
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: 'ReadexPro-Bold',
                }}>
                Get Direction
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {data && (
              <Text
                style={{
                  fontFamily: 'ReadexPro-Medium',
                  letterSpacing: 0.5,
                  fontSize: 12,
                  color: '#717171',
                }}>
                {data.ground_name}, {data.address}
              </Text>
            )}
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 12,
                color: '#717171',
              }}>
              <Text>Sports: </Text>
            </Text>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 12,
                color: '#717171',
              }}>
              Slot Booked: {da} {tim}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              fontSize: 14,
              color: '#222222',
              marginVertical: 20,
            }}>
            Price Details
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,

            borderBottomColor: '#DFDDDD',
            borderBottomWidth: 1,
            paddingBottom: 15,
          }}>
          {services.map(serviceDetail => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  {serviceDetail.service_name}
                </Text>
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  ₹ {serviceDetail.price_per_hr}
                </Text>
              </View>
            );
          })}

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              GST @18%
            </Text>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              ₹ {price.price_per_hr * 0.18}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 70,
          borderBottomColor: '#DFDDDD',
          borderBottomWidth: 1,
        }}>
        {namedata ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              {namedata && namedata.length > 0 ? (
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  Player X {namedata.length}
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  Player X {selfOtherData?.length + 1}
                </Text>
              )}
              {namedata && namedata.length > 0 ? (
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  ₹{' '}
                  {(price.price_per_hr + price.price_per_hr * 0.18) *
                    namedata.length}{' '}
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  ₹{' '}
                  {(price.price_per_hr + price.price_per_hr * 0.18) *
                    (selfOtherData?.length + 1)}{' '}
                </Text>
              )}
            </View>
            {referral > price.price_per_hr * 0.1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  Referal Points
                </Text>
                {namedata && namedata.length > 0 ? (
                  <Text
                    style={{
                      fontFamily: 'ReadexPro-Medium',
                      letterSpacing: 0.5,
                      fontSize: 14,
                      color: '#717171',
                    }}>
                    ₹ {Math.round(price.price_per_hr * 0.1 * namedata.length)}
                    {'.00'}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontFamily: 'ReadexPro-Medium',
                      letterSpacing: 0.5,
                      fontSize: 14,
                      color: '#717171',
                    }}>
                    ₹ {price.price_per_hr * 0.1 * 1}{' '}
                  </Text>
                )}
              </View>
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'ReadexPro-Medium',
                  letterSpacing: 0.5,
                  fontSize: 14,
                  color: '#717171',
                }}>
                Grand Total
              </Text>
              {namedata && namedata.length > 0 ? (
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  ₹{' '}
                  {Math.round(
                    (price.price_per_hr + price.price_per_hr * 0.18) *
                      namedata.length -
                      (referral > price.price_per_hr * 0.1
                        ? price.price_per_hr * 0.1 * namedata.length
                        : 0),
                  )}
                  {'.00'}
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: 'ReadexPro-Medium',
                    letterSpacing: 0.5,
                    fontSize: 14,
                    color: '#717171',
                  }}>
                  ₹{' '}
                  {Math.round(
                    price.price_per_hr +
                      price.price_per_hr * 0.18 -
                      price.price_per_hr * 0.1,
                  )}
                  {'.00'}
                </Text>
              )}
            </View>
          </>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              Grand Total
            </Text>
            <Text
              style={{
                fontFamily: 'ReadexPro-Medium',
                letterSpacing: 0.5,
                fontSize: 14,
                color: '#717171',
              }}>
              ₹ {price.price_per_hr + price.price_per_hr * 0.18}{' '}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#fac516',
          borderRadius: 10,
          marginHorizontal: 10,
          height: 43,
          justifyContent: 'center',
          position: 'absolute',
          bottom: 20,
          width: '95%',
        }}
        onPress={() => {
          // navigation.navigate('Payment');
          booking();
        }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ReadexPro-Bold',
              letterSpacing: 1,
              color: 'white',
            }}>
            Procced to pay
          </Text>
        )}
      </TouchableOpacity>

      {/* BottomSheet */}
      <RBSheet
        ref={refRBSheet}
        height={480}
        closeOnPressMask={false}
        closeOnDragDown={false}
        closeOnPressBack={false}
        customStyles={{
          wrapper: {
            backgroundColor: '#2222229a',
          },
          container: {
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          // draggableIcon: {
          //     backgroundColor: '#000',
          // },
        }}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <View style={styles.box1}>
            <View style={styles.textAreaContainer}>
              <Iconf name="user" size={20} color="#9C9C9C" />
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Full Name"
                placeholderTextColor="#9C9C9C"
                multiline={true}
                onChangeText={setExtraName}
              />
            </View>
            {errn && <Text>Invalid Name</Text>}
            <View style={styles.textAreaContainer}>
              <Iconf name="mail" size={20} color="#9C9C9C" />
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Email Id"
                placeholderTextColor="#9C9C9C"
                multiline={true}
                onChangeText={setExtraEmail}
              />
            </View>
            {emailerror && <Text>Invalid Email</Text>}
            <View style={styles.textAreaContainer}>
              <Iconf name="smartphone" size={20} color="#9C9C9C" />
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Mobile Number"
                placeholderTextColor="#9C9C9C"
                multiline={true}
                onChangeText={setExtraPhone}
              />
            </View>
            <TouchableOpacity
              style={styles.textAreaContainer}
              onPress={() => setOpen(true)}>
              <Icons name="calendar" size={20} color="#9C9C9C" />

              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={[styles.textArea, {color: 'black'}]}
                maxLength={10}
                value={show}
                placeholder="Enter DOB (DD/MM/YYYY)"
                placeholderTextColor="#9C9C9C"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </TouchableOpacity>
            {doberr && <Text>Age shouldbe gratethen 5 year</Text>}
            <TouchableOpacity
              style={styles.btn}
              // onPress={() => {
              //   let newExtras = {
              //     other_user_name: extraName,
              //     other_user_email: extraEmail,
              //     other_user_phone: extraPhone,
              //     other_user_dob: show,
              //   };
              //   setExtraPhonetes('bfrtb');
              //   namedata.push(newExtras);
              //   refRBSheet.current.close();
              // }}
              onPress={() => {
                if (extraName.length > 2) {
                  setErrn(false);
                  if (reg.test(extraEmail)) {
                    setEmailerror(false);
                    // if (show.getFullYear() < 2018 && date != '0') {
                    setDoberr(false);
                    let newExtras = {
                      other_user_name: extraName,
                      other_user_email: extraEmail,
                      other_user_phone: extraPhone,
                      other_user_dob: show,
                    };
                    setExtraPhonetes('bfrtb');
                    namedata.push(newExtras);
                    refRBSheet.current.close();
                    // } else {
                    //   setDoberr(true);
                  }
                  // }
                  else {
                    setEmailerror(true);
                  }
                } else {
                  setErrn(true);
                }
              }}>
              <Text style={styles.btntext}>Add Member</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
                setIsSelf(true);
              }}
              style={[
                {
                  borderColor: 'red',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                },
              ]}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  fontSize: 12,
                  fontWeight: '700',
                  marginVertical: 10,
                  fontWeight: 'bold',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>

      <RBSheet
        ref={refRBSheetOne}
        height={480}
        closeOnPressMask={false}
        closeOnDragDown={false}
        closeOnPressBack={false}
        customStyles={{
          wrapper: {
            backgroundColor: '#2222229a',
          },
          container: {
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          // draggableIcon: {
          //     backgroundColor: '#000',
          // },
        }}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <View style={styles.box1}>
            <View style={styles.textAreaContainer}>
              <Iconf name="user" size={20} color="#9C9C9C" />
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Full Name"
                placeholderTextColor="#9C9C9C"
                multiline={true}
                onChangeText={setExtraNameOne}
              />
            </View>
            {errn && <Text>Invalid Name</Text>}
            <View style={styles.textAreaContainer}>
              <Iconf name="mail" size={20} color="#9C9C9C" />
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Email Id"
                placeholderTextColor="#9C9C9C"
                multiline={true}
                onChangeText={setExtraEmailOne}
              />
            </View>
            {emailerror && <Text>Invalid Email</Text>}
            <View style={styles.textAreaContainer}>
              <Iconf name="smartphone" size={20} color="#9C9C9C" />
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Mobile Number"
                placeholderTextColor="#9C9C9C"
                multiline={true}
                onChangeText={setExtraPhoneOne}
              />
            </View>
            <TouchableOpacity
              style={styles.textAreaContainer}
              onPress={() => setOpen(true)}>
              <Icons name="calendar" size={20} color="#9C9C9C" />

              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={[styles.textArea, {color: 'black'}]}
                maxLength={10}
                value={show}
                placeholder="Enter DOB (DD/MM/YYYY)"
                placeholderTextColor="#9C9C9C"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </TouchableOpacity>
            {doberr && <Text>Age shouldbe gratethen 5 year</Text>}
            <TouchableOpacity
              style={styles.btn}
              // onPress={() => {
              //   let newExtras = {
              //     other_user_name: extraName,
              //     other_user_email: extraEmail,
              //     other_user_phone: extraPhone,
              //     other_user_dob: show,
              //   };
              //   setExtraPhonetes('bfrtb');
              //   namedata.push(newExtras);
              //   refRBSheet.current.close();
              // }}
              onPress={() => {
                if (extraNameOne.length > 2) {
                  setErrn(false);
                  if (reg.test(extraEmailOne)) {
                    setEmailerror(false);
                    // if (show.getFullYear() < 2018 && date != '0') {
                    setDoberr(false);
                    let newExtrasOne = {
                      other_user_name: extraNameOne,
                      other_user_email: extraEmailOne,
                      other_user_phone: extraPhoneOne,
                      // other_user_dob: show,
                    };
                    // setExtraPhonetes('bfrtb');
                    selfOtherData.push(newExtrasOne);
                    refRBSheetOne.current.close();
                    console.log('Other Data is' + selfOtherData);
                    // } else {
                    //   setDoberr(true);
                  }
                  // }
                  else {
                    setEmailerror(true);
                  }
                } else {
                  setErrn(true);
                }
              }}>
              <Text style={styles.btntext}>Add Member</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                refRBSheetOne.current.close();
                setIsSelf(true);
              }}
              style={[
                {
                  borderColor: 'red',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                },
              ]}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  fontSize: 12,
                  fontWeight: '700',
                  marginVertical: 10,
                  fontWeight: 'bold',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textAreaContainer: {
    flexDirection: 'row',
    borderColor: '#9C9C9C',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginVertical: 15,
  },
  textArea: {
    marginHorizontal: 5,
    width: 200,
    fontSize: 14,
    fontFamily: 'ReadexPro-Regular',
    color: '#000000',
  },
  btn: {
    height: 43,
    backgroundColor: '#FAC516',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontFamily: 'ReadexPro-Bold',
  },
  btntext: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'ReadexPro-Bold',
  },
});
