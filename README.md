# Motivação
Uso de módulos nativos no React Native

# Features
### Android
- getName será o nome do módulo que precisa procurar no React Native, não precisa ser necessariamente o mesmo nome da classe que criamos, o módulo, é nem o nome do pacote.
  
```kotlin

// o getName sera o nome do modulo a procurar no react native

package com.nativo.reactnativecommunication

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class HelloReactNative (reactContext: ReactApplicationContext):  ReactContextBaseJavaModule(reactContext) {

        override fun getName() = "HelloReactNative"

        @ReactMethod
        fun returnHello(callback: Promise) {
            try {
                callback.resolve("Hello android nativo")
            }catch (exception: Exception){
                callback.reject("error",exception)

            }

        }


}



//=== aplicando

 useEffect(()=>{
      handleKotlinModule()
    })

    async function handleKotlinModule() {
            try {
                //nome HelloReactNative é o nome do getName
                const resultado = await HelloReactNative.returnHello()
                console.log(resultado)
            } catch (error) {
                console.log("error modulo")
            }
    };
```

##
- Precisamos registrar nossos módulos em uma classe responsável por instanciar nossos pacotes.
- Este HelloReactNativePackage que vai ser adicionado no MainApplication, facilitando assim o gerenciamento de novos módulos

```kotlin
package com.nativo.reactnativecommunication

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import java.util.Collections

class HelloReactNativePackage: ReactPackage {

    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(HelloReactNative(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>>  =
        Collections.emptyList()

}


```

## 

- Foi criado no react native um  arquivo .d para lidar com as tipagens


```typescript
import "react-native"

interface HelloReactNativeType {
    returnHello: () => Promise<string>
}

declare  module "react-native" {
    interface  NativeModulesStatic {
        HelloReactNative: HelloReactNativeType
    }
}


```

### IOS
- Infelizmente, no IOS ainda usamos ObjectiveC
- Primeiramente construímos nossas interfaces no módulo h depois implementamos no módulo m
- Aqui o nome do módulo será o mesmo usado no projeto em React Native por este motivo deixei mesmo do Android, assim não preciso identificar qual plataforma. Ambos iram funcionar para Android é IOS

```Objective-C


#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>


@interface HelloReactNative : NSObject  <RCTBridgeModule>

- (NSString *)returnHello;



@end



##implementação da internface

//
//  HelloReactNative.m
//  nativo
//
//  Created by kenjimaeda on 10/04/25.
//
#import "HelloReactNative.h"

@implementation HelloReactNative
 
RCT_EXPORT_MODULE()

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(returnHello) {
  NSString *hello = @"Hello modulo nativo ios";
  return hello;
}



@end


```

##
- Para usar módulo acima é bem simples mesmo caso de uso para Android, pois eu exportei um módulo Assíncrono para usar await

##

- Dica caso precise fazer um novo precisa limpar o projeto antes de iniciar com o comando ***npx react-native clean*** com as setas navega é com o espaço seleciona



