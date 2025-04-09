import {useEffect} from "react";
import { NativeModules, StyleSheet, Text, View} from "react-native";

const { HelloReactNative } = NativeModules

export default function App(){
    useEffect(()=>{
      handleKotlinModule()
    })

    async function handleKotlinModule() {
            try {
                const resultado = await HelloReactNative.returnHello()
                console.log(resultado)
            } catch (error) {
                console.log("error modulo")
            }
    };

    return <View style={styles.container}>
        <Text>Ola</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
