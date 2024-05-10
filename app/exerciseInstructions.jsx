import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

export default function exerciseInstructions() {
  const item = useLocalSearchParams();
  const router = useRouter();

  // console.log("instructions", item.instructions);
  // console.log("hihihih", item.instructions.replace(',', ' ').replace("  ", ' ').split(".,"));

  return (
    <View className="flex flex-1">
      <Text className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </Text>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          height: hp(4),
          width: hp(4),
          marginTop: hp(2.5),
          marginLeft: hp(2.2),
        }}
        className="bg-white mx-4 absolute rounded-full"
      >
        <AntDesign name="leftcircle" size={hp(4)} color="black" />
      </TouchableOpacity>

      <ScrollView className="mx-4 space-y-5 mt-3">
        <Text style={{ fontSize: hp(1.8), fontFamily: "Montserrat-Bold" }}>
          Equipment:{"  "}
          <Text style={{ fontSize: hp(1.8), fontFamily: "Montserrat-Regular" }}>
            {item?.equipment.replace(",", ", ")}
          </Text>
        </Text>

        <Text style={{ fontSize: hp(1.8), fontFamily: "Montserrat-Bold" }}>
          Primary Muscles:{" "}
          <Text style={{ fontSize: hp(1.8), fontFamily: "Montserrat-Regular" }}>
            {item?.target.replace(",", ", ")}
          </Text>
        </Text>

        <Text style={{ fontSize: hp(1.8), fontFamily: "Montserrat-Bold" }}>
          Secondary Muscles:{"  "}
          <Text style={{ fontSize: hp(1.8), fontFamily: "Montserrat-Regular" }}>
            {item?.secondaryMuscles.replace(",", ", ")}
          </Text>
        </Text>

        <Text style={{ fontSize: hp(1.8), fontFamily: "Montserrat-Bold", marginBottom: -20}}>
          Exercise Instructions:{"\n"}
        </Text>

        <Text style={{ fontSize: hp(1.6), fontFamily: "Montserrat-Regular" }}>
            {item.instructions.replace(',', ' ').replace("  ", ' ').split(".,").map((instruction, index) => {
              return (
                <Text key={instruction} style={{ fontSize: hp(1.7) }}>
                  {index + 1}{". "}
                  <Text
                    style={{
                      fontSize: hp(1.7),
                      fontFamily: "Montserrat-Regular",
                    }}
                  >
                    {instruction}
                  </Text>
                  {"\n"}{"\n"}
                </Text>
              );
            })}
          </Text>
      </ScrollView>
    </View>
  );
}
