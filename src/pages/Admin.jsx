import './page-style.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase/FirebaseConfig';

const Admin = () => {

  const [tools, setTools] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tools"), (querySnapshot) => {
      const _tools = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTools(_tools);
    });

    return () => unsubscribe();
  }, [])

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const listOfCategory = ["Colors","UI Components","Shadow"]

  async function handleAddTool(e) {
    e.preventDefault()

    console.log(`${name} ${url} ${description} ${selectedCategory}`)
  }

  async function handleAddCategory(e) {
    e.preventDefault()

    window.alert(`Selected Category: ${selectedCategory}`)
  }

  async function handleDelete(id) {
    window.alert(`Tool ID: ${id}`);
  }

  return (
    <section>
      <div className="form_wrapper">
        <div className="wrapper1">
          <h2>Add Tool</h2>
          <Form onSubmit={handleAddTool}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name here" onChange={e => setName(e.target.value)} value={name} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="url here" onChange={e => setUrl(e.target.value)} value={url} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setDescription(e.target.value)} value={description} placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit.' />
            </Form.Group>
            <Form.Select aria-label="Default select example" className='form-select' onChange={e => setSelectedCategory(e.target.value)} >
              {
                listOfCategory.map((val, index) => (
                  <option key={index} value={val}>{val}</option>
                ))
              }
            </Form.Select>
            <Button variant="primary" type='submit'>Add</Button>
          </Form>
        </div>

        <div className="wrapper2">
          <h2>Add Category</h2>
          <Form onSubmit={handleAddCategory}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="category name here" onChange={e => setSelectedCategory(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type='submit'>Add</Button>
          </Form>
        </div>
      </div>

      <div className="table_wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tool ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Description</th>
              <th>Cateogry</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {
              tools.map((tool) => (
                <tr key={tool.id}>
                  <td className='td-style-id'>{tool.id}</td>
                  <td className='td-style-name'>{tool.name}</td>
                  <td>{tool.link}</td>
                  <td>{tool.description}</td>
                  <td>{tool.category}</td>
                  <td className='td-style-controls'>
                    <Button variant="danger" onClick={() => handleDelete(tool.id)}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default Admin
