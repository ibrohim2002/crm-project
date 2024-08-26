import React, { useState, useEffect } from "react";
import { Wrapper, Btn, Modal, AddOrder } from "./style";
import moment from "moment";

export const ModalWindow = ({ modal, onOrder, reload, data }) => {
  const url = import.meta.env.VITE_BASE_URL;
  const [orders, setOrders] = useState([]);
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

  const onClose = (e) => {
    onOrder();
    setInput({});
  };

  useEffect(() => {
    setInput({ ...input, ...data });
  }, [data]);

  console.log(data);
  const onAdd = () => {
    if (data) {
      fetch(`${url}/tabs/lids/id/*${data.id}*`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...input,
        }),
      }).then((res) => {
        onClose();
        reload();
      });
      setInput({});
    } else {
      fetch(`${url}/tabs/lids`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...input,
          id: Date.now(),
          added_date: moment().format("DD/MM/YYYY"),
        }),
      }).then((res) => {
        onClose();
        reload();
      });
      setInput({});
    }
  };

  return modal ? (
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
        <select name="time" id="" onClick={onchange}>
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
          <button onClick={onClose} style={{ background: "red" }}>
            O'chirish
          </button>
          <button onClick={onAdd}>Saqlash</button>
        </Wrapper>
      </AddOrder>
    </Modal>
  ) : null;
};
