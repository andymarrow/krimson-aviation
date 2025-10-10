import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
    {
        question: "What is Centeral Hub?",
        answer: "Centeral Hub is the official digital platform for our organization. It's a centralized system for managing membership, viewing events, participating in leagues, and staying connected with the community."
    },
    {
        question: "How do I become a member?",
        answer: "You can apply for membership by clicking the 'Join Us' or 'Sign Up' button on the homepage. Simply fill out the online registration form, and your application will be sent to an administrator for review and approval."
    },
    {
        question: "How can I find and register for events?",
        answer: "After logging in, navigate to the 'Events' section on your dashboard. You will see a calendar with all upcoming meetings and activities. You can click on an event to see details and RSVP directly."
    },
    {
        question: "What are 'Leagues' and how do I join one?",
        answer: "Leagues are specific interest groups within our organization, such as the 'Women's League' or 'Youth League'. You can join a league by going to your profile, selecting the 'Leagues' tab, and clicking 'Join' on the one you're interested in."
    },
    {
        question: "How do I update my personal information?",
        answer: "You can update your contact details, address, and other personal information by logging in, clicking your name in the top corner, and selecting 'My Profile' from the menu."
    },
     {
        question: "Who should I contact if I have a problem with the platform?",
        answer: "If you are experiencing technical difficulties or have questions about using Centeral Hub, please visit our 'Contact Us' page and select 'Technical Support' as the topic for your inquiry."
    },
];

function FAQSection() {
    return (
        <div className="flex-grow overflow-y-auto p-2">
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}

export default FAQSection;