function App() {
   const [modalContent, setModalContent] = React.useState(null);
   const [darkMode, setDarkMode] = React.useState(true);

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
         images: [
            "https://placehold.co/300x200",
            "https://placehold.co/300x200",
            "https://placehold.co/300x200"
         ],
      },
      'WinPE-VNC': {
         title: 'WinPE-VNC',
         description: 
        `WinPE-VNC is a project that integrates Virtual Network Computing (VNC) capabilities into a Windows Preinstallation Environment (WinPE) using various tools and technologies.
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
         images: [
            "https://placehold.co/300x200",
            "https://placehold.co/300x200",
            "https://placehold.co/300x200"
         ],
         url: 'https://github.com/9-5/WinPE-VNC',
      },
      'Chromium Intelligence': {
         title: 'Chromium Intelligence',
         description: `Chromium-Intelligence is a project that integrates advanced AI-powered text and image processing capabilities into Chromium-based browsers using Google's Gemini API and various web technologies.
                    The main components of this project include:
                    - Chromium Extension: A browser add-on built using Manifest V3 for enhanced security and performance.
                    - Gemini API: Google's state-of-the-art language model for natural language processing and image analysis.
                    - Content Scripts: JavaScript files that interact with web pages to process selected text and images.
                    - Background Service Worker: Manages API requests and extension functionality.
                    Key Features
                    - Provides context menu integration for easy access to AI-powered tools.
                    - Offers multiple text operations including proofreading, rewriting, and summarization.
                    - Allows custom prompt-based analysis of images and PDF documents.
                    - Supports secure API key management and local storage of user preferences.
                    Technical Implementation
                    The project involves developing a Chromium extension with the following components:
                    - Implementing a service worker for background tasks and API communication.
                    - Creating content scripts for webpage interaction and UI manipulation.
                    - Developing a popup interface for API key management and settings.
                    The setup process includes:
                    - Configuring the manifest file to define extension permissions and structure.
                    - Implementing secure storage for the Gemini API key using Chrome Storage API.
                    - Creating modular JavaScript functions for various text and image processing tasks.
                    - Designing a user-friendly popup interface for extension settings.
                    The extension integrates seamlessly with the browser's context menu, allowing users to process selected text, images, and PDF links directly from web pages.
                    Technical Components
                    - JavaScript: The primary programming language for extension development.
                    - Chrome Extension APIs: Used for browser integration and functionality.
                    - Fetch API: Utilized for making HTTP requests to the Gemini API.
                    - HTML/CSS: Used for creating the extension's popup interface.
                    - JSON: Used for manifest configuration and data interchange.`,
         images: [
            "https://placehold.co/300x200",
            "https://placehold.co/300x200",
            "https://placehold.co/300x200"
         ],
         url: 'https://github.com/9-5/Chromium-Intelligence',
      },
      'Project': {
         title: 'Project',
         description: 'This is a description for Project.',
         images: [
            "https://placehold.co/300x200",
            "https://placehold.co/300x200",
            "https://placehold.co/300x200"
         ],
      },
   };

   const openModal = (project) => {
      setModalContent(project);
      document.getElementById("myModal").style.display = "block";
   };

   const closeModal = () => {
      document.getElementById("myModal").style.display = "none";
      setModalContent(null);
   };

   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('bg-gray-900');
      document.body.classList.toggle('bg-gray-100');
      document.body.classList.toggle('text-gray-100');
      document.body.classList.toggle('text-gray-900');
   };

   return ( <
      div className = "p-4" >
      <
      div className = "flex justify-between items-center mb-4" >
      <
      h2 className = "text-xl font-bold" > Projects < /h2> <
      button onClick = {
         toggleDarkMode
      }
      className = "bg-blue-500 text-white px-4 py-2 rounded focus:outline-none" > {
         darkMode ? < i className = "fas fa-sun" > < /i> : <i className="fas fa-moon"></i >
      } <
      /button> <
      /div> <
      div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" > {
         Object.keys(projects).map((key, index) => ( <
            div key = {
               index
            }
            className = {
               `p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-100 text-gray-900'}`
            } >
            <
            h3 className = "text-lg font-bold mb-2" > {
               projects[key].title
            } < /h3> <
            p className = "mb-2" > {
               projects[key].description.split('\n')[0]
            } < /p> <
            button onClick = {
               () => openModal(projects[key])
            }
            className = "text-blue-500" > View Project < /button> <
            /div>
         ))
      } <
      /div>

      {
         modalContent && ( <
               div id = "myModal"
               className = "modal" >
               <
               div className = {
                  `modal-content ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-blue-100 text-gray-900'}`
               } >
               <
               span className = "close"
               onClick = {
                  closeModal
               } > & times; < /span> <
               h2 className = "text-xl font-bold mb-4" > {
                  modalContent.title
               } < /h2> <
               div className = "gallery mb-4" > {
                  modalContent.images && modalContent.images.map((image, index) => ( <
                     img key = {
                        index
                     }
                     src = {
                        image
                     }
                     alt = {
                        `${modalContent.title} screenshot ${index + 1}`
                     }
                     />
                  ))
               } <
               /div> <
               p className = "mb-4" > {
                  modalContent.description
               } < /p> {
                  modalContent.url && < a href = {
                     modalContent.url
                  }
                  className = "text-blue-500" > Go to Project < /a>} <
                     /div> <
                     /div>
               )
            } <
            /div>
      );
   }

   ReactDOM.render( < App / > , document.getElementById('root'));