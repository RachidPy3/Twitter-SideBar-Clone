import { React } from "react";
import "./index.css";
import Element from "./components/Element";
import Profile from "./components/Profile";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ForumIcon from "@mui/icons-material/Forum";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function App() {
  const pageNames = [
    { id: 1, name: "Home", icon: <HomeIcon fontSize="large" /> },
    { id: 2, name: "Explore", icon: <TagIcon fontSize="large" /> },
    {
      id: 3,
      name: "Notifications",
      icon: <NotificationsNoneIcon fontSize="large" />,
    },
    { id: 4, name: "Messages", icon: <ForumIcon fontSize="large" /> },
    { id: 5, name: "Profile", icon: <PermIdentityIcon fontSize="large" /> },
  ];
  return (
    <div className="side-bar">
      <TwitterIcon style={{ color: "blue", fontSize: "50px" }} />
      {pageNames.map((page) => {
        return <Element {...page} key={page.id} />;
      })}
      <button className="btn">Tweet</button>
      <Profile />
    </div>
  );
}
