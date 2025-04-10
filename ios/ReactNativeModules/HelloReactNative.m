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
