import React from "react";
import useIntlTag from "../../hooks/useIntlTag";
import { Search } from "../styles/main-style";
import { useDispatch, useSelector } from "react-redux";
import Types from "../../redux/actionTypes";
function SearchBox() {
    const intl = useIntlTag();
    const dispatch = useDispatch();
    const loading = useSelector((s) => s.loading);

    const handleSearch = (value) => {
        // TODO: Call Redux action to download and save data
        dispatch({
            type: Types.SEARCH_REQUESTED,
            payload: { searchText: value },
        });
    };

    return (
        <>
            <Search
                loading={loading}
                onSearch={handleSearch}
                placeholder={intl`search`}
            />
        </>
    );
}

export default SearchBox;
