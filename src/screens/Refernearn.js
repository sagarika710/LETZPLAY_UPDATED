import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Share,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Topbar from '../components/Topbar';
import Clipboard from '@react-native-clipboard/clipboard';
import {getreferralpoint} from '../../Redux/slices/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {apicaller} from './api';
const Refernearn = ({navigation}) => {
  //-------------share---------------//
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'fghjhjhhhhhhhjhjjk',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      //  alert(error.message);
    }
  };
  const referral_ponit = useSelector(getreferralpoint);
  const [referral, setReferral] = useState();
  useEffect(() => {
    apicaller('setting-key-value?key=reffreal_point', null, 'get', null).then(
      res => {
        console.log('referral', res.data.setting);
        setReferral(res.data.setting);
      },
    );
  }, []);
  return (
    <View style={styles.container}>
      {/* Top Div */}
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          backgroundColor: 'transparent',
          padding: 10,
          left: 10,
        }}>
        <Topbar backButtonPreesed={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View
          // source={require('../assets/img/Sports/refernearn_bg.png')}
          style={styles.topDiv}>
          <Image
            style={{position: 'absolute', top: -100}}
            source={require('../assets/img/Sports/refernearn_bg.png')}
          />
          <TouchableOpacity
            style={styles.secondrow}
            onPress={() => navigation.navigate('Referhistory')}>
            <View style={styles.secondrowDiv}>
              <View>
                <Text style={styles.referalTxt}>Referal Points</Text>
              </View>
              <View>
                {referral && (
                  <Text style={styles.referalTxt}>₹{referral.value}</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../assets/img/Sports/Refer_a_friend.png')}
              style={styles.ReferAFriendImg}
            />
            <View style={styles.referDiv}>
              <Text style={styles.referTxt}>
                Refer your friends and Earn Rs.85
              </Text>
              <Text style={styles.referTxt}>cashback</Text>
            </View>
          </View>
        </View>
        {/* Below Div */}
        <View style={styles.belowDiv}>
          <View style={styles.copyWholeDiv}>
            <View style={styles.copyDiv}>
              <View style={styles.codeTxtDiv}>
                <Text style={styles.codeTxt}>{referral_ponit} </Text>
              </View>
              <View style={styles.copyTxtDiv}>
                <View>
                  <Icon name="copy" size={18} color="#fff" />
                </View>
                <TouchableOpacity
                  onPress={() => Clipboard.setString(referral_ponit)}>
                  <Text style={styles.copyTxt}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.inviteDiv}>
            <Text style={styles.inviteTxt}>
              Invite your friends to join Letzplay and to get
            </Text>
            <Text style={styles.inviteTxt}>
              Rs.85 in cashback for each friend
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            {/* <TouchableOpacity
              style={styles.takeFreeTrialBtn}
              onPress={() => navigation.navigate('Membership1')}>
              <Text style={styles.takeFreeTrialBtnTxt}>Invite Now</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.btn} onPress={onShare}>
              <Text style={styles.btntext}>Invite Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'white',
  },
  // Top Div
  topDiv: {
    paddingHorizontal: 15,
    paddingTop: 20,
    height: Dimensions.get('window').height * 0.65,
    // backgroundColor: 'red',
    color: '#fff',
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

    color: '#fff',
  },

  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 15,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.00,

    // elevation: 1,
  },
  referalTxt: {
    color: '#222B45',
    fontSize: 16,
    fontWeight: '900',
    // fontFamily: 'Mulish_600SemiBold',
  },
  transferDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferTxt: {
    fontWeight: '600',
    fontSize: 10,
    // text-align: center,
    letterSpacing: 0.266977,
    color: '#18ACFE',
  },
  ReferAFriendImg: {
    // marginHorizontal: 15,
    width: '77%',
    height: '62%',
  },
  referDiv: {
    marginTop: 40,
  },
  referTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.300349,
    color: '#222B45',
  },

  // Below Div
  copyWholeDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  copyDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // height: Dimensions.get('window').height * 0.1,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0003C1',
    // paddingHorizontal: 30,
    // paddingVertical: 5,
  },
  codeTxtDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRightWidth: 1,
    borderRightColor: '#0003C1',
  },
  codeTxt: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 18,
    color: '#0003C1',
  },
  copyTxtDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0003C1',
    paddingHorizontal: 15,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  copyTxt: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 18,
    marginLeft: 5,
  },

  inviteTxt: {
    fontSize: 14,
    letterSpacing: 0.33,
    textAlign: 'center',
    fontWeight: '600',
    color: '#222',
  },
  btn: {
    height: 43,
    backgroundColor: '#FAC516',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    fontFamily: 'ReadexPro-Bold',
    width: '90%',
  },
  btntext: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'ReadexPro-Bold',
  },
});

export default Refernearn;
