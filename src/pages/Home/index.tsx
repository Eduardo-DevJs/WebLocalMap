import { Link } from "react-router-dom"
import {
  Title,
  Button,
  ButtonBox,
  Container,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle
} from "./style"

const Home = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>O mapa local de sua cidade</Title>
        <SubTitle>Encontre no comercio local tudo o que precisa</SubTitle>

        <Link to={"/new"}>
          <Button>
            <ButtonBox>{">"}</ButtonBox>
            Cadastre um ponto comercial
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  )
}

export default Home
