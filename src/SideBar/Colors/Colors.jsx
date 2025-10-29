import Input from '../../components/Input'
import './Colors.css'

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <div >
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          name="test1"
          value="black"
          title="Black"
          color="black"
        />

        <Input
          handleChange={handleChange}
          name="test1"
          value="blue"
          title="Blue"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          name="test1"
          value="red"
          title="Red"
          color="red"
        />

        <Input
          handleChange={handleChange}
          name="test1"
          value="green"
          title="Green"
          color="green"
        />

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="white" name="test1" />
          <span className="checkmark " style={{backgroundColor:"white", border:"2px solid black"}}></span>White
        </label>
      </div>
    </div>
  )
}

export default Colors
