import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Devinda",
  lastName: "Thoradeniya",
  name: `Devinda Thoradeniya`,
  role: "Systems Engineer | Cloud & Linux Operations | Azure AZ-900 | SRE & DevOps Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "devindathoradeniya@gmail.com",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Sinhalese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/devinda-thoradeniya-294569195/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/devindabest/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between coding and operations</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Devinda is a Systems Engineer with strong expertise in Linux administration, cloud infrastructure, and
        containerization. Experienced in configuring, upgrading, maintaining, and monitoring scalable cloud
        environments to ensure optimal performance and security. Skilled in AWS, DevOps practices, and
        configuration management, with a track record of collaborating effectively with local and
        international teams. Dedicated to continuous improvement and leveraging cloud technologies to
        deliver secure, high-availability, and cost-optimized solutions. Seeking an opportunity to design,
        implement, and optimize resilient production systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Textware Pvt Ltd",
        timeframe: "December 2023 - Present",
        role: "Associate Systems Engineer",
        achievements: [
          <>
            Linux Server monitoring, configuring, upgrading and administration.
          </>,
          <>
            Docker container administration, including container lifecycle management, log monitoring, troubleshooting and performance optimization.
          </>,
          <>
            Provided product presentations and technical support, enhancing client understanding and
            satisfaction.
          </>,
          <>
            Provided technical expertise and troubleshooting for WhatsApp API integration for local and
            international clients.
          </>,
          <>
            Provided technical expertise and troubleshooting for SMS API integration for local and
            international clients.
          </>,
          <>
            Optimized internal operations by automating manual processes with Bash/Python Scripting and
            streamlining practices for improved efficiency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Finetech Consultancy Pvt Ltd",
        timeframe: "October 2022 - March 2023",
        role: "Trainee Cloud Engineer",
        achievements: [
          <>
            Collaborated with Sales Engineers to ensure client objectives were met through accurate
            business requirement documentation.
          </>,
          <>
            Google Workspace administration.
          </>,
          <>
            Provided no-code support and development (AppSheet).
          </>,
          <>
            Provided Google Maps API technical support.
          </>,
          <>
            Provided Google Workspace and AppSheet support for the Sri Lanka Tourism Development
            Authority (SLTDA).
          </>,
        ],
        images: [],
      },
      {
        company: "SINGER Finance (Lanka) PLC",
        timeframe: "January 2022 - July 2022",
        role: "IT Assistant - Contract",
        achievements: [
          <>
            Windows server and Microsoft Active Directory administration.
          </>,
          <>
            Hosted informative webinars focusing on security procedures for company employees.
          </>,
          <>
            Maintain and upgrade the On-premise Servers.
          </>,
          <>
            Monitor the server backups, performance, and report daily.
          </>,
          <>
            Provide support for the development and implementation of new policies and procedures.
          </>,
          <>
            Work with end-users to identify and deliver the required system service levels.
          </>,
        ],
        images: [],
      }
    ],
  },
  
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Plymouth",
        timeframe: "2019 - 2023",
        description: <>Bachelor’s degree in Computer Security</>,
      },
      {
        name: "Dharmapala College - Pannipitiya",
        timeframe: "2019",
        description: <>Advanced Level</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "AWS Certified Solutions Architect - Associate (In Progress)",
        issuer: "AWS",
      },
      {
        name: "Google Certified Professional Cloud Architect (Expired)",
        issuer: "Google",
      },
      {
        name: "Azure Fundamentals AZ - 900",
        issuer: "Microsoft",
        link: "https://www.credly.com/badges/d867eed7-9ab6-4b7c-9bbc-28e7f339205b",
      },
      {
        name: "Docker Training Course for the Absolute Beginner",
        issuer: "Kodekloud",
        link: "https://learn.kodekloud.com/certificate/db1910aa-3d2a-404f-9311-33e0b333053f",
      },
      {
        name: "Ansible for the Absolute Beginner - Hands-On - DevOps",
        issuer: "Kodekloud/Udemy",
        link: "https://udemy-certificate.s3.amazonaws.com/image/UC-e9ccf3aa-a29b-4404-8ffc-be36e8b12d56.jpg",
      },
      {
        name: "Kubernetes for the Absolute Beginners - Hands-on",
        issuer: "Kodekloud/Udemy",
        link: "https://udemy-certificate.s3.amazonaws.com/image/UC-fa1ecde4-103f-49b6-bf21-326466c6d42b.jpg",
      },
      {
        name: "Learn Bash Scripting Course",
        issuer: "Codeacademy",
        link: "https://www.codecademy.com/profiles/DevindaThoradeniya/certificates/37c55263a9f1b1f7603f7551c293ecbd",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Tools And Technologies",
    skills: [
      {
        
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
        ],
      },
      {
        title: "Docker",
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
