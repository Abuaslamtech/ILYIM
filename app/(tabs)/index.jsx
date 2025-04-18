import { View, Text, ScrollView, Pressable, StatusBar } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const Index = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  const loveNotes = [
    {
      id: 1,
      title: "A Love That Grew With Time",
      icon: "hourglass",
      content:
        "I've known you for over eleven years now—and still, every time I look at you, I discover something new to admire. You are calm in a world that moves too fast. You steady me. Your presence has always felt like home—quiet, comforting, and safe. When life gets loud, you are my peace.",
    },
    {
      id: 2,
      title: "Your Calming Presence",
      icon: "water",
      content:
        "In a world that rushes and roars, you are my stillness. Your calmness anchors me. You bring peace into my life, not with noise, but with quiet strength. Being with you feels like coming home—a feeling I cherish more than words can express.",
    },
    {
      id: 3,
      title: "The Fire Within You",
      icon: "flame",
      content:
        "Beneath your gentle exterior lies a fierce determination. I've watched you chase dreams, overcome challenges, and move forward with resilience and grace. You inspire me. You lead with quiet power, never needing to prove it—just embodying it.",
    },
    {
      id: 4,
      title: "How You Love",
      icon: "heart",
      content:
        "Your love is patient, deep, and intentional. It's in the way you listen, the way you care, the way you make people feel seen. You love without conditions, with a steady heart and an open soul. Being loved by you is a kind of magic—soft, real, and life-giving.",
    },
    {
      id: 5,
      title: "A Beauty Beyond Words",
      icon: "sparkles",
      content:
        "You are beautiful—not just in the way you look, but in everything you are. It's in your smile, your kindness, your laughter, and the way your spirit lights up every room. Your beauty shines from the inside out, and it's breathtaking.",
    },
    {
      id: 6,
      title: "Forever Grateful",
      icon: "infinite",
      content:
        "After all this time, you're still the one who holds my heart. And I know you always will. I'm grateful every day for the love we share, for the memories we've made, and for the life we continue to build together. You are my everything—and I love you, endlessly.",
    },
  ];

  const LoveCard = ({ item, index }) => {
    const isExpanded = expandedSection === index;

    return (
      <Animatable.View
        animation="fadeIn"
        delay={index * 150}
        className="w-full mb-4"
      >
        <Pressable onPress={() => toggleSection(index)} className="w-full">
          <View
            className={`px-5 py-4 bg-blush/20 rounded-lg ${
              isExpanded ? "bg-blush" : "bg-rose-100"
            }`}
          >
            {/* Header */}
            <View
              className={`w-full flex-row  items-center justify-between rounded-lg p-2  ${
                isExpanded ? "bg-blush" : "bg-rose-100"
              }`}
            >
              <View className="flex-row items-center flex-1">
                <View
                  className={`w-10 h-10 rounded-full items-center justify-center ${
                    isExpanded ? "bg-blush" : "bg-rose-100"
                  }`}
                >
                  <Ionicons
                    name={item.icon}
                    size={20}
                    color={isExpanded ? "white" : "#FF6B81"}
                  />
                </View>
                <Text
                  className={`text-lg font-semibold ml-3 ${
                    isExpanded ? "text-white" : "text-grayish"
                  }`}
                >
                  {item.title}
                </Text>
              </View>
              <MaterialIcons
                name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={24}
                color={isExpanded ? "white" : "#FF6B81"}
              />
            </View>

            {/* Content */}
            {isExpanded && (
              <Animatable.View
                animation="fadeIn"
                duration={300}
                className="mt-4 pb-2"
              >
                <Text className="text-grayish text-base leading-relaxed">
                  {item.content}
                </Text>
              </Animatable.View>
            )}
          </View>
        </Pressable>
      </Animatable.View>
    );
  };

  return (
    <View className="flex-1 bg-rose-50">
      <StatusBar barStyle="dark-content" backgroundColor="#FFE4E1" />
      
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        {/* Header Section - Styled like Gallery header */}
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
            Why I Love You
          </Animatable.Text>
          <Animatable.Text
            animation="fadeIn"
            delay={500}
            duration={1500}
            className="text-sm text-rose-400 tracking-wider mt-1 mb-4"
          >
            Tap each card to read my thoughts
          </Animatable.Text>
        </Animatable.View>

        {/* Love Notes Cards */}
        <View className="w-full px-5 my-2">
          {loveNotes.map((item, index) => (
            <LoveCard key={item.id} item={item} index={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;