import React from "react";
import { Image, Username, Email, Container } from "./style";
import userImg from "../../assets/image.png";
const Profile = () => {
  return (
    <>
      <Container>
        <Image src={userImg} />
        <div><Username>Ibrokhim Dadamukhamedov</Username>
        <Email>ibrokhim@gmail.com</Email></div>
      </Container>
    </>
  );
};
export default Profile;
