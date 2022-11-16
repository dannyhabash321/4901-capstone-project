import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SearchBar } from "@rneui/themed";
import { ListItem, Avatar } from "@react-native-material/core"; //List items from https://www.react-native-material.com/docs/components/list-item
import ModalTester from '../../components/Information';

function HomeScreen({navigation}){

  // function ModalTester() {
  //   const [isModalVisible, setModalVisible] = useState(false);
  
  //   const toggleModal = () => {
  //     setModalVisible(!isModalVisible);
  //   };
  
  //   return (
  //     <View style={{top:40}}>
  //       <TouchableOpacity onPress={toggleModal} style={styles.informationStyle} activeOpacity={0.5}>
  //       <Image 
  //         source={require('../../assets/information.png')} 
  //         style={styles.ImageIconStyle} 
  //       />
  //       </TouchableOpacity>
    
  //       <Modal isVisible={isModalVisible}>
  //         <View style={{flex:1}}>
  //           {/* <Text>Hello!</Text> */}
  
  //         <TouchableOpacity onPress={toggleModal} style={styles.informationStyle} activeOpacity={0.5}>
  //         <Image 
  //           source={require('../../assets/information.png')} 
  //           style={styles.ImageIconStyle} 
  //         />
  //         </TouchableOpacity>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // }

  return(
    <View backgroundColor = "#ffffff">

 
    <View>
    <ModalTester></ModalTester> 
      <ScrollView style={{position:'relative',top:40, }}>
      <Text style={{position:'relative',left:20, marginBottom:10,fontWeight:'bold', fontSize:30 }}>Lego Pieces</Text>
      <Text style={{position:'relative',left:20, marginBottom:10, fontSize:15 }}>Please select the piece you would like to identify</Text>
      <SearchBar placeholder="Search" lightTheme="true" platform="ios"containerStyle={{position:'relative',margin:16}}/>
      <TouchableWithoutFeedback>
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/9339.jpg" }} />
        }
        title="Brunch this weekend???"
        secondaryText="I'll be in your neighborhood doing errands this…"
        onPress={() => navigation.navigate('Lego',{ partId: "3213222" })}
      />
      </TouchableWithoutFeedback>
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4550348.jpg" }} />
        }
        title="Summer BBQ"
        secondaryText="Wish I could come, but I'm out of town this…"
        onPress={() => navigation.navigate('Lego',{ partId: "xxsdsdsd" })}
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6244915.jpg" }} />
        }
        title="Oui Oui"
        secondaryText="Do you have Paris recommendations? Have you ever…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/9339.jpg" }} />
        }
        title="Brunch this weekend?"
        secondaryText="I'll be in your neighborhood doing errands this…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4550348.jpg" }} />
        }
        title="Summer BBQ"
        secondaryText="Wish I could come, but I'm out of town this…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6244915.jpg" }} />
        }
        title="Oui Oui"
        secondaryText="Do you have Paris recommendations? Have you ever…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/9339.jpg" }} />
        }
        title="Brunch this weekend?"
        secondaryText="I'll be in your neighborhood doing errands this…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4550348.jpg" }} />
        }
        title="Summer BBQ"
        secondaryText="Wish I could come, but I'm out of town this…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6244915.jpg" }} />
        }
        title="Oui Oui"
        secondaryText="Do you have Paris recommendations? Have you ever…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/9339.jpg" }} />
        }
        title="Brunch this weekend?"
        secondaryText="I'll be in your neighborhood doing errands this…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4550348.jpg" }} />
        }
        title="Summer BBQ"
        secondaryText="Wish I could come, but I'm out of town this…"
      />
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6244915.jpg" }} />
        }
        title="Oui Oui"
        secondaryText="Do you have Paris recommendations? Have you ever…"
      />
      </ScrollView>
      <StatusBar style="auto" />
      </View>
      
      </View>
    );
}


// const styles = StyleSheet.create({
//   informationStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#485a96',
//     borderWidth: .5,
//     borderColor: '#fff',
//     width: 40,
//     height: 40,
//     borderRadius: 5,
//     margin: 5,
   
//   },
   
//   ImageIconStyle: {
//      padding: 10,
//      margin: 5,
//      height: 30,
//      width: 30,   
//   }
// });

export default HomeScreen