// Page1.js
import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {globalStyle} from "../../styles/styles"
import {DropDown} from "../_atoms/CDropDown";
import {MY_MENU} from "../../const/const";

const Stack = createStackNavigator();

const Mypage = () => {
  return (
    <View>
      <Text style={[globalStyle.bg,globalStyle.fontBold]}>MypageMain Content</Text>
      {/* 다른 내용 추가 */}
        <DropDown data={MY_MENU}/>
    </View>
  );
};

export default Mypage;
