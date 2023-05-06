//
//  extensions.swift
//  notesWidgetExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


import WidgetKit
import SwiftUI


func getData( completion: @escaping ([JSONModel])-> () ){

    let core = UserDefaults(suiteName: "group.briteconnect2")
    var notesModel : [JSONModel] = []
    guard let core = core else {
        completion(notesModel)
        return
    }

    let localString = core.string(forKey: "briteStorage");


    guard let localString = localString else {
        completion(notesModel)
        return
    }

    guard let localData = localString.data(using: .utf8) else {
        completion(notesModel)
        return
    }
    print(localString)
    do {
        let jsonData = try JSONDecoder().decode([JSONModel].self, from: localData)
        
        for model in jsonData {

            if model.tm_type == "page" {
                notesModel.append(model)
            }

        }

        completion(notesModel)

    } catch {
        print("stage 5")
        completion(notesModel)
        print(error.localizedDescription)
    }

}

func getExternalData(completion: @escaping ([JSONModel])-> ()){
    
    var deviceId = UIDevice.current.identifierForVendor?.uuidString
    deviceId = "dsfdsf-23422424-sddsdsdsf-43344334"
    var body = "action=get-notes&deviceid="
    body += deviceId ?? "nil"

    let url = URL( string: "https://britetodo.com/api/index.php" )

    var request = URLRequest(url: url!)
    request.httpMethod = "POST"
    request.httpBody = body.data(using: .utf8)

    URLSession.shared.getAllTasks { (openTasks: [URLSessionTask]) in

    }


    let task = URLSession.shared.dataTask(with: request, completionHandler: { (data: Data?, response: URLResponse?, error: Error?) in

        guard let data = data else {
            return
        }

        do {
            var jsonData = try JSONDecoder().decode([JSONModel].self, from: data)

            if jsonData.count > 10{
                jsonData.removeSubrange(9..<jsonData.count)
            }

            completion(jsonData)

        } catch {
            print(error.localizedDescription)
        }
    })

    task.resume()
    
        
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

extension UIDevice {
    static var isIPad: Bool {
        UIDevice.current.userInterfaceIdiom == .pad
    }
    
    static var isIPhone: Bool {
        UIDevice.current.userInterfaceIdiom == .phone
    }
}




