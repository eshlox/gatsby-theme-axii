import {
  Container,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import useStyles from "./styles";

export const table: React.FC = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper} className={classes.container}>
        <Table aria-label="table">{props.children}</Table>
      </TableContainer>
    </Container>
  );
};

export const tr: React.FC = props => <TableRow {...props} />;

export const th: React.FC = props => <TableCell {...props} />;

export const tbody: React.FC = props => <TableBody {...props} />;

export const thead: React.FC = props => <TableHead {...props} />;

export const td: React.FC = props => <TableCell {...props} />;
