//
//  quotes.swift
//  quotes
//
//  Created by Мисиков Марат on 06.05.2023.
//

import WidgetKit
import SwiftUI

struct Model: TimelineEntry {
    var date : Date
    var quoteData : quotesDetails
}

struct Provider : TimelineProvider {
    
    func placeholder(in context: Context) -> Model {
        
        return Model(date: Date(), quoteData: quotesDetails(text: "quotesP1Entry", author: "quotesP1author", image: "mountain"))
    }
    
    typealias Entry = Model
    
    func getSnapshot(in context: Context, completion: @escaping (Model) -> ()) {
        
        let loadingData = Model(date: Date(), quoteData: quotesDetails(text: "quotesP1Entry", author: "quotesP1author", image: "mountain"))
        
        completion(loadingData)
    }
    
    func getTimeline(in context: Context, completion: @escaping (Timeline<Model>) -> () ) {

        let currentDate = Date()
  
        let nextUpdate = Calendar.current.date(byAdding: .hour, value: 24, to: currentDate)!
        
        let entry = [Model(date: Date(), quoteData: QuotesProvider.randomQuote())]
            
        let timeline = Timeline(entries: entry, policy: .after(nextUpdate))
        completion(timeline)
        
    }
}


struct WidgetView : View {
    
    var data : Model
   
    var body: some View{
        
        if UIDevice.isIPhone {
            
            IphoneView(modelData: data)
            
        } else {
            
            IpadView(modelData: data)
            
        }
        
    }
}

@main
struct MainWidget : Widget{
    
    var body: some WidgetConfiguration{
        
        StaticConfiguration(kind: "any identifier...", provider: Provider()){ data in
            WidgetView(data: data )
        }
        .description(Text("quotesSetDesc"))
        .configurationDisplayName(Text("quotesSetTitle"))
        .supportedFamilies([.systemMedium, .systemLarge])
    }
}

struct briteProject_Previews: PreviewProvider {
    static var previews: some View {
        WidgetView(data: Model(date: Date(), quoteData: quotesDetails(text: "quotesP1Entry", author: "quotesP1author", image: "mountain")))
            .previewContext(WidgetPreviewContext(family: .systemMedium))
        WidgetView(data: Model(date: Date(), quoteData: quotesDetails(text: "quotesP1Entry", author: "quotesP1author", image: "mountain")))
            .previewContext(WidgetPreviewContext(family: .systemLarge))
    }
}



extension UIDevice {
    static var isIPad: Bool {
        UIDevice.current.userInterfaceIdiom == .pad
    }
    
    static var isIPhone: Bool {
        UIDevice.current.userInterfaceIdiom == .phone
    }
}


