#import <Foundation/Foundation.h>
#import <SystemConfiguration/CaptiveNetwork.h>
#import <Cordova/CDVPlugin.h>

@interface CDVConnectedWifi : CDVPlugin {
    
}

- (void)getConnectedWifiInfo:(CDVInvokedUrlCommand*)command;

@end