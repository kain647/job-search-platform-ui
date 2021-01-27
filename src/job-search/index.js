import React, { useState } from "react";
import twitter from "../logo/twitter.png";
import facebook from "../logo/facebook.png";
import skype from "../logo/skype.png";
import linkedin from "../logo/linkedin.png";
import dribbble from "../logo/dribbble.png";
import xing from "../logo/xing.png";
import forrst from "../logo/forrst.png";
import line from "../logo/line.png";
import vine from "../logo/vine.png";
import { IoIosClose } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoBagSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { RiExchangeDollarLine } from "react-icons/ri";
import logo from "../logo/logo.svg";
import user from "../User/user.png";
import {
  Container,
  Header,
  SearchMenu,
  Logo,
  LogoContainer,
  HeaderMenu,
  UserSettings,
  UserLogo,
  UserName,
  HeaderLink,
  SearchBar,
  SearchLocation,
  SearchJob,
  SearchSalary,
  SearchButton,
  SearchItem,
  MainContainer,
  SearchBlock,
  SearchedJobs,
  JobCard,
  Icon,
  Title,
  Subtitle,
  JobDetail,
  JobButtons,
  ContentContainer,
  TagsSkill,
  Apply,
  Messages,
  Alert,
  AlertTitle,
  AlertSubtitle,
  AlertButton,
  SearchedBar,
  SearchedShow,
  SearchedSort,
  SearchJobsContainer,
  JobCardHeader,
  PostIconContainer,
  JobTime,
  JobTimeTitle,
  JobTimeContainer,
  CheckBoxContainer
} from "./styles";

