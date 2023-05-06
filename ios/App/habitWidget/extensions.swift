//
//  extensions.swift
//  habitWidgetExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


import WidgetKit
import SwiftUI


func getData( completion: @escaping ([JSONModel])-> () ){
    
    let core = UserDefaults(suiteName: "group.briteconnect2")
    var habitData : [JSONModel] = []
    guard let core = core else {
        completion(habitData)
        return
    }

    let localString = core.string(forKey: "briteStorage");


    guard let localString = localString else {
        completion(habitData)
        return
    }

    guard let localData = localString.data(using: .utf8) else {
        completion(habitData)
        return
    }

    do {
        let jsonData = try JSONDecoder().decode([JSONModel].self, from: localData)
        
     
        
        for model in jsonData {
     
            if model.tm_cat != nil {
                
                if model.tm_type == "task" && model.tm_cat == "daily" {
                    
                    var temp = model
                    if temp.tm_icon != nil {
                        
                        if temp.tm_icon!.contains("class") {
                            
                            temp.tm_icon = nil
                            
                        } else {
                            temp.emoji = temp.tm_icon
                            temp.tm_icon = nil
                        }
                    }
                   
                    habitData.append(temp)
                }
            }
        
        }
      
        completion(habitData)
            
    } catch {
    
        completion(habitData)
        print(error)
    }
    
}



func prepareIcon( of icon: String) -> String{
    
    var preparedIcon = icon
    if preparedIcon.contains("</i") {
        preparedIcon = preparedIcon.replacingOccurrences(of: "</i", with: "")
    }

    return preparedIcon
    
}




extension Color {
    init(webRGBA string: String) {
        var color = string
        
        if color.count == 0 {
            color = "rgba(36, 107, 253, 1)"
        }
        
        let charSet: Set<Character> = ["r","g","b","a","(",")",","]
        
        color.removeAll(where: { charSet.contains($0) })
        
        let colorArr = color.split{$0 == " "}
        
        var colorCodes: [Double] = []
        
        for i in colorArr {
            colorCodes.append(Double(i) ?? 1.0)
        
        }
        
        self.init(.sRGB, red: colorCodes[0] / 255.0, green: colorCodes[1] / 255.0, blue: colorCodes[2] / 255.0, opacity: colorCodes[3])

    }
}

extension String {
    func containsEmoji() -> Bool {
        for scalar in unicodeScalars {
            switch scalar.value {
            case 0x1D000...0x1F77F:          // Emoticons
                return true
            default:
                continue
            }
        }
        return false
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

