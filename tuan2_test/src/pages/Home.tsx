import Greeting from "../components/Greeting";
import IconButton from "../components/IconButton";
import ToggleComponent from "../components/ToggleComponent";

function Home() {
  return (
    <main style={{ padding: 20 }}>
      <Greeting name="Phát" />
      <IconButton label="Save" icon={<span>💾</span>} />
      <ToggleComponent />
    </main>
  );
}
export default Home