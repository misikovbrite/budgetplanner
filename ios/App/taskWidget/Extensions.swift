//
//  Extensions.swift
//  taskWidgetExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//

import SwiftUI

func getData( completion: @escaping ([JSONModel])-> () ){
    
    let core = UserDefaults(suiteName: "group.briteconnect2")
    var tasksData : [JSONModel] = []
    guard let core = core else {
        completion(tasksData)
        return
    }
    
    let localString = core.string(forKey: "briteStorage");


    guard let localString = localString else {
        completion(tasksData)
        return
    }

    guard let localData = localString.data(using: .utf8) else {
        completion(tasksData)
        return
    }

    do {
        let jsonData = try JSONDecoder().decode([JSONModel].self, from: localData)
        
        for model in jsonData {
            
            if tasksData.count >= 5 {
                break
            }
             
            if model.tm_cat != nil {
                if model.tm_type == "task" && (model.tm_cat == "private" || model.tm_cat == "work"){
                    tasksData.append(model)
                }

            }
          
        }

        completion(tasksData)

    } catch {
        completion(tasksData)
        print(error)
    }
    
}

