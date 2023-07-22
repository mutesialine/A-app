import Card from "./components/card/Card";
import Navbar from "./components/Navbar";

export default function App() {
  return (
   <div className="max-w-7xl mx-auto pt-12">
    <Navbar/>
    <div className="flex justify-between pt-12">
      <Card/>
      <Card/>
      <Card/>
    </div>
   </div>
  
  )
}