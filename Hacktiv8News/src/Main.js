import React, {Component} from 'react'
import {
  Navigator,
  View,
  StatusBar
} from 'react-native'
import NewsList from './components/news/NewsList'
import News from './components/news/News'


class Main extends Component {

  render() {
    return (
      <Navigator
        initialRoute={
          {
            title: 'News List',
          }
        }
        renderScene={
          (route, navigator) => {
            switch (route.title) {
              case 'News List':
                return <NewsList navigator={ navigator } />
                break
              case 'News':
                return <News navigator={ navigator } route={ route }/>
                break
              default:
                return <NewsList navigator={ navigator } />
            }
        }}
        configureScene={ (route, routeStack) => Navigator.SceneConfigs.SwipeFromLeft }
      />
    )
  }
}


export default Main
