import styled from 'styled-components';

const AllContainer = styled.div`
  font-family: NanumGothicBold;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 72px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100%;
  padding: 0px 72px;
`;

const HeadContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-top: 30px;
  border-bottom: 4px solid black;
`;

const TitleContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const UserContainer = styled.div`
  display: flex;
  margin: 36px 24px;
  width: 90%;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  font-family: NanumGothicBold;
  padding: 24px 36px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;

const NameContainer = styled.h1`
  margin-top: 5px;
  margin-left: 30px;
  padding-top: 15px;
  font-size: 30px;
  font-weight: 800;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  padding: 30px 10px 10px 10px;
  display: flex;
  label {
    /* position: relative;
    margin-left: 10%; */
    min-width: 150px;
    vertical-align: top;
    /* margin-top: 2%; */
  }
  img {
    margin-top: 20px;
    width: 20%;
    height: auto;
  }
  .fileInput {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  input {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 20px;
  }
`;

const ContentSort = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  label {
    min-width: 180px;
    padding-left: 35px;
  }
  input {
    margin-left: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid #717171;
  }
  select {
    margin-left: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid #717171;
    min-width: 245px;
  }
  button {
    margin-left: 10px;
  }
`;

const SelectDiv = styled.div`
  margin-left: 10px;
  padding: 3px 0px 3px 8px;
  border-radius: 4px;
  border: 1px solid #717171;
  background-color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  button {
    margin-left: 10px;
  }
`;

export {
  AllContainer,
  FlexContainer,
  Container,
  HeadContainer,
  TitleContainer,
  ImageContainer,
  UserContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  SelectDiv,
};
