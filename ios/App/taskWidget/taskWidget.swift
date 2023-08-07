//
//  taskWidget.swift
//  taskWidget
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
    let tm_entrie_id: String
    let tm_title: String
    let tm_cat: String?
    let tm_type : String

}

struct Provider : TimelineProvider {
    
    func placeholder(in context: Context) -> Model {
        
        return Model(date: Date(), widgetData: [JSONModel(tm_entrie_id: "1",tm_title: "Attend the meeting", tm_cat: "private", tm_type: "task"), JSONModel(tm_entrie_id: "1",tm_title: "Make an appointment with your doctor", tm_cat: "private", tm_type: "task"), JSONModel(tm_entrie_id: "1",tm_title: "Complete the design", tm_cat: "private", tm_type: "task")])
    }
    
    typealias Entry = Model
    
    func getSnapshot(in context: Context, completion: @escaping (Model) -> ()) {
        
        let loadingData = Model(date: Date(), widgetData: [JSONModel(tm_entrie_id: "1",tm_title: "Attend the meeting", tm_cat: "private", tm_type: "task"), JSONModel(tm_entrie_id: "1",tm_title: "Make an appointment with your doctor", tm_cat: "private", tm_type: "task"), JSONModel(tm_entrie_id: "1",tm_title: "Complete the design", tm_cat: "private", tm_type: "task")])
        
        completion(loadingData)
    }
    
    func getTimeline(in context: Context, completion: @escaping (Timeline<Model>) -> () ) {
        
        getData{ (modelData) in
            
            let date = Date()
            let data = Model(date: date , widgetData: modelData)
            
            
            let nextUpdate = Calendar.current.date(byAdding: .minute, value: 3, to: date)
            
            let timeline = Timeline(entries: [data], policy: .after(nextUpdate!))
            
            completion(timeline)
        }
    }
}

struct WidgetView : View {

    var data : Model
   
    @Environment(\.widgetFamily) var family
    
    var body: some View{
        
        VStack(alignment: .leading, spacing: 7) {
           
                HStack(alignment: .center){
                    Group{
                        Text("taskUITitle")
                            .lineLimit(3)
                            .font(.system(size: 20))
                            .foregroundColor(Color("textColor"))
                            .padding(.leading, 10)
                        
                        ZStack {
                            RoundedRectangle(cornerRadius: 10, style: .circular)
                                .trim(from: 0, to: 1)
                                .stroke(style: StrokeStyle(lineWidth: 1))
                                .frame(width: 20, height: 20)
                                .foregroundColor(.blue)
                            
                            Text("+\(data.widgetData.count)")
                                .font(.system(size:11))
                                .foregroundColor(Color("textColor"))
                       }
                    }
                 
                }.padding(.top, 5)
            
         
            if data.widgetData.count == 0 {
                EmptyView()
            }
            
            ForEach(data.widgetData.indices, id: \.self){ i in
                
                Link(destination: URL(string: "\(self.data.widgetData[i].tm_entrie_id)&task")!) {
                          
                    VStack(alignment: .leading, spacing: 0){
                        
                        HStack(alignment: .center){
                            
                            RoundedRectangle(cornerRadius: 3, style: .circular)
                                .trim(from: 0, to: 1)
                                .stroke(style: StrokeStyle(lineWidth: 1))
                                .frame(width: 12, height: 12)
                                .foregroundColor(.blue)
                                .padding(.leading, 11)
                            
                            Text(self.data.widgetData[i].tm_title)
                                .lineLimit(1)
                                .font(.system(size: 12))
                                .foregroundColor(Color("textColor"))
                        }
                    
                    }
                }
            }
        }
        .frame(minWidth: .zero, maxWidth: .infinity, minHeight: .zero, maxHeight: .infinity, alignment: .topLeading)
        .background(Color("backgroundColor"))
    }
}

@main
struct MainWidget : Widget{
    
    var body: some WidgetConfiguration{
        
        StaticConfiguration(kind: "any identifier...", provider: Provider()){ data in
             
            WidgetView(data: data )
    
        }
        .description(Text("taskSetDesc"))
        .configurationDisplayName(Text("taskSetName"))
        .supportedFamilies([.systemSmall, .systemMedium])

    }
}

struct briteProject_Previews: PreviewProvider {
    static var previews: some View {
        WidgetView(data: Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_entrie_id: "1",tm_title: "Call to John", tm_cat: "private", tm_type: "task"), count: 5)))
            .previewContext(WidgetPreviewContext(family: .systemMedium))
        
        WidgetView(data: Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_entrie_id: "1",tm_title: "Call to John", tm_cat: "private", tm_type: "task"), count: 5)))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}



