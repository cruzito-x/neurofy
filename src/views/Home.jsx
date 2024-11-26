import { Layout, Typography, Button, Space } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import Sidebar from "../components/Sidebar";
const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
  const [collapsed, setCollapsed] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleCollapseChange = (newCollapseState) => {
    setCollapsed(newCollapseState);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar
        onThemeChange={handleThemeChange}
        onCollapseChange={handleCollapseChange}
      />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 256,
          transition: "margin-left 0.3s",
        }}
      >
        <Content
          style={{
            padding: 200,
            background: theme === "dark" ? "#001529" : "#f7f8fa",
            textAlign: "center",
          }}
        >
          <Space direction="vertical" align="center">
            <img src={logo} alt="Neurofy Logo" style={{ width: "120px" }} />
            <Title
              level={2}
              style={{ color: theme === "dark" ? "#ffffff" : "#0d3f79" }}
            >
              Neurofy
            </Title>
            <Text style={{ color: theme === "dark" ? "#ffffff" : "#0d3f79" }}>
              Soluciones integrales al servicio de la neurodiversidad
            </Text>
            <Button
              type="primary"
              icon={<CheckOutlined />}
              size="large"
              style={{ marginTop: "24px" }}
              onClick={() => navigate("/test")}
            >
              Realizar Test
            </Button>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
