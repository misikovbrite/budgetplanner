//
//  EmptyView.swift
//  notesWidgetExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//

import SwiftUI
import WidgetKit


public struct EmptyView: View {


    var family : WidgetFamily
    
    init( widgetFam: WidgetFamily ){

        family = widgetFam
    }
    
    
    
    public var body: some View{
        switch family {
        case .systemMedium:
            
            VStack(alignment: .center){
                HStack(alignment: .center){
                    Image("emptyWidgetContent")
                        .resizable()
                        .frame(width: 60, height: 60, alignment: .center)
                    
                    Text("There’s nothing here yet")
                        .font(.system(size: 15, weight: .light))
                        .foregroundColor(Color("textColor"))
                    
                }.frame(alignment: .center)
        
            }.frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealWidth: UIScreen.main.bounds.width, maxWidth: UIScreen.main.bounds.width, minHeight: 30, idealHeight: 30, maxHeight: UIScreen.main.bounds.height, alignment: .center)
        
            
        default:
            
            HStack(alignment: .center){
                VStack(alignment: .center){
                    Image("emptyWidgetContent")
                        .resizable()
                        .frame(width: 150, height: 150, alignment: .center)
                    
                    Text("There’s nothing here yet")
                        .font(.system(size: 15, weight: .light))
                        .foregroundColor(Color("textColor"))
                    
                }.frame(alignment: .center)
        
            }.frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealWidth: UIScreen.main.bounds.width, maxWidth: UIScreen.main.bounds.width, minHeight: 30, idealHeight: 30, maxHeight: UIScreen.main.bounds.height, alignment: .center)
       }
    }
    
}

