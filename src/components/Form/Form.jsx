import { useState } from 'react'
import style from './Form.module.css'

const Form = ({ onAddItems }) => {
    const [task, setTask] = useState('')

    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if (!task) {
            alert('les champs sont obligatoire')
            return
        }

        const newItem = {
            id: crypto.randomUUID(),
            task
        }

        onAddItems(newItem)
        setTask('')
    }


    return (
        <form onSubmit={onSubmit} className={style.form}>
            <input value={task} onChange={handleInput} type="text" className={style.formControl} placeholder='add task' />
            <button className="btn">add</button>
        </form>
    )
}

export default Form