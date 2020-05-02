import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export const table: React.FC = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">{props.children}</Table>
    </TableContainer>
  );
};

export const tr: React.FC = (props) => <TableRow {...props} />;
export const th: React.FC = (props) => <TableCell {...props} />;
export const tbody: React.FC = (props) => <TableBody {...props} />;
export const thead: React.FC = (props) => <TableHead {...props} />;
export const td: React.FC = (props) => <TableCell {...props} />;
