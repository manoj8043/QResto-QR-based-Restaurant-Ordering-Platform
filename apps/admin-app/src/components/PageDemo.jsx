import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function PageDemo() {
  return (
    <div className="bg-[url('https://wallpapers.com/images/hd/food-4k-m37wpodzrcbv5gvw.jpg')] h-screen w-full bg-cover bg-center flex items-center justify-center">
      <div className="bg-white rounded-md p-6 shadow-lg w-1/3">
        <h2 className="text-2xl font-bold text-center mb-4">Sign in</h2>
        {/* Your form elements go here */}
      </div>
    </div>
  );
}

export default PageDemo;
