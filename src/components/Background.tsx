import { StyleSheet, Text, ImageBackground } from "react-native";
import { ms } from "react-native-size-matters";
import * as Application from "expo-application";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Date from "./Date";

import type { BackgroundProps } from "@/global/types";

const Background = ({ isHoliday, holidayDesc }: BackgroundProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../../assets/images/black_sand_dunes.jpg")}
      resizeMode="cover"
      alt="Black sand dunes"
      style={[
        styles.container,
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
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
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
