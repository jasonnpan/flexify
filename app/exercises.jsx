import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getExerciseByEquipment } from "../api/exerciseDB";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import ExerciseGroup from "../components/ExerciseGroup";

export default function Exercises() {
  const router = useRouter();
  const [exerciseData, setExerciseData] = useState([]);
  const [gotData, setGotData] = useState(false);

  const item = useLocalSearchParams();
  console.log("got item", item);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item, gotData]);

  const getExercises = async (equipment) => {
    if (!gotData) {
      let data = await getExerciseByEquipment(equipment);
      setExerciseData(data);
      setGotData(true);
    }
  };

  const handlePress = () => {
    router.back();
    setGotData(false);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={handlePress}
        style={{
          height: hp(5),
          width: hp(5),
          marginTop: hp(6),
          marginLeft: hp(2),
        }}
        className="bg-black mx-4 absolute rounded-full"
      >
        <AntDesign name="leftcircle" size={hp(5)} color="white" />
      </TouchableOpacity>

      <View className="mx-8 space-y-3 mt-8">
        <Text
          style={{ fontSize: hp(3), fontFamily: "Montserrat-Regular" }}
          className="font-semibold text-neutral-700"
        >
          {item.displayName} Exercises
        </Text>
        <View className="mb-10">
          <ExerciseGroup data={exerciseData} />
        </View>
      </View>
    </ScrollView>
  );
}
