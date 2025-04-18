import React from "react";
import { View, Text, ScrollView, Dimensions, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const Note = () => {
  const paragraphs = [
    {
      initial: "1",
      text: "My dearest Iman, This little space is my love letter to you, a digital garden where my heart blooms just for yours. Every word here is a petal, every sentence a scent of how deeply I love you. You are the most radiant flower in my garden, the light that turns my days golden.",
    },
    {
      initial: "2",
      text: "Your laughter is the melody my soul dances to, and your presence is the peace I never knew I needed until I found you. I made this space to hold our moments, our whispers, our dreams — a place where our love can grow, even in pixels. And just like a garden needs care, I will always nurture us with tenderness, patience, and a heart full of devotion.",
    },
    {
      initial: "3",
      text: "I cherish the way you love, the way you laugh, and the way you simply are. Every moment with you feels like poetry unfolding. You are not just part of my world — you are my world.",
    },
    {
      initial: "4",
      text: "Thank you for being my muse, my peace, my forever. I promise to stand by your side through every season, to love you fiercely, gently, and always. This love? It's eternal. You are my sunshine, my moonlight, and every star that lights up my sky. I love you — endlessly.",
    },
  ];

  return (
    <View className="flex-1 bg-rose-50">
      <StatusBar barStyle="dark-content" backgroundColor="#FFE4E1" />
      
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section - Using Gallery header style */}
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
            From My Heart to Yours
          </Animatable.Text>
          <Animatable.Text
            animation="fadeIn"
            delay={500}
            duration={1500}
            className="text-sm text-rose-400 tracking-wider mt-1 mb-4"
          >
            Each card represents my love for you
          </Animatable.Text>
        </Animatable.View>

        {/* Reimagined Content Display */}
        <View className="px-5">
          {paragraphs.map((paragraph, index) => (
            <Animatable.View
              key={index}
              animation="fadeInUp"
              delay={500 + index * 200}
              className="mb-8"
            >
              <View className="flex-row">
                <View className="w-12 h-12 items-center justify-center rounded-full mb-2 bg-blush">
                  <Text className="text-2xl font-bold text-white">
                    {paragraph.initial}
                  </Text>
                </View>

                <BlurView
                  intensity={10}
                  className="flex-1 ml-3 overflow-hidden"
                >
                  <View className="bg-white/60 p-4 rounded-md border border-blush/20">
                    <Text className="text-base leading-relaxed text-gray-700">
                      {paragraph.text}
                    </Text>
                  </View>
                </BlurView>
              </View>
            </Animatable.View>
          ))}

          {/* Visual Divider */}
          <Animatable.View
            animation="fadeIn"
            delay={1500}
            className="w-full items-center my-4"
          >
            <View className="flex-row items-center">
              <View className="h-0.5 w-16 bg-rose-200 rounded-full" />
              <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}
                className="mx-2"
              >
                <Entypo name="heart" size={16} color="#FF6B81" />
              </Animatable.View>
              <View className="h-0.5 w-16 bg-rose-200 rounded-full" />
            </View>
          </Animatable.View>

          {/* Signature Section */}
          <Animatable.View
            animation="fadeIn"
            delay={1800}
            className="items-end mr-5 mt-2"
          >
            <Text className="text-lg font-light text-rose-500 italic">
              With all my love,
            </Text>
            <Text className="text-xl font-semibold text-rose-500">
              yours forever
            </Text>
          </Animatable.View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Note;