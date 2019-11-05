import { useColorMode } from "@chakra-ui/core";
import React from "react";
import Select from "react-select";

type ScreenWidthChildren = (colorMode: string) => any;

interface IUseColorModeProps {
  children: ScreenWidthChildren;
}

const ColorMode: React.FunctionComponent<IUseColorModeProps> = ({
  children
}) => {
  const { colorMode } = useColorMode();

  return children(colorMode);
};

class RefinementList extends React.Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () => {
      this.props.refine(
        this.state.selectedOption ? this.state.selectedOption.value : ""
      );
    });
  };

  render() {
    const { selectedOption } = this.state;
    const { items, refine } = this.props;

    return (
      <ColorMode>
        {color => (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            isClearable={true}
            // isMulti
            options={items}
            placeholder={this.props.placeholder}
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: color === "light" ? "#ccc" : "#3f444e",
                neutral20: color === "light" ? "#e2e8f0" : "#2f3540",
                neutral0: color === "light" ? "#fff" : "#272d38"
              }
            })}
          />
        )}
      </ColorMode>
    );
  }
}

export default RefinementList;
