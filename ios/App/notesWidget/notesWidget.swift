//
//  notesWidget.swift
//  notesWidget
//
//  Created by Мисиков Марат on 06.05.2023.
//

import WidgetKit
import SwiftUI


struct Model: TimelineEntry {
    var date : Date
    var widgetData : [JSONModel]
}

struct JSONModel : Decodable, Hashable{
    let tm_title: String
    let tm_entrie_id: String
    let tm_type : String
}

struct Provider : TimelineProvider {
    
    func placeholder(in context: Context) -> Model {
        
        return Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_title: "notePlaceholder",tm_entrie_id: "1", tm_type: "page"), count: 10))
    }
    
    typealias Entry = Model
    
    func getSnapshot(in context: Context, completion: @escaping (Model) -> ()) {
        
        let loadingData = Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_title: "notePlaceholder",tm_entrie_id: "1", tm_type: "page"), count: 10))
        
        completion(loadingData)
    }
    
    func getTimeline(in context: Context, completion: @escaping (Timeline<Model>) -> () ) {

        getData{ (modelData) in
            
            let date = Date()
            let data = Model(date: date , widgetData: modelData)
         
            let nextUpdate = Calendar.current.date(byAdding: .minute, value: 5, to: date)
            
            let timeline = Timeline(entries: [data], policy: .after(nextUpdate!))
            
            completion(timeline)
        }
    }
}


struct WidgetView : View {
    
    var data : Model
    var columns: [GridItem] = [
        GridItem(.fixed(150), spacing: 16),
        GridItem(.fixed(150), spacing: 16),
    ]

    @Environment(\.widgetFamily) var family
    
    var body: some View{
        
        VStack(alignment: .leading) {
   
           HStack(alignment: .center){
               Group{
                   Text("notesTitle")
                       .font(.system(size: 14))
                       .foregroundColor(Color("textColor"))
                    .padding(.top, 5)
               
               }
           }.frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealWidth: UIScreen.main.bounds.width, maxWidth: UIScreen.main.bounds.width, minHeight: 30, idealHeight: 30, maxHeight: 30, alignment: .center)
            
            
            if data.widgetData.count == 0 {
                
                EmptyView(widgetFam: family)
                
               
            } else {
                
                if UIDevice.isIPhone {
                    IphoneView(dataView: data, columnsView: columns, widgetFam: family)
                } else {
                    IpadView(dataView: data, columnsView: columns, widgetFam: family)
                }
                
            }
        }.frame(minWidth: .zero, maxWidth: .infinity, minHeight: .zero, maxHeight: UIScreen.main.bounds.height, alignment: .top)
         .background(Color("backgroundColor"))
    }
}

@main
struct MainWidget : Widget{
    
    var body: some WidgetConfiguration{
        
        StaticConfiguration(kind: "any identifier...", provider: Provider()){ data in
             
            WidgetView(data: data )
    
        }
        .description(Text("notesSetDesc"))
        .configurationDisplayName(Text("notesTitle"))
        .supportedFamilies([.systemMedium, .systemLarge])

    }
}

struct briteProject_Previews: PreviewProvider {
    static var previews: some View {
        WidgetView(data: Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_title: "Самая лучшая заметка для соблю",tm_entrie_id: "1", tm_type: "page"), count: 10)))
            .previewContext(WidgetPreviewContext(family: .systemLarge))
        
        WidgetView(data: Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_title: "Самая лучшая заметка для соблю",tm_entrie_id: "1", tm_type: "page"), count: 10)))
            .previewContext(WidgetPreviewContext(family: .systemMedium))
    }
}

