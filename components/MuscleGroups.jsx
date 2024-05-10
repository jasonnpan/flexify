import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { muscles } from '../constants';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';

export default function MuscleGroups() {
  const router = useRouter();

  return (
    <View>
      <Text
        style={{
          fontSize: hp(2.5),
          color: "#dbe2e6",
          textAlign: "center",
          fontFamily: "Montserrat-Bold",
          marginBottom: "3%",
        }}
        className="font-semibold"
      >
        EXERCISES
      </Text>

      <FlatList
        data={muscles}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
          justifyContent: 'space-around'
        }}
        renderItem={({item, index}) => <MuscleGroupCard index={index} router={router} item={item} />}
      />
    </View>
  );
}

const MuscleGroupCard = ({item, router, index}) => {
  const handlePress = () => {
    router.push({pathname: '/exercises', params: item});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={{width: wp(40), height: wp(52)}}
        className="flex mb-4">
          <Image
            source={item.image}
            resizeMode="cover"
            style={{width: wp(40), height: wp(52)}}
            className="rounded-[20px]"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            resizeMode='cover'
            style={{width: wp(40), height: wp(15)}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0 rounded-[20px]"
          >
          <Text
            style={{fontSize: hp(2), fontFamily: "Montserrat-Regular"}}
            className="text-white text-center pt-6"
          >
            {item?.displayName}
          </Text>

          </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
