// lib/constants.js

import { FaTachometerAlt, FaUserPlus, FaUsers, FaCalendarAlt, FaChartBar, FaFlag, FaClipboardCheck } from 'react-icons/fa';

export const systemModules = [
  {
    id: 'dashboard',
    title: 'Dashboard Visualization',
    shortTitle: 'Dashboard',
    icon: FaTachometerAlt,
    description: 'Your command center. The dashboard provides a high-level, at-a-glance overview of key information and activities relevant to your role, with quick links to the most important sections.',
    features: [
      'Customizable widgets for key stats',
      'Visual data through charts and graphs',
      'Upcoming events and news feeds',
      'Quick access to core functions'
    ],
    image: '/images/dashboardsample.jpg' // Suggestion: A sleek image of charts and graphs.
  },
  {
    id: 'user_management',
    title: 'User Management',
    shortTitle: 'Users',
    icon: FaUsers,
    description: 'The foundational module for controlling system access. Define different user roles and permissions to ensure every member has the appropriate level of access, from administrators to general members.',
    features: [
      'Role-based access control (Admin, Leader, Member)',
      'Secure login and authentication',
      'Creation, modification, and deactivation of accounts',
      'Password management and recovery'
    ],
    image: '/images/usermanagmentsample.jpg' // Suggestion: An abstract image of user profiles or network connections.
  },
  {
    id: 'membership_registration',
    title: 'Membership Registration',
    shortTitle: 'Membership',
    icon: FaUserPlus,
    description: 'A seamless and user-friendly interface for new members to join the organization. This module handles the entire registration process, from application to approval and integration.',
    features: [
      'Customizable online registration forms',
      'Application review and approval workflow',
      'Automated welcome emails',
      'Digital membership card generation'
    ],
    image: '/images/membershipsample.jpg' // Suggestion: A welcoming image of a person filling out a form on a laptop.
  },
  {
    id: 'events_achievements',
    title: 'Events & Achievements',
    shortTitle: 'Events',
    icon: FaCalendarAlt,
    description: 'The central hub for all organizational activities. Keep members informed and engaged by managing a comprehensive events calendar and celebrating the milestones and achievements of individuals and groups.',
    features: [
      'Events calendar with online registration',
      'RSVP and attendance tracking',
      'Highlight and record member achievements',
      'Automated event reminders'
    ],
    image: '/images/eventsample.webp' // Suggestion: A vibrant picture of a successful event or conference.
  },
  {
    id: 'attendance',
    title: 'Attendance Tracking',
    shortTitle: 'Attendance',
    icon: FaClipboardCheck,
    description: 'Work in conjunction with the Events module to track member participation. This valuable data provides deep insights into member engagement levels and helps identify the most active participants.',
    features: [
        'Mark attendance for meetings and activities',
        'Generate detailed attendance reports',
        'Points-based system to reward active members',
        'Integration with member profiles'
    ],
    image: '/images/attendance.webp' // Suggestion: A clean image of a checklist or a digital check-in process.
  },
  {
    id: 'plan_report',
    title: 'Plan & Report',
    shortTitle: 'Reports',
    icon: FaChartBar,
    description: 'The analytical powerhouse of the system. This module allows leadership to make data-driven decisions by generating insightful reports on membership, engagement, and other key performance indicators.',
    features: [
      'Reports on membership growth and demographics',
      'Tracking of Key Performance Indicators (KPIs)',
      'Tools for planning future campaigns',
      'Exportable data for analysis'
    ],
    image: '/images/planandreport.jpg' // Suggestion: A professional image of analytics dashboards and pie charts.
  },
  {
    id: 'leagues',
    title: 'Leagues',
    shortTitle: 'Leagues',
    icon: FaFlag,
    description: 'Facilitate engagement within specific interest groups inside the larger organization. Create dedicated spaces for groups like "Women Leagues" and "Youth Leagues" to thrive and organize.',
    features: [
      'Creation and management of leagues',
      'Dedicated sections with news and forums',
      'League-specific events and activities',
      'Member-driven community building'
    ],
    image: '/images/gorups.jpg' // Suggestion: A dynamic image of a focused group, like a youth team or women's committee.
  }
];

