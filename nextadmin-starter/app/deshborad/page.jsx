import stytles from "../ui/deshborad/deshborad.module.css"
import Navber from "../ui/deshborad/navber/navber"
import Sidber from "../ui/deshborad/sideber/sidber"

const page = ({children}) => {
  return (
    <div className={stytles.continer}>
      <div className={stytles.menu}>
        <Sidber />
      </div>
      <div className={stytles.content}>
        <Navber />
        {children}
      </div>
    </div>
  )
}

export default page