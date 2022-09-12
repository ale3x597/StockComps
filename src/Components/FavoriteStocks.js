import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useState } from "react";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();
const FavoriteScreen = ()=>{
    const [stock, setStock] = useState("")
    const [graph, setgraph] = useState("")

    const navigation = useNavigation();

    useEffect(()=>{
        if(user){
            navigation.replace("StockHome");
        }
    });
    return subscribe

}

const favorites = () => {
    auth.createUserFavorites(stock,graph)
    console.log("create", user.stock)
}
