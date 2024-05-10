import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getExercisesByBodyPart } from "../api/exerciseDB";
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
  const [exerciseData, setExerciseData] = useState([
    {
      bodyPart: "back",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
      id: "3293",
      instructions: [
        "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
        "Engage your core and pull your shoulder blades down and back.",
        "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
        "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
        "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
        "Alternate sides with each repetition.",
      ],
      name: "archer pull up",
      secondaryMuscles: ["biceps", "forearms"],
      target: "lats",
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/Js4jXbAEKYW8jz",
      id: "0015",
      instructions: [
        "Adjust the machine to your desired weight and height.",
        "Place your hands on the parallel bars with a close grip, palms facing each other.",
        "Hang from the bars with your arms fully extended and your feet off the ground.",
        "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
        "Continue pulling until your chin is above the bars.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
      name: "assisted parallel close grip pull-up",
      secondaryMuscles: ["biceps", "forearms"],
      target: "lats",
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/zJzZxwHW1MBBi4",
      id: "0017",
      instructions: [
        "Adjust the machine to your desired weight and height settings.",
        "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Hang with your arms fully extended and your feet off the ground.",
        "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
        "Continue pulling until your chin is above the handles.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
      name: "assisted pull-up",
      secondaryMuscles: ["biceps", "forearms"],
      target: "lats",
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/kZGmWmtCz-wr59",
      id: "1431",
      instructions: [
        "Adjust the machine to your desired assistance level.",
        "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
        "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
        "Continue pulling until your chin is above the bar.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
      name: "assisted standing chin-up",
      secondaryMuscles: ["biceps", "forearms"],
      target: "lats",
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/kZGmWmtCz-wr59",
      id: "1431",
      instructions: [
        "Adjust the machine to your desired assistance level.",
        "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
        "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
        "Continue pulling until your chin is above the bar.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
      name: "assisted standing chin-up",
      secondaryMuscles: ["biceps", "forearms"],
      target: "lats",
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "https://v2.exercisedb.io/image/kZGmWmtCz-wr59",
      id: "1431",
      instructions: [
        "Adjust the machine to your desired assistance level.",
        "Stand on the foot platform and grip the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Keep your chest up and shoulders back, engage your core, and slightly bend your knees.",
        "Pull your body up by flexing your elbows and driving your elbows down towards your sides.",
        "Continue pulling until your chin is above the bar.",
        "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
      name: "assisted standing chin-up",
      secondaryMuscles: ["biceps", "forearms"],
      target: "lats",
    },
  ]);
  const item = useLocalSearchParams();

  //   useEffect(() => {
  //     if (item && item.name) getExercises(item.name);
  //     const fetchExercises = async () => {
  //       if (item && item.name) {
  //         let data = await getExercises(item.name);
  //         setExerciseData(data);
  //       }
  //     };
  //     fetchExercises();
  //     const timer = setInterval(fetchExercises, 10000000000);
  //     return () => clearInterval(timer);
  //   }, [item]);

  const handleFetchExercises = async () => {
    if (item && item.name) {
      let data = await getExercisesByBodyPart(item.name);
      setExerciseData(data);
    }
  };

  const getExercises = async (bodyPart) => {
    let data = await getExercisesByBodyPart(bodyPart);
    setExerciseData(data);
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
        onPress={() => router.back()}
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
