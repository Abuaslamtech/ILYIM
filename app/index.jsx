import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="font-nunito flex-1 items-center justify-center gap-16 bg-peach p-4">
      <View className="justify-center items-center">
        <Text className="text-4xl text-charcoal font-bold">Welcome Iman</Text>
        <Text className="text-2xl text-grayish"> My Love and Heart's Desire </Text>
      </View>
      <Image
        source={require("../assets/images/iman.png")}
        className="w-72 h-72 rounded-full"
        alt="Iman & Abuaslam"
      />
      <View className="justify-between gap-8 items-center">
        <View className="font-nunito bg-grayish/10 rounded-xl p-4 text-grayish">
          <Text className="text-lg text-grayish">
            I love you Iman (ILYIM).This app is built with love, just for you, my
            sweetheart.
          </Text>
          <Text className="text-lg text-grayish">Thank you for being you!</Text>
        </View>
        <Link className="bg-blush  w-full p-4 rounded-xl" href="/login">
          <Text>Proceed to Login</Text>
        </Link>
      </View>
    </View>
  );
};

export default Home;
