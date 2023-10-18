// Page1.js
import React from "react";
import {View, Text, StyleSheet, Button, Platform} from "react-native";
import WebView from "react-native-webview";
import {STREMING_URL} from "../../const/const";
import {SafeAreaView} from "react-native-safe-area-context";
const Play = ({navigation}) => {
  return Platform.OS === "web" ? (
    <View>
      <View>
        {/* WebView를 사용하여 웹페이지를 표시 */}
        <iframe src={"http://27.124.206.159:200" + STREMING_URL} height={"400"} width={"100%"} />
        <Button title="PLAY" onPress={() => navigation.navigate("Play")} />
      </View>
      <View>
        <Text>별명/코인/티켓</Text>
      </View>
      <Button title="시작하기" />
      <Button title="나가기" onPress={() => navigation.navigate("Home")} />
    </View>
  ) : (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        originWhitelist={["*"]}
        androidHardwareAccelerationDisabled={true}
        source={{uri: "http://27.124.206.159:200/mjpeg/1"}} // 웹페이지의 URL을 설정
        style={{opacity: 0.99, overflow: "hidden"}}
      />
      <View>
        <Text>별명/코인/티켓</Text>
      </View>
      <Button title="시작하기" />
      <Button title="나가기" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webview: {
    opacity: 0.99,
  },
});

export default Play;
