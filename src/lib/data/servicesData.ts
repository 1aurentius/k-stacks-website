import type { Service } from '$lib/types/index'

export const servicesData: Service[] = [
  {
    id: 'ai-transformation',
    name: 'AI Transformation',
    category: 'Artificial Intelligence',
    tagline: 'Every workflow, examined and improved.',
    description: 'A systematic three-phase process to map your organization\'s workflows, identify where AI creates real leverage, and put the right tools in place.',
    startingPrice: 0,
    phases: [
      {
        label: 'Phase 01',
        name: 'Workflow mapping',
        description: 'Interviews with leadership and key employees to document processes, tools, and time spent. We build a complete picture of how your organization actually works.',
      },
      {
        label: 'Phase 02',
        name: 'Opportunity identification',
        description: 'A prioritized list of automation and AI opportunities with estimated time savings, implementation costs, and recommended tools for each.',
      },
      {
        label: 'Phase 03',
        name: 'Implementation',
        description: 'Hands-on support building automations and deploying agents, enabling your team, measuring impact, and iterating based on results.',
      },
    ],
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    category: 'Product Development',
    tagline: 'Custom software from start to finish.',
    description: "I'm an engineer first. End-to-end ownership from architecture to deployment, with AI integrated where it genuinely earns its place.",
    startingPrice: 2000,
    items: [
      'Web applications',
      'API development',
      'System architecture',
      'AI integration',
      'Maintenance and support',
    ],
  },
  {
    id: 'employee-training',
    name: 'Employee Training',
    category: 'Training',
    tagline: 'Practical training on the latest tools.',
    description: 'Hands-on sessions that get your team actually using AI — not just aware of it. Tailored to your tools and workflows, delivered in person or remotely.',
    startingPrice: 500,
    items: [
      'Claude, ChatGPT, and Gemini',
      'AI in software development',
      'Vibe coding and agentic development',
      'Prompt engineering',
      'Building personal AI workflows',
    ],
  },
  {
    id: 'strategy-consulting',
    name: 'Strategy Consulting',
    category: 'Consulting',
    tagline: 'Concrete plans and sparring.',
    description: "Not every company needs a full transformation. Sometimes you need someone who's seen a lot to help you figure out where to start, what to prioritize, and how to move.",
    startingPrice: 500,
    items: [
      'AI readiness assessments',
      'Technology roadmaps',
      'Vendor evaluation',
      'Implementation planning',
      'Ongoing advisory',
    ],
  },
]
