// Common/Header.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import profile from "../../assets/main/profile.png";
import silver_coin from "../../assets/main/silver_coin.png";
import gold_coin from "../../assets/main/gold_coin.png";
const Header = () => {
  return (
    <View style={styles.root}>
      <View style={styles.userRoot}>
        <View>
          <Image style={styles.userNameImg} source={profile} />
        </View>
        <View>
          <Text style={styles.userNameText}>진민강</Text>
        </View>
      </View>
      <View style={styles.coinRoot}>
        <View style={styles.coinWrap}>
          <View>
            <Image style={styles.coinImg} source={silver_coin} />
          </View>
          <View style={styles.coinTextWrap}>
            <Text style={styles.coinText}>0</Text>
          </View>
        </View>
        <View style={styles.coinWrap}>
          <View>
            <Image style={styles.coinImg} source={gold_coin} />
          </View>
          <View style={styles.coinTextWrap}>
            <Text style={styles.coinText}>10</Text>
          </View>
          {/* <View style={styles.coinTextPlusWrap}>
              <Text style={styles.coinTextPlus}>+</Text>
            </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // 가로 중앙 정렬
    backgroundColor: "#ffbe89",
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    height: 45,
    maxHeight: 45,
    minHeight: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  userRoot: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 130,
    height: 30,
    backgroundColor: "#fc9643",
    borderRadius: 15,

    alignItems: "center", // 수평 중앙 정렬
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  coinRoot: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
  },
  coinWrap: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 2,
    height: 30,
    backgroundColor: "#fc9643",
    borderRadius: 15,

    justifyContent: "space-between",
    alignItems: "center", // 수평 중앙 정렬
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  userNameText: {
    fontSize: 15, // 수정: "1rem" 대신 숫자 값을 사용
    color: "white",
    fontFamily: "고령딸기체",
  },
  userNameImg: {
    width: 25,
    height: 25,
  },
  coinText: {
    fontSize: 15, // 수정: "1rem" 대신 숫자 값을 사용
    color: "white",
    fontFamily: "고령딸기체",
  },
  coinImg: {
    width: 20,
    height: 20,
  },
  coinTextWrap: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
    paddingVertical: 2,
    backgroundColor: "#ff7300",
    textAlign: "center",
    alignItems: "center", // 수평 중앙 정렬
  },
  coinTextPlusWrap: {
    width: 20,
    borderRadius: 15,
    padding: 2,
    backgroundColor: "#ffffff",
    textAlign: "center",
    alignItems: "center", // 수평 중앙 정렬
  },
  // coinTextPlus: {
  //   fontSize: 20, // 수정: "1rem" 대신 숫자 값을 사용
  //   color: "white",
  //   fontFamily: "고령딸기체",
  // },
});

export default Header;
