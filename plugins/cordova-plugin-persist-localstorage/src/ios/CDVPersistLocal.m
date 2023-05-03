#import <Cordova/CDV.h>
#import "CDVPersistLocal.h"

@implementation CDVPersistLocal

- (void)save:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;

    NSString* value = [command.arguments objectAtIndex:0];
    [[NSUserDefaults standardUserDefaults] setObject:value forKey:@"PersistLocalstorage"];
    BOOL saved = [[NSUserDefaults standardUserDefaults] synchronize];

    if (saved) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)sync:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;

    NSString* value = [[NSUserDefaults standardUserDefaults] stringForKey:@"PersistLocalstorage"];

    if (value) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:value];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)wipe:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;

    [[NSUserDefaults standardUserDefaults] removeObjectForKey:@"PersistLocalstorage"];

    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
