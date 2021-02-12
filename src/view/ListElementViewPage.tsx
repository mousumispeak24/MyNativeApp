import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
export class ListElementViewPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    console.log("***************", this.props);

    return (
      <ScrollView style={styles.cardView}>
        <Text style={styles.prescriptionHeader}>{this.props.route.params.data.title}</Text>
        <Text style={styles.textStyle}>Episode: {this.props.route.params.data.episode_id}</Text>
        <Text style={styles.textStyle}>Director: {this.props.route.params.data.director}</Text>
        <Text style={styles.textStyle}>Producer: {this.props.route.params.data.producer}</Text>
        <Text style={styles.textStyle}>Release Date: {this.props.route.params.data.release_date}</Text>
        <TouchableOpacity style={styles.characterStyle}
          onPress={() => {
            this.props.navigation.navigate('characterList', { characterList: this.props.route.params.data });
          }}
        >
          <Text style={styles.buttonTextStyle}>Characters</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{this.props.route.params.data.opening_crawl}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    paddingBottom: '1%',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: -2,
  },
  prescriptionHeader: {
    marginStart: 20,
    fontSize: 10,
    fontSize: 24,
    fontWeight: '500',
    margin: 10,
    textAlign: 'center'
  },
  textStyle: {
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
    color: '#7b8c93',
    marginStart: 35,
  },
  characterStyle: {
    backgroundColor: '#7b8c93',
    width: '40%',
    alignContent: 'center',
    alignSelf: 'center'
  },
  buttonTextStyle: {
    margin: 10,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
});
