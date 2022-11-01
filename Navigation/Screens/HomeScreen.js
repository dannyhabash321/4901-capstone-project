import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from "@rneui/themed";
import { ListItem, Avatar } from "@react-native-material/core"; //List items from https://www.react-native-material.com/docs/components/list-item


function HomeScreen({navigation}){
  return(
    <View backgroundColor = "#ffffff">
    <SearchBar placeholder="Search" lightTheme="true" platform="ios"containerStyle={{position:'relative',top:50,margin:16}}/>
    
    <View style={{height:650 }}>
      <ScrollView style={{position:'relative',top:40, }}>
      <Text style={{position:'relative',left:20, marginBottom:10,fontWeight:'bold', fontSize:30 }}>Lego Pieces</Text>
      <TouchableWithoutFeedback>
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: "https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/9339.jpg" }} />
        }
        title="Brunch this weekend?"
        secondaryText="I'll be in your neighborhood doing errands this…"
        onPress={() => {
          alert('You tapped the button!');
        }}
      />
      </TouchableWithoutFeedback>
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

export default HomeScreen