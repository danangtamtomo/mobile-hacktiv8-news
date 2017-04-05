import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StatusBar,
  Animation,
  ListView
} from 'react-native'
import Header from '../Header'
import NewsItem from './NewsItem'
import Styles from './Style'

class NewsList extends Component {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    
    this.state = {
      news: [],
      dataSource: this.ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    this.fetchNews()
  }

  fetchNews() {
    fetch('http://hn.algolia.com/api/v1/search?query=microsoft')
      .then(response => response.json())
      .then(jsonResults => {
        this.setState({
          news: jsonResults.hits,
          dataSource: this.ds.cloneWithRows(jsonResults.hits)
        })
      })
      .catch(err => console.error(err))
  }

  setSearchingKeyword(keyword) {
    fetch('http://hn.algolia.com/api/v1/search?query='+keyword)
      .then(response => response.json())
      .then(jsonResults => {
        let filteredData = jsonResults.hits.filter(news => {
          return news.title || news.title !== null || news.title === '' && typeof news.title !== 'object'
            ? news.title.toLowerCase().search(keyword.toLowerCase()) !== -1
            : false
        })

        this.setState({
          dataSource: this.ds.cloneWithRows(filteredData)
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="#b43e1e"
          barStyle="light-content"
        />
        <Header setSearchingKeyword={ keyword => this.setSearchingKeyword(keyword) } />
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ news => <NewsItem
            navigator={ this.props.navigator }
            key={ news.objectID }
            news={ news }
          /> }
          enableEmptySections={true}
          style={ Styles.newsListContainer }
        />
      </View>
    )
  }
}

export default NewsList