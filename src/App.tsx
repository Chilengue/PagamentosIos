import React from "react"
import { Text, View } from "react-native"

 export const App: React.FC =()=> {
    return(
            <View
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text> Wallet App</Text>
            </View>
    )
}

