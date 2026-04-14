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
    id: 'ai-transformation',
    number: '01',
    name: 'AI Transformation',
    for: 'For companies ready to go from pilots to production.',
    description:
      'I build the AI infrastructure that lets you deploy dozens of agents across your organization. Context engineering is at the core — every system I build starts with making sure your AI actually understands your business.',
    items: [
      'Auditing and restructuring your existing data for AI consumption',
      'Setting up databases and pipelines that agents can work with',
      'Deploying multi-agent architectures tailored to your workflows',
      'Enriching your data to unlock capabilities you didn\'t know you had',
      'Training your team on AI best practices — from prompting to process design',
      'Building governance frameworks so you can scale with confidence',
    ],
    examples: [
      {
        text: 'For a Nordic venture builder, I set up the full AI infrastructure across their organization — data foundations, agent deployment pipelines, and team enablement — positioning them to scale AI operations across their portfolio companies.',
      },
    ],
  },
  {
    id: 'product-development',
    number: '02',
    name: 'Product Development',
    for: 'For companies building AI-powered products.',
    description:
      "I'm an agentic engineer with a Bachelor's in Computer Science. I don't just consult — I build. The reason to work with me is presence: I'm in the codebase, in the room with your customers, and deeply invested in solving the right problems. For larger projects, I bring in a close-knit network of exceptional product and engineering talent.",
    items: [
      'Full-stack product development with AI at the core',
      'Architecture design and backend engineering',
      'AI-powered features: search, matching, content generation, automation',
      'Rapid prototyping and MVP development',
      'Product strategy rooted in customer conversations',
    ],
    examples: [
      {
        text: 'I architected a capital intelligence platform for an energy transition investment firm — investor profiling, AI-driven deal matching, gated member access, and automated communications.',
      },
      {
        text: 'For an event technology company, I\'m leading product development that includes backend architecture migration, simulation tools for resource planning, and AI-powered operations monitoring.',
      },
    ],
  },
  {
    id: 'ai-consulting',
    number: '03',
    name: 'AI Consulting',
    for: 'For companies getting serious about AI.',
    description:
      "Not every company needs a full transformation. Sometimes you need someone who's been in the trenches to help you figure out where to start, what's real, and how to build internal capabilities.",
    items: [
      '1-on-1 executive and founder mentoring on AI strategy and tools',
      'Company-wide workshops on AI best practices and workflows',
      'In-house development of AI processes and lightweight agents',
      'AI readiness assessments and roadmapping',
      'Ongoing advisory and sparring',
    ],
    examples: [
      {
        text: "I work with founders and executives 1-on-1, helping them go from \"I know AI is important\" to actually using it to multiply their output — from building their first agents to rethinking how their teams work.",
      },
    ],
  },
];
