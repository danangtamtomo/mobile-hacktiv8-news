import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  Image
} from 'react-native'
import Styles from './HeaderStyle'



class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchingkeyword:''
    }
  }

  _setSearchingKeyword(keyword) {
    this.props.setSearchingKeyword(keyword)
  }

  render() {
    return(
      <View style={ Styles.header } blurRadius={1}>
        <Image
          source={
            {
              uri: 'https://hacktiv8.com/img/logo-hacktiv8_bordered--md5--f7ee5fc69819b5ef3849344c119f5e18.png'
            }
          }
          style={ Styles.headerLogo }
        />
        <TextInput
          style={ Styles.headerSearchInput }
          onChangeText={ keyword => this._setSearchingKeyword(keyword) }
          placeholder={ 'Search...' }
          placeholderTextColor={ '#fff' }
        />
      </View>
    )
  }
}

export default Header
