import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';


export class RecordFlatList extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  dlistName(item) {
    console.log(item);
    fetch(item)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.name);
        return json.name;
      })
      .catch((error) => console.error(error));
  }
  public render() {
    console.log(this.props.route.params.characterList);
    return (
      <View>
        <Text style={styles.headerText}>Character</Text>
        <Text style={styles.headerText}>{this.props.route.params.characterList.title}</Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          removeClippedSubviews={false}
          data={this.props.route.params.characterList.characters}
          renderItem={({ item, index, separators }) => (
            <View style={styles.cardView}>
              <Text style={styles.prescriptionHeader}>{this.dlistName(item)}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    color: 'red',
    fontSize: 24,
    fontWeight: '500',
    margin: 10,
  },
  headerText: {
    marginStart: 20,
    fontSize: 10,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'center',
    color: '#a2acae'
  },

});
