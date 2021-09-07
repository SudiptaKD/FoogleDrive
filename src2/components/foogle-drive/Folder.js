import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

export default function Folder( {folder}) {
    return (
        <Button  
        to={`/folder/${folder.id}`}
        variant="outline-dark" className="text-truncate w-100" as={Link}>
            <FontAwesomeIcon icon={faFolder} style={{marginRight:"10px"}} />
            {folder.name}
        </Button>
    )
}
