import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {getUser, setUser, getId} from '../../Redux/slices/userSlice';
// You can import from local files
import Card from '../components/Notification';
import {useSelector, useDispatch} from 'react-redux';
import {apicaller} from './api';

const data = [
  {
    msg: 'Your cricket session for 07.30-8.30am at patia,nandan vihar is confirmed.',
    date: '27Jan 2023 ',
  },
  {
    msg: 'Your cricket session for 07.30-8.30am at patia,nandan vihar is confirmed.',
    date: '27Jan 2024 ',
  },
  {
    msg: 'Your cricket session for 07.30-8.30am at patia,nandan vihar is confirmed.',
    date: '28Jan 2024 ',
  },
  {
    msg: 'Your cricket session for 07.30-8.30am at patia,nandan vihar is confirmed.',
    date: '28Jan 2024 ',
  },
  {
    msg: 'Your cricket session for 07.30-8.30am at patia,nandan vihar is confirmed.',
    date: '28Jan 2024 ',
  },
  {
    msg: 'Your cricket session for 07.30-8.30am at patia,nandan vihar is confirmed.',
    date: '28Jan 2024 ',
  },
  {
    msg: 'Your cricket session for 07.30-8.30am at patia,nandan vihar is confirmed.',
    date: '28Jan 2024 ',
  },
];
export default function Notification() {
  const [notify, setNotify] = useState([]);
  const id = useSelector(getId);
  useEffect(() => {
    // // apicaller(`notification/get/${id}`, null, 'get').then(res => {
    // apicaller(`notification/get/62967b69668d1e3a007898d9`, null, 'get').then(
    //   res => {
    //     console.log(JSON.stringify('notify', res));
    //     setNotify(res.data.data);
    //   },
    // );

    apicaller(`notification/get/${id}`, null, 'get').then(res => {
      console.log('rgth', res.data.data);
      setNotify(res.data.data);
    });
  }, []);
  return (
    notify && (
      <View style={styles.container}>
        {notify.map(s => {
          console.log(s.title);
          return <Card title={s.title} date={s.createdAt} />;
        })}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
  },
});
