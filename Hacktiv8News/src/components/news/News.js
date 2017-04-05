import React, { Component } from 'react'
import {
  View,
  WebView,
  Text,
} from 'react-native'
import HeaderNav from '../HeaderNav'
import Styles from './Style'

class News extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <WebView
        source={{ uri: this.props.route.news.url }}
        style={{ width: '100%'}}
      />
    )
  }
}

export default News