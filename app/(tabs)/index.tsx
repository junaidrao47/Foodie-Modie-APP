import { StyleSheet,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Food from '@/assets/Data/Food';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
export default function TabOneScreen() {

// const Food = [
//   {
//     id: 1,
//     name: 'Pizza',
//     price: 12,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
//   },
//   {
//     id: 2,
//     name: 'Burger',
//     price: 20,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
//   }
//   ,{
//     id: 3,
//     name: 'Pizza',
//     price: 12,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
//   },
//   {
//     id: 4,
//     name: 'Burger',
//     price: 20,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
//   }
// ]

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: Food[0].image}}/>
      <Text style={styles.title}>{Food[0].name}</Text>
      <Text style={styles.title}>{Food[0].price}$</Text>
    </View>
    // <View style={styles.container}>
    //   <Image style={styles.image} source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg'}}/>
    //   {/* <Image style={styles.image} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"}}/> */}
    //   <Text style={styles.title}>Pizza </Text>
    //   <Text style={styles.title}>12$</Text>
    //   {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width:'100%',
    aspectRatio:'2/1'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color:"green",
    fontWeight: 'bold',
  },
  
});