export const sampleLeadership = [
  {
    id: 'leader-alemayehu-kasa',
    name: 'Alemayehu kasa',
    role: 'Chairperson, Union 1',
    image: '/images/buisnessman5.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
    ],
    description: "As the Chairperson for Union 1, Alemayehu kasa provides strategic direction and leadership, ensuring the union's goals align with the broader organizational vision. She has been a dedicated member for over 15 years.",
  },
  {
    id: 'leader-asefa-mulatu',
    name: 'Asefa mulatu',
    role: 'Chairperson, Union 2',
    image: '/images/buisnessman2.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
    ],
    description: "Asefa mulatu leads Union 2 with a focus on member engagement and community outreach. His efforts have been pivotal in driving membership growth and successful local initiatives.",
  },
  {
    id: 'leader-bontu-debebe',
    name: 'Bontu debebe',
    role: 'Deputy Chairperson, Union 1',
    image: '/images/buisnesswoman2.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
    description: "Supporting the Chairperson of Union 1, Emily White focuses on operational excellence and internal coordination. She plays a key role in organizing major events and managing union activities.",
  },
  {
    id: 'leader-tesfa-aschalew',
    name: 'Tesfa aschalew',
    role: 'Head of Finance Sector',
    image: '/images/buisnessman4.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
    ],
    description: "Tesfa aschalew oversees the financial health of the organization. His expertise ensures fiscal responsibility and strategic allocation of resources to support all unions and initiatives.",
  },
  // You can add more leaders here...
  {
    id: 'leader-aster-kebede',
    name: 'Aster kebede',
    role: 'Deputy Chairperson, Union 2',
    image: '/images/buisnesswoman5.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
       { platform: 'twitter', url: '#', icon: 'FaTwitter' },
    ],
    description: "Aster kebede works alongside the leadership of Union 2, championing youth engagement and heading the development of the Youth League's framework and activities.",
  },
];


// Placeholder data for testimonials - 
// lib/constants.js (Assuming this is where your constants file is)

// Placeholder data for testimonials - Adapted for TrainEx E-learning
export const memberQuotes = [
    {
        id: 1,
        name: "Samson Abebe",
        role: "Chairperson, Union 1",
        testimonial: "This new platform has revolutionized how we operate. The ability to generate reports and track attendance in real-time allows us to make smarter, data-driven decisions for our members.",
        photo: "/images/buisnessman5.jpg", 
    },
    {
        id: 2,
        name: "Asfa Hailu",
        role: "Youth League Member",
        testimonial: "It's so much easier to stay engaged now. I can see all the upcoming youth events on the calendar, RSVP instantly, and connect with other members in our league's dedicated forum. It's fantastic!",
        photo: "/images/buisnessman1.jpg", 
    },
    {
        id: 3,
        name: "Aschalew kebede",
        role: "Deputy Chairperson, Union 2",
        testimonial: "As a leader, communication is key. The centralized dashboard and announcements have streamlined how we connect with our 'families' and ensure everyone is informed and on the same page.",
        photo: "/images/buisnessman2.jpg", 
    },
    {
        id: 4,
        name: "Bontu Asmamaw",
        role: "Finance Sector",
        testimonial: "The planning and reporting module is a game-changer. Tracking membership growth and event engagement helps us allocate our budget more effectively to support the initiatives that matter most.",
        photo: "/images/buisnessman3.jpg", 
    },
    {
        id: 5,
        name: "Selam Alemayehu",
        role: "Women's League Lead",
        testimonial: "Organizing our league-specific events used to be a challenge. With this system, I can create an event, manage registrations, and track attendance all in one place. It saves me so much time.",
        photo: "/images/buisnessman4.jpg", 
    },
     {
        id: 6,
        name: "Samrawit samuel",
        role: "General Member",
        testimonial: "The online membership registration was so simple and welcoming. I filled out the form, received my confirmation, and had access to my new digital member card within minutes. A great first impression!",
        photo: "/images/buisnesswoman5.jpg", 
    },
     {
        id: 7,
        name: "samuel kebede",
        role: "General Member, Family 1",
        testimonial: "I love seeing our achievements highlighted on the platform. It creates a real sense of community and pride in what we accomplish together, from small milestones to major successes.",
        photo: "/images/buisnesswoman1.jpg", 
    },
];

