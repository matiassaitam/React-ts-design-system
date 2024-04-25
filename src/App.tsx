import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaPlus, FaTrash } from "react-icons/fa";
import LoginForm from "./components/organisms/LoginForm/LoginForm";
import Sidebar from "./components/organisms/SideBar/SideBar";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import IconLabelButton from "./components/molecules/IconLabelButton/IconLabelButton";
import { flexCenter } from "./styles/mixins";
import Header from "./components/atoms/Header/Header";

const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
  padding: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const App: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <LoginForm />
      <Container>
        <Sidebar menuItems={[]} />
        <ButtonsContainer>
          <IconLabelButton
            label="Primary"
            onClick={handleButtonClick}
            size="medium"
            labelSize="medium"
            variant="primary"
          />

          <IconLabelButton
            label="Add Item"
            icon={<FaPlus />}
            onClick={handleButtonClick}
            size="small"
            labelSize="small"
            variant="success"
          />

          <IconLabelButton
            label="Disabled Button"
            icon={<FaPlus />}
            onClick={handleButtonClick}
            size="small"
            labelSize="small"
            variant="primary"
            disabled
          />

          <IconLabelButton
            label="Delete Item"
            icon={<FaTrash />}
            onClick={handleButtonClick}
            size="xl" 
            labelSize="xl"
            variant="danger"
          />
          <IconLabelButton
            label="Disabled Button"
            icon={<FaPlus />}
            onClick={handleButtonClick}
            size="large"
            labelSize="large"
            variant="success"
            disabled
            font='base'
          />

          <IconLabelButton
            label="Disabled Button"
            icon={<FaPlus />}
            onClick={handleButtonClick}
            size="xl"
            labelSize="xl"
            variant="danger"
            disabled
            font='cursive'
          />
        </ButtonsContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
