import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const url = "http://localhost:5000/usuarios"

const ModalCadastrar = (props) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipo, setTipo] = useState("Administrador")

    const handleCadastrar = async () => {
        if(nome != "" && email != "" && senha !=""){
            const user = {nome, email, senha, tipo}
            const res = await fetch(url, {
              method: "POST",
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(user)
            })
            setNome("")
            setEmail("")
            setSenha("")
            alert("Cadastrado com Sucesso")
            props.onHide()
        }else{
            alert("Funcionário não Cadastrado")
        }
    }
    
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastrar Funcionário
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>
          <Form.Group controlId="formGridTipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Select value={tipo} onChange={(e) => {
            setTipo(e.target.value)
          }}>
            <option>Administrador</option>
            <option>Gerente</option>
            <option>Funcionário</option>
          </Form.Select>
        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCadastrar}>Cadastrar</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalCadastrar