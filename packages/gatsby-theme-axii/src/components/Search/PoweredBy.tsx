/** @jsx jsx */
import { Flex } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import { PoweredBy as AlgoliaPoweredBy } from "react-instantsearch-dom";

const PoweredBy = () => (
  <Flex
    as={AlgoliaPoweredBy}
    justifyContent="center"
    alignItems="center"
    my="4rem"
    css={{
      span: {
        marginRight: "0.5em"
      }
    }}
  />
);

export default PoweredBy;
