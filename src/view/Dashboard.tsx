import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Dashboard extends Component<any, {}>{
  constructor(props: any) {
    super(props);
    this.state = {
      lode: 'true',
      listData: [],
      deflistData: [],
      refreshing: false,
    }
  }
  async componentDidMount() {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ listData: json.results });
        this.setState({ deflistData: json.results })
      })
      .catch((error) => console.error(error));
  }
  componentDidUpdate() {

    if (this.props !== undefined && this.props.route.params !== undefined && this.props.route.params.nweFilmData !== undefined) {
      const d = this.state.listData
      d.push(this.props.route.params.nweFilmData);
      this.props.route.params.nweFilmData = undefined
    }
  }
  deleteItem(data) {
    const listDataIs = this.state.listData;
    const indexIs = listDataIs.indexOf(data);
    listDataIs.splice(indexIs, 1);
    this.setState({ listData: listDataIs });
  }
  searchData(value) {
    const newArray = []
    this.state.deflistData.find(v => {
      if (v.title.toLowerCase().includes(value)) {
        newArray.push(v)
      }
    })
    this.setState({ listData: newArray });
  }
  render() {

    return (
      <View style={styles.scrollView} refreshControl={this.refreshControl()}>
        <TouchableOpacity
          style={styles.searchField}
          onPress={() => {
          }}>
          <TextInput style={styles.textArea} onChangeText={(value) => {
            this.searchData(value)
          }} placeholder="Search"></TextInput>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addFilm}
          onPress={() => {
            this.props.navigation.navigate('addNewFilmForm')
          }}>
          <Text style={styles.addNewFilText}>Add New Film</Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          removeClippedSubviews={false}
          data={this.state.listData}
          renderItem={({ item, index, separators }) => (
            <View style={styles.flatlistMainView}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ViewData', { data: item });
              }} style={{ flex: 0.96 }}>
                <View style={styles.cardView}>
                  <Text style={styles.prescriptionHeader}>{item.title}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { this.deleteItem(item) }}>
                <View style={styles.delCardView}>
                  <Text style={styles.delPrescriptionHeader}>DEL</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
  refreshControl = () => {
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        enabled={true}
        onRefresh={async () => {
          this.setState({ listData: deflistData, deflistData: deflistData, lode: 'true', refreshing: false, })
        }}
      />
    );
  };
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
  addFilm: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7b8c93',
    marginBottom: 20,
    alignSelf: 'center',
  },
  addNewFilText: {
    margin: 20,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
  },
  flatlistMainView: {
    flexDirection: 'row',
    flex: 1
  },
  delCardView: {
    paddingBottom: '1%',
    backgroundColor: '#da5848',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: -2,
  },
  delPrescriptionHeader: {
    marginStart: 20,
    fontSize: 10,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
    margin: 10,
  },
})