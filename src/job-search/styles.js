import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1400px;
  height: 100vh;
  background-color: #fafafb;
  margin: 0 auto;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: #fff;
  height: 60px;
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  box-shadow: 0 4px 20px rgb(88 99 148 / 17%);
  z-index: 1;
`;
export const ContentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 20px;
  overflow-y: scroll;
`;
export const SearchMenu = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 25px;
`;
export const Logo = styled.div`
  display: flex;
  background-image: ${({ logo }) => `url(${logo})`};
  width: 24px;
  height: 24px;
  align-items: center;
  margin-right: 10px;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    font-weight: 600;
    font-size: 18px;
  }
`;
export const HeaderMenu = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const HeaderLink = styled.a`
  outline: none;
  text-decoration: none;
  margin-right: 15px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ active }) => (active ? "#0162ff" : "#2f2f33")};
  :last-of-type {
    margin-right: 0;
  }
`;

export const UserSettings = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 14px;
`;
export const UserLogo = styled.div`
  display: flex;
  background-image: ${({ user }) => `url(${user})`};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 10px;
`;
export const UserName = styled.div`
  display: flex;
`;
export const SearchBar = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  flex-direction: row;
  border-right: 1px solid #efefef;
  color: #0162ff;
  svg {
    margin-left: 10px;
    margin-right: 5px;
  }
`;
export const SearchLocation = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: 35px;
  font-size: 14px;
  font-weight: 500;
  padding: 0 25px;
  border-right: 1px solid #efefef;
  svg {
    font-size: 18px;
    color: #0162ff;
    margin-right: 5px;
  }
`;
export const SearchJob = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 35px;
  border-right: 1px solid #efefef;
  svg {
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
    color: #0162ff;
  }
  input {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
export const SearchSalary = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  svg {
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
    color: #0162ff;
  }
  input {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
export const SearchButton = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background-color: #0162ff;
  height: 100%;
  border: none;
  font-weight: 600;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 0 8px 8px 0;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
`;
export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #0162ff;
  border: 1px solid #efefef;
  padding: 8px 10px;
  border-radius: 8px;
  margin-right: 10px;
  svg {
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
  }
`;
export const MainContainer = styled.div`
  display: flex;
`;
export const SearchBlock = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  width: 550px;
  margin-right: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
`;
export const SearchedJobs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
`;
export const JobCard = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.02);
  }
`;
export const JobCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  svg {
    color: #9b9ba5;
    width: 20px;
    height: 20px;
  }
`;
export const Icon = styled.img`
  box-sizing: border-box;
  background-size: cover;
  height: 46px;
  width: 46px;
  border-radius: 5px;
`;
export const Title = styled.div`
  font-weight: 600;
  margin-top: 16px;
  font-size: 14px;
`;
export const Subtitle = styled.div`
  color: #83838e;
  font-size: 13px;
  margin-top: 14px;
  line-height: 1.6em;
  margin-bottom: 10px;
`;
export const JobDetail = styled.div`
  display: flex;
`;
export const JobButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const TagsSkill = styled.div`
  background-color: #e1ebfb;
  color: #0162ff;
  font-size: 11px;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 20px;
`;
export const Apply = styled.button`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  width: 100%;
  cursor: pointer;
  border: none;
  color: #fff;
  align-items: center;
  background-color: #0162ff;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
`;
export const Messages = styled.button`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  width: 100%;
  cursor: pointer;
  border: none;
  color: #83838e;
  align-items: center;
  background-color: #f0f0f0;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
`;
export const Alert = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #e8f2ff;
  padding: 24px 18px;
  border-radius: 8px;
  margin-bottom: 25px;
  input {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    background-color: #fff;
    border: none;
    outline: none;
    font-size: 13px;
    margin-bottom: 15px;
  }
`;
export const AlertTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const AlertSubtitle = styled.div`
  font-size: 13px;
  color: #83838e;
  line-height: 1.6em;
  margin-bottom: 20px;
`;
export const AlertButton = styled.button`
  border: none;
  color: #fff;
  background-color: #0162ff;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  width: 60%;
`;
export const SearchedBar = styled.div`
  display: flex;
  align-items: inherit;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 25px;
`;
export const SearchedShow = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: 600;
`;
export const SearchedSort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #83838e;
`;
export const PostIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #83838e;
  margin-left: 10px;
  cursor: pointer;
  svg {
    align-items: center;
    margin-left: 5px;
  }
`;
export const SearchJobsContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  margin-bottom: 25px;
`;
export const JobTime = styled.div`
  margin-bottom: 5px;
  :last-of-type {
    margin-bottom: 0;
  }
`;
export const JobTimeTitle = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;
export const JobTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  label {
    font-size: 14px;
    color: #83838e;
  }
  input {
    cursor: pointer;
    margin-right: 10px;
  }
  span {
    border-radius: 5px;
    color: #0162ff;
    background-color: #e1ebfb;
    font-size: 12px;
    padding: 5px;
  }
`;
export const CheckBoxContainer = styled.div`
  display: flex;
`;
