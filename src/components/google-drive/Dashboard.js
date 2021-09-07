import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import Navbar from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row style={{marginTop:'20px'}}>
          <Col xl={10} lg={10} md={8} sm={8} xs={8} >
            <FolderBreadcrumbs currentFolder={folder} />
          </Col>
          <Col xl={1} lg={1} md={2} sm={2} xs={2} >
          <AddFileButton currentFolder={folder} />
          </Col>
          <Col xl={1} lg={1} md={2} sm={2} xs={2} >
          <AddFolderButton currentFolder={folder} />
          </Col>
        </Row>
             <hr/>      
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}
