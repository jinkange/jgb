import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import FontAwesome5Icon from "react-native-vector-icons/AntDesign";
import { React, useState } from "react";

const DropDownListItem = ({title}) => {
    return (
        <Pressable style={[dropDownStyle.dropDownListItem]}>
            <Text style={[dropDownStyle.dropDownListItemText]}>{title}</Text>
        </Pressable>
    )
}

export const DropDown = ({data}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <SafeAreaView style={[dropDownStyle.dropDownWrap, isOpen && dropDownStyle.dropDownWrapOpen]}>
            <Pressable style={dropDownStyle.dropDownSelected}
                       onPress={()=>{setIsOpen(!isOpen)}}
            >
                <Text style={dropDownStyle.dropDownSelectedText}>select</Text>
                <FontAwesome5Icon name={isOpen ? 'up' : 'down'} size={20}/>
            </Pressable>
            {isOpen && <FlatList data={data}
                                 renderItem={({item}) => <DropDownListItem title={item.title}/>}
                                 keyExtractor={item => item.value}
            />
            }

        </SafeAreaView>
    )
}

const dropDownStyle = StyleSheet.create({
    dropDownWrap: {
        width: '100%',
        height: 50,
        borderTopWidth: 1,
        borderStyle: "solid",
        borderTopColor: "#999999",
        borderBottomWidth: 1,
        borderBottomColor: "#999999",
        backgroundColor:'#ffffff'
    },
    dropDownWrapOpen: {
        height: 'fit-content'
    },
    dropDownSelected: {
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    dropDownSelectedText: {
        fontFamily: 'dongleLight',
        fontSize: 25,
    },
    dropDownListItem : {
       height:50,
       borderBottomColor:'#eeeeee',
       borderStyle:'solid',
       borderBottomWidth:1,
    },
    dropDownListItemText : {
        fontFamily:'dongleRegular',
        color:'#191919',
        lineHeight:50,
        fontSize:20,
        textAlign:'center'
    }
})