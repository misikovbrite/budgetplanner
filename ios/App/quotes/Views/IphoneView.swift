//
//  IphoneView.swift
//  quotesExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


import WidgetKit
import SwiftUI

public struct IphoneView : View {
    
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
                .opacity(0.35)
            
            VStack{
                Text( LocalizedStringKey(data.quoteData.text) )
                    .font(.system(size: 15.0))
                    .fontWeight(.medium)
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .padding(.leading, 30)
                    .padding(.trailing, 30)
                    .frame(width: UIScreen.main.bounds.width,  alignment: .center)
                
                
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

