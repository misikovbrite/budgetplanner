//
//  widgetProvider.swift
//  quotesExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


import Foundation
import WidgetKit

public struct widgetProvider {
    
    static let widgetList: [widgetDetails] = [
    
        widgetDetails(
            title : "navWork",
            image: "briefcase.fill",
            id: "taskWidget",
            color: "#9ACD32",
            imageSystem: true
        ),
        widgetDetails(
            title : "navPersonal",
            image: "house.fill",
            id: "privateTasks",
            color: "#246BFD",
            imageSystem: true
        ),
        widgetDetails(
            title : "navGoals",
            image: "goals",
            id: "timelinegoals",
            color: "#009492",
            imageSystem: false
        ),
        widgetDetails(
            title : "navHabits",
            image: "list.bullet",
            id: "daily",
            color: "#FE3A83",
            imageSystem: true
        ),
        widgetDetails(
            title : "navNotes",
            image: "doc.fill",
            id: "todayNote",
            color: "#FFA500",
            imageSystem: true
        ),
        widgetDetails(
            title : "navCalendar",
            image: "calendar",
            id: "eventsTimeline",
            color: "#22D5D2",
            imageSystem: true
        ),
        widgetDetails(
            title : "navExpencive",
            image: "dollarsign.circle.fill",
            id: "finance",
            color: "#21BF21",
            imageSystem: true
        ),
  
        widgetDetails(
            title : "navProjects",
            image: "folder.fill",
            id: "projects",
            color: "#475CFF",
            imageSystem: true
        ),
        widgetDetails(
            title : "navDiary",
            image: "bookmark.fill",
            id: "diary",
            color: "#FA6B90",
            imageSystem: true
        ),
        widgetDetails(
            title : "navInsights",
            image: "newspaper.fill",
            id: "feed",
            color: "#6BC2F2",
            imageSystem: true
        ),
        widgetDetails(
            title : "navMeditation",
            image: "meditation",
            id: "meditation",
            color: "#E180FB",
            imageSystem: false
        ),
        widgetDetails(
            title : "navWeather",
            image: "cloud.sun.fill",
            id: "weatherWIdget",
            color: "#63CDF5",
            imageSystem: true
        ),
        widgetDetails(
            title : "navIdeas",
            image: "lightbulb.fill",
            id: "ideas",
            color: "#FFCE00",
            imageSystem: true
        ),
        widgetDetails(
            title : "navMedia",
            image: "photo.fill",
            id: "dailyPhoto",
            color: "#FC8C5A",
            imageSystem: true
        ),
        widgetDetails(
            title : "navBody",
            image: "body",
            id: "bodyMeasurments",
            color: "#37CCC2",
            imageSystem: false
        ),
        widgetDetails(
            title : "navQuotes",
            image: "quote.bubble.fill",
            id: "quotes",
            color: "#FD35DD",
            imageSystem: true
        )
        
    ]
    

    static func getWidgetList(for widgetType: WidgetFamily) -> [widgetDetails] {
        
        if widgetType == .systemLarge {
            return self.widgetList
        } else {
            let newArr = self.widgetList.prefix(8)
            return Array(newArr)
       
        }
    }
}

public struct widgetDetails : Codable, Hashable{
    let title : String
    let image : String
    let id : String
    let color : String
    let imageSystem : Bool
}
