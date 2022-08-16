import {List} from 'react-native-paper';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {apicaller} from './api';
import React, {useState, useEffect} from 'react';
const Termcondition = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    apicaller('getterms', null, 'get', null).then(res => {
      console.log(JSON.stringify(res.data));
      setTerm(res.data);
    });
  }, []);

  return (
    <View style={styles.Container}>
      <ScrollView>
        {term &&
          term.map(data => {
            return (
              <>
                <Text style={styles.heading}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
              </>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Termcondition;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 15,
    textAlign: 'justify',
  },
});
