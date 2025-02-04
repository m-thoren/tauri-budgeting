import { ParentComponent } from 'solid-js'
import Navbar from './Navbar'

const Layout: ParentComponent = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
		</>
	)
}

export default Layout
