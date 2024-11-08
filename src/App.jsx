
import { useState } from 'react'
import './App.css'
import { Form } from './components'
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';
import Corbeil from './components/Corbeil/Corbeil';

function App() {
  const data = JSON.parse(localStorage.getItem('item'))

  const [items, setItems] = useState(data || []);

  const [corbeil, setCorbeil] = useState([]);

  const [state, setState] = useState(false)

  // Ajouter une tache
  const hanldeAddItems = (item) => {
    const existingItems = JSON.parse(localStorage.getItem('item')) || []

    const updatedItems = [...existingItems, item]

    setItems(updatedItems)

    localStorage.setItem('item', JSON.stringify(updatedItems))

  }

  // Effacer une tache
  const handleDeleteItems = id => {

    const existringItems = JSON.parse(localStorage.getItem('item')) || []

    const updatedItems = existringItems.filter(item => item.id !== id)

    setItems(updatedItems)

    localStorage.setItem('item', JSON.stringify(updatedItems))

  }


  const handleDeleteCorbeilItems = id => {
    const existringItems = JSON.parse(localStorage.getItem('corbeil')) || []

    const updatedItems = existringItems.filter(item => item.id !== id)

    setCorbeil(updatedItems)

    localStorage.setItem('corbeil', JSON.stringify(updatedItems))

  }

  //Vider les taches
  const handleClearAllItems = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete all items?");

    if (isConfirmed) {
      setCorbeil([]);
      localStorage.removeItem('corbeil')
    }
  }



  const handleCopy = (id) => {
    const copyItem = items.find(item => item.id === id);

    const updatedItems = [...corbeil, copyItem]


    if (copyItem) {
      setCorbeil(updatedItems);
      localStorage.setItem('corbeil', JSON.stringify(updatedItems))
      setState(true)
      handleDeleteItems(id)
    }
  }






  return (
    <>
      <main className='main'>
        <Form onAddItems={hanldeAddItems} />
        <PackingList
          onDeleteItem={handleDeleteItems}
          items={items}
          onCopyItem={handleCopy}
          state={state}
        />
        <Stats items={items} />
      </main>
      <Corbeil handleDeleteItems={handleDeleteCorbeilItems} corbeil={corbeil} onClearItem={handleClearAllItems} />
    </>
  )
}

export default App

