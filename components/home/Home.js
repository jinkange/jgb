import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
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
const Acade = (props) => {
  let stateView = null;
  let stateBtn = null;
  if (props.gameState == 1) {
    stateBtn = (
      <View style={styles.BtnWrap}>
        <Pressable
          style={styles.Btn}
          // 다른 페이지로 이동
          onPress={() => props.navigation.navigate("Play")}
        >
          <Text style={styles.BtnText}>PLAY</Text>
        </Pressable>
      </View>
    );
  } else if (props.gameState == 2) {
    stateBtn = (
      <View style={styles.BtnWrap}>
        <Pressable
          style={styles.WatcherBtn}
          // 다른 페이지로 이동
          onPress={() => props.navigation.navigate("Play")}
        >
          <Text style={styles.BtnText}>관전하기</Text>
        </Pressable>
      </View>
    );
    stateView = (
      <View style={styles.titleTextUseWrap}>
        <Text style={styles.titleTextUse}> 사용중</Text>
      </View>
    );
  } else if (props.gameState == 3) {
    stateBtn = (
      <View style={styles.BtnWrap}>
        <Pressable
          style={styles.UseBtn}
          // 다른 페이지로 이동
        >
          <Text style={styles.BtnText}>점검중</Text>
        </Pressable>
      </View>
    );
    stateView = (
      <View style={styles.titleTextUseWrap}>
        <Text style={styles.titleTextUse}> 점검중</Text>
      </View>
    );
  }
  return (
    <View style={styles.viewWrap}>
      <View style={styles.viewImgWrap}>
        {stateView}
        <View style={styles.titleTextWrap}>
          <Text style={styles.titleText}>짱깸뽀 {props.gameNum}번 오락기</Text>
        </View>
        <Image style={styles.viewImg} source={game} resizeMode="contain" />
      </View>
      {stateBtn}
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView style={styles.viewRoot}>
          <View style={styles.scrollViewWrap}>
            <Acade gameState={1} gameNum={1} navigation={navigation} />
            <Acade gameState={2} gameNum={2} navigation={navigation} />
            <Acade gameState={3} gameNum={3} navigation={navigation} />
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
  scrollViewWrap: {
    // justifyContent: "center", // 세로 중앙 정렬
    alignItems: "center", // 가로 중앙 정렬
    flexDirection: "column",
  },
  viewWrap: {
    flexDirection: "column",
    alignItems: "center",
    width: 250, // 원하는 너비로 설정
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
    fontSize: 13, // 수정: "1rem" 대신 숫자 값을 사용
    color: "white",
    fontFamily: "고령딸기체",
  },
  titleTextUseWrap: {
    position: "absolute",
    backgroundColor: "#0000007d",
    height: 225,
    zIndex: 10,
    width: "100%",
    top: 30,
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
    height: 225,
    minHeight: 225,
    maxHeight: 225,
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
  UseBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#573b00",
  },
  WatcherBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#19a5f7",
  },
  BtnText: {
    fontSize: 15,
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
