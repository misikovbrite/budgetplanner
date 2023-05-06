//
//  quotesProvider.swift
//  quotesExtension
//
//  Created by Мисиков Марат on 06.05.2023.
//


public struct QuotesProvider {
    
    static let quotesList: [quotesDetails] = [
        quotesDetails(
            text: "quotesP1Entry",
            author: "quotesP1author",
            image: "mountain"
        ),
        quotesDetails(
            text: "quotesP2Entry",
            author: "quotesP2author",
            image: "mountain"
        ),
        quotesDetails(
            text: "quotesP3Entry",
            author: "quotesP3author",
            image: "waterTree"
        ),
        quotesDetails(
            text: "quotesP4Entry",
            author: "quotesP4author",
            image: "mountainTrees"
        ),
        quotesDetails(
            text: "quotesP5Entry",
            author: "quotesP5author",
            image: "mountainSunOver"
        ),
        quotesDetails(
            text: "quotesP6Entry",
            author: "quotesP6author",
            image: "mountainSunRise"
        ),
        quotesDetails(
            text: "quotesP7Entry",
            author: "quotesP7author",
            image: "sand"
        ),
        quotesDetails(
            text: "quotesP8Entry",
            author: "quotesP8author",
            image: "beach"
        ),
        quotesDetails(
            text: "quotesP9Entry",
            author: "quotesP9author",
            image: "mountainSunOver"
        ),
        quotesDetails(
            text: "quotesP10Entry",
            author: "quotesP10author",
            image: "mountainSunRise"
        ),
    ]
    
    static func randomQuote() -> quotesDetails {
        return self.quotesList[Int.random(in: 0..<9)]
    }

}

public struct quotesDetails : Codable, Hashable{
    let text : String
    let author : String
    let image : String
}
