import "react-native"

interface HelloReactNativeType {
    returnHello: () => Promise<string>
}

declare  module "react-native" {
    interface  NativeModulesStatic {
        HelloReactNative: HelloReactNativeType
    }
}
