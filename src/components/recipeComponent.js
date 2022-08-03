import styled from 'styled-components'

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
  border-radius: 30px;
  cursor: pointer;

`;
const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: green;
  font-style: oblique;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  font-style: oblique;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 30px;
  padding: 10px 15px;
  cursor: pointer;
`;
const IngredientsText = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
  margin-top: 12px;
  margin-bottom: 12px;
`;
const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

// eslint-disable-next-line
export default{
  RecipeContainer,
  CoverImage,
  RecipeName,
  SeeMoreText,
  IngredientsText,
  SeeNewTab,
}
