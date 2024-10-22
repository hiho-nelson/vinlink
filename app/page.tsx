import Banner from "./components/home/Banner";
import Grows from "./components/home/Grows";
import Intro from "./components/home/Intro";
import Missions from "./components/home/Missions";
import Story from "./components/home/Story";
import Why from "./components/home/Why";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Intro />
      <Story/>
      <Missions/>
      <Why/>
      <Grows/>
    </div>
  );
}
