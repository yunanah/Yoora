import styled from "styled-components";

export const NavBox = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-around;
  position: relative;
`;
export const NavItem = styled.li`
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const NavIcon = styled.span`
  transform: translateY(0px);
  transition: 0.5s;
  font-size: 1.2em;
  ${NavItem}.active & {
    transform: translateY(-20px);
  }
`;
export const NavText = styled.span`
  opacity: 0;
  transform: translateY(20px);
  transition: 0.5s;
  font-size: 0.8em;
  letter-spacing: 0.05em;
  ${NavItem}.active & {
    opacity: 1;
    transform: translateY(5px);
  }
`;

export const Highlight = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: #33ff55;
  top: -50%;
  border-radius: 50%;
  border: 7px solid #3e3e3e;
  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -22.5px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 #3e3e3e;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -22.5px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 #3e3e3e;
  }
`;
