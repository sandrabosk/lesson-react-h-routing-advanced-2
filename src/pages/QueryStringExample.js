// ./src/pages/QueryStringExample.js

import { useEffect } from 'react';
import queryString from 'query-string'; // <== REMEMBER TO RUN `npm install query-string`

function QueryStringExample (props) {
  
  useEffect(() => {
    const values = queryString.parse(props.location.search)
    console.log(values.place);
    console.log(values.destType);
  }, []);

  return (
    <div>
      <h2>Query String Example</h2>
      <p>
        Open the console to see the logged <pre>values</pre>
        object containing the query string content
      </p>
    </div>
  )
}

export default QueryStringExample;