const Job = () => {
  const items = [
    {
      jobCardIcon: linkedin,
      jobCardTitle: "UI / UX Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Fullstack", "Midweight", "React"]
    },
    {
      jobCardIcon: facebook,
      jobCardTitle: "Sr. Product Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Full Time", "Min. 3 Year", "Senior Level"]
    },
    {
      jobCardIcon: twitter,
      jobCardTitle: "User Experience Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Frontend", "Junior", "Vue", "Sass"]
    },
    {
      jobCardIcon: skype,
      jobCardTitle: "Product Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Full Time", "Min. 1 Year", "Senior Level"]
    },
    {
      jobCardIcon: dribbble,
      jobCardTitle: "UI / UX Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Full Time", "Min. 1 Year", "Senior Level"]
    },
    {
      jobCardIcon: xing,
      jobCardTitle: "UI Developer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Full Time", "HTML", "CSS", "React"]
    },
    {
      jobCardIcon: forrst,
      jobCardTitle: "User Interface Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Full Time", "Min. 2 Year", "Senior Level"]
    },
    {
      jobCardIcon: line,
      jobCardTitle: "UI / UX Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Full Time", "Min. 1 Year", "Frontend"]
    },
    {
      jobCardIcon: vine,
      jobCardTitle: "UX Designer",
      jobCardSubtitle:
        "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
      jobCardSkills: ["Full Time", "Backend", "Junior Level"]
    }
  ];
  const checkBox = [
    {
      jobTimeSubtitle: "Full Time Jobs",
      jobTimeNumber: "56",
      checked: "true"
    },
    {
      jobTimeSubtitle: "Part Time Jobs",
      jobTimeNumber: "43",
      checked: "true"
    },
    {
      jobTimeSubtitle: "Remote Jobs",
      jobTimeNumber: "24",
      checked: "true"
    },
    {
      jobTimeSubtitle: "Internship Jobs",
      jobTimeNumber: "27",
      checked: "true"
    },
    {
      jobTimeSubtitle: "Contract",
      jobTimeNumber: "76"
    },
    {
      jobTimeSubtitle: "Training Jobs",
      jobTimeNumber: "28"
    }
  ];
  const level = [
    {
      jobTimeSubtitle: "Student Level",
      jobTimeNumber: "98"
    },
    {
      jobTimeSubtitle: "Entry Level",
      jobTimeNumber: "44"
    },
    {
      jobTimeSubtitle: "Mid Level",
      jobTimeNumber: "35",
      checked: "true"
    },
    {
      jobTimeSubtitle: "Senior Level",
      jobTimeNumber: "29",
      checked: "true"
    },
    {
      jobTimeSubtitle: "Directors",
      jobTimeNumber: "26"
    },
    {
      jobTimeSubtitle: "VP or Above",
      jobTimeNumber: "56"
    }
  ];
  const salary = [
    {
      jobTimeSubtitle: "$700 - $1000",
      jobTimeNumber: "49"
    },
    {
      jobTimeSubtitle: "$1000 - $1200",
      jobTimeNumber: "67"
    },
    {
      jobTimeSubtitle: "$1200 - $1400",
      jobTimeNumber: "24"
    },
    {
      jobTimeSubtitle: "$1500 - $1800",
      jobTimeNumber: "27"
    },
    {
      jobTimeSubtitle: "$2000 - $3000",
      jobTimeNumber: "76",
      checked: "true"
    },
    {
      jobTimeSubtitle: "$3000 - $4000",
      jobTimeNumber: "22",
      checked: "true"
    }
  ];
  const [search, setSearch] = useState("");
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo logo={logo} />
          <p>Milao</p>
        </LogoContainer>
        <HeaderMenu>
          <HeaderLink href="#" active>
            Find Job
          </HeaderLink>
          <HeaderLink href="#">Company Review</HeaderLink>
          <HeaderLink href="#">Find Salaries</HeaderLink>
        </HeaderMenu>
        <UserSettings>
          <UserLogo user={user} />
          <UserName>Suhayel Nasim</UserName>
        </UserSettings>
      </Header>
      <ContentContainer>
        <SearchMenu>
          <SearchBar>
            <BiSearch />
            <SearchItem>
              Product Designer
              <IoMdClose />
            </SearchItem>
            <SearchItem>
              UI Designer
              <IoMdClose />
            </SearchItem>
          </SearchBar>
          <SearchLocation>
            <HiLocationMarker />
            Londontowne, MD
          </SearchLocation>
          <SearchJob>
            <IoBagSharp className="bag" />
            <input
              type="text"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
              placeholder="Job Type Search.."
            />
            {search !== "" && (
              <IoIosClose className="close" onClick={() => setSearch("")} />
            )}
          </SearchJob>
          <SearchSalary>
            <RiExchangeDollarLine className="dollar" />
            <input type="text" placeholder="Salary Range Search.." />
          </SearchSalary>
          <SearchButton>Find Job</SearchButton>
        </SearchMenu>
        <MainContainer>
          <SearchBlock>
            <Alert>
              <AlertTitle>Create Job Alert</AlertTitle>
              <AlertSubtitle>
                Create a job alert now and never miss a job
              </AlertSubtitle>
              <input type="text" placeholder="Enter job keyword" />
              <AlertButton>Create Job Alerts</AlertButton>
            </Alert>
            <JobTime>
              <JobTimeTitle>Type of Employment</JobTimeTitle>
              {checkBox.map(check => {
                return <Check {...check} key={check.jobTimeNumber} />;
              })}
            </JobTime>
            <JobTime>
              <JobTimeTitle>Seniority Level</JobTimeTitle>
              {level.map(check => {
                return <Check {...check} key={check.jobTimeNumber} />;
              })}
            </JobTime>
            <JobTime>
              <JobTimeTitle>Salary Range</JobTimeTitle>
              {salary.map(check => {
                return <Check {...check} key={check.jobTimeNumber} />;
              })}
            </JobTime>
          </SearchBlock>
          <SearchJobsContainer>
            <SearchedBar>
              <SearchedShow>Showing 46 Jobs</SearchedShow>
              <SearchedSort>
                Sort by:
                <PostIconContainer>
                  Newest Post
                  <FaAngleDown />
                </PostIconContainer>
              </SearchedSort>
            </SearchedBar>
            <SearchedJobs>
              {items
                .filter(job => {
                  if (search.length === 0) {
                    return true;
                  }
                  return (
                    job.jobCardSkills
                      .join("")
                      .toLowerCase()
                      .indexOf(search.toLowerCase()) >= 0
                  );
                })
                .map(item => {
                  return <Item {...item} key={item.jobCardIcon} />;
                })}
            </SearchedJobs>
          </SearchJobsContainer>
        </MainContainer>
      </ContentContainer>
    </Container>
  );
};

const Check = props => {
  const { jobTimeSubtitle, jobTimeNumber, checked } = props;
  return (
    <JobTimeContainer>
      <CheckBoxContainer>
        <input type="checkbox" checked={checked} />
        <label>{jobTimeSubtitle}</label>
      </CheckBoxContainer>
      <span>{jobTimeNumber}</span>
    </JobTimeContainer>
  );
};

const Item = props => {
  const {
    jobCardIcon,
    jobCardTitle,
    jobCardSubtitle,
    jobCardSkills = []
  } = props;
  return (
    <JobCard>
      <JobCardHeader>
        <Icon src={jobCardIcon} />
        <HiDotsHorizontal />
      </JobCardHeader>
      <Title>{jobCardTitle}</Title>
      <Subtitle>{jobCardSubtitle}</Subtitle>
      <JobDetail>
        {jobCardSkills.map(tagsSkill => {
          return <TagsSkill>{tagsSkill}</TagsSkill>;
        })}
      </JobDetail>
      <JobButtons>
        <Apply>Apply Now</Apply>
        <Messages>Messages</Messages>
      </JobButtons>
    </JobCard>
  );
};

export default Job;
