//
//  EmptyView.swift
//  taskWidgetExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//
import SwiftUI
import WidgetKit


public struct EmptyView: View {
    
    public var body: some View{
        VStack(alignment: .center){
            HStack(alignment: .center){
                Image("emptyWidgetContent")
                    .resizable()
                    .frame(width: 60, height: 60, alignment: .center)
                
                Text("There’s nothing here yet")
                    .font(.system(size: 14, weight: .light))
                    .foregroundColor(Color("textColor"))
                    .multilineTextAlignment(.center)
                
            }.frame(alignment: .center)
    
        }.frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, idealWidth: UIScreen.main.bounds.width, maxWidth: UIScreen.main.bounds.width, minHeight: 30, idealHeight: 30, maxHeight: UIScreen.main.bounds.height, alignment: .center)
    

   
    }
    
}

