import { React, useState } from "react";
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
import jjangOff from "../../assets/play/jang_off.png";
import jjangOn from "../../assets/play/jang_on.png";
import ggamOff from "../../assets/play/찌off.png";
import ggamOn from "../../assets/play/찌on.png";
import bboOff from "../../assets/play/빠off.png";
import bboOn from "../../assets/play/빠on.png";

const Play = ({ navigation }) => {
  let [startBtnFlag, setStartBtnFlag] = useState(true);

  let [jjangImgBtnFlag, setJjangImgBtnFlag] = useState(true);
  let [ggamImgBtnFlag, setGgamImgBtnFlag] = useState(true);
  let [bboImgBtnFlag, setBboImgBtnFlag] = useState(true);

  let [imgBtnFlag, setImgBtnFlag] = useState(true);

  let changeJjangImage = () =>
    setJjangImgBtnFlag((previousState) => !previousState);
  let changeGgamImage = () =>
    setGgamImgBtnFlag((previousState) => !previousState);
  let changeBboImage = () =>
    setBboImgBtnFlag((previousState) => !previousState);

  let jjangPath = jjangImgBtnFlag ? jjangOn : jjangOff;
  let ggamPath = ggamImgBtnFlag ? ggamOn : ggamOff;
  let bboPath = bboImgBtnFlag ? bboOn : bboOff;

  let stateWrrap = null;
  let loadingWrrap = null;
  if (imgBtnFlag) {
    loadingWrrap = null;
  } else {
    loadingWrrap = (
      <View style={styles.loadingWrrap}>
        <Text style={styles.loadingText}> 결과 대기중</Text>
      </View>
    );
  }
  if (startBtnFlag) {
    stateWrrap = (
      <View style={styles.btnWrrap}>
        <View style={styles.startBtnWrrap}>
          <Pressable
            style={styles.startBtn}
            onPress={() => setStartBtnFlag(!startBtnFlag)}
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
    );
  } else {
    stateWrrap = (
      <>
        <View style={styles.jgbBtnWrrap}>
          <View style={styles.jjangWrrap}>
            <Pressable
              onPress={() => {
                if (imgBtnFlag) {
                  setImgBtnFlag(false);
                  changeJjangImage();
                }
              }}
            >
              <Image
                resizeMode="contain"
                style={jjangImgBtnFlag ? styles.jgbImg : styles.jImgOn}
                source={jjangPath}
              />
            </Pressable>
          </View>
          <View style={styles.jjangWrrap}>
            <Pressable
              onPress={() => {
                if (imgBtnFlag) {
                  setImgBtnFlag(false);
                  changeGgamImage();
                }
              }}
            >
              <Image
                resizeMode="contain"
                style={ggamImgBtnFlag ? styles.jgbImg : styles.gImgOn}
                source={ggamPath}
              />
            </Pressable>
          </View>
          <View style={styles.jjangWrrap}>
            <Pressable
              onPress={() => {
                if (imgBtnFlag) {
                  setImgBtnFlag(false);
                  changeBboImage();
                }
              }}
            >
              <Image
                resizeMode="contain"
                style={bboImgBtnFlag ? styles.jgbImg : styles.bImgOn}
                source={bboPath}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.endBtnWrrap}>
          <Pressable
            style={styles.endBtn}
            onPress={() => {
              if (imgBtnFlag) {
                setStartBtnFlag(!startBtnFlag);
              } else {
              }
            }}
          >
            <Text style={styles.btnText}>그만하기</Text>
          </Pressable>
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.webViewWrrap}>
          {loadingWrrap}
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
          {stateWrrap}
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
  loadingWrrap: {
    position: "absolute",
    backgroundColor: "#0000007d",
    height: "100%",
    zIndex: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 30, // 수정: "1rem" 대신 숫자 값을 사용
    color: "white",
    fontFamily: "고령딸기체",
  },
  webViewWrrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    width: "95%",
    height: "60%",
    borderColor: "#CA884B",
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
    borderColor: "#CA884B",
    backgroundColor: "#bd5b00",
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
    height: 40,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#CA884B",
    backgroundColor: "#D1825B",
  },
  coinWrrap: {
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: 40,
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: "row",
    borderColor: "#CA884B",
    backgroundColor: "#D1825B",
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
    backgroundColor: "#82BBB5",
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
    backgroundColor: "#573b00",
  },
  btnText: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "고령딸기체",
  },
  jgbBtnWrrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "95%",
    height: 120,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#CA884B",
    backgroundColor: "#D1825B",
    marginBottom: 10,
  },
  jjangWrrap: {
    width: "30%",
    height: 120,
    flexDirection: "column",
  },
  jgbImg: {
    width: "100%",
    height: "100%",
  },
  jImgOn: {
    width: "100%",
    height: "105%",
  },
  gImgOn: {
    width: "100%",
    height: "106%",
  },
  bImgOn: {
    width: "100%",
    height: "104%",
  },
  endBtnWrrap: {
    width: "95%",
  },
  endBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#573b00",
  },
});

export default Play;
