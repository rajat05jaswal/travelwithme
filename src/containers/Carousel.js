import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,ScrollView,Dimensions,Animated} from 'react-native';
const deviceWidth=Dimensions.get('window').width;
const deviceHeight=Dimensions.get('window').height;
const Carousel=()=>{
  return (
    <ScrollView
      horizontal //scrolling left to right instead of top to bottom
      showsHorizontalScrollIndicator={true} //hides native scrollbar
      scrollEventThrottle={10} //how often we update the position of the indicator bar
      pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
      onScroll={
        Animated.event(
          [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
        )
      }
    >
      <View style={styles.carouselItem}>
        <View>
          <Image
            style={styles.image}
            source={require('../../images/Carousel1.jpg')}
          >
            <View style={styles.textWrapper}>
              <Text style={styles.textConnect}>Connect To People Travelling To The Same Place As You Are !</Text>
            </View>
          </Image>
        </View>
      </View>
      <View style={styles.carouselItem}>
        <View>
          <Image
            style={styles.image}
            source={require('../../images/Carousel2.jpg')}
          >
            <View style={styles.textWrapper}>
              <Text style={styles.text}>SPREAD LOVE</Text>
            </View>
          </Image>
        </View>
      </View>
      <View style={styles.carouselItem}>
        <View>
          <Image
            style={styles.image}
            source={require('../../images/Carousel3.jpg')}
          >
            <View style={styles.textWrapper}>
              <Text style={styles.text}>WELL ITS TIME</Text>
            </View>
          </Image>
        </View>
      </View>
    </ScrollView>
  )
}
const styles={
  carouselItemContainer:{
    width:deviceWidth*3,
  },
  image:{
    width:deviceWidth-20,
    height:400,
  },
  text:{
    fontSize:30,
    color:'white',
    textAlign:'center',
  },
  textConnect:{
    fontSize:20,
    color:'white',
    textAlign:'center',
  },
  textWrapper:{
    paddingTop:10,
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.3)',
    flex:1,
  },
  carouselItem:{
    width:deviceWidth-20,
    borderWidth:1
  }
}
export default Carousel;
