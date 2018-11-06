import axios from "axios";

export let SearchBooksByText = async searchText => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const requestUri =
    `https://cors-anywhere.herokuapp.com/` +
    `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

  const result = await axios.get(requestUri);
  const resultBooks = parseXMLResponse(result.data);
  return resultBooks;
};

export let parseXMLResponse = response => {
  const parser = new DOMParser();
  const XMLResponse = parser.parseFromString(response, "application/xml");
  const parseError = XMLResponse.getElementsByTagName("parsererror");
  if (parseError.length) {
    return null;
  } else {
    const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
    const searchResults = XMLresults.map(result => XMLToJson(result));
    return searchResults;
  }
};

// Function to convert simple XML document into JSON
// Loops through each child and saves it as key, value pair
// if there are sub-children, call the same function recursively on its children
export let XMLToJson = XML => {
  const allNodes = new Array(...XML.children);
  const jsonResult = {};
  allNodes.forEach(node => {
    if (node.children.length) {
      jsonResult[node.nodeName] = XMLToJson(node);
    } else {
      jsonResult[node.nodeName] = node.innerHTML;
    }
  });
  return jsonResult;
};
