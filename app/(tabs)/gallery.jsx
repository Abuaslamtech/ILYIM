import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

const IMAGES = [
  {
    id: 1,
    source: require("../../assets/images/eeman1.jpeg"),
    title: "Sunset Embrace",
  },
  {
    id: 2,
    source: require("../../assets/images/eeman2.jpeg"),
    title: "Beach Walk",
  },
  {
    id: 3,
    source: require("../../assets/images/eeman3.jpeg"),
    title: "Candlelit Dinner",
  },
  {
    id: 4,
    source: require("../../assets/images/eeman4.jpg"),
    title: "Garden Picnic",
  },
  {
    id: 5,
    source: require("../../assets/images/eeman5.jpg"),
    title: "Mountain View",
  },
  {
    id: 6,
    source: require("../../assets/images/eeman6.jpg"),
    title: "Dance Together",
  },
  {
    id: 7,
    source: require("../../assets/images/eeman7.jpg"),
    title: "City Lights",
  },
  {
    id: 8,
    source: require("../../assets/images/eeman8.jpg"),
    title: "Starry Night",
  },
  {
    id: 9,
    source: require("../../assets/images/eeman9.jpg"),
    title: "Autumn Walk",
  },
];
const scrollViewRef = useRef(null);

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 40) / 2; // Calculate item width for 2-column grid with better spacing

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollViewRef = useRef(null);

  // Create chunks of 2 images for the grid layout
  const imageRows = [];
  for (let i = 0; i < IMAGES.length; i += 2) {
    imageRows.push(IMAGES.slice(i, i + 2));
  }

  const renderImageModal = () => {
    if (!selectedImage) return null;
    
    return (
      <Animatable.View 
        animation="fadeIn" 
        duration={300}
        className="absolute inset-0 z-50 flex-1 items-center justify-center bg-black/90"
      >
        <StatusBar hidden />
        <TouchableOpacity
          className="absolute top-8 right-6 z-10 bg-white/20 rounded-full p-2"
          onPress={() => setSelectedImage(null)}
        >
          <MaterialIcons name="close" size={24} color="white" />
        </TouchableOpacity>
        
        <Animatable.View animation="zoomIn" duration={400} className="w-full items-center p-4">
          <Image
            source={selectedImage.source}
            style={{ width: width * 0.9, height: width * 1.2 }}
            className="rounded-xl"
            resizeMode="contain"
          />
          <Animatable.Text 
            animation="fadeInUp" 
            delay={200}
            className="mt-6 text-xl font-bold text-white"
          >
            {selectedImage.title}
          </Animatable.Text>
          
          <Animatable.View 
            animation="fadeInUp" 
            delay={300}
            className="mt-4 flex-row"
          >
            <TouchableOpacity className="mx-2 rounded-full bg-rose-500 px-4 py-2 flex-row items-center">
              <MaterialIcons name="favorite" size={20} color="white" />
              <Text className="text-white ml-2">Favorite</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="mx-2 rounded-full bg-white/20 px-4 py-2 flex-row items-center">
              <MaterialIcons name="share" size={20} color="white" />
              <Text className="text-white ml-2">Share</Text>
            </TouchableOpacity>
          </Animatable.View>
        </Animatable.View>
      </Animatable.View>
    );
  };

  return (
    <View className="flex-1 bg-rose-50">
      <StatusBar barStyle="dark-content" backgroundColor="#FFE4E1" />
      
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Header Section */}
        <Animatable.View
          animation="fadeInDown"
          duration={1200}
          className="items-center pt-12 pb-4 bg-rose-100/70"
        >
          <View className="bg-white/70 p-5 rounded-full mb-4 shadow-md">
            <MaterialIcons name="favorite" size={50} color="#FF6B81" />
          </View>
          <Animatable.Text
            animation="fadeIn"
            duration={1500}
            className="text-3xl font-bold text-rose-600 tracking-wide"
          >
            Our Story
          </Animatable.Text>
          <Animatable.Text
            animation="fadeIn"
            delay={500}
            duration={1500}
            className="text-sm text-rose-400 tracking-wider mt-1 mb-4"
          >
            Moments to cherish forever
          </Animatable.Text>
        </Animatable.View>
        
        {/* Gallery Grid */}
        <View className="p-4">
          {imageRows.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} className="flex-row justify-between mb-4">
              {row.map((item, index) => (
                <Animatable.View
                  key={item.id}
                  animation="fadeInUp"
                  delay={300 + (rowIndex * 2 + index) * 100}
                  duration={600}
                  className="overflow-hidden rounded-2xl shadow-md"
                  style={{ width: ITEM_WIDTH }}
                >
                  <TouchableOpacity
                    onPress={() => setSelectedImage(item)}
                    activeOpacity={0.9}
                  >
                    <Image
                      source={item.source}
                      style={{ width: "100%", height: ITEM_WIDTH * 1.3 }}
                      resizeMode="cover"
                    />
                    <View className="absolute bottom-0 w-full bg-black/30 backdrop-blur-md px-3 py-3">
                      <Text className="text-white text-sm font-medium">{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </Animatable.View>
              ))}
              {/* If odd number of images in the last row, add an empty spacer */}
              {row.length === 1 && <View style={{ width: ITEM_WIDTH }} />}
            </View>
          ))}
        </View>
      </ScrollView>
      
      {renderImageModal()}
    </View>
  );
};

export default Gallery;