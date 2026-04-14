import type { Service } from '$lib/types/index'

export const servicesData: Service[] = [
  {
    id: 'ai-transformation',
    name: 'AI Transformation',
    category: 'Artificial Intelligence',
    tagline: 'Every workflow, examined and improved.',
    catchphrase: 'Systematic. Measurable. End-to-end.',
    description: 'A systematic three-phase process to map your organization\'s workflows, identify where AI creates real leverage, and put the right tools in place.',
    phases: [
      {
        label: 'Phase 01',
        name: 'Workflow mapping',
        description: 'Structured interviews with leadership and key employees across teams. We document every process — what tools are used, how long things take, where handoffs break down, and where time is wasted. The output is a complete operational map of your organization, grounded in how work actually happens rather than how it was designed to happen.',
      },
      {
        label: 'Phase 02',
        name: 'Opportunity identification',
        description: 'We analyze the operational map and identify where AI creates genuine leverage — not just what\'s technically possible, but what will actually move the needle for your business. You receive a prioritized opportunity list with estimated time savings, implementation cost ranges, suggested tools, and expected ROI for each initiative. This becomes the foundation of your AI roadmap.',
      },
      {
        label: 'Phase 03',
        name: 'Implementation',
        description: 'Hands-on execution of the highest-priority opportunities. I build the automations, deploy the agents, and integrate the tools — then work alongside your team to ensure adoption sticks. We measure impact against the baselines established in Phase 01, iterate based on real results, and document everything so your team can maintain and extend the systems independently.',
      },
    ],
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    category: 'Product Development',
    tagline: 'Custom software from start to finish.',
    catchphrase: 'From architecture to deployment.',
    description: "I'm an engineer first. End-to-end ownership from architecture to deployment, with AI integrated where it genuinely earns its place.",
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
    catchphrase: 'Hands-on. Immediately applicable.',
    description: 'Hands-on sessions that get your team actually using AI — not just aware of it. Tailored to your tools and workflows, delivered in person or remotely.',
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
    catchphrase: 'Clarity before action.',
    description: "Not every company needs a full transformation. Sometimes you need someone who's seen a lot to help you figure out where to start, what to prioritize, and how to move.",
    items: [
      'AI readiness assessments',
      'Technology roadmaps',
      'Vendor evaluation',
      'Implementation planning',
      'Ongoing advisory',
    ],
  },
]