export const latestBlogs = [
  {
    id: 1,
    title: "Welcome to Our New Digital Hub: A New Era of Connection!",
    slug: "welcome-to-our-new-digital-hub",
    date: "October 05, 2025",
    readTime: "5 min read",
    category: "Announcements",
    tags: ["Digital Transformation", "Community", "Membership", "Launch"],
    imageUrl: "/images/coursebanner1.jpg",
    excerpt: "We are thrilled to announce the launch of our new, centralized management system, designed to connect and empower every member...",
    fullContent: `
## A New Era of Connection Begins Today!

We are incredibly excited to officially launch our brand-new organizational management system! This digital platform marks a significant milestone in our journey, providing a central hub designed to bring us all closer, streamline our processes, and empower every single member.

### What is this System?

For years, we've relied on various tools to manage our operations. Today, we bring everything under one roof. This system is our new digital home for:

*   **User & Membership Management:** Easily update your profile, manage your membership status, and connect with others.
*   **Events & Achievements:** Stay informed about all upcoming meetings, activities, and celebrations. Never miss an important date again!
*   **Leagues & Groups:** Join and participate in dedicated spaces for our Youth League, Women's League, and other interest groups.

### A Message from the Chairperson

"This launch is more than just a new website; it's an investment in our future. It's a tool that will help us grow stronger, more organized, and more connected as a community. I encourage every member to log in, explore their new dashboard, and see how this platform will enhance their experience within our organization." - Chairperson Genet Assefa

### Getting Started

Your journey is just a click away. All existing members will receive an email with instructions on how to log in for the first time. Once inside, you'll find your personalized dashboard waiting for you.

We believe this platform will be a game-changer, and we can't wait for you to be a part of it. Welcome to the future of our organization!
`,
    likes: 152,
    commentsCount: 18,
    comments: [
      { id: 101, author: "Dawit Solomon", date: "October 05, 2025", content: "This is amazing news! Congratulations to the team that made this happen." },
      { id: 102, author: "Selam Tsegaye", date: "October 06, 2025", content: "Just logged in, the dashboard looks so clean and easy to use. Great work!" },
    ]
  },
  {
    id: 2,
    title: "Youth League's Annual Fundraiser a Resounding Success",
    slug: "youth-league-fundraiser-success",
    date: "September 28, 2025",
    readTime: "4 min read",
    category: "Announcements",
    tags: ["Achievement", "Events", "Community", "Fundraising"],
    imageUrl: "/images/coursebanner12.jpg",
    excerpt: "Our Youth League has once again demonstrated incredible dedication, raising over their target goal in the annual community fundraiser...",
    fullContent: `
## Celebrating the Spirit of Our Youth

We are beaming with pride to announce the incredible success of the Youth League's annual community fundraiser event, which took place last weekend. Thanks to their hard work and the generous support of our members, the league surpassed their fundraising goal, raising funds that will go towards educational scholarships and community outreach programs.

### A Day of Unity and Purpose

The event was a wonderful showcase of our community's spirit. Highlights included:

*   A charity run with over 200 participants from various 'families'.
*   A bake sale featuring contributions from members across both Union 1 and Union 2.
*   Guest speakers from local community leadership.

The attendance was tracked seamlessly using our new system's **Attendance Module**, showing a 30% increase in participation from last year.

### Leadership's Perspective

"Seeing our young members take such initiative is truly inspiring," said Henok Girma, a Youth League coordinator. "This event wasn't just about raising funds; it was about bringing people together for a common cause. The new Events module was instrumental in helping us organize registrations and communicate with attendees."

We extend our heartfelt congratulations to the Youth League and thank every member who participated and contributed. This is a perfect example of what we can achieve when we work together.
`,
    likes: 210,
    commentsCount: 25,
    comments: [
      { id: 201, author: "Rahel Berhanu", date: "September 28, 2025", content: "So proud of our young people! It was a fantastic event." },
      { id: 202, author: "Samson Abebe", date: "September 29, 2025", content: "Congratulations to the Youth League. Your hard work paid off!" },
    ]
  },
  {
    id: 3,
    title: "How-To: Update Your Profile and Join a League",
    slug: "how-to-update-profile-join-league",
    date: "October 07, 2025",
    readTime: "3 min read",
    category: "SystemGuide",
    tags: ["How-To", "Membership", "Leagues", "User Guide"],
    imageUrl: "/images/coursebanner13.jpg",
    excerpt: "Your new profile is your digital identity within our organization. This simple guide will walk you through updating your information...",
    fullContent: `
## Making the Most of Your Member Profile

Welcome to the new system! Your personal dashboard is your gateway to everything our organization has to offer. One of the first and most important steps is to ensure your member profile is complete and up-to-date. Here’s a quick guide.

### Step 1: Access Your Profile

After logging in, you will see your name on the top right corner of the dashboard. Click on it, and from the dropdown menu, select "My Profile." This will take you to your personal information page.

### Step 2: Update Your Information

Here you can review and edit your details, such as:

*   Contact Information (Phone, Email)
*   Address
*   Your affiliated "Family" or chapter
*   A profile picture (we encourage everyone to upload one!)

Keeping this information current helps leadership stay in touch and ensures you receive the right communications.

### Step 3: Join a League!

This is where you can connect with like-minded members. On your profile page, you will see a "Leagues" tab.

1.  Click on the "Leagues" tab to see a list of available groups, such as the **Women's League** and **Youth League**.
2.  Read the description for each league to see which one aligns with your interests.
3.  Simply click the "Join" button next to the league you wish to be a part of.

Once you join, you will gain access to that league's dedicated news, forums, and events right from your dashboard. It's that easy to get more involved!
`,
    likes: 95,
    commentsCount: 11,
    comments: [
       { id: 301, author: "Lulit Mekonnen", date: "October 07, 2025", content: "This is very helpful, thank you! Just updated my profile." },
       { id: 302, author: "Yonas Gebre", date: "October 08, 2025", content: "Joining the Youth League was so simple. Looking forward to the next meeting." },
    ]
  },
   {
    id: 4,
    title: "A Message From Union 2: Our Vision for the Next Quarter",
    slug: "union-2-vision-next-quarter",
    date: "October 01, 2025",
    readTime: "4 min read",
    category: "SystemGuide",
    tags: ["Leadership", "Planning", "Vision", "Union 2"],
    imageUrl: "/images/coursebanner6.jpg",
    excerpt: "Chairperson Fitsum Tesfaye of Union 2 shares his strategic vision and key focus areas for the upcoming quarter...",
    fullContent: `
## Looking Ahead: Our Goals for Q4 2025

As we move into the final quarter of the year, it is a time for reflection and planning. On behalf of the leadership of Union 2, I want to share our key priorities and our vision for what we can accomplish together in the coming months.

### 1. Enhancing Member Engagement

Our primary goal is to increase active participation in all our activities. With the new system's **Attendance** and **Reporting** modules, we can now better understand which events resonate most with you. We will use this data to plan more targeted and engaging activities for every 'family' within our union.

### 2. Strengthening Our Leagues

The Women's and Youth Leagues are the bedrock of our community. This quarter, we will provide additional resources to our league leaders and facilitate at least two major inter-league collaborative events. We encourage every member of Union 2 to join a league and contribute their voice.

### 3. Data-Driven Planning

The **Plan & Report** module of our new digital hub is a powerful tool. We are committed to using it responsibly to guide our strategy. We will be tracking our membership growth, demographic shifts, and event attendance to ensure we are serving the entire community effectively.

I am incredibly optimistic about what we can achieve. Your participation is vital. Please log in to the new portal, register for an upcoming event, and make your voice heard.

Sincerely,

**Fitsum Tesfaye**
*Chairperson, Union 2*
`,
    likes: 130,
    commentsCount: 15,
    comments: [
       { id: 401, author: "Tigist Hailu", date: "October 01, 2025", content: "A clear and inspiring vision. Ready to contribute!" },
       { id: 402, author: "Bereket Alemu", date: "October 02, 2025", content: "Great to see a focus on data-driven decisions. This is the way forward." },
    ]
  },
  // --- The rest of the posts are similarly transformed ---
  {
    id: 5,
    title: "Annual General Meeting Announcement: Register Today!",
    slug: "annual-general-meeting-announcement",
    date: "October 10, 2025",
    readTime: "3 min read",
    category: "Events",
    tags: ["AGM", "Official", "Registration", "Meeting"],
    imageUrl: "/images/coursebanner12.jpg",
    excerpt: "The official announcement for our 2025 Annual General Meeting. All members are invited to attend. Please register online...",
    fullContent: `
## You Are Invited: 2025 Annual General Meeting

Notice is hereby given that the Annual General Meeting (AGM) of our organization will be held on **Saturday, November 22, 2025, at 10:00 AM.**

This is a pivotal event where we review the year's achievements, discuss our financial health with the **Finance Sector**, and outline the strategic direction for the year ahead. The participation of our members is crucial.

### Agenda Highlights:

*   Opening remarks from the Chairpersons of Union 1 and Union 2.
*   Presentation of the 2025 Annual Report.
*   Financial overview and budget proposal for 2026.
*   Open forum for member questions and feedback.

### How to Register

Registration is now mandatory and easier than ever thanks to our new digital platform.

1.  Log in to your dashboard.
2.  Navigate to the "Events" calendar.
3.  Find the "Annual General Meeting" on November 22nd.
4.  Click "Register" or "RSVP."

Registering helps us ensure we have an accurate headcount for logistics. Please register by **November 15, 2025.** We look forward to your presence and valuable contributions.
`,
    likes: 198,
    commentsCount: 22,
    comments: [
      { id: 201, author: "Hanna Daniel", date: "October 10, 2025", content: "Thank you for the clear instructions. Just registered!" },
      { id: 202, author: "Kaleab Girma", date: "October 10, 2025", content: "Looking forward to it. The online registration was effortless." },
    ]
  },
  {
    id: 6,
    title: "Understanding Our Structure: Unions, Families, and You",
    slug: "understanding-our-organizational-structure",
    date: "September 20, 2025",
    readTime: "6 min read",
    category: "Events",
    tags: ["Structure", "Unions", "Families", "Community", "Framework"],
    imageUrl: "/images/coursebanner13.jpg",
    excerpt: "Our organization is built on a strong framework designed for collaboration and growth. Learn how Unions and Families work...",
    fullContent: `
## Our Blueprint for Success: Unions and Families

A strong organization needs a strong structure. Our framework, built around **Unions** and **Families**, is designed to ensure effective leadership, clear communication, and a sense of belonging for every member. Let's break it down.

### The Two Pillars: Union 1 and Union 2

Think of the Unions as the main branches or divisions of our organization. Each is led by a dedicated **Chairperson** and **Deputy Chairperson** and is supported by its own **Finance Sector**. They are responsible for overseeing the broad strategic direction and managing the larger-scale activities and resources within their purview.

### The Heartbeat: Our Families

Within each Union, members are further grouped into 'Families'. These are smaller, often local, chapters or groups. The Families are where the day-to-day community building happens. They organize local meetups, support new members, and are the first point of contact for many. This structure ensures that even as we grow, every member has a close-knit group they can identify with.

### How It All Connects

The leadership of each Union works closely with the coordinators of the Families to ensure our overall vision is being implemented at the grassroots level. Our new digital system perfectly reflects this structure. When you log in, you can see news and events relevant to your specific Family, your Union, and the entire organization.

This structure allows us to be both large and agile, unified in our main purpose while being responsive to local needs. It's a framework that empowers leadership and engages members at every level.
`,
    likes: 141,
    commentsCount: 16,
    comments: [
      { id: 301, author: "Mekdes Tadesse", date: "September 20, 2025", content: "This is a great explanation. It really clarifies how everything fits together." },
      { id: 302, author: "Ermias Zewdu", date: "September 21, 2025", content: "Proud to be a part of my Family group. It's where I've met so many great people." },
    ]
  },
];


export const countries = [
  { value: '', label: 'Select Country' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'JP', label: 'Japan' },
  // Add more countries as needed
];



export const latestPartners = [
  {
    id: 'partner-1',
    name: 'Company A', // Name for alt text/tooltip
    logoUrl: '/images/companieslogo1.png', // Replace with actual logo paths (e.g., in public/logos)
    websiteUrl: '#', // Optional: URL to partner website
  },
  {
    id: 'partner-2',
    name: 'Company B',
    logoUrl: '/images/companieslogo2.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-3',
    name: 'Company C',
    logoUrl: '/images/companieslogo3.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-4',
    name: 'Company D',
    logoUrl: '/images/companieslogo4.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-5',
    name: 'Company E',
    logoUrl: '/images/companieslogo1.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-6',
    name: 'Company F',
    logoUrl: '/images/companieslogo2.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-7',
    name: 'Company G',
    logoUrl: '/images/companieslogo3.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-8',
    name: 'Company H',
    logoUrl: '/images/companieslogo4.png',
    websiteUrl: '#',
  },
  // Add more partners with unique data
];


