import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableHighlight } from 'react-native';

export default class IndividualRooftopInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
              <Image
                  style={{width: 400, height: 200}}
                source={{uri: this.props.data.picture}}
              />

              <Text style={styles.name}>{this.props.data.name}</Text>
              <Text style={styles.details}>{this.props.data.address}  {this.props.data.city}, {this.props.data.zipcode}</Text>
              <Text style={styles.details}></Text>
              <Text style={styles.details}>Regular Hours</Text>
              <Text style={styles.details}>{this.props.data.regular}</Text>
              <Text style={styles.details}>Happy Hour</Text>
              <Text style={styles.details}>{this.props.data.happy}</Text>
              <Text style={styles.phone}>{this.props.data.phone}</Text>

            <TouchableHighlight style={styles.button} underlayColor="white">
              <Text style={styles.website}
                onPress   ={() => Linking.openURL(this.props.data.website)}>
                Visit their Website
              </Text>
            </TouchableHighlight>
          </ScrollView>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    color: '#F4F7F4'
  },
  details: {
    fontSize: 18,
    textAlign: 'center',
    color: '#F4F7F4',
    paddingBottom: 5,
  },
  phone: {
    fontSize: 18,
    textAlign: 'center',
    color: '#F4F7F4',
    paddingBottom: 5,
    paddingTop: 5,
  },
  website: {
    color: '#F4F7F4',
    fontSize: 18,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#6F65AE',
    height: 45,
    width: 160,
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 10
  },

})
