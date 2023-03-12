import React from 'react';
import Project from '../Project/Project';
import "./Portfolio.css"

function Portfolio() {
	const projects = [
	{name: "FullStacks Cafe",
	description: "A full-stack application, with HTML/CSS/JS/Handlebars used to design the front end and Express/Sequelize powering the server.",
	image: "fullstackscafe.png",
	github: "https://github.com/jicard/FullStacks-Cafe",
	deployed: "https://fullstackscafe.herokuapp.com/home.html",
	},
	{
	name: "Project 2",
	description: "description 2",
	image: "bookSearch.png",
	github: "github link 2",
	deployed: "deployed link 2",},
	{
	name: "Project 3",
	description: "description 3",
	image: "sqlCMS.png",
	github: "github link 3",
	deployed: "deployed link 3",
	},
	{
	name: "Project 4",
	description: "description 4",
	image: "twitbookagram.png",
	github: "github link 4",
	deployed: "deployed link 4",
	},
	{
	name: "Project 5",
	description: "description 5",
	image: "weather.png",
	github: "github link 5",
	deployed: "deployed link 5",
	},
	{
	name: "Project 5",
	description: "description 6",
	image: "workDay.png",
	github: "github link 6",
	deployed: "deployed link 6",
	},
]

return (
	<section>
		<div className="portfolioHeader">
			<h1>My Projects</h1>
		</div>
		<div>
			<ul className="flex-row mobile-row">
				<li className="project">
					<Project projects={projects[0]}></Project>
				</li>
				<li className="project">
					<Project projects={projects[1]}></Project>
				</li>
			</ul>
			<ul className="flex-row mobile-row">
				<li className="project">
					<Project projects={projects[2]}></Project>
				</li>
				<li className="project">
					<Project projects={projects[3]}></Project>
				</li>
			</ul>
			<ul className="flex-row mobile-row">
				<li className="project">
					<Project projects={projects[4]}></Project>
				</li>
				<li className="project">
					<Project projects={projects[5]}></Project>
				</li>
				</ul>
			</div>
	</section>
	);
}

export default Portfolio;