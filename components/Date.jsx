import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ms } from "react-native-size-matters";

import AnimatedComponent from "./AnimatedComponent";

const Date = ({ gregorianToday, jalaliToday, hijriToday, isHoliday }) => (
  <LinearGradient
    style={styles.container}
    colors={["rgba(0, 0, 0, 0.9)", "rgba(1, 158, 255, 0.9)"]}
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
  jalaliDateTxt: {
    fontSize: ms(24),
    color: "#fff",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
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
});
