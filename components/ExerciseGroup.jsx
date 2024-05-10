import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
            source={{uri: item.gifUrl}}
            style={{ width: wp(36), height: hp(20)}}
            className="rounded-[25px]"
          />
        </View>

        <Text
          style={{ fontSize: hp(1.7), fontFamily:'Montserrat-Regular' }}
          className="text-neutral-700 font-semibold tracking-wide text-center"
          ellipsizeMode="tail"
        >
          {item?.name?.length > 16 ? item.name.slice(0, 16) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
