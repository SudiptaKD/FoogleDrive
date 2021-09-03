import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { database } from '../../firebase'
import { useAuth } from '../../context/AuthContext'

export default function AddFolderButton({ currentFolder }) {

    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const {currentUser} = useAuth()

    function openModal () {
        setOpen(true)
    }
    function closeModal () {
        setOpen(false)
    }

    function handleSubmit (e) {
        e.preventDefault()

        if(currentFolder == null ) return // Checking if we are in a folder to create folder 

        // Create a Folder in Firebase database
        database.folders.add({
            name:name,
            parentId: currentFolder.id,
            userId : currentUser.uid,
            //path,
            createdAt: database.getCurrentTimestamp()
        })
        setName("") // Open Modal as empty string
        closeModal()
         
    }

    return (
        <>
            <Button onClick={openModal} variant="outline-success" size="md"  >
              <FontAwesomeIcon icon = { faFolderPlus } />
            </Button>
            <Modal show={open} onHide={closeModal}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label> Folder Name </Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal} >
                            Close
                        </Button>
                        <Button variant="success" type="submit" >
                            Add Folder
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
