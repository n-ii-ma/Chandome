import * as Application from "expo-application";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ms } from "@/utils/scaling";

import Date from "./Date";

import type { BackgroundProps } from "@/global/types";

const Background = ({ isHoliday, holidayDesc }: BackgroundProps) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Image
        source={require("../../assets/images/black_sand_dunes.jpg")}
        contentFit="cover"
        alt="Black sand dunes"
        style={StyleSheet.absoluteFill}
      />
      <View
        style={[
          styles.content,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <Date isHoliday={isHoliday} holidayDesc={holidayDesc} />
        <Text style={[styles.versionTxt, { bottom: insets.bottom }]}>
          v{Application.nativeApplicationVersion}
        </Text>
      </View>
    </>
  );
};

export default Background;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  versionTxt: {
    fontFamily: "Vazirmatn-Regular",
    fontSize: ms(10),
    color: "grey",
    position: "absolute",
  },
});
