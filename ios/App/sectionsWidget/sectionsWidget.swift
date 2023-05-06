//
//  sectionsWidget.swift
//  sectionsWidget
//
//  Created by Мисиков Марат on 06.05.2023.
//

import WidgetKit
import SwiftUI

struct SimpleEntry: TimelineEntry {
    let date: Date
    let widgetDetails : [widgetDetails]
}
    

struct Provider: TimelineProvider {
    
    typealias Entry = SimpleEntry
    
    func placeholder(in context: Context) -> SimpleEntry {
        
        SimpleEntry(date: Date(), widgetDetails: widgetProvider.widgetList)
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        
        let entry = SimpleEntry(date: Date(), widgetDetails: widgetProvider.widgetList)
        
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        
        
        let size = context.family
        
        let entry = SimpleEntry( date: Date(), widgetDetails: widgetProvider.getWidgetList(for: size ) )
        
        let timeline = Timeline(entries: [entry], policy: .never)
  
 
        completion(timeline)
    }
}



struct briteProjectEntryView : View {
    
    var entry: Provider.Entry

    var body: some View {
        
        VStack(alignment: .leading, spacing: 0){
            
            if UIDevice.isIpad {
                IpadView(widgetData: entry.widgetDetails)
            } else {
                IphoneView(widgetData: entry.widgetDetails)
            }
        
        }.frame(minWidth: UIScreen.main.bounds.width, maxWidth: UIScreen.main.bounds.width, minHeight: .zero, maxHeight: .infinity, alignment: .center)
        .background(Color("background"))
        
    }
}

@main
struct briteProject: Widget {
    let kind: String = "briteProject"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            briteProjectEntryView(entry: entry)
        }
        .configurationDisplayName("Widgets navigator")
        .description("Brite widget navigator")
        .supportedFamilies([.systemMedium, .systemLarge])
    }
}

struct briteProject_Previews: PreviewProvider {
    
    static var previews: some View {
        
        briteProjectEntryView(entry: SimpleEntry(date: Date(), widgetDetails: widgetProvider.widgetList))
            .previewContext(WidgetPreviewContext(family: .systemMedium))
        
        briteProjectEntryView(entry: SimpleEntry(date: Date(), widgetDetails: widgetProvider.widgetList))
            .previewContext(WidgetPreviewContext(family: .systemLarge))
    }
}

extension UIDevice {
    
    static var isIpad : Bool {
        UIDevice.current.userInterfaceIdiom == .pad
    }
    
    static var isIphone : Bool {
        UIDevice.current.userInterfaceIdiom == .phone
    }
    
    
}


extension Color {
init(hex string: String, op: Float) {
    var string: String = string.trimmingCharacters(in: CharacterSet.whitespacesAndNewlines)
    if string.hasPrefix("#") {
        _ = string.removeFirst()
    }

    // Double the last value if incomplete hex
    if !string.count.isMultiple(of: 2), let last = string.last {
        string.append(last)
    }

    // Fix invalid values
    if string.count > 8 {
        string = String(string.prefix(8))
    }

    // Scanner creation
    let scanner = Scanner(string: string)

    var color: UInt64 = 0
    scanner.scanHexInt64(&color)

    if string.count == 2 {
        let mask = 0xFF

        let g = Int(color) & mask

        let gray = Double(g) / 255.0

        self.init(.sRGB, red: gray, green: gray, blue: gray, opacity: 1)

    } else if string.count == 4 {
        let mask = 0x00FF

        let g = Int(color >> 8) & mask
        let a = Int(color) & mask

        let gray = Double(g) / 255.0
        let alpha = Double(a) / 255.0

        self.init(.sRGB, red: gray, green: gray, blue: gray, opacity: alpha)

    } else if string.count == 6 {
        let mask = 0x0000FF
        let r = Int(color >> 16) & mask
        let g = Int(color >> 8) & mask
        let b = Int(color) & mask

        let red = Double(r) / 255.0
        let green = Double(g) / 255.0
        let blue = Double(b) / 255.0

        self.init(.sRGB, red: red, green: green, blue: blue, opacity: Double(op))

    } else if string.count == 8 {
        let mask = 0x000000FF
        let r = Int(color >> 24) & mask
        let g = Int(color >> 16) & mask
        let b = Int(color >> 8) & mask
        let a = Int(color) & mask

        let red = Double(r) / 255.0
        let green = Double(g) / 255.0
        let blue = Double(b) / 255.0
        let alpha = Double(a) / 255.0

        self.init(.sRGB, red: red, green: green, blue: blue, opacity: alpha)

    } else {
        self.init(.sRGB, red: 1, green: 1, blue: 1, opacity: 1)
    }
}
}
