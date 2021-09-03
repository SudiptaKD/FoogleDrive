import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddFolderButton() {

    function openModal () {

    }

    return (
        <Button onClick={openModal} variant="outline-success" size="md"  >
            <FontAwesomeIcon icon = { faFolderPlus } />
        </Button>
    )
}
