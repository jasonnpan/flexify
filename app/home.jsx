import React from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageCarousel from "../components/CarouselDisplay";
import { LinearGradient } from "expo-linear-gradient";
import EquipmentGroups from "../components/EquipmentGroups";

export default function Home() {

  return (
    <LinearGradient
      colors={["#ffffff", "#36454f", "#0e1114"]}
      style={{ flex: 1 }}
      start={{ x: 0.2, y: 0.1 }}
      end={{ x: 0.2, y: 0.75 }}
    >
      <SafeAreaView className="flex-1 flex space-y-5" edges={["top"]}>
        <StatusBar barStyle="dark-content" />
        <View className="flex-row">
          {/* AVATAR */}
          <View className="flex justify-center items-center space-y-2">
            <Image
              source={require("../assets/images/headshot.jpg")}
              style={{ height: hp(7), width: hp(7), borderRadius: 20 }}
              className="ml-6"
            />
          </View>

          {/* BANNER MESSAGE */}
          <View className="flex-column mx-5">
            <View>
              <Text
                className="font-bold tracking-wider text-black pt-2"
                style={{ fontFamily: 'Montserrat-Bold', fontSize: hp(1.3) }}
              >
                WELCOME BACK!
              </Text>
            </View>
            <View>
              <Text
                className="font-bold text-black pt-1"
                style={{ fontFamily: 'Montserrat-Bold', fontSize: hp(2.3) }}
              >
                TIME TO GET FLEXY!
              </Text>
            </View>
          </View>
        </View>

        {/* IMAGE CAROUSEL */}
        <View className="flex-1" style={{ marginBottom: "-60%" }}>
          <ImageCarousel />
        </View>

        {/* MUSCLE GROUPS LIST */}
        <View className="flex-1">
          <EquipmentGroups />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
