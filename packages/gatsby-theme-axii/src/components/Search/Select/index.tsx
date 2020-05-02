import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import slugify from "slugify";

const Select: React.FC<{
  items: any;
  currentRefinement: any;
  refine: any;
  placeholder: string;
}> = (props) => {
  const { items, currentRefinement, refine, placeholder } = props;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      setOptions(items);
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      options={options}
      loading={loading}
      onChange={(event: any, selectedOption: any) =>
        refine(selectedOption ? selectedOption.value : "")
      }
      renderInput={(params) => (
        <TextField
          {...params}
          id={slugify(placeholder)}
          label={placeholder}
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default Select;
