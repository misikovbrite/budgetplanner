//
//  habitWidget.swift
//  habitWidget
//
//  Created by Мисиков Марат on 06.05.2023.
//

import WidgetKit
import SwiftUI
import Foundation


struct Model: TimelineEntry {
    var date : Date
    var widgetData : [JSONModel]
}

struct JSONModel : Decodable, Hashable {
    let tm_type : String
    let tm_cat : String?
    let tm_title: String
    let tm_entrie_id: String
    var tm_icon: String?
    let tm_color: String?
    let tm_repeatable: String?
    var emoji : String?
}

struct Provider : TimelineProvider {
    
    func placeholder(in context: Context) -> Model {
        
        return Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_type: "task", tm_cat: "daily", tm_title: "Drink water", tm_entrie_id: "1", tm_icon: "bomb", tm_color: nil, tm_repeatable: "Пн,Вт,Ср,Чт,Сб,Вс", emoji: nil ), count: 4))
    }
    
    
    typealias Entry = Model
    
    func getSnapshot(in context: Context, completion: @escaping (Model) -> ()) {
        
        let loadingData = Model(date: Date(), widgetData: [ JSONModel(tm_type: "task", tm_cat: "daily", tm_title: "Drink water", tm_entrie_id: "1", tm_icon: "bomb", tm_color: nil, tm_repeatable: "Пн,Вт,Ср,Чт,Сб,Вс", emoji: nil ), JSONModel(tm_type: "task", tm_cat: "daily", tm_title: "Don't drink coffee", tm_entrie_id: "1", tm_icon: "coffee", tm_color: "rgba(200, 64, 251, 1)", tm_repeatable: "Пн,Вт,Ср,Чт,Сб,Вс", emoji: nil ), JSONModel(tm_type: "task", tm_cat: "daily", tm_title: "Doing a warm-up", tm_entrie_id: "1", tm_icon: nil, tm_color: "rgba(251, 64, 64, 1)", tm_repeatable: "Пн,Вт,Ср,Чт,Сб,Вс", emoji: "⚡️" ), JSONModel(tm_type: "task", tm_cat: "daily", tm_title: "Sleep 8 hours", tm_entrie_id: "1", tm_icon: "bed", tm_color: "rgba(42, 198, 113, 1)", tm_repeatable: "Пн,Вт,Ср,Чт,Сб,Вс", emoji: nil )])

        completion(loadingData)
    }
    
    func getTimeline(in context: Context, completion: @escaping (Timeline<Model>) -> () ) {
        
        print(context)
        getData{ (modelData) in
            
            
            
            let date = Date()
            
            let family = context.family

            let habbitRender = HabitRender(model: modelData, widgetFamily: family)
            
            let checkedHabit = habbitRender.checkAvailabel()
            let data = Model(date: date , widgetData: checkedHabit)
            
            
            let nextUpdate = Calendar.current.date(byAdding: .hour, value: 12, to: date)
            
            let timeline = Timeline(entries: [data], policy: .after(nextUpdate!))
            
            completion(timeline)
        }
    }
}



struct WidgetView : View {
 
    var data : Model
  
    @Environment(\.widgetFamily) var family
   
    var body: some View{
        
        let countEls = data.widgetData.count
        
        let columns: [GridItem] = Array(repeating: GridItem(.fixed(60), spacing: 20), count: countEls)
       
       
        VStack(alignment: .center) {
   
           HStack(alignment: .center){
               Group{
                   Text("habbitTitleUI")
                       .font(.system(size: 14))
                       .foregroundColor(Color("tColor"))
                       .padding(.leading, 10)
                       .padding(.top, 5)
               }
           }
            
            if data.widgetData.count == 0 {
                EmptyView()
            }
            LazyVGrid( columns: columns, alignment: .center, spacing: 20) {
                
                ForEach(data.widgetData.indices, id: \.self){ i in
                    
                    let elementColor = Color(webRGBA: self.data.widgetData[i].tm_color ?? "rgba(36, 107, 253, 1)" )
                    
                    Link(destination: URL(string: "\(self.data.widgetData[i].tm_entrie_id)&daily")!) {
                        VStack(alignment: .center){
                            ZStack{
                                
                                Circle()
                                    .strokeBorder(elementColor, lineWidth: 3)
                                    .frame(width: 70, height: 70, alignment: .center)
                                    .foregroundColor(Color("bgColor"))
                                    .opacity(0.5)
                                 
                                Circle()
                                    .frame(width: 60, height: 60, alignment: .center)
                                    .foregroundColor( elementColor )
                                
                                
                                if let emoji = self.data.widgetData[i].emoji {
                                          Text(emoji)
                                              .font(.system(size: 25))
                                          
                                } else {
                                          Image(systemName: "checkmark.circle")
                                              .font(.system(size: 25))
                                              .foregroundColor(.white)
                            
                                }
                                
                            }
                            Text(self.data.widgetData[i].tm_title)
                                .lineLimit(2)
                                .font(.system(size: 12))
                                .foregroundColor( Color("tColor") )
                                .frame(minHeight: 29)
                                .multilineTextAlignment(.center)
                        }
                        .padding(.top, 10)
    
                    }
                }
            }.padding(.leading, 0)
        }.frame(minWidth: .zero, maxWidth: UIScreen.main.bounds.width, minHeight: .zero, maxHeight: .infinity, alignment: .top)
         .background( Color("bgColor") )
    }
}

@main
struct MainWidget : Widget{
    
    var body: some WidgetConfiguration{
        
        StaticConfiguration(kind: "any identifier...", provider: Provider()){ data in
             
            WidgetView(data: data )
    
        }
        .description(Text("habbitsDesc"))
        .configurationDisplayName(Text("habbitTitleUI"))
        .supportedFamilies([.systemSmall, .systemMedium])

    }
}

struct briteProject_Previews: PreviewProvider {
    static var previews: some View {
        WidgetView(data: Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_type: "task", tm_cat: "daily", tm_title: "Drink water", tm_entrie_id: "1", tm_icon: "bomb", tm_color: nil, tm_repeatable: "Пн,Вт,Ср,Чт,Сб,Вс", emoji: nil ), count: 4)))
            .previewContext(WidgetPreviewContext(family: .systemMedium))
        
        WidgetView(data: Model(date: Date(), widgetData: Array(repeating: JSONModel(tm_type: "task", tm_cat: "daily", tm_title: "Drink water", tm_entrie_id: "1", tm_icon: "bomb", tm_color: nil, tm_repeatable: "Пн,Вт,Ср,Чт,Сб,Вс", emoji: nil ), count: 4)))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}

