import React, { useState } from 'react'
import Card from "react-bootstrap/Card"
import './Project.css'

function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	// This function parses the information from the array and creates a list.
	/*
    function getTechs(techArray) {
		
        let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
        
	}
    */

	return (
		<Card>
			<Card.Img
				variant="top"
				src={require(`../../assets/projectPics/${image}`)}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={appLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
					<Card.Link href={gitLink} target="_blank" className="card-link">
						{name} Repo
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;
