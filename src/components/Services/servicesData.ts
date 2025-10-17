import { Service } from '../../types/index'

export const servicesData: Service[] = [
  {
    id: 'workshops',
    name: 'AI Strategy Workshops',
    category: 'Artificial Intelligence',
    description: 'A deep dive that transforms your AI ambitions into a concrete plan. Grounded in presence, my role is to hold the common thread as we explore the AI landscape, identify your key challenges, and pinpoint the AI solutions that will deliver the highest return on investment. You will walk away with a prioritized list of AI initiatives, a clear business case for each, and an actionable roadmap for implementation.',
    startingPrice: 500,
  },
  {
    id: 'ai-agents-automation',
    name: 'AI Agents + Automation',
    category: 'AI Agents + Automation',
    description: 'Business process automation and workflow optimization. I help you design and implement automated systems and internal tools that streamline operations, reduce manual work, and improve efficiency. The tech stack is determined as best seen fit for the project. This includes, but is not limited to, Python, JavaScript, React, Node.js, n8n, make.com and more.',
    startingPrice: 2000,
  },
  {
    id: 'mvp-product-development',
    name: 'MVP & Product',
    category: 'Product Development',
    description: "Together, we'll transform your vision into a Minimum Viable Product with high conviction. My process cuts through the noise to focus on the essential features that deliver immediate value and validate your idea with clarity and speed.",
    startingPrice: 5000,
  },
  {
    id: 'custom',
    name: 'Consultation',
    category: 'Consultation',
    description: "When your challenge requires a unique approach, a deep conversation is where we begin. I apply my full experience as a product-minded developer to engineer a solution tailored to your specific needs—from custom AI agents to MVP development. We'll work from first principles to build a solution that moves your business forward.",
    startingPrice: 0,
  },  
]
