import Cateogry from './Cateogry/Cateogry'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import './SideBar.css'

const SideBar = ({handleChange}) => {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container'>
            <h1>🛒</h1>
        </div>

        <Cateogry handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
      </section>
    </>
  )
}

export default SideBar
