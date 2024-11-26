import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  FileDoneOutlined,
  LineChartOutlined,
  BulbOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
  BgColorsOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import logo from "../assets/img/logo.png";

const Sidebar = ({ onThemeChange }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Inicio",
      style: {
        color: theme === "dark" ? "#ffffff" : "#0d3f79"
      },
      onClick: () => navigate("/home"),
    },
    {
      key: "test",
      icon: <FileDoneOutlined />,
      label: "Realizar Test",
      style: {
        color: theme === "dark" ? "#ffffff" : "#0d3f79"
      },
      onClick: () => navigate("/test"),
    },
    {
      key: "results",
      icon: <LineChartOutlined />,
      label: "Resultados",
      style: {
        color: theme === "dark" ? "#ffffff" : "#0d3f79"
      },
      onClick: () => navigate("/results"),
    },
    {
      key: "tips",
      icon: <BulbOutlined />,
      label: "Consejos y Recursos",
      style: {
        color: theme === "dark" ? "#ffffff" : "#0d3f79"
      },
      onClick: () => navigate("/tips"),
    },
    {
      key: "faqs",
      icon: <QuestionCircleOutlined />,
      label: "Preguntas frecuentes",
      style: {
        color: theme === "dark" ? "#ffffff" : "#0d3f79"
      },
      onClick: () => navigate("/faqs"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Configuración",
      style: {
        color: theme === "dark" ? "#ffffff" : "#0d3f79"
      },
      onClick: () => navigate("/settings"),
    },
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Perfil",
      style: {
        color: theme === "dark" ? "#ffffff" : "#0d3f79"
      },
      children: [
        {
          key: "view-profile",
          label: "Ver perfil",
          style: {
            color: theme === "dark" ? "#ffffff" : "#0d3f79"
          },
          onClick: () => navigate("/profile"),
        },
        {
          key: "logout",
          label: "Cerrar sesión",
          style: {
            color: theme === "dark" ? "#ffffff" : "#0d3f79"
          },
          onClick: () => navigate("/"),
        },
      ],
    },
  ];

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      theme={theme}
      width={256}
      style={{ height: "100vh", position: "fixed", left: 0 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 16,
          gap: 16,
        }}
      >
        <img
          src={logo}
          alt="Neurofy Logo"
          style={{
            width: collapsed ? "40px" : "100px",
            transition: "0.3s",
          }}
        />
        <Button
          type="text"
          icon={<BgColorsOutlined />}
          onClick={toggleTheme}
          style={{
            width: "100%",
            textAlign: "center",
            color: theme === "dark" ? "#ffffff" : "#0d3f79",
          }}
        >
          {collapsed ? "" : "Cambiar Tema"}
        </Button>
      </div>
      <Menu theme={theme} mode="inline" items={menuItems} style={{ flex: 1 }} />
    </Layout.Sider>
  );
};

export default Sidebar;
