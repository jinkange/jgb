import {React, useCallback, useEffect} from "react";
import {StyleSheet, Alert} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import {BackHandler} from "react-native";

import FontAwesome5Icon from "react-native-vector-icons/AntDesign";

import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Play from "./components/play/Play";
import Setting from "./components/setting/Setting";
import Mypage from "./components/mypage/Mypage";
//import Shop from "./components/shop/Shop";

import ProductDetail from "./components/shop/ProductDetail";
import ProductList from "./components/shop/ProductList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={TabNavi}
        options={{
          headerShown: true,
          header: () => <Header title="header" />,
        }}
      />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{
          headerShown: true,
          header: () => <Header title="header" />,
        }}
      />
    </Stack.Navigator>
  );
};

const Shop = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} options={{headerShown: false}} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const TabNavi = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffbe89",
          height: 50,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#0000006e",
        tabBarPressColor: "#0000006e ",
      }}>
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="home" size={20} color={"#0000006e"} />,
        }}
      />
      <Tab.Screen
        name="SHOP"
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="isv" size={20} color={"#0000006e"} />,
        }}
      />
      <Tab.Screen
        name="MYPAGE"
        component={Mypage}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="user" size={20} color={"#0000006e"} />,
        }}
      />
      <Tab.Screen
        name="SETTING"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome5Icon name="tool" size={20} color={"#0000006e"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("앱 종료", "앱을 종료하시겠습니까?", [
        {text: "취소", onPress: () => null},
        {text: "확인", onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    // 리스너 등록
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      // 이벤트 리스너 해제
      backHandler.remove();
    };
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    고령딸기체: require("./assets/fonts/고령딸기체+TTF.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },
});
