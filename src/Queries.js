var queries  = {
  variableQueries : {
      LIST_Cities_Specific_category :function(category){
        return `PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
       SELECT ?city WHERE { ?city onto:type \"`+category+`\"}`
       },
        SHOW_Specific_Historical_By_Ranking :function(ranking){
         return `PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          SELECT ?attraction  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Historical>.
          ?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#rate> ?ranking.
          FILTER(?ranking = `+ranking+`)}
        `
       },
        LIST_SPORTS_LESS_THAN_SPECIFIC_PRICE :function(price){
         return `PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?waterSport ?price  WHERE {<http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#sports_water_sports> <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#recommends> ?waterSport.
        ?waterSport onto:price ?price.
        FILTER (?price < `+price+`)}`
       },
        LIST_Intertainment_By_DayLight_LessThan_SpecificValue :function(price){
          return `PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?attraction  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Entertainment>.
        ?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#openingHours> ?hours.
        FILTER(contains(?hours, \"am\")).
        ?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#price> ?price.
        FILTER(?price < `+price+`).}`
       },
        LIST_Intertainment_By_DayLight_SpecificDurationTime :function(duration){
          return `PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?attraction  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Entertainment>.
        ?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#openingHours> ?hours.
        FILTER(contains(?hours, \"am\")).
        ?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#duration> ?duration.
        FILTER(?duration = `+duration+`).}`
       },
        LIST_Restaurants_Specific_Cuisine :function(cuisine){
          return `PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?restaurant  WHERE {?restaurant rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Food>.
        ?restaurant onto:cuisine ?cuisine.
        FILTER(contains(?cuisine, \"`+cuisine+`\")).}
       `
       },
        LIST_Restaurants_Specific_Cuisine_Cheap :function(cuisine){
          return `PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        SELECT ?restaurant  WHERE {?restaurant rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Food>.
        ?restaurant onto:cuisine ?cuisine.
        ?restaurant onto:price ?price.
        FILTER(?price <= 100).
        FILTER(contains(?cuisine, \"`+cuisine+`\"))}
       `
       },
        LIST_Restaurants_Rate_Specific_Cuisine :function(cuisine){
          return ` PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?restaurant ?rate  WHERE {?restaurant rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Food>.
      ?restaurant onto:cuisine ?cuisine.
      ?restaurant onto:rate ?rate.
      FILTER(contains(?cuisine, \"`+cuisine+`\")).}
      `
       }
}
,
 constantQueries : {
  LIST_SUMMER_CITIES: `
  PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
  SELECT ?city WHERE { ?city onto:season "Summer"}
  `,
  LIST_WINTER_CITIES: `
  PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
  SELECT ?city WHERE { ?city onto:season "Winter"}
  `,
  LIST_FALL_CITIES: `
  PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
  SELECT ?city WHERE { ?city onto:season "Fall"}
  `,
  LIST_SPRING_CITIES: `
  PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
  SELECT ?city WHERE { ?city onto:season "Spring"}
  `,
  LIST_Historical_By_Ranking_Sorted:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?attraction ?ranking WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Historical>.
?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#rate> ?ranking} ORDER BY ?ranking
`
,
  LIST_Historical_By_DayLight:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?attraction  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Historical>.
?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#openingHours> ?hours.
FILTER(contains(?hours, "am")).}`
,
  LIST_Historical_By_Night:`
  PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?attraction  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Historical>.
?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#openingHours> ?hours.
FILTER(contains(?hours, "pm")).}
`,
  LIST_Historical_By_Price:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?attraction ?price  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Historical>.
?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#price> ?price.}
`,
  LIST_Historical_By_Price_Sorted:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?attraction ?price  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Historical>.
?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#price> ?price.}ORDER BY ?price
`,

  LIST_Sport_with_Prices:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?attraction ?price  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Sports>.
?attraction onto:price ?price}
`,
  LIST_SPORTS_WITH_WATER:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?waterSport  WHERE {<http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#sports_water_sports> <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#recommends> ?waterSport.}
`,
  LIST_Sport_By_MyInterest:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?sport ?user ?sportType WHERE {?user rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#User>.
?user <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#interestedIn> ?sportType.
?sportType <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#recommends> ?sport.
filter(contains(str(?sportType), "sports")).}
`,
  LIST_Intertainment:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?entertainment WHERE {?entertainment rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Entertainment>.}

PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?entertainment ?user ?entertainmentType WHERE {?user rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#User>.
?user <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#interestedIn> ?entertainmentType.
?entertainmentType <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#recommends> ?entertainment.
filter(contains(str(?entertainmentType), "entertainment")).}
`,
  LIST_Intertainment_By_MyInterest:`
`,
  LIST_Intertainment_By_DayLight:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?attraction  WHERE {?attraction rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Entertainment>.
?attraction <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#openingHours> ?hours.
FILTER(contains(?hours, "am")).}
`,
  LIST_RESTAURANT_WITH_CUISINE:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?restaurant ?cuisine  WHERE {?restaurant rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Food>.
?restaurant onto:cuisine ?cuisine.}`
,
  LIST_Restaurants_Rate:`
PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?restaurant ?rate  WHERE {?restaurant rdf:type <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto#Food>.
?restaurant onto:rate ?rate.}
`,
  Plan:`
`
 }
}



export default queries;
