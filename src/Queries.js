const queries = {
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

}

export default queries;
