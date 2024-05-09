import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

import * as Font from 'expo-font';

export default function Index() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/home2.jpg")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(80) }}
        start={{ x: 0.4, y: 0 }}
        end={{ x: 0.4, y: 0.9 }}
        className={"flex justify-center pb-48 space-y-8"}
      >
        <Animated.View
          className="flex items-center"
          style={{
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({  // fade in animation
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}
        >
          <Text
            className="text-white pb-4 font-bold tracking-wide"
            style={{ fontSize: hp(6), fontFamily: 'Montserrat-Bold' }}
          >
            flexify.
          </Text>
          <Text className="text-white" style={{ fontSize: hp(2.5) }}>
            Find your <Text className="font-bold">perfect</Text> workout.
          </Text>
        </Animated.View>
      </LinearGradient>

      {/* Get Started Button */}
      <Animated.View
        className="fixed bottom-14"
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({  // fade in animation
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity
          onPress={() => router.push('home')}
          style={{ height: hp(6), width: wp(70) }}
          className="bg-gray-100 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
        >
          <Image
            // style={{ height: hp(1), width: wp(2) }}
            className="h-7 w-7 absolute left-4"
            source={require("../assets/images/next.png")}
          />
          <Text style={{ fontSize: hp(2) }} className="text-black pl-7">
            Get Started Now
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
