import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Dashboard extends Component<any, {}>{
  constructor(props: any) {
    super(props);
    this.state = {
      lode: 'true',
      listData: []
    }
  }
  async componentDidMount() {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.results);
        this.setState({ listData: json.results });
      })
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <View style={styles.scrollView}>
        <TouchableOpacity
          style={styles.searchField}
          onPress={() => {
          }}>
          <TextInput style={styles.textArea}>
            Search
          </TextInput>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          removeClippedSubviews={false}
          data={this.state.listData}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity onPress={() => {
              console.log(this.props.navigation);
              this.props.navigation.navigate('ViewData', { data: item });
            }}>
              <View style={styles.cardView}>
                <Text style={styles.prescriptionHeader}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 15,
    height: '95%',
    backgroundColor: '#f7fffe',
  },
  searchField: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    marginBottom: 20,
  },
  textArea: {
    height: '100%',
    width: '84%',
    marginStart: 15,
  },
  cardView: {
    paddingBottom: '1%',
    backgroundColor: '#cfd8dd',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: -2,
  },
  prescriptionHeader: {
    marginStart: 20,
    fontSize: 10,
    color: '#527475',
    fontSize: 24,
    fontWeight: '500',
    margin: 10,
  },
})