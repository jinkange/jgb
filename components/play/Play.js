// Page1.js
import React from "react";
import {View, Text, StyleSheet, Button, Platform, ImageBackground} from "react-native";
import WebView from "react-native-webview";
import {STREMING_URL} from "../../const/const";
import {SafeAreaView} from "react-native-safe-area-context";
import background from "../../assets/main/background.png";

const Play = ({navigation}) => {
  return Platform.OS === "web" ? (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background} resizeMode="cover">
        <View style={styles.webViewWrrap}>
          <iframe src={"http://27.124.206.159:200" + STREMING_URL} height={"100%"} width={"100%"} />
        </View>
        <View>
          <Text>별명/코인/티켓</Text>
        </View>
        <Button title="시작하기" />
        <Button title="나가기" onPress={() => navigation.navigate("HOME")} />
      </ImageBackground>
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} style={styles.background} resizeMode="cover">
        <View style={styles.webViewWrrap}>
          <WebView
            androidHardwareAccelerationDisabled={true}
            source={{uri: "http://27.124.206.159:200/mjpeg/1"}} // 웹페이지의 URL을 설정
            style={styles.webview}
          />
        </View>
        <View style={styles.padWrrap}>
          <Text>별명/코인/티켓</Text>
          <Button title="시작하기" />
          <Button title="나가기" onPress={() => navigation.navigate("HOME")} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //justifyContent: "center",
    //alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webview: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  webViewWrrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    width: "95%",
    height: "50%",
    borderColor: "#8fggggg",
    borderRadius: 15,
    borderWidth: 5,
  },
  padWrrap: {
    width: "100%",
    height: "50%",
  },
});

export default Play;
