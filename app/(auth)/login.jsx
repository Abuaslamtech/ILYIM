import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";

const login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
const router = useRouter();

  const handleLogin = () => {
    // Authentication logic here
    
    if(username.toLowerCase() === "abdullahi" || username.toLowerCase() === "abuaslam") {
      setLoggedIn(true);
      router.replace("/(tabs)");
     
    } else{
      alert("Oops .. Thats not your boyfriend's name");
    }
  }

  return (
    <View className="font-nunito flex-1 items-center justify-center gap-16 bg-peach p-4">
      <View className="justify-center items-center">
        <Text className="text-4xl text-charcoal font-bold">Welcome Back</Text>
        <Text className="text-2xl text-grayish">Log into your dashboard </Text>
      </View>
      <Image
        source={require("../../assets/images/lock.png")}
        className="w-40 h-40 rounded-full"
        alt="Iman & Abuaslam"
      />
      <View className="w-screen justify-between gap-8 items-center">
        <TextInput
          placeholder="Enter your boyfriend's name"
          style={{
            borderColor: '#FF6B81',
            borderWidth: 1,
            borderRadius: 5,
          }}
          className="w-4/5 border border-peach bg-white p-4 rounded"
          onChangeText={setUsername}
        />

        <Pressable className="items-center justify-center text-center bg-blush  w-4/5 p-4 rounded-xl" onPress={handleLogin}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default login;
