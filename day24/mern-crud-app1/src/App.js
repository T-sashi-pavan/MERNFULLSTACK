// client/src/App.js
import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [currentItem, setCurrentItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddItem = async () => {
    try {
      const response = await addItem(newItem);
      setItems([...items, response.data]);
      setNewItem({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleUpdateItem = async (id) => {
    try {
      const response = await updateItem(id, currentItem);
      setItems(items.map(item => (item._id === id ? response.data : item)));
      setEditingItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: value
    }));
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={{marginLeft:'50px'}}>
      <h1 style={{textAlign:'center'}}>CRUD Operations</h1>
      <h2 style={{textAlign:'center'}}>Add New Item</h2>
      <div style={{marginLeft:'250px'}}>
      <input
        type="number"
        name="empid"
        value={newItem.empid}
        onChange={handleChange}
        placeholder="Enter empid"
      />
      <input
        type="text"
        name="username"
        value={newItem.username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <input
        type="number"
        name="age"
        value={newItem.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <input
        type="email"
        name="email"
        value={newItem.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        type="text"
        name="address"
        value={newItem.address}
        onChange={handleChange}
        placeholder="Enter address"
      />
      <input
        type="number"
        name="salary"
        value={newItem.salary}
        onChange={handleChange}
        placeholder="Enter salary"
      />
      <button onClick={handleAddItem}>Add</button>
      </div>
      <h2 style={{textAlign:'center'}}>Items List</h2>
<table border="10" style={{  borderColor: 'blue',
          borderStyle: 'solid',
          borderWidth: '2px',
          marginLeft: '250px',
          backgroundColor: 'lightgreen' }}>
        <thead>
          <tr>
            <th>Empid</th>
            <th>Username</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item._id}>
              {editingItem === item._id ? (
                <>
                  <td><input type="number" name="empid" value={currentItem.empid} onChange={handleEditChange} /></td>
                  <td><input type="text" name="username" value={currentItem.username} onChange={handleEditChange} /></td>
                  <td><input type="number" name="age" value={currentItem.age} onChange={handleEditChange} /></td>
                  <td><input type="email" name="email" value={currentItem.email} onChange={handleEditChange} /></td>
                  <td><input type="text" name="address" value={currentItem.address} onChange={handleEditChange} /></td>
                  <td><input type="number" name="salary" value={currentItem.salary} onChange={handleEditChange} /></td>
                  <td>
                    <button onClick={() => handleUpdateItem(item._id)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.empid}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.salary}</td>
                  <td>
                    <button onClick={() => { setEditingItem(item._id); setCurrentItem(item); }}>Edit</button>
                    <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
