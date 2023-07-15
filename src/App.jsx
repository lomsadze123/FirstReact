import styled from "styled-components";

export default function Gallery() {
  return (
    <Body>
      <Main>
        <Img src="./src/assets/qr-code.svg" alt="qr-code" />
        <H1>Improve your front-end <br /> skills by building projects</H1>
        <P>Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to <br /> the next level</P>
      </Main>
    </Body>
  );
}

const Body = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D5E1EF;
  font-family: 'Outfit', sans-serif;
`
const Img = styled.img`
  max-width: 10rem;
  width: 100%;
  height: 10rem;
  padding: 4rem;
  background-color: #2C7DFA;
  border-radius: 10px;
`
const Main = styled.main`
  padding: 1rem 1rem 2rem 1rem;
  background-color: white;
  text-align: center;
  border-radius: 15px;
`
const H1 = styled.h1`
  margin: 1.5rem 0 1rem;
  color: #1F314F;
  font-weight: 700;
  font-size: 1.35rem;
  line-height: normal;
`
const P = styled.p`
  color: #7D889E;
  font-weight: 400;
  line-height: 18.9px;
  font-size: .95rem;
`