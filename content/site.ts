export const site = {
  name: "R & R Rebuilders",
  owner: "Renier Semprum",
  phone: "781-632-8058",
  tel: "+17816328058",
  email: "werbuilders@gmail.com",
  description:
    "Owner-run roofing and home repairs. Talk directly with the owner about your project. Call 781-632-8058 to get started.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const valueProps = [
  {
    title: "Speak directly with the owner",
    text: "Your first conversation is with the owner, the person behind the business.",
  },
  {
    title: "Roofing and repairs, one call",
    text: "From a roof concern to a list of fixes around the house, start in one place.",
  },
  {
    title: "A plan before work begins",
    text: "Scope, pricing and timing are agreed together before anything starts.",
  },
] as const;

export const steps = [
  {
    title: "Tell us what’s going on",
    text: "Start with your location, a few details and the work you have in mind.",
  },
  {
    title: "Talk through the details",
    text: "Discuss the scope, availability and next steps directly with the owner.",
  },
  {
    title: "Agree on the plan",
    text: "Confirm the work, pricing and timing together before work begins.",
  },
] as const;

export const faqs = [
  {
    question: "What kind of work can I ask about?",
    answer:
      "R & R Rebuilders focuses on roofing and home repairs. Share your project details to confirm whether the scope is a fit.",
  },
  {
    question: "How do I request an estimate?",
    answer: `Call ${site.phone} or use the project enquiry form to prepare an email. Include your location, a description of the work and your preferred timing. Pricing and any visit arrangements are confirmed directly.`,
  },
  {
    question: "Do you work in my area?",
    answer:
      "Get in touch with your town or ZIP code to confirm service availability before arranging a visit.",
  },
  {
    question: "What should I include in my enquiry?",
    answer:
      "Your name, contact details, town, the type of work and a short description are a helpful start. You can attach photos in your email app before sending.",
  },
  {
    question: "Can I request urgent help?",
    answer:
      "Call directly to ask about current availability. This website does not offer emergency dispatch or guarantee a response time.",
  },
] as const;
