import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
  color: black;
  display: flex;
  text-align:center;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 25px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const Image = styled.img`
 height: 100%;
 width:100%
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;



// eslint-disable-next-line
export default{
  Container,
  AppName,
  Header,
  SearchBox,
  SearchIcon,
  SearchInput,
  RecipeImage,
  Placeholder,
  RecipeListContainer,
}