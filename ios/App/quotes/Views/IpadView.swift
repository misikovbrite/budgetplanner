//
//  IpadView.swift
//  quotesExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


import WidgetKit
import SwiftUI

public struct IpadView : View {
    
    var data : Model
    
    init( modelData: Model ) {
        data = modelData
    }
    
    
    public var body: some View {
        ZStack{
            
            Image(data.quoteData.image)
              .resizable()
              .aspectRatio(contentMode: .fill)
       
            
            Rectangle()
                .foregroundColor(.black)
                .opacity(0.4)
            
            VStack{
                Text( LocalizedStringKey(data.quoteData.text) )
                    .font(.system(size: 14.0))
                    .fontWeight(.medium)
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .frame(width: UIScreen.main.bounds.width / 2.5,  alignment: .center)
                    .padding(.top)
                
                
                Text(LocalizedStringKey(data.quoteData.author))
                    .fontWeight(.light)
                    .font(.body)
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .padding(.top)
                    .padding(.bottom)
                
            }
            
        }
        .frame(minWidth: UIScreen.main.bounds.width, maxWidth: UIScreen.main.bounds.width, minHeight: .zero, maxHeight: UIScreen.main.bounds.height, alignment: .center)
    }
    
}

