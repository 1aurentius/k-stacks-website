export interface ServiceExample {
  text: string;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  for: string;
  description: string;
  items: string[];
  examples: ServiceExample[];
}

export const servicesData: Service[] = [
  {
    id: 'ai-strategy-workshop',
    number: '01',
    name: 'AI Strategy Workshop',
    for: 'from €500',
    description:
      "A focused session — typically half a day — where we map your workflows, identify where AI creates real leverage, and build a prioritized roadmap. You walk away with a clear picture of what to build, what to buy, and what to skip. I've run these for Bangeri, Coventures, and others across logistics, sustainability, and SaaS.",
    items: [],
    examples: [],
  },
  {
    id: 'ai-agents-automation',
    number: '02',
    name: 'AI Agents & Automation',
    for: 'from €2,000',
    description:
      'Custom agents and automated workflows that eliminate manual work. I design and build the system, choose the right stack (Python, n8n, make.com, or custom), and make sure it runs reliably in your environment. Recent example: AI agents that automate content optimization and monitoring for a sustainability platform.',
    items: [],
    examples: [],
  },
  {
    id: 'mvp-product',
    number: '03',
    name: 'MVP & Product',
    for: 'from €5,000',
    description:
      "From idea to working product. I'll help you define what to build for maximum learning, then build it — full-stack, fast, and without unnecessary complexity. I build on modern stacks (SvelteKit, Next.js, React, Node.js) and integrate AI where it earns its place.",
    items: [],
    examples: [],
  },
  {
    id: 'consultation',
    number: '04',
    name: 'Consultation',
    for: "Let's talk",
    description:
      "Some challenges don't fit a template. If you're navigating a tricky AI decision, need a second opinion on a product direction, or want to think through an edge case with someone who's seen a lot — book a call. First 30 minutes is free.",
    items: [],
    examples: [],
  },
];
