import React from "react";
import styled from "styled-components";
import Hlogo from "../img/musifylogo.png"

export default function Login() {
  const handleClick = async () => {
    const client_id = "dff2c567ca5343df8b51d1a4d9b318bc";
    const redirect_uri = "https://musify-ten-theta.vercel.app/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src={Hlogo}
        alt="musify"
      />
      <button onClick={handleClick}>Connect Musify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color:  #1db954;
  gap: 5rem;
  img {
    height: 30vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color:  #1db954;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
