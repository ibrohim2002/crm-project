import React from "react";
import { Image, Username, Email, Container } from "./style";
import userImg from "../../assets/image.png";
const Profile = () => {
  return (
    <>
      <Container>
        <Image src={userImg} />
        <Username>Ibrokhim Dadamukhamedov</Username>
        <Email>i.dadamukhamedov@gmail.com</Email>
      </Container>
    </>
  );
};
export default Profile;
