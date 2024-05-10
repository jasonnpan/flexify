import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function ExerciseGroup({ data }) {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-around",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard index={index} router={router} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ item, router, index }) => {
console.log(item);
  return (
    <View>
      <TouchableOpacity
        className="flex py-3 space-y-2"
        onPress={() =>
          router.push({ pathname: "/exerciseInstructions", params: item })
        }
      >
        <View className="bg-netural-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(40), height: hp(20)}}
            className="rounded-[25px]"
          />
        </View>

        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold tracking-wide text-center"
          ellipsizeMode="tail"
        >
          {item?.name?.length > 16 ? item.name.slice(0, 16) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
