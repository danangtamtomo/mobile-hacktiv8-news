import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import Styles from './Style'

class NewsItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ Styles.newsItemContainer }>
        {/*<TouchableHighlight*/}
          {/*onPress={() => this.props.navigator.push({title: 'News', news: this.props.news})}*/}
          {/*underlayColor={'#fc8463'}*/}
        {/*>*/}
          {/*<Image*/}
            {/*source={*/}
              {/*{*/}
                {/*uri: 'https://unsplash.it/300/260/?random'*/}
              {/*}*/}
            {/*}*/}
            {/*style={ Styles.newsItemImage }*/}
          {/*/>*/}
        {/*</TouchableHighlight>*/}
        <TouchableHighlight
          onPress={() => this.props.navigator.push({ title: 'News', news: this.props.news })}
          underlayColor={'#fc8463'}
        >
          <Text style={ Styles.newsItemTitle }>{ this.props.news.title }</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default NewsItem