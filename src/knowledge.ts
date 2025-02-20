// Knowledge base for the chatbot
export const knowledge = {
    // Basic information
    name: "Waddhanabot Yi",
    role: "Software Developer",
    contact: {
      phone: "500-595-9295",
      email: "thanon43@gmail.com",
      linkedin: "linkedin.com/in/waddhanabot-yi/",
      github: "https://github.com/WBotCS"
    },
  
    // Skills
    skills: [
      "Python",
      "C/C++",
      "Java",
      "Kotlin",
      "HTML/CSS",
      "JavaScript",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures",
      "Database Management",
      "Systems Programming",
      "Project Management",
      "UX/UI Design",
      "3D Modeling"
    ],
  
    // Experience
    experience: [
      {
        company: "SquatchSports",
        role: "Software Developer Intern",
        period: "Jan 2024 – Dec 2024",
        description: "Successfully led a cross-functional team to develop a mobile application to determine basketball shot make or miss using AI, achieving 95% accuracy through the integration of the MediaPipe Framework. Designed and implemented advanced tracking features for shot positions and outcomes by leveraging data from machine learning models, enhancing player performance analysis by 30%. Led a cross-functional Agile team, managing sprint planning, task prioritization, and stakeholder communication to deliver features ahead of schedule."
      },
      {
        company: "WSU Agricultural and Sciences",
        role: "Technical Lab Assistant I",
        period: "Sep 2023 – May 2024",
        description: "Developed training datasets from nematode data, leading to a 20% improvement in the accuracy of AI-based plant disease models. Streamlined experimental setup and maintenance for a 15% increase in lab productivity. Assisted with the execution of experiments in a laboratory setting, ensuring high standards of data quality."
      },
      {
        company: "WSU International Program",
        role: "Peer Mentor",
        period: "Apr 2021 – May 2022",
        description: "Accomplished a 50% increase in event attendance by planning and executing engaging programs tailored to international students’ interests. Improved cultural adaptation for 100+ international students by providing comprehensive support and resources. Enhanced the integration and experience of international program participants by creating and delivering workshops and resources."
      }
    ],
  
    // Education
    education: [
      {
        school: "Washington State University",
        degree: "Bachelor of Science in Computer Science",
        year: "Jan 2020 – Dec 2024",
        location: "Pullman, WA",
        relevantCoursework: [
          "Data Structures",
          "Software Engineering",
          "Database Management",
          "Artificial Intelligence",
          "Machine Learning",
          "Systems Programming",
          "Computer Architecture",
          "Project Management"
        ]
      }
    ],
  
    // Projects
    projects: [
      {
        name: "Scent Compass AI App",
        description: "Achieved a 95% satisfaction rate in fragrance recommendations by engineering a content-based AI recommender with features like one-hot encoding, deployed using Flask and JavaScript. Built and deployed a user-friendly web app that improved the fragrance-matching process through machine learning (cosine similarity).",
        technologies: ["Python", "HTML/CSS", "JavaScript", "Flask", "Selenium"],
        date: "January 2025"
      },
      {
        name: "Theia Accessibility App",
        description: "Created an Android application using Java and Android Studio to assist visually impaired individuals with navigation. Facilitated seamless navigation for users with disabilities by developing a Java-based mobile app with GPS, camera, and voice command integration, achieving 90% usability scores in testing. Designed and implemented features to provide inclusive, point-A-to-point-B navigation for users with mobility challenges.",
        technologies: ["Java", "Kotlin", "Android Studio"],
        date: "August 2024"
      },
      {
        name: "Doctor Patient Portal Web",
        description: "Accomplished a 40% improvement in user accessibility by designing and developing an intuitive web portal interface using HTML, CSS, and JavaScript. Maintained comprehensive technical documentation throughout the development process to ensure seamless knowledge transfer and system scalability.",
        technologies: ["HTML/CSS", "UML"],
        date: "March 2023"
      }
    ],
  
    // Technical Skills
    technicalSkills: {
      languages: ["Python", "C/C++", "Java", "Kotlin", "HTML/CSS", "JavaScript"],
      developerTools: ["VS Code", "Android Studio", "Git", "AWS", "Microsoft Office", "Adobe Creative", "AutoDesk"],
      technologiesFrameworks: ["UX/UI Design", "Machine Learning", "Application Development", "System Analysis", "Project Management", "IT Support", "Quality Inspection", "3D Modeling"]
    }
  };
  
  // Helper function to find relevant responses
  export function findAnswer(question: string): string {
    const q = question.toLowerCase();
    if (q.includes("from")){
      return 'I am from Cambodia, but I am currently located in Washington state, USA!'
    }
    // Check for different types of questions
    if (q.includes("name") || q.includes("who are you")) {
      return `My name is ${knowledge.name}.`;
    }
  
    if (q.includes("visa") || q.includes("sponsorship") || q.includes("work authorization")) {
      return 'I have work authorization. I am currently on F1-OPT (STEM extension eligible). I do not require sponsorship for the first two years, but after that, I will require work visa sponsorship.';
    }
  
    if (q.includes("role") || q.includes("work") || q.includes("job")) {
      return `I am a ${knowledge.role}.`;
    }
  
    if (q.includes("thanks") || q.includes("thank you")) {
      return `My pleasure!`;
    }
  
    if (q.includes("skills") || q.includes("technologies")) {
      return `I am skilled in: ${knowledge.skills.join(", ")}.`;
    }
  

    if (q.includes("experience") || q.includes("work history")) {
      const exp = knowledge.experience[0]; // Most recent experience
      return `I worked as a ${exp.role} at ${exp.company}. ${exp.description}`;
    }
    
    if (q.includes("education") || q.includes("study") || q.includes("background")) {
      const edu = knowledge.education[0];
      return `I studied ${edu.degree} at ${edu.school}, graduating in ${edu.year}. My relevant coursework includes: ${edu.relevantCoursework.join(", ")}.`;
    }
  
    if (q.includes("project") || q.includes("portfolio")) {
      const project = knowledge.projects[0];
      return `One of my notable projects is ${project.name}: ${project.description}. It was built using ${project.technologies.join(", ")}.`;
    }
  
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("linkedin") || q.includes("github")) {
      return `You can contact me via email at ${knowledge.contact.email}, phone at ${knowledge.contact.phone}, LinkedIn at ${knowledge.contact.linkedin}, or GitHub at ${knowledge.contact.github}.`;
    }
  
    if (q.includes("schedule") || q.includes("appointment") || q.includes("meet") || q.includes("calendly")) {
      return "You can schedule a meeting with me through my Calendly link: https://calendly.com/thanon43";
    }
    

    if (q.includes("passion") || q.includes("passionate")) {
      return "I am passionate about software development, artificial intelligence, and machine learning. I enjoy creating innovative solutions to complex problems that could make an impact!";
    }
    // Default response if no match is found
    return "I'm not sure about that. Could you please ask something about my skills, experience, education, projects, or contact information? Or would you like to schedule a meeting?";
  }