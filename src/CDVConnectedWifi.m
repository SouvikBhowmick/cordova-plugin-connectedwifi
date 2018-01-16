#import <Cordova/CDV.h>
#import "CDVConnectedWifi.h"

@interface CDVConnectedWifi () {}
@end

@implementation CDVConnectedWifi

- (void)getConnectedWifiInfo:(CDVInvokedUrlCommand*)command
{
    NSDictionary* connectedWifiProperties = [self connectedWifiProperties];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:connectedWifiProperties];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (NSDictionary*)connectedWifiProperties
{
    NSArray *interfaceNames = CFBridgingRelease(CNCopySupportedInterfaces());
    
    NSDictionary *SSIDInfo;
    for (NSString *interfaceName in interfaceNames) {
        SSIDInfo = CFBridgingRelease(CNCopyCurrentNetworkInfo((__bridge CFStringRef)interfaceName));
        BOOL isNotEmpty = (SSIDInfo.count > 0);
        if (isNotEmpty) {
            break;
        }
    }
    
    return SSIDInfo;
}

@end