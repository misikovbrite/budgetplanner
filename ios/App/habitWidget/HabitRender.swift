//
//  HabitRender.swift
//  habitWidgetExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


import Foundation
import WidgetKit

class HabitRender {
    
    var modelArr : [JSONModel]
    var family : WidgetFamily
    
    init (model: [JSONModel], widgetFamily: WidgetFamily){
        modelArr = model
        family = widgetFamily
    }
    
    func checkAvailabel() -> [JSONModel] {
        
        let _ = Calendar.current.component(.weekday, from: Date())
        
        var habitCount : Int {
            switch self.family {
                case .systemMedium:
                    return 4
                default :
                    return 2
            }
        }
        
        var availableHabbits : [JSONModel] = Array()
        
        for habit in self.modelArr {
            
            availableHabbits.append(habit)
            
//            var repeatableDays : [String.SubSequence] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
//
//            if let repeatStr = habit.tm_repeatable {
//
//                repeatableDays = repeatStr.split(separator: ",")
//            }
//
//
//            for day in repeatableDays {
//
//                if convertDate(from: String(day)) == curDay {
//
//                    availableHabbits.append(habit)
//
//                }
//            }

        }
        
        if availableHabbits.count > habitCount {

            availableHabbits.removeSubrange(habitCount..<availableHabbits.count)
        }
        
        return availableHabbits
    }
    
    
    func convertDate(from day: String) -> Int {
        
        let convert : [String : Int] = ["Пн": 2, "Вт": 3, "Ср": 4, "Чт": 5, "Пт": 6, "Сб": 7, "Вс": 1]
        
        return convert[day] ?? 0
    }
    
    
    
}
