import React from "react";
import {View, ScrollView, StyleSheet, Image, Text, Pressable, ImageBackground} from "react-native";
import background from "../../assets/main/background.png";
import game from "../../assets/game.png";

{
  /* <Button
            title="통신 테스트"
            // 다른 페이지로 이동
            onPress={() => {
              //const response = axios.get(url);

              const response = aduino.get("/test");
              response.then((response) => {
                console.log(response.data);
              });
            }}
          /> */
}
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background} resizeMode="cover">
        <ScrollView style={styles.viewRoot}>
          <View style={styles.scrikkViewWrap}>
            <View style={styles.viewWrap}>
              <View style={styles.titleTextWrap}>
                <Text style={styles.titleText}>짱깸뽀 1번 오락기</Text>
              </View>
              <View style={styles.viewImgWrap}>
                <Image style={styles.viewImg} source={game} resizeMode="contain" />
              </View>
              <View style={styles.BtnWrap}>
                <Pressable
                  style={styles.Btn}
                  // 다른 페이지로 이동
                  onPress={() => navigation.navigate("Play")}>
                  <Text style={styles.BtnText}>PLAY</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.viewWrap}>
              <View style={styles.titleTextWrap}>
                <Text style={styles.titleText}>짱깸뽀 2번 오락기</Text>
              </View>
              <View style={styles.viewImgWrap}>
                <View style={styles.titleTextUseWrap}>
                  <Text style={styles.titleTextUse}> 사용중</Text>
                </View>
                <Image style={styles.viewImg} source={game} resizeMode="contain" />
              </View>
              <View style={styles.BtnWrap}>
                <Pressable
                  style={styles.Btn}
                  // 다른 페이지로 이동
                  onPress={() => navigation.navigate("Play")}>
                  <Text style={styles.BtnText}>관전하기</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.viewWrap}>
              <View style={styles.titleTextWrap}>
                <Text style={styles.titleText}>짱깸뽀 3번 오락기</Text>
              </View>
              <View style={styles.viewImgWrap}>
                <View style={styles.titleTextUseWrap}>
                  <Text style={styles.titleTextUse}> 점검중</Text>
                </View>
                <Image style={styles.viewImg} source={game} resizeMode="contain" />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  viewRoot: {
    flex: 1,
    // justifyContent: "center", // 세로 중앙 정렬
    // alignItems: "center", // 가로 중앙 정렬
  },
  scrikkViewWrap: {
    justifyContent: "center", // 세로 중앙 정렬
    alignItems: "center", // 가로 중앙 정렬
  },
  viewWrap: {
    width: 250, // 원하는 너비로 설정
    height: "auto",
    justifyContent: "center", // 세로 중앙 정렬
    alignItems: "center", // 가로 중앙 정렬
    paddingHorizontal: 15,
    paddingVertical: 15,

    borderRadius: 15,
    backgroundColor: "#00000022",
    marginTop: 20,

    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  titleTextWrap: {
    backgroundColor: "#7a3700",

    width: "80%",
    height: 30,

    paddingHorizontal: 20,
    paddingVertical: 5,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  titleText: {
    textAlign: "center",
    fontSize: 15, // 수정: "1rem" 대신 숫자 값을 사용
    color: "white",
    fontFamily: "고령딸기체",
  },
  titleTextUseWrap: {
    position: "absolute",
    backgroundColor: "#0000007d",
    height: 225,
    zIndex: 10,
    width: "100%",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextUse: {
    textAlign: "center",
    fontSize: 30, // 수정: "1rem" 대신 숫자 값을 사용
    color: "white",
    fontFamily: "고령딸기체",
  },
  viewImgWrap: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewImg: {
    width: "100%",
    minHeight: 225,
  },
  Btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#25a000",
  },
  BtnText: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "고령딸기체",
  },
  BtnWrap: {
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});

export default Home;
