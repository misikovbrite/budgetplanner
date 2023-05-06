//
//  IpadView.swift
//  notesWidgetExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


import SwiftUI
import WidgetKit


public struct IpadView: View {

    var data : Model
    var columns : [GridItem]
    var family : WidgetFamily
    
    init( dataView: Model, columnsView: [GridItem], widgetFam: WidgetFamily ){
        data = dataView
        columns = columnsView
        family = widgetFam
    }
    
    public var body: some View{
        LazyVGrid( columns: columns, alignment: .center, spacing: 14) {
            
            ForEach(data.widgetData.indices, id: \.self){ i in
                
                Link(destination: URL(string: "\(self.data.widgetData[i].tm_entrie_id)&page")!) {
                    
                    ZStack{
                        Rectangle()
                            .frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealWidth: UIScreen.main.bounds.width / 2 - 20, maxWidth: UIScreen.main.bounds.width / 2 - 20, minHeight: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealHeight: UIScreen.main.bounds.height / 25, maxHeight: UIScreen.main.bounds.height / 25, alignment: .center)
                            .cornerRadius(10)
                            .foregroundColor(Color("rectangleColor"))
                        
                        
                        HStack(alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/, spacing: nil) {
                            
                          Image(systemName: "doc.text")
                            .font(.system(size: 20, weight: .light))
                            .foregroundColor(.gray)
                            
                          Text( LocalizedStringKey(self.data.widgetData[i].tm_title) )
                              .lineLimit(2)
                              .font(.system(size: 12))
                              .foregroundColor(Color("textColor"))
                        }.frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealWidth: 150, maxWidth: .infinity, minHeight: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealHeight: UIScreen.main.bounds.height / 25, maxHeight: UIScreen.main.bounds.height / 25, alignment: .leading)
                        .padding(.leading, 10)
                    }
                    
                }
            }
        }
    }
    
}
