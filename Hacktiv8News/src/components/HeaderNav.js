import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import Styles from './news/Style'

class HeaderNav extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={ Styles.headerNav }>
        {/*<TouchableHighlight*/}
          {/*style={ Styles.backButton }*/}
          {/*onPress={ () => this.props.navigator.pop() }*/}
        {/*>*/}
          {/*<Text style={ Styles.backButtonText }>&lt; Back</Text>*/}
        {/*</TouchableHighlight>*/}
        <Text style={ Styles.newsTitle }>{ this.props.title }</Text>
      </View>
    )
  }
}

export default HeaderNav