import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortBySelector = ({
  sortByQuery,
  orderQuery,
  setSearchParams,
  searchParams,
}) => {
  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  const setSortBy = (sortBy) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("sort_by", sortBy);
    setSearchParams(newParams);
  };

  return (
    <Box sx={{ display: "inline-flex" }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort by:</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sortByQuery}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="created_at">Date</MenuItem>
          <MenuItem value="comment_count">Comment Count</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-filled-label">Order By:</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={orderQuery}
          onChange={(event) => {
            setSortOrder(event.target.value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBySelector;
