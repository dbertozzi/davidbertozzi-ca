const data: {
  introduction: { title: string; content: string }[];
  skills: {
    technical: { title: string; listItems: string[] };
    design: { title: string; listItems: string[] };
  };
  ventumFit: { title: string; listItems: string[]; link: string };
  diamondFit: { title: string; listItems: string[] };
  capstone: { title: string; listItems: string[] };
  hueclues: { title: string; listItems: string[] };
  hatchways: { title: string; listItems: string[]; link: string };
  motivationCopy: string;
  githubURL: string;
} = {
  motivationCopy: `I am passionate about making things. Software is constantly innovating 
  its tools and application, and has potential to influence the world and beyond. With my 
  value for meaning and personal challenge web 
  development is one of the most exciting and fulfilling careers possible.`,
  githubURL: "https://github.com/dbertozzi",
  introduction: [
    {
      title: "Introduction",
      content: `At University of Toronto David studied Mechanical Engineering with the Mechatronics stream. 
    Upon graduation he began work in an industry he has been passionate about for most of his life by joining 
    KQS, a small team of consultants who design aerodynamic racing bicycles.`
    },
    {
      title: "Mechanical design",
      content: `A typical project involves an initial meeting with the client to discuss project objectives and scope, and 
    ongoing meetings to ensure the design is reaching the objectives intended by the client. Design phase 
    begins with industrial designer collaboration to creat the desired aesthetic and solutions to user experience problems. 
    As the design progresses the industrial designer is less involved and challenges are specific to manufacturing 
    method, aerodynamic perform, structural integrity, and compatibility with standard components. At the end of this process 
    of ongoing design negotiation with the client and design team the product is released and tool cutting for production begins.`
    },
    {
      title: "Beginning software",
      content: `When faced with the problem of bike fit David saw opportunity to develop a superior solution and practice skills he 
    knew he enjoyed and wanted to grow. In his own time he programmed a concept for a bike fit app and pitched it to the client 
    who saw it as an opportunity differentiate themselves and got on board. The final product was used in Diamondback's 
    direct-to-consumer custom bike builder app and received positive press from the bicycle community, and eventually led to more 
    clients requesting bike fit apps. Since then David's interest in web development has taken off and he's on the path of continual 
    learning and has taught himself a variety of technologies including React and NodeJS.`
    }
  ],
  skills: {
    technical: {
      title: "Technical",
      listItems: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "AWS",
        "SQL",
        "C",
        "HTML5",
        "CSS",
        "SCSS",
        "npm",
        "webpack"
      ]
    },
    design: {
      title: "Design",
      listItems: [
        "Sketch",
        "InVision",
        "Illustrator",
        "Indesign",
        "Wordpress",
        "Shopify",
        "SolidWorks",
        "Onshape"
      ]
    }
  },
  ventumFit: {
    link: "http://fit.ventumracing.com",
    title: `Ventum Fit Calculator`,
    listItems: [
      `Design of reusable and single-use React components for online bicycle sales application`,
      `Data visualization using React-Vis to communicate trade offs of different bike sizes`,
      `Application layout with CSS Grid and Flexbox, and Media Query Breakpoints to create a responsive design according to Designer's specification`,
      `UX Design intended to present users of different knowledge levels with information at a digestible rate`,
      `Managing project tasks and timeline using NiftyPM`
    ]
  },
  diamondFit: {
    title: `Diamondback Fit Calculator`,
    listItems: [
      `Designed a bike fitting app that provides easily accessible information to customers and bike fitters that would normally require interacting with a customer service agent during and after purchase`,
      `Implemented design using JavaScript, Chart.js, and Bootstrap`,
      `Initial proof of concept app leading project approval was built as desktop app using Python and Tkinter`
    ]
  },
  capstone: {
    title: `Embedded Developer, Hydraulic and Pneumatic Lab Equipment Design`,
    listItems: [
      `Interfaced with hardware using C to read signals from analog ports, convert to digital, and write data to storage device asynchronously according to interrupt events`,
      `Designed, wrote, and tested code for limited memory microcontroller to perform concurrent operations`,
      `Selected hardware electric motor control, optical sensor data sampling, force sensor data sampling with Arduino`
    ]
  },
  hueclues: {
    title: `Front End Developer, Hueclues`,
    listItems: [
      `UX Design and Development of front end features using JavaScript and Bootstrap resulting in 500+ user sign up`,
      `Wrote internal documentation for testing and staging procedures`,
      `Worked in cross-functional team to deliver a high quality user experience and meet functional objectives`
    ]
  },
  hatchways: {
    link: "https://github.com/hatchways/team-chestnut",
    title: "Full Stack Developer, Hatchways Etsy Style Store",
    listItems: [
      `Engaged in agile workflow using Git and Zenhub with developers and team lead`,
      `Developed RESTful Web Services for user registration/login, new product creation, and getting user profile using Node.js, Express, Mongoose, MongoDB, and JWT authentication`,
      `Developed React components for user shop, and new product creation with Material UI, Axios, and useReducer`
    ]
  }
};

export default data;
