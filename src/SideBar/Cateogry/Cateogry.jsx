import Input from "../../components/Input";
import "./cateogry.css";

const Cateogry = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Cateogry</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          name="test"
          value="sneakers"
          title="Sneakers"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="flats"
          title="Flats"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="sandals"
          title="Sandals"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="heels"
          title="Heels"
        />
      
      </div>
    </div>
  );
};

export default Cateogry;
