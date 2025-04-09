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