import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Switch, Layout, Button, Typography } from "antd";

const { Content, Footer } = Layout;
const { Text } = Typography;

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [faqAccess, setFaqAccess] = useState(true);

  return (
    <div className="flex">
      <Sidebar />
      <Layout
        style={{
          marginLeft: 256,
          minHeight: "100vh",
          backgroundColor: darkMode ? "#001529" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          transition: "0.3s",
        }}
      >
        <Content style={{ padding: "24px", flex: 1 }}>
          <div
            style={{
              backgroundColor: darkMode ? "#002140" : "#f0f2f5",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: darkMode ? "#ffffff" : "#000000" }}>
              Modo oscuro
            </Text>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              checkedChildren="ON"
              unCheckedChildren="OFF"
            />
          </div>

          <div
            style={{
              backgroundColor: darkMode ? "#002140" : "#f0f2f5",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: darkMode ? "#ffffff" : "#000000" }}>
              Permitir acceso a{" "}
              <span style={{ fontWeight: "bold" }}>"Preguntas Frecuentes"</span>
            </Text>
            <Switch
              checked={faqAccess}
              onChange={() => setFaqAccess(!faqAccess)}
              checkedChildren="ON"
              unCheckedChildren="OFF"
            />
          </div>
        </Content>

        <Footer style={{ textAlign: "center", padding: "16px" }}>
          <Button
            type="primary"
            size="large"
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#1890ff" : "#001529",
              borderColor: darkMode ? "#1890ff" : "#001529",
            }}
          >
            Guardar
          </Button>
        </Footer>
      </Layout>
    </div>
  );
};

export default Settings;
