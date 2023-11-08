import stytles from "../ui/dashboard/deshborad.module.css"
import Navber from "../ui/dashboard/navber/navber"
import Sidber from "../ui/dashboard/sideber/sidber"

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