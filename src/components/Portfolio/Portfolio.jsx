import React from 'react';
import Project from '../Project/Project';
import "./Portfolio.css"

function Portfolio() {
	const projects = [
	{name: "Project 1",
	description: "description 1",
	image: "green.jpeg",
	github: "github link 1",
	deployed: "deployed link 1",
	},
	{
	name: "Project 2",
	description: "description 2",
	image: "green.jpeg",
	github: "github link 2",
	deployed: "deployed link 2",},
	{
	name: "Project 3",
	description: "description 3",
	image: "green.jpeg",
	github: "github link 3",
	deployed: "deployed link 3",
	},
	{
	name: "Project 4",
	description: "description 4",
	image: "green.jpeg",
	github: "github link 4",
	deployed: "deployed link 4",
	},
	{
	name: "Project 5",
	description: "description 5",
	image: "green.jpeg",
	github: "github link 5",
	deployed: "deployed link 5",
	},
	{
	name: "Project 5",
	description: "description 6",
	image: "green.jpeg",
	github: "github link 6",
	deployed: "deployed link 6",
	},
]

return (
	<section>
		<div className="center">
			<h1 className="page-header">My Portfolio</h1>
		</div>
		<div>
			<ul className="flex-row mobile-row">
				<li className="padding">
					<Project projects={projects[0]}></Project>
				</li>
				<li className="padding">
					<Project projects={projects[1]}></Project>
				</li>
			</ul>
			<ul className="flex-row mobile-row">
				<li className="padding">
					<Project projects={projects[2]}></Project>
				</li>
				<li className="padding">
					<Project projects={projects[3]}></Project>
				</li>
			</ul>
			<ul className="flex-row mobile-row">
				<li className="padding">
					<Project projects={projects[4]}></Project>
				</li>
				<li className="padding">
					<Project projects={projects[5]}></Project>
				</li>
				</ul>
			</div>
	</section>
	);
}

export default Portfolio;