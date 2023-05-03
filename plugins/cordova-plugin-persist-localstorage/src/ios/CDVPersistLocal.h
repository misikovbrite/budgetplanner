#import <Cordova/CDV.h>

@interface CDVPersistLocal : CDVPlugin { }

- (void)save:(CDVInvokedUrlCommand*)command;
- (void)sync:(CDVInvokedUrlCommand*)command;
- (void)wipe:(CDVInvokedUrlCommand*)command; 

@end
