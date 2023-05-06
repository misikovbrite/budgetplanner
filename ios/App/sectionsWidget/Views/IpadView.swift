//
//  IpadView.swift
//  quotesExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//

import SwiftUI

public struct IpadView : View {
    
    var entry : [widgetDetails]
    
    var columns : [GridItem] = Array(repeating: GridItem(.fixed(UIScreen.main.bounds.width / 10 - 20), spacing: 16), count: 4)

    init( widgetData : [widgetDetails] ) {
        entry = widgetData
    }
    
    public var body: some View {
        LazyVGrid( columns: columns, alignment: .center, spacing: UIScreen.main.bounds.height / 70) {
            
            ForEach(entry, id: \.self){ value in
                Link(destination: URL(string: "widgets_\(value.id)")!) {
                    VStack(alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/, spacing: 8, content: {
                        Group{
                            ZStack {
                                Rectangle()
                                    .fill( Color(hex: value.color, op: 0.3) )
                                    .frame(width: 45, height: 45)
                                    .cornerRadius(10)
                                
                                if value.imageSystem {
                                    Image(systemName: "\(value.image)")
                                        .foregroundColor(Color(hex: value.color, op: 1))
                                        .font(.system(size: 20.0))
                                } else {
                                    Image(value.image)
                                        .resizable()
                                        .scaledToFit()
                                        .frame(width: 20.0, height: 20.0)
                                    
                                }
                                
                                }
                            Text( LocalizedStringKey( value.title ) )
                                .foregroundColor(Color("TextColor"))
                                .fixedSize()
                                .font(.system(size: 10, weight: .light, design: .default))
                                .padding(.top, -3)
                                .multilineTextAlignment(.center)
                        }.frame(maxWidth: 55)
                       })
                }
                }
        }
        .frame(minWidth: .zero, maxWidth: UIScreen.main.bounds.width - 500 , minHeight: .zero, maxHeight: .infinity, alignment: .center)
    }
}
