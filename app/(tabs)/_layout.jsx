import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6B81",
        tabBarInactiveTintColor: "#6E6E6E",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="note"
        options={{
          title: "Notes",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="special"
        options={{
          headerShown:false,
          title: "Special",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="today" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
