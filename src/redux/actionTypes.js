import { createTypes } from "reduxsauce";

export default createTypes(
`
    SEARCH_SUCCEEDED
    SEARCH_FAILED
    SEARCH_REQUESTED
`,
    {}
); // options - the 2nd parameter is optional
