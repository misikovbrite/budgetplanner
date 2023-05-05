import Cordova
import WidgetKit

@objc(WidgetRefresh) class WidgetRefresh : CDVPlugin {
    @objc (refresh:)
    func refresh (command: CDVInvokedUrlCommand){

        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR
          )

        let widgetId = command.arguments[0] as? String ?? ""

        if widgetId.count > 0 {

            if #available(iOS 14.0, *) {
                WidgetCenter.shared.reloadTimelines(ofKind: widgetId)
            } else {
                // Fallback on earlier versions
            }


        }
        
        self.commandDelegate!.send(
              pluginResult,
              callbackId: command.callbackId
            )
    }
}
