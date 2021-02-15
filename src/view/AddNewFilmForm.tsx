import React, { Component } from 'react';
// import {Input} from 'native-base';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export class AddNewFilmForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      episode_id: 0,
      director: '',
      producer: '',
    }
  }
  defaultState() {
    this.setState({
      title: '',
      episode_id: 0,
      director: '',
      producer: '',
    })
  }
  componentDidMount() {
    this.defaultState()
  }
  public render() {
    return (
      <View>
        <Text style={styles.headerTextAdd}>Add New Film</Text>
        <Text style={styles.placeholdeText}>Title</Text>
        <TextInput
          style={[styles.placeholder]}
          onChangeText={(value) => {
            this.setState({ ...this.setState, title: value })
          }}
        />
        <Text style={styles.placeholdeText}>Episodes</Text>
        <TextInput
          style={[styles.placeholder]}
          onChangeText={(value) => {
            this.setState({ ...this.setState, episode_id: value })
          }}
        />
        <Text style={styles.placeholdeText}>Director</Text>
        <TextInput
          style={[styles.placeholder]}
          onChangeText={(value) => {
            this.setState({ ...this.setState, director: value })
          }}
        />
        <Text style={styles.placeholdeText}>producer</Text>
        <TextInput
          style={[styles.placeholder]}
          onChangeText={(value) => {
            this.setState({ ...this.setState, producer: value })
          }}
        />
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.addFilmInAdd}
            onPress={() => {
              this.props.navigation.navigate('Home', { nweFilmData: this.state })
            }}>
            <Text style={styles.addNewFilTextInAdd}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addFilmInAdd}
            onPress={() => {
              this.defaultState();
              this.props.navigation.navigate('Home');
            }}>
            <Text style={styles.addNewFilTextInAdd}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTextAdd: {
    marginStart: 20,
    fontSize: 10,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
    color: '#788b91',
    marginTop: 20,
  },
  placeholder: {
    fontSize: 18,
    height: 40,
    width: '90%',
    justifyContent: 'center',
    // borderBottomColor: '#00ebf4',
    borderBottomWidth: 2,
    marginBottom: 24,
    alignItems: 'center',
    color: '#788b91',
    marginStart: 20,
  },
  placeholdeText: {
    color: '#969696',
    width: '65%',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 30
  },
  addFilmInAdd: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7b8c93',
    marginBottom: 20,
    alignSelf: 'center',
    marginStart: 10,
    justifyContent: 'center'
  },
  addNewFilTextInAdd: {
    margin: 6,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});
