import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import FilterListIcon from "@material-ui/icons/FilterList";
import React from "react";

const Input: React.FC<{
  currentRefinement: any;
  refine: any;
  showFilters: any;
}> = (props) => {
  const { currentRefinement, refine, showFilters } = props;

  return (
    <TextField
      id="search"
      type="search"
      label="Search..."
      variant="outlined"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton onClick={showFilters} aria-label="show/hide filters">
            <FilterListIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default Input;
