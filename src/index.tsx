import { render } from 'solid-js/web'

import './css/main.css'
import TransactionForm from './pages/TransactionForm'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
	)
}

render(() => <TransactionForm />, root!)
