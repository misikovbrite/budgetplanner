import WidgetKit

@objc(WidgetRefresh) class WidgetRefresh : CDVPlugin {
    @objc (refresh:)
    func refresh (command: CDVInvokedUrlCommand){
        
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR
          )
        

            
        WidgetCenter.shared.reloadTimelines(ofKind: widgetId)
            


        
        self.commandDelegate!.send(
              pluginResult,
              callbackId: command.callbackId
            )
    }
}
