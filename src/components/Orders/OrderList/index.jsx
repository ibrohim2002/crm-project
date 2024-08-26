import React, { useEffect, useState } from "react";
import { Container, Table, TableHead, Title, Btn } from "./style";
import { Item } from "./item";
import { ModalWindow } from "./modal";
// import moment from "moment";

export const OrderList = () => {
  // const url = import.meta.env.VITE_BASE_URL;
  const url = 'https://sheet.best/api/sheets/08c05757-65c7-4e6a-a744-36ad0714d2a1';
  const [orders, setOrders] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});

  const onEdit = (value) => {
    setData(value);
    setModal(!modal)
  };

  const onOrder = () => {
    setModal(!modal);
    setData(null)
  };

  const getData = () => {
    fetch(`${url}/tabs/lids`)
      .then((res) => res.json())
      .then((res) => setOrders(res));
  };

  
  const onDelete = (id) => {
    fetch(`${url}/tabs/lids/id/*${id}*`, {
      method: "DELETE",
    }).then((res) => {
      getData();
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Container.Nav>
        <Title.Main>Buyurtmalar ro’yxati</Title.Main>
        <Btn onClick={onOrder}>+ Buyurtma qo’shish </Btn>
      </Container.Nav>
      <ModalWindow modal={modal} data={data} onOrder={onOrder} reload={getData} />
      <Table>
        <thead>
          <tr>
            <TableHead>
              <input type="checkbox" name="" id="" />
            </TableHead>
            <TableHead>
              <Title.Header>O’quvchining ismi</Title.Header>
            </TableHead>
            <TableHead>
              <Title.Header>Guruh / Fan</Title.Header>
            </TableHead>
            <TableHead>
              <Title.Header>Dars kuni va vaqti</Title.Header>
            </TableHead>
            <TableHead>
              <Title.Header>Qo’shilgan sana</Title.Header>
            </TableHead>
            <TableHead>
              <Title.Header>Moderator</Title.Header>
            </TableHead>
          </tr>
        </thead>
        <tbody style={{ width: "100%" }}>
          {orders.map((client) => {
            return (
              <Item
                key={client.id}
                client={client}
                onDelete={()=>{onDelete(client.id)}}
                onEdit={()=>{onEdit(client)}}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
