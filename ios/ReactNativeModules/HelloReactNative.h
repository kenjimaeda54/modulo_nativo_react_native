//
//  HelloReactNativeModule.h
//  nativo
//
//  Created by kenjimaeda on 10/04/25.
//
#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>


@interface HelloReactNative : NSObject  <RCTBridgeModule>

- (NSString *)returnHello;



@end

