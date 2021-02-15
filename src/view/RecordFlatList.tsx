import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';


export class RecordFlatList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    if (this.props.route && this.props.route.params.characterList) {
      this.props.route.params.characterList.characters.map(item => {
        fetch(item)
          .then((response) => response.json())
          .then((json) => {
            const d = this.state.data;
            d.push(json.name);
            this.setState({ data: d })
            // return json.name;
          })
          .catch((error) => console.error(error));
      })

    }
  }
  public render() {
    return (
      <View>
        <Text style={styles.headerText}>Character</Text>
        <Text style={styles.headerText}>{this.props.route.params.characterList.title}</Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          removeClippedSubviews={false}
          data={this.state.data}
          renderItem={({ item, index, separators }) => (
            <View style={styles.cardView}>
              <Text style={styles.prescriptionHeader}>{item}</Text>
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
    color: '#7c8c91',
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
