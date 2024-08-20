import React from "react";
import { TableData, TableRow, Title } from "./style";

export const Item = ({ client, onDelete, onEdit }) => {
  return (
    <TableRow>
      <TableData>
        <input type="checkbox" name="" id="" />
      </TableData>
      <TableData>
        <Title>
          {client.name} {client.surname}
        </Title>
      </TableData>
      <TableData>
        <Title>{client.field}</Title>
      </TableData>
      <TableData>
        <Title>{client.time}</Title>
      </TableData>
      <TableData>
        <Title>{client.added_date}</Title>
      </TableData>
      <TableData>
        <Title>{client.admin}</Title>
      </TableData>
      <TableData>
        <button onClick={onEdit}>edit</button>
        <button onClick={onDelete}>delete</button>
      </TableData>
    </TableRow>
  );
};
