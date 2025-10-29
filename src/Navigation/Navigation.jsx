import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiUserPlus } from "react-icons/fi";
import "./navigation.css";

const Navigation = ({query,handleInputChange}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="nav-input"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter your search for Shoes."
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FaRegHeart className="nav-icons" />
        </a>
        <a href="#">
          <FiUserPlus className="nav-icons" />
        </a>
        <a href="#">
          <FiShoppingCart className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
