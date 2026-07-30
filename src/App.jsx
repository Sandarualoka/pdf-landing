import "./App.css";
import large from "../assets/large.png";
import mobile from "../assets/mobile.png";

function App() {
  return (
    <main className="min-h-screen w-full bg-[#000111]">
      {/* Mobile image */}
      <img
        src={mobile}
        alt="DoLovePDF coming soon"
        className="block h-auto w-full object-contain md:hidden"
      />

      {/* Tablet and desktop image */}
      <img
        src={large}
        alt="DoLovePDF coming soon"
        className="hidden h-auto w-full object-contain md:block"
      />
    </main>
  );
}

export default App;