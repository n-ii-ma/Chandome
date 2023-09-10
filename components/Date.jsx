import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ms, vs } from "react-native-size-matters";

import AnimatedComponent from "./AnimatedComponent";

const Date = ({
  gregorianToday,
  jalaliToday,
  hijriToday,
  isHoliday,
  holidayDesc,
}) => (
  <LinearGradient
    style={styles.container}
    colors={["rgba(1, 158, 255, 0.9)", "rgba(63, 38, 172, 0.9)"]}
  >
    <AnimatedComponent
      from={{ opacity: 0, translateX: -ms(50) }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "spring" }}
      style={{ width: "100%" }}
    >
      <Text style={[styles.otherDateTxt, { alignSelf: "flex-start" }]}>
        {gregorianToday}
      </Text>
    </AnimatedComponent>
    <View style={styles.jalaliContainer}>
      <AnimatedComponent
        from={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ width: "100%" }}
      >
        <Text
          style={[
            styles.jalaliDateTxt,
            { backgroundColor: isHoliday ? "red" : "rgb(0, 200, 255)" },
          ]}
        >
          {jalaliToday}
        </Text>
      </AnimatedComponent>
      {holidayDesc && (
        <AnimatedComponent
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 800,
          }}
        >
          <Text style={styles.holidayDescTxt}>{holidayDesc}</Text>
        </AnimatedComponent>
      )}
    </View>
    <AnimatedComponent
      from={{ opacity: 0, translateX: ms(50) }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "spring" }}
      style={{ width: "100%" }}
    >
      <Text style={[styles.otherDateTxt, { alignSelf: "flex-end" }]}>
        {hijriToday}
      </Text>
    </AnimatedComponent>
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
  },
  jalaliContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  jalaliDateTxt: {
    fontSize: ms(24),
    color: "#fff",
    alignSelf: "center",
    paddingHorizontal: ms(20),
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
    fontSize: ms(20),
    color: "#fff",
  },
  holidayDescTxt: {
    color: "#fff",
    fontSize: ms(12),
    marginTop: vs(10),
    textAlign: "center",
  },
});
