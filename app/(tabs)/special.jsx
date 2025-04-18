import { View, Text, ScrollView, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

const Special = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const target = new Date("2025-08-20T00:00:00");
      const difference = target - now;
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const TimerBox = ({ value, label }) => (
    <View className="items-center justify-center">
      <View className="bg-blush w-20 h-20 items-center justify-center p-2 rounded-lg">
        <Text className="text-3xl font-bold text-white">{value}</Text>
        <Text className="text-xs font-medium text-white/90 mt-1">{label}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-rose-50">
      <StatusBar barStyle="dark-content" backgroundColor="#FFE4E1" />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
      >
        {/* Header Section - Using Gallery header style */}
        <Animatable.View
          animation="fadeInDown"
          duration={1200}
          className="items-center pt-12 pb-4 bg-rose-100/70"
        >
          <View className="bg-white/70 p-5 rounded-full mb-4 shadow-md">
            <MaterialIcons name="cake" size={50} color="#FF6B81" />
          </View>
          <Animatable.Text
            animation="fadeIn"
            duration={1500}
            className="text-3xl font-bold text-rose-600 tracking-wide"
          >
            Your Birthday
          </Animatable.Text>
          <Animatable.Text
            animation="fadeIn"
            delay={500}
            duration={1500}
            className="text-sm text-rose-400 tracking-wider mt-1 mb-4"
          >
            Counting down to your special day
          </Animatable.Text>
        </Animatable.View>

        {/* Countdown Timer */}
        <View className="w-full px-6 mt-8">
          <View className="flex-row items-center justify-between my-4">
            <TimerBox value={timeLeft.days} label="DAYS" />
            <View className="h-10 items-center justify-center">
              <Text className="text-3xl font-light text-rose-400">:</Text>
            </View>
            <TimerBox value={timeLeft.hours} label="HOURS" />
            <View className="h-10 items-center justify-center">
              <Text className="text-3xl font-light text-rose-400">:</Text>
            </View>
            <TimerBox value={timeLeft.minutes} label="MINS" />
            <View className="h-10 items-center justify-center">
              <Text className="text-3xl font-light text-rose-400">:</Text>
            </View>
            <TimerBox value={timeLeft.seconds} label="SECS" />
          </View>
        </View>

        {/* Romantic Message */}
        <Animatable.View
          animation="fadeInUp"
          delay={800}
          className="bg-white rounded-3xl mx-8 mt-12 p-6"
          style={{ elevation: 4 }}
        >
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            duration={4000}
            className="absolute -top-4 right-6"
          >
            <MaterialIcons name="cake" size={32} color="#FF6B81" />
          </Animatable.View>

          <Text className="text-center text-lg font-medium text-gray-700 leading-relaxed">
            Every moment brings us closer to celebrating the day the world became
            brighter because <Text className="text-rose-500 font-bold">you</Text>{" "}
            were born
          </Text>

          <View className="flex-row justify-center mt-4">
            <Animatable.Text
              animation="swing"
              iterationCount="infinite"
              duration={2500}
              className="text-2xl"
            >
              🌸
            </Animatable.Text>
            <Animatable.Text
              animation="swing"
              iterationCount="infinite"
              duration={2500}
              delay={400}
              className="text-2xl"
            >
              💖
            </Animatable.Text>
            <Animatable.Text
              animation="swing"
              iterationCount="infinite"
              duration={2500}
              delay={800}
              className="text-2xl"
            >
              🎂
            </Animatable.Text>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default Special;