import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  ZoomIn,
} from "react-native-reanimated";

import {
  getGregorianToday,
  getHijriToday,
  getJalaliToday,
} from "@/utils/dates";
import { ms, vs } from "@/utils/scaling";

import type { DateProps } from "@/global/types";

const Date = ({ isHoliday, holidayDesc }: DateProps) => (
  <LinearGradient
    style={styles.container}
    colors={[
      isHoliday ? "rgba(200, 0, 0, 0.9)" : "rgba(1, 158, 255, 0.9)",
      "rgba(63, 38, 172, 0.9)",
    ]}
  >
    <Animated.View
      entering={FadeInLeft.springify().withInitialValues({
        translateX: -ms(50),
      })}
      style={{ width: "100%" }}
    >
      <Text style={[styles.otherDateTxt, { alignSelf: "flex-start" }]}>
        {getGregorianToday()}
      </Text>
    </Animated.View>
    <View style={styles.jalaliContainer}>
      <Animated.View entering={ZoomIn} style={{ width: "100%" }}>
        <Text
          style={[
            styles.jalaliDateTxt,
            {
              backgroundColor: isHoliday
                ? "rgb(255, 0, 0)"
                : "rgb(0, 200, 255)",
            },
          ]}
        >
          {getJalaliToday().verbose}
        </Text>
      </Animated.View>
      {holidayDesc && (
        <Animated.View entering={FadeIn.duration(800)}>
          <Text style={styles.holidayDescTxt}>{holidayDesc}</Text>
        </Animated.View>
      )}
    </View>
    <Animated.View
      entering={FadeInRight.springify().withInitialValues({
        translateX: ms(50),
      })}
      style={{ width: "100%" }}
    >
      <Text style={[styles.otherDateTxt, { alignSelf: "flex-end" }]}>
        {getHijriToday()}
      </Text>
    </Animated.View>
  </LinearGradient>
);

export default Date;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "60%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    padding: ms(20),
    overflow: "hidden",
  },
  jalaliContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  jalaliDateTxt: {
    fontFamily: "Vazirmatn-Regular",
    fontSize: ms(22),
    textAlign: "center",
    color: "#fff",
    alignSelf: "center",
    paddingHorizontal: ms(18),
    paddingVertical: vs(5),
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  otherDateTxt: {
    fontFamily: "Vazirmatn-Regular",
    fontSize: ms(18),
    color: "#fff",
  },
  holidayDescTxt: {
    fontFamily: "Vazirmatn-Regular",
    fontSize: ms(12),
    textAlign: "center",
    color: "#fff",
    marginTop: vs(10),
  },
});
