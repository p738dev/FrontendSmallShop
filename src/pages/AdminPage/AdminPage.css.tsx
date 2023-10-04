import styled from "styled-components";

export const StyledAdminHomeSection = styled.section`
  width: 70vw;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) and (max-width: 1024px) {
    left: 200px;
  }

  @media (max-width: 992px) {
    width: 100vw;
    top: 120px;
    left: 0;
  }
`;

export const StyledHomeAreaContent = styled.div`
  width: 90%;
  height: 90%;
  margin: 20px;
`;

export const StyledAreaClock = styled.div`
  width: 250px;
  height: 60px;
  margin-bottom: 20px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) and (max-width: 1024px) {
    width: 200px;
    height: 50px;
    margin-bottom: 15px;
  }

  @media (max-width: 992px) {
    width: 180px;
    height: 40px;
    margin-bottom: 15px;
  }
`;

export const StyledClock = styled.span`
  color: #fff;
  font-size: 42px;
  letter-spacing: 3px;

  @media (min-width: 992px) and (max-width: 1024px) {
    font-size: 35px;
  }

  @media (max-width: 992px) {
    font-size: 30px;
  }
`;
