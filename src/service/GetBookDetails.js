import axios from "axios";

export let SearchBookDetailsById = async bookId => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const requestUri =
    `https://cors-anywhere.herokuapp.com/` +
    `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;
  axios
    .get(requestUri)
    .then(res => {
      const parser = new DOMParser();
      const XMLResponse = parser.parseFromString(res.data, "application/xml");

      const parseError = XMLResponse.getElementsByTagName("parsererror");

      if (parseError.length) {
        this.setState({
          error: "There was an error fetching results."
        });
      } else {
        let description = XMLResponse.getElementsByTagName("description")[0]
          .innerHTML;

        description = description.replace("<![CDATA[", "").replace("]]>", "");

        if (!description) {
          description = "No description found.";
        }
        return description;
      }
    })
    .catch(error => {
      return `Error: ${error.toString()}`;
    });
};
