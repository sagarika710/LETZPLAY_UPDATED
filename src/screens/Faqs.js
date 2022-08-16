import {List} from 'react-native-paper';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {apicaller} from './api';
import React, {useState, useEffect} from 'react';
const Faqs = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [faqs, setFaqs] = useState([]);
  const handlePress = () => setExpanded(!expanded);
  useEffect(() => {
    var axios = require('axios');

    apicaller('getfaq', null, 'get', null).then(res => {
      console.log(JSON.stringify(res.data));
      setFaqs(res.data);
    });
  }, []);

  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.listcontainer}>
          <List.Section style={styles.listsection}>
            {faqs &&
              faqs.map(e => {
                return (
                  <>
                    <List.Accordion style={styles.List} title={e.question}>
                      {/* <List.Item title="Lorem ipsum dolor sit amet. In magnam commodi id officia modi est odit reiciendis sed consequatur eligendi. Sit assumenda autem hic labore sapiente in dolorum nulla ut reprehenderit vero. Est quis iure est voluptatem voluptatem et obcaecati expedita ut nihil corrupti nam facere exercitationem eos magnam voluptatem." /> */}
                      <Text style={styles.ans}>{e.answer}</Text>
                    </List.Accordion>
                  </>
                );
              })}

            {/* <List.Accordion
              style={styles.List}
              title="Lorem ipsum dolor sit amet ?">
              <Text style={styles.ans}>
                Lorem ipsum dolor sit amet. In magnam commodi id officia modi
                est odit reiciendis sed consequatur eligendi. Sit assumenda
                autem hic labore sapiente in dolorum nulla ut reprehenderit
                vero. Est quis iure est voluptatem voluptatem et obcaecati
                expedita ut nihil corrupti nam facere exercitationem eos magnam
                voluptatem.
              </Text>
            </List.Accordion>

            <List.Accordion
              style={styles.List}
              title="Lorem ipsum dolor sit amet ?">
              <Text style={styles.ans}>
                Lorem ipsum dolor sit amet. In magnam commodi id officia modi
                est odit reiciendis sed consequatur eligendi. Sit assumenda
                autem hic labore sapiente in dolorum nulla ut reprehenderit
                vero. Est quis iure est voluptatem voluptatem et obcaecati
                expedita ut nihil corrupti nam facere exercitationem eos magnam
                voluptatem.
              </Text>
            </List.Accordion>

            <List.Accordion
              style={styles.List}
              title="Lorem ipsum dolor sit amet ?">
              <Text style={styles.ans}>
                Lorem ipsum dolor sit amet. In magnam commodi id officia modi
                est odit reiciendis sed consequatur eligendi. Sit assumenda
                autem hic labore sapiente in dolorum nulla ut reprehenderit
                vero. Est quis iure est voluptatem voluptatem et obcaecati
                expedita ut nihil corrupti nam facere exercitationem eos magnam
                voluptatem.
              </Text>
            </List.Accordion>

            <List.Accordion
              style={styles.List}
              title="Lorem ipsum dolor sit amet ?">
              <Text style={styles.ans}>
                Lorem ipsum dolor sit amet. In magnam commodi id officia modi
                est odit reiciendis sed consequatur eligendi. Sit assumenda
                autem hic labore sapiente in dolorum nulla ut reprehenderit
                vero. Est quis iure est voluptatem voluptatem et obcaecati
                expedita ut nihil corrupti nam facere exercitationem eos magnam
                voluptatem.
              </Text>
            </List.Accordion>

            <List.Accordion
              style={styles.List}
              title="Lorem ipsum dolor sit amet ?">
              <Text style={styles.ans}>
                Lorem ipsum dolor sit amet. In magnam commodi id officia modi
                est odit reiciendis sed consequatur eligendi. Sit assumenda
                autem hic labore sapiente in dolorum nulla ut reprehenderit
                vero. Est quis iure est voluptatem voluptatem et obcaecati
                expedita ut nihil corrupti nam facere exercitationem eos magnam
                voluptatem.
              </Text>
            </List.Accordion>
           */}
          </List.Section>
        </View>
      </ScrollView>
    </View>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  List: {
    backgroundColor: '#fff',
  },
  ans: {
    marginHorizontal: 15,
    color: '#717171',
  },
  listcontainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginHorizontal: 15,
    padding: 3,
    marginTop: 30,
  },
  listsection: {
    backgroundColor: '#fff',
  },
});
