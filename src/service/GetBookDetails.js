import axios from "axios";

export let SearchBookDetailsById = async bookId => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const requestUri =
    `https://cors-anywhere.herokuapp.com/` +
    `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;

  const res = await axios.get(requestUri);
  const parser = new DOMParser();
  const XMLResponse = parser.parseFromString(res.data, "application/xml");
  let description = "";
  const parseError = XMLResponse.getElementsByTagName("parsererror");

  if (parseError.length) {
    this.setState({
      error: "There was an error fetching results."
    });
  } else {
    let JsonResp = XMLToJson(XMLResponse);
    description = JsonResp.GoodreadsResponse.book.description
      .replace("<![CDATA[", "")
      .replace("]]>", "");
    if (!description) {
      description = "No description found.";
    }
    console.log(description);
    return description;
  }
};

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
