import { useState, useEffect } from "react";
import { Layout, Typography, Card, Checkbox, Button, Row, Col } from "antd";
import $ from "jquery";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
const { Content } = Layout;
const { Title, Text } = Typography;

const Test = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: "De acuerdo" },
    { id: 2, label: "Poco de acuerdo" },
    { id: 3, label: "Muy poco de acuerdo" },
    { id: 4, label: "En desacuerdo" },
  ];

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };

  const loadQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3000/questions", {
        method: "GET"
      });

      const data = await response.json();

      if (data.status === 200) {
        $("#question").text(data.question);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un problema con el servidor. Intente nuevamente más tarde.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#0066DE",
      });
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    loadQuestions();
  }, []); 

  return (
    <div className="flex">
      <Sidebar />
      <Layout style={{ marginLeft: 256, minHeight: "100vh", backgroundColor: "#f7f8fa" }}>
        <Content style={{ padding: "24px" }}>
          <Title level={1} style={{ textAlign: "center", color: "#002766" }}>
            Neurofy
          </Title>
          <Text
            type="secondary"
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Test de neurodivergencia
          </Text>

          <Card
            style={{
              backgroundColor: "#74747426",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "24px",
              border: "1px solid #d9d9d9",
            }}
          >
            <Title level={5}>Indicaciones:</Title>
            <ul style={{ marginLeft: "16px" }}>
              <li>
                <Text>
                  <strong>1.</strong> Esta prueba no debe considerarse un
                  resultado definitivo, por lo cual debe consultar con un
                  experto.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>2.</strong> Lea detenidamente las preguntas que se le
                  realizarán.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>3.</strong> Seleccione sólo la(s) respuesta(s) que
                  considere para proseguir.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>4.</strong> Los resultados serán obtenidos al
                  finalizar la prueba.
                </Text>
              </li>
              <li>
                <Text>
                  <strong>5.</strong> Puede retroceder si desea cambiar
                  alguna(s) de su(s) respuesta(s).
                </Text>
              </li>
            </ul>
          </Card>

          <Card
            style={{
              marginBottom: "24px",
              padding: "24px",
              borderRadius: "8px",
              backgroundColor: "#56D297",
              border: "none",
              textAlign: "center",
            }}
          >
            <Text id="question" style={{ color: "white", fontWeight: "bold",
              fontSize: "20px"}}></Text>
          </Card>

          <Row gutter={[16, 16]} justify="center">
            {options.map((option) => (
              <Col xs={24} sm={12} key={option.id}>
                <Card
                  onClick={() => handleOptionSelect(option.id)}
                  style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    border:
                      selectedOption === option.id
                        ? "3px solid #4a90e2"
                        : "1px solid #d9d9d9",
                    cursor: "pointer",
                  }}
                >
                  <Checkbox
                    checked={selectedOption === option.id}
                    onChange={() => handleOptionSelect(option.id)}
                    style={{
                      fontSize: "16px",
                      marginRight: "8px",
                    }}
                  >
                    {option.label}
                  </Checkbox>
                </Card>
              </Col>
            ))}
          </Row>

          <div
            style={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
            }}
          >
            <Button
              type="primary"
              style={{
                backgroundColor: "#4a90e2",
                border: "none",
                color: "#ffffff",
                fontWeight: "bold",
              }}
              onClick={() => loadQuestions()}
            >
              Continuar
            </Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Test;
