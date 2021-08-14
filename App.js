import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getData } from "./data/sample";
import Gallery from 'react-native-image-gallery';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { propertyDetails } from './data/PropertyDetails'
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

const { width } = Dimensions.get('window');

// class ffff extends Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.container} onPress={() => console.log("Hello click")}>
//         <CustomListview
//           itemList={this.getData()}
//         />
//       </SafeAreaView>

//     );
//   }
// }
//
const styles = StyleSheet.create({
  container_out: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E9FD'
  },

  container_column: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  container_firstRow: {
    flex: 4,
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'flex-start',
    marginBottom: 8,
    marginTop: 16,
  },
  container_secondRow: {
    flex: 4,
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
  },
  container_listingStatus: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  photo: {
    height: 300,
    width: 360,
  },
  propertyDetailsPhoto: {
    height: 300,
    width: 415,
  },
  price: {
    fontSize: 23,
    color: '#000',
  },
});

const propertyDetailsStyles = StyleSheet.create({
  container_out: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E9FD'
  },

  container_column: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  container_firstRow: {
    flex: 4,
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'flex-start',
    marginBottom: 8,
    marginTop: 16,
  },
  container_secondRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'flex-start',
    marginTop: 8,
    marginBottom: 20,
    fontSize: 20,
  },
  container_listingStatus: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 12,
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  photo: {
    height: 300,
    width: 360,
  },
  propertyDetailsPhoto: {
    height: 300,
    width: 415,
  },
  price: {
    fontSize: 23,
    color: '#000',
  },
});


// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <CustomListview itemList={getData} />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">

//         </Stack.Navigator>
//         <SafeAreaView style={styles.container}>
//           <CustomListview itemList={getData} />
//         </SafeAreaView>
//       </NavigationContainer>

//     );
//   }
// }

function DetailsScreen({ route, navigation }) {
  const { item, otherParam } = route.params;
  return (
    <ScrollView style={{ flex: 1, marginLeft: 10, marginBottom: 10 }}>
      {/* <Gallery>
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' }, dimensions: { width: 50, height: 50 } },
          { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
          { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
          { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
        ]}
      </Gallery> */}
      <ScrollView
        style={styles.container}
        //pagingEnabled={true}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        TouchableWithoutFeedback
      >
        {
          item.Media.map(function (name, index) {
            return <Image source={{ uri: name.MediaURL }} style={styles.propertyDetailsPhoto} />
          })
        }
      </ScrollView>

      <Text style={{ flex: 1, marginTop: 10, marginBottom: 10 }}>Local Service Provider By: </Text>
      <Text style={propertyDetailsStyles.price}>
        <View style={styles.container_firstRow}>
          <Text style={propertyDetailsStyles.price}>
            {item.ListPrice}
            {"      "}
          </Text>

          <Text style={{}}>
            {item.BedroomsTotal + " beds   |   "}
          </Text>
          <Text>
            {item.BathroomsTotal + " bath   |   "}
          </Text>
          <Text>
            {item.LivingArea}
          </Text>
        </View>
      </Text>

      <View style={propertyDetailsStyles.container_secondRow}>
        <Text>
          {item.StreetName + " " + item.City + " " + item.StateOrProvince + " " + item.PostalCode}
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.25,
        }}
      />
      <View>
        <AppButton title="Save" size="sm" backgroundColor="#cd4ec" />
      </View>
    </ScrollView >
  );
}
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle.appButtonContainer}>
    <Text style={buttonStyle.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const buttonStyle = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 16
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container_out}>
      <SafeAreaView >
        < View style={styles.container_column} >
          <FlatList
            data={getData}
            renderItem={({ item }) =>
              <View style={styles.container} >
                <TouchableOpacity onPress={() => navigation.navigate('Details', {
                  item: item,
                  otherParam: 'anything you want here',
                })}>
                  <Image source={{ uri: item.Media[0].MediaURL }} style={styles.photo} />
                  <View style={styles.container_firstRow} >
                    <Text style={styles.price}>
                      {item.ListPrice}
                    </Text>
                  </View>
                  <View style={styles.container_secondRow}>
                    <Text>
                      {item.StreetName + " " + item.City + " " + item.StateOrProvince + " " + item.PostalCode}
                    </Text>
                  </View>
                  <View style={styles.container_firstRow}>
                    <Text style={{}}>
                      {item.BedroomsTotal + " beds   |   "}
                    </Text>
                    <Text>
                      {item.BathroomsTotal + " bath   |   "}
                    </Text>
                    <Text>
                      {item.LivingArea}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />

        </View >
      </SafeAreaView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
