import { IconButton, TextField } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import React from "react";

const Input: React.FC<{
  currentRefinement: any;
  refine: any;
  showFilters: any;
}> = props => {
  const { currentRefinement, refine, showFilters } = props;

  return (
    <TextField
      type="search"
      label="Search..."
      variant="outlined"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton onClick={showFilters}>
            <FilterListIcon />
          </IconButton>
        )
      }}
    />
  );
};

export default Input;
