import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-reanimated-carousel";
import { carouselImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const width = Dimensions.get("window").width;

export default function ImageCarousel() {
  return (
    <View
      style={{
        borderRadius: 30,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Carousel
        loop
        width={width}
        height={width / 1.8}
        autoPlay={true}
        data={carouselImages}
        scrollAnimationDuration={1000}
        renderItem={carouselItem}
        hasParallaxImages={true}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
        }}
      />
    </View>
  );
}

const carouselItem = ({ item, index }) => {
  return (
    <View style={{ width: width, height: hp(30) }}>
      <Image
        key={index}
        source={item}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};
