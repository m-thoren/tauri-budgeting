import { Component, For } from 'solid-js'
import Layout from '../components/Layout'
import { createStore } from 'solid-js/store'
type Todo = { id: number; text: string; completed: boolean }

const TransactionForm: Component = () => {
	let input!: HTMLInputElement
	const [todos, setTodos] = createStore<Todo[]>([])
	const addTodo = (text: string) => {
		setTodos(todos.length, { id: todos.length, text, completed: false })
	}
	const toggleTodo = (id: number) => {
		setTodos(id, 'completed', (c) => !c)
	}
	return (
		<Layout>
			<main>
				<h1 class='heading-1'>Skapa ny transaktion</h1>

				<div class='new-transaction-container'>
					<input
						placeholder='new todo here'
						ref={input}
						class='outline'
					/>
					<button
						class='btn btn-danger outline'
						onClick={() => {
							if (!input.value.trim()) return
							addTodo(input.value)
							input.value = ''
						}}>
						Add Todo
					</button>
				</div>
				<div class='transaction-list'>
					<For each={todos}>
						{(todo) => {
							const { id, text } = todo
							return (
								<div>
									<input
										type='checkbox'
										checked={todo.completed}
										onchange={[toggleTodo, id]}
									/>
									<span
										style={{
											'text-decoration': todo.completed
												? 'line-through'
												: 'none',
										}}>
										{text}
									</span>
								</div>
							)
						}}
					</For>
				</div>
			</main>
		</Layout>
	)
}

export default TransactionForm
