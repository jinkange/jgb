import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import WebView from "react-native-webview";
import { STREMING_URL } from "../../const/const";
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../../assets/main/background.png";
import gold_coin from "../../assets/main/gold_coin.png";

const Play = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.webViewWrrap}>
          {Platform.OS === "web" ? (
            <iframe
              src={"http://27.124.206.159:200" + STREMING_URL}
              style={styles.webview}
            />
          ) : (
            <WebView
              androidHardwareAccelerationDisabled={true}
              source={{ uri: "http://27.124.206.159:200/mjpeg/1" }} // 웹페이지의 URL을 설정
              style={styles.webview}
            />
          )}
        </View>
        <View style={styles.padWrrap}>
          <View style={styles.infoWraap}>
            <View style={styles.watcherWrrap}>
              <Text style={styles.watcherText}>0 : 예약 / 1 : 관전</Text>
            </View>
            <View style={styles.coinWrrap}>
              <Text style={styles.coinText}>1 회 / </Text>
              <Image style={styles.coinImg} source={gold_coin} />
              <Text style={styles.coinText}> : 1</Text>
            </View>
          </View>
          <View style={styles.btnWrrap}>
            <View style={styles.startBtnWrrap}>
              <Pressable
                style={styles.startBtn}
                onPress={() => navigation.navigate("HOME")}
              >
                <Text style={styles.btnText}>시작하기</Text>
              </Pressable>
            </View>
            <View style={styles.exitBtnWrrap}>
              <Pressable
                style={styles.exitBtn}
                onPress={() => navigation.navigate("HOME")}
              >
                <Text style={styles.btnText}>나가기</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "column",
    //height: "100%",
    //width: "100%",
  },
  background: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  webview: {
    flex: 1,
    //height: "100%",
    //width: "100%",
  },
  webViewWrrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    width: "95%",
    height: "60%",
    borderColor: "#ff9900",
    borderRadius: 15,
    borderWidth: 5,
  },
  padWrrap: {
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    height: "40%",
  },
  infoWraap: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    height: 60,
    borderColor: "#ff9900",
    backgroundColor: "#fd8a2b",
    borderRadius: 10,
    //borderRadius: 5,
    borderWidth: 5,
    marginVertical: 10,
    //paddingHorizontal: 5,
    //paddingVertical: 10,
    alignItems: "center",
  },
  watcherWrrap: {
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ff9900",
    backgroundColor: "#ff9239",
  },
  coinWrrap: {
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: "row",
    borderColor: "#ff9900",
    backgroundColor: "#ff9239",
  },
  watcherText: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "고령딸기체",
  },
  coinText: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "고령딸기체",
  },
  btnWrrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 60,
  },
  coinImg: {
    width: 20,
    height: 20,
  },
  startBtnWrrap: {
    width: "45%",
  },
  startBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#25a000",
  },
  exitBtnWrrap: {
    width: "45%",
  },
  exitBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#fc9643",
  },
  btnText: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "고령딸기체",
  },
});

export default Play;
