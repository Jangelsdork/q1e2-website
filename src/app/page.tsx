
import Nav from "./components/Nav";
import Releases from "./components/Releases";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <Releases />
    </main>
  );
}
