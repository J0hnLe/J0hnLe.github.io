// Get all project buttons
const projectButtons = document.querySelectorAll('.project-button');

// Get the modal and its content elements
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const projectTitle = modalContent.querySelector('#project-title');
const projectDescription = modalContent.querySelector('#project-description');
const projectImage = modalContent.querySelector('img');
const closeButton = modalContent.querySelector('.close');

// Add event listener to each project button
projectButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the project data (for now, we'll use some filler data)
    const projectData = getProjectData(button.textContent);

    // Update the modal content
    projectTitle.textContent = projectData.title;
    projectDescription.innerHTML = '';
    if (projectData.url) {
  	const linkElement = document.createElement('a');
  	linkElement.href = projectData.url;
  	linkElement.target = '_blank';
	linkElement.style.color = '#337ab7'
  	linkElement.textContent = 'Project Link';
	linkElement.style.textDecoration = 'none';
	linkElement.style.fontWeight = 'bold';
  	projectDescription.appendChild(linkElement);

  	const descriptionParagraph = document.createElement('p');
  	descriptionParagraph.textContent = projectData.description;
  	projectDescription.appendChild(descriptionParagraph);
} else {
  	projectDescription.textContent = projectData.description;
}
    projectImage.src = projectData.image;

    // Disable the buttons
    disableButtons();

    // Show the modal
    modal.style.display = 'block';

    // Adjust the modal height to fit the content
    modalContent.style.height = 'auto';
    const modalHeight = modalContent.scrollHeight;
    modalContent.style.height = '80vh';
    if (modalHeight > modalContent.offsetHeight) {
      modalContent.style.overflowY = 'scroll';
    } else {
      modalContent.style.overflowY = 'hidden';
    }
  });
});

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Enable the buttons
  enableButtons();

  // Hide the modal
  modal.style.display = 'none';
});

// Function to disable the buttons
function disableButtons() {
  projectButtons.forEach((button) => {
    button.disabled = true;
  });
}

// Function to enable the buttons
function enableButtons() {
  projectButtons.forEach((button) => {
    button.disabled = false;
  });
}

// Function to get project data (replace with actual data fetching logic)
function getProjectData(projectName) {
  const projects = {
    'UTCS Infrastructure Upgrade': {
      title: 'UTCS',
      description: `The UTCS Infrastructure Update Project was initiated to modernize and secure the production and engineering departments infrastructure at UTC Retail. This project aimed to replace the outdated UTLS system with a new architecture named UTCS, addressing critical security vulnerabilities and obsolescence issues.

Key Objectives
1.) Replace Windows XP systems with modern alternatives.
2.) Upgrade hardware components, particularly label printers.
3.) Implement a streamlined, efficient, and secure labeling and production process.
4.) Enhance overall system security and reduce potential risks.
5.) Reduction of multiple extension applications into a smaller suite utilizing a singular database.

Hardware Updates
- Operating System: Upgraded from Windows XP to modern Windows 10
- Label Printer: Replaced Zebra TLP2844 with Zebra ZD220 (Thermal Transfer and Direct Transfer)

Software Components
The project involved several software components:

- UTCS: A graphical user interface (GUI) application for a label printer, allowing users to select a product, input serial numbers and other details, and print labels with specific formatting and content. It includes features such as automatic serial number incrementing, customizable second barcode labels, and error checking to ensure accurate and efficient label printing.
- UTCS_Controller: The provided Python script is a graphical user interface (GUI) application that manages a SQLite database for tracking engineering projects, part numbers, and production serial numbers, allowing users to create, update, and query the database. The application also includes features for managing product configurations, generating reports, and updating data via external sources, with access controls based on user roles and password authentication.
- UTCS_IMG: A custom wrapper built into WinPE that adds multiple efficiencies to allow for staging systems prior to shipping. It also uses these efficiencies to determine the model of the unit for proper image selection, identifies the correct image via a corresponding top-level part number and reports the selected part number and serial number to a websocket server to be inputted into a SQL database.
- UTCS_ProcessHandler: Process handler for monitoring and updating applications

Benefits:
- Improved security through the elimination of Windows XP vulnerabilities
- Enhanced efficiency in labeling and production processes.
- Streamlined management of product configurations and versions.
- Robust database integration for accurate tracking of products and installations.

This project demonstrates a comprehensive approach to upgrading legacy systems, focusing on both hardware and software improvements to enhance operational efficiency and security in a retail environment.`,
      image: './img/utcs.png',
    },
    'WinPE-VNC': {
      title: 'Project 2',
      description: `WinPE-VNC is a project that integrates Virtual Network Computing (VNC) capabilities into a Windows Preinstallation Environment (WinPE) using various tools and technologies. 

The main components of this project include:
- WinPE: A minimal Windows operating system environment designed for troubleshooting, imaging and recovery purposes.
- NoVNC: An HTML5 VNC client implemented as a web application.
- Websockify: A WebSocket-to-TCP bridge tool.
- Python-based HTTP server: Used to serve the VNC client interface.

Key Features
- Provides a VNC server within the WinPE environment.
- Offers a browser-based VNC client accessible from most modern browsers.
- Allows remote access to the VNC server from within the local network.
- Supports potential external access through port forwarding.

Technical Implementation
The project involves modifying the WinPE image to include necessary components:
- Installing and configuring TightVNC as a system service.
- Exporting TightVNC registry keys and files.
- Integrating Node.js and Python scripts into the WinPE environment.

The setup process includes:
- Building the WinPE environment according to Microsoft's guidelines.
- Mounting the WinPE boot.wim file for modification.
- Creating standalone executables for WinPE using PyInstaller and pkg.
- Configuring the environment to run the VNC server and HTTP server as background tasks.

The VNC client is served through a web interface, allowing users to access the WinPE environment remotely using a web browser.

Technical Components
- TightVNC: A popular VNC server implementation for Windows.
- Node.js: Used for running Websockify, which acts as a WebSocket-to-TCP bridge.
- Python: Utilized for creating a custom HTTP server to serve the VNC client interface.
- PyInstaller: Helps create standalone executables for WinPE.
- PKG: Used to compile Node.js applications for Windows.`,
      image: './img/winpe-vnc.png',
      url: 'https://github.com/9-5/WinPE-VNC',
    },
    'Project': {
      title: 'Project',
      description: 'This is a description for Project.',
    },
  };

  return projects[projectName];
}
