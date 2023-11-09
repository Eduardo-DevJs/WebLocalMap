import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section
} from "./style"


import Input from "../../components/Input"
import { useState } from "react"

const New = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    contact: "",
    category: ""
  })

  return (
    <Container>
      <Form>
        <FormTitle>Cadastro do comércio local</FormTitle>

        <Section>
          Dados
        </Section>

        <Input
          label="Nome do local"
          name="name"
          value={formValues.name}
          onChange={setFormValues}

        />
        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
        />

        <Input
          label="Contato"
          name="contact"
          value={formValues.contact}
          onChange={setFormValues}
        />

      </Form>
    </Container>
  )
}

export default New
