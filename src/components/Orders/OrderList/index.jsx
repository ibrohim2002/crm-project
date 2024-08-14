import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableData,
  TableHead,
  TableRow,
  Title,
  Wrapper,
  Btn,
  Modal,
  AddOrder,
} from "./style";
import moment from "moment";

export const OrderList = () => {
  const url = import.meta.env.VITE_BASE_URL;

  const [orders, setOrders] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    name: "",
    surname: "",
    field: "",
    admin: "",
    time: "",
  });

  const onchange = (e) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onOrder = () => {
    setModal(!modal);
  };
  const onAdd = () => {
    fetch(url + "/tabs/lids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...input,
        id: Date.now(),
        added_date: moment().format("DD/MM/YYYY"),
      }),
    }).then((res) => getData());
    setModal(!modal);
  };

  const getData = () => {
    fetch(url + "/tabs/lids")
      .then((res) => res.json())
      .then((res) => setOrders(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Container.Nav>
        <Title.Main>Buyurtmalar ro’yxati</Title.Main>
        <Btn onClick={onOrder}>+ Buyurtma qo’shish </Btn>
      </Container.Nav>
      {modal && (
        <Modal>
          <AddOrder>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={input.name}
              onChange={onchange}
            />
            <input
              type="text"
              placeholder="surname"
              name="surname"
              value={input.surname}
              onChange={onchange}
              required
            />
            <input
              type="text"
              placeholder="field"
              name="field"
              value={input.field}
              onChange={onchange}
              required
            />
            <select name="time" id="" onChange={onchange}>
              <option value="12:00 - 14:00">12:00 - 14:00</option>
              <option value="14:00 - 16:00">14:00 - 16:00</option>
              <option value="16:00 - 18:00">16:00 - 18:00</option>
            </select>
            <input
              type="text"
              placeholder="moderator"
              name="admin"
              value={input.admin}
              onChange={onchange}
              required
            />
            <Wrapper>
            <button onClick={onOrder} style={{background: "red"}}>
              O'chirish
            </button>
            <button onClick={onAdd}>Saqlash</button>
            </Wrapper>
          </AddOrder>
        </Modal>
      )}
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
              <TableRow key={client.id}>
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
                  <button>edit</button>
                  <button>delete</button>
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
