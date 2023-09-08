import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./components/MyHeader";
import VideoSection from "./components/VideoSection";
import MyFooter from "./components/MyFooter";
import ProfileHeader from "./components/ProfileHeader";
import ProfileMain from "./components/ProfileMain";

function App() {
  return (
    <div className="text-white bg-netflix-dark">
      <MyHeader />
      <VideoSection filmTitle={"Avengers"} sectionTitle={"Trending Now"} />
      <VideoSection filmTitle={"Star Wars"} sectionTitle={"Watch It Again"} />
      <VideoSection filmTitle={"spider-man"} sectionTitle={"New Releases"} />
      <MyFooter />
      <div style={{ minHeight: "100vh" }}>
        <ProfileHeader />
        <ProfileMain />
      </div>
    </div>
  );
}

export default App;
