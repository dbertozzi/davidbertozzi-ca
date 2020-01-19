const data: {
  introduction: { title: string; content: string }[];
  skills: {
    technical: { title: string; listItems: string[] };
    design: { title: string; listItems: string[] };
  };
  ventumFit: {
    title: string;
    listItems: string[];
    link: string;
    images: { copy: string; src: string; label: string }[];
  };
  diamondFit: { title: string; listItems: string[]; description: string };
  capstone: { title: string; listItems: string[]; description: string };
  hueclues: { title: string; listItems: string[]; images: { src: string }[] };
  hatchways: {
    title: string;
    listItems: string[];
    link: string;
    description: string;
  };
  motivationCopy: string;
  githubURL: string;
} = {
  motivationCopy: `I am passionate about making things. Software is constantly innovating 
  its tools and application in ways that have potential to influence everything. With my 
  value for meaning and personal challenge web 
  development is one of the most exciting and fulfilling careers possible for me.`,
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
    ],
    images: [
      {
        copy: `Ventum requested a fit tool after seeing the press about Diamondback's calculator. Triathlon bike fit is a complex 
        topic and for direct-to-consumer bike sales, an obstacle for sale because customers fear the costly mistake of selecting the wrong size. The bikes can adjust in a plethora of 
        ways and fit ranges overlap. The objective get the athlete on the size that fits them now and has the right adjustment for the future without live customer support.`,
        src: "/ventum-fit/01.png",
        label: "Select a frame"
      },
      {
        copy: `The user chooses a method of bike fit. If they already own a bike measuring it would be the best way to start. 
        if they do not, an equation based on many orthodox bike fits helps predict their fit point.`,
        src: "/ventum-fit/02.png",
        label: "Select fit method"
      },
      {
        copy: `The user is instructed on how to accurately measure their bicycle or body based on the previous selection. These measurements are provide 
        a fit point that allows the user to relate their unique fit to possible fit coordinates of each size of frame.`,
        src: "/ventum-fit/03.png",
        label: "Measurement entry"
      },
      {
        copy: `For an athlete purchasing their first triathlon bike the frame size may be all they need to know to make the purchase. 
        If the frame size is correct they can visit a bike fitter once they get the bike and have it professionally adjusted. Alternatively, they could begin 
        with the suggested fit point and make small adjustments over time until a position is found. The suggested point is a standard, but there is error in measuring the 
        body as well as uniqueness in physiology. Even with a professional in person fit it is a continual process of adjustment seeking the ideal position that offers optimal aerodynics and power output.`,
        src: "/ventum-fit/04.png",
        label: "Suggested frame size"
      },
      {
        copy: `For athletes who are experienced with bike fit or want to learn more the details are provided. The adjustment range from the athletes fit point is shown in relation to the 
        suggested size, and the nearest neighboring sizes. There are cases when an athlete may not to be in the middle of the adjustment range. For instance, if the athlete is absolutely sure of 
        their fit point they may want to have no spacers under the stem or arm rests for aerodynamics and a clean aesthetic.`,
        src: "/ventum-fit/05.png",
        label: "Fit details"
      },
      {
        copy: `A graphical representation of the fit range is standard information that athletes use to select bicycles. In the fit details 
        an interactive plot shows the user where their fit point is in the range of fit points graphically, and displays the details of how to 
        configure each fit point when it is moused over.`,
        src: "/ventum-fit/06.png",
        label: "Fit plot"
      }
    ]
  },
  diamondFit: {
    title: `Diamondback Fit Calculator`,
    listItems: [
      `Designed a bike fitting app that provides easily accessible information to customers and bike fitters that would normally require interacting with a customer service agent during and after purchase`,
      `Implemented design using JavaScript, Chart.js, and Bootstrap`,
      `Initial proof of concept app leading project approval was built as desktop app using Python and Tkinter`
    ],
    description: ``
  },
  capstone: {
    title: `Embedded Developer, Hydraulic and Pneumatic Lab Equipment Design`,
    listItems: [
      `Interfaced with hardware using C to read signals from analog ports, convert to digital, and write data to storage device asynchronously according to interrupt events`,
      `Designed, wrote, and tested code for limited memory microcontroller to perform concurrent operations`,
      `Selected hardware electric motor control, optical sensor data sampling, force sensor data sampling with Arduino`
    ],
    description: ``
  },
  hueclues: {
    title: `Front End Developer, Hueclues`,
    listItems: [
      `UX Design and Development of front end features using JavaScript and Bootstrap resulting in 500+ user sign up`,
      `Wrote internal documentation for testing and staging procedures`,
      `Worked in cross-functional team to deliver a high quality user experience and meet functional objectives`
    ],
    images: [{ src: "" }]
  },
  hatchways: {
    link: "https://github.com/hatchways/team-chestnut",
    title: "Hatchways Etsy Style Store",
    listItems: [
      `Engaged in agile workflow using Git and Zenhub with developers and team lead`,
      `Developed RESTful Web Services for user registration/login, new product creation, and getting user profile using Node.js, Express, Mongoose, MongoDB, and JWT authentication`,
      `Developed React components for user shop, and new product creation with Material UI, Axios, and useReducer`
    ],
    description: `This was a two month long team project I contributed to. The objective was to gain experience in a professional agile work flow 
    and practice new technologies. The app we built is an online Bakery Shop that allows sellers to create their own stores and list their
     products alongside other sellers. Both shoppers and sellers can sign up for accounts and transactions are completed with Stripe.`
  }
};

export default data;
