import { View, Text } from 'react-native'
import React,{useState} from 'react'
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


 const GOOGLE_MAPS_APIKEY ='AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w'

const App = () => {



  const [originPlace, setOriginPlace] = useState(null);

  const lon = originPlace.details.geometry;
  const kyb =lon.location

  const mpho = kyb.lat;
  const sifiso = kyb.lng


  const originP = {
    latitude: mpho,
    longitude: sifiso,
  };


  const karabo = {
    latitude: -23.4082946,
    longitude:29.41193240000004,
  }
  return (
   <View>

<MapView
style={{height:"100%", width:'100%'}}

    initialRegion={{
      latitude:mpho ,
      longitude:sifiso,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >

<Marker
    coordinate={originP}
    title={"Karabo Carwash"}
    />

    <Marker
    coordinate={karabo}
    title={"Karabo Carwash"}
    />

<MapViewDirections
        origin={originP}
        destination={karabo}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="pink"
      /> 
    
    </MapView>

    <View style={{height:530 , width:'100%', marginTop:5,padding:10, position:'absolute',top:30}}>

    <GooglePlacesAutocomplete
          placeholder="Where from?"
          
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w',
            language: 'en',
          }}
        />

</View>


   </View>

  
  )
}

export default App