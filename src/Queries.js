const queries = {
  LIST_SUMMER_CITIES: `
  PREFIX onto: <http://www.semanticweb.org/mohamed/ontologies/2017/2/TouristOnto>
  SELECT ?city WHERE { ?city onto:season "Summer"}
  `,

}

export default queries;
