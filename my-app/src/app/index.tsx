import React from "react";
import { ImageBackground, Pressable, Text, View, Image } from "react-native";
import Constants from "expo-constants"
import Logo from "../components/Logo"
import Texto from "../components/Texto"
const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/GusttavoLima.png")}
      className="flex justify-center items-center"
    >
      <View className="w-full h-full flex justify-evenly items-center" style ={{marginTop: statusBarHeight + 8}}>
        <Logo></Logo>
        <Texto></Texto>
        <View className="flex flex-row gap-5">
          <Pressable className="bg-purple-500 w-32 h-12 flex justify-center items-center rounded">
            <Text className="text-slate-100">Register</Text>
          </Pressable>
          <Pressable className="w-32 h-12 flex justify-center items-center">
            <Text className="text-slate-100">Entrar</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
