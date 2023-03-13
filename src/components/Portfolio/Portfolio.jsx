import React from 'react';
import Project from '../Project/Project';
import "./Portfolio.css"

function Portfolio() {
	const projects = [
	{name: "FullStacks Cafe",
	description: "A restaurant mobile ordering app, with HTML/CSS/JS/Handlebars used to design the front end and Express/Sequelize powering the server.",
	image: "fullstackscafe.png",
	github: "https://github.com/jicard/FullStacks-Cafe",
	deployed: "https://fullstackscafe.herokuapp.com/home.html",
	},
	{
	name: "Restricted Section",
	description: "A book search application where users can create accounts and save books to their profile, utilizing technologies including React, GraphQL, MongoDB, and Apollo Server.",
	image: "bookSearch.png",
	github: "https://github.com/jicard/Restricted-Section",
	deployed: "https://restricted-section.herokuapp.com/",},
	{
	name: "Employee Management System",
	description: "A back-end application used to manage departments and employees in a business. Written with SQL, Express, and Node.",
	image: "sqlCMS.png",
	github: "https://github.com/jicard/SQL-CMS-Project",
	deployed: "https://app.castify.com/view/0144c3db-4999-428f-9220-6faf6af960f5",
	},
	{
	name: "Twitbookagram",
	description: "A social networking API template, where users can create posts, add friends, and react to others' posts. Utilizes MongoDB, Mongoose, and Express.",
	image: "twitbookagram.png",
	github: "https://github.com/jicard/Twitbookagram",
	deployed: "https://app.castify.com/view/283defa8-b279-41b0-b440-cc1bea4727e9",
	},
	{
	name: "Check The Weather",
	description: "Users can check the weather for any location including the current and five-day forecast. Written in JavaScript, this is an example of utilizing third-party web APIs and CSS frameworks.",
	image: "weather.png",
	github: "https://github.com/jicard/Check-The-Weather",
	deployed: "https://jicard.github.io/Check-The-Weather/",
	},
	{
	name: "Work Day Scheduler",
	description: "A daily schedule organizer for your average 9-5'er. Uses JavaScript and takes advantage of browser storage to keep track of a user's tasks for the day, and will change color based on the task's deadline in relation to the current time.",
	image: "workDay.png",
	github: "https://github.com/jicard/Workday-To-Do-Tracker",
	deployed: "https://jicard.github.io/Workday-To-Do-Tracker/",
	},
]

return (
	<section>
		<div className="portfolioHeader">
			<h1>My Projects</h1>
		</div>
		<div className="portfolioWrapper">
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