export interface ServiceExample {
  text: string;
}

export interface ServicePhase {
  label: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  for: string;
  description: string;
  items: string[];
  phases?: ServicePhase[];
  examples: ServiceExample[];
}

export const servicesData: Service[] = [
  {
    id: 'ai-transformation',
    number: '01',
    name: 'AI Transformation',
    for: 'Every workflow, examined and improved.',
    description:
      'A systematic three-phase process to identify automation opportunities across your organization, calculate their impact, and put the right tools in place.',
    items: [],
    phases: [
      {
        label: 'Phase 01',
        name: 'Workflow mapping',
        description:
          'Interviews with leadership and key employees to document processes, tools, and time spent. We build a complete picture of how your organization actually works.',
      },
      {
        label: 'Phase 02',
        name: 'Opportunity identification',
        description:
          'A prioritized list of automation and AI opportunities with estimated time savings, implementation costs, and recommended tools for each.',
      },
      {
        label: 'Phase 03',
        name: 'Implementation',
        description:
          'Hands-on support building automations and deploying agents, enabling your team, measuring impact, and iterating based on results.',
      },
    ],
    examples: [],
  },
  {
    id: 'product-development',
    number: '02',
    name: 'Product Development',
    for: 'Custom AI products from start to finish.',
    description:
      "I'm an engineer. I don't just advise — I build. End-to-end ownership from architecture to deployment, with AI integrated where it genuinely earns its place.",
    items: [
      'Web applications',
      'API development',
      'System architecture',
      'AI integration',
      'Maintenance and support',
    ],
    examples: [],
  },
  {
    id: 'training-workshops',
    number: '03',
    name: 'Training & Workshops',
    for: 'Practical AI training for your team.',
    description:
      'Hands-on sessions that get your team actually using AI — not just aware of it. Tailored to your tools and workflows, delivered in person or remotely.',
    items: [
      'Claude, ChatGPT, and Gemini',
      'AI in software development',
      'Prompt engineering',
      'Building personal AI workflows',
      'Vibe coding and agentic development',
    ],
    examples: [],
  },
  {
    id: 'strategy-consulting',
    number: '04',
    name: 'Strategy Consulting',
    for: 'Concrete plans and hands-on sparring.',
    description:
      "Not every company needs a full transformation. Sometimes you need someone who's seen a lot to help you figure out where to start, what to prioritize, and how to move.",
    items: [
      'AI readiness assessments',
      'Technology roadmaps',
      'Vendor evaluation',
      'Implementation planning',
      'Ongoing advisory',
    ],
    examples: [],
  },
];
