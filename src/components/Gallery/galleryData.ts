import { GalleryImage } from '../../types/index'

// Use public folder image paths (served from root in static deployment)
const mimirfellowsgroup = '/mimir_fellows_group.jpg'
const tamperees_founded_story = '/tamperees_founded_story.jpg'
const vipassana_compound = '/vipassana_compound.jpg'
const graduation_oration = '/graduation_oration_omnia.jpg'
const olo_onboarding_video_shoot = '/olo_onboarding_video_shoot.jpeg'
const speaking_at_tampere_event_2022 = '/speaking_at_tampere_event_2022.jpeg'
const working_from_home = '/working_from_home.jpg'
const agentic_coding_in_car = '/agentic_coding_in_car.jpg'
const deep_dive_qualifiers = '/deep_dive_qualifiers.jpg'
const founders_inc_event = '/founders-inc-event.jpg'
const san_francisco_with_friends = '/san_francisco_with_friends.jpg'

export const galleryData: GalleryImage[] = [
  {
    id: 'agentic-coding-in-car',
    src: agentic_coding_in_car,
    alt: 'Agents writing code while on the road',
    title: 'Agents writing code, humans orchastrating, while on the road.',
    story: `Captured moment from the boys road trip in July 2025. Bless the nordic network infrastructure.`,
    date: '2025-07-12',
  },
  {
    id: 'working-from-home',
    src: working_from_home,
    alt: 'Working from home',
    title: 'Working from home',
    story: `This is what work looks like for the most part.`,
    date: '2025-04-28',
  },
  {
    id: 'vipassana-meditation',
    src: vipassana_compound,
    alt: 'Vipassana meditation 10-day course',
    title: 'Vipassana meditation 10-day course',
    story: `This photo was taken moments before handing out our phones and starting the 10-day silent meditation retreat.`,
    date: '2024-12-11',
  },
  {
    id: 'olo-onboarding',
    src: olo_onboarding_video_shoot,
    alt: 'Olo onboarding video shoot',
    title: 'Olo onboarding video shoot',
    story: `Filming Olo's onboarding video. Working on the product.`,
    date: '2024-05-26',
  },
  {
    id: 'mimir-fellows-group',
    src: mimirfellowsgroup,
    alt: 'Mimir Fellows 2023',
    title: 'Mimir Fellows 2023',
    story: `Turning the Nordics into global leaders in tech transfer with students leading the way.`,
    date: '2023-06-11',
    featured: true,
  },
  {
    id: 'tampere-event',
    src: speaking_at_tampere_event_2022,
    alt: 'Speaking at Tampere Event 2022',
    title: 'Speaking at Startup Tampere event',
    story: `Speaking on behalf of young entrepreneurs at the Tampere Startup Event 2022.`,
    date: '2022-06-11',
  },
  {
    id: 'tamperees-founded',
    src: tamperees_founded_story,
    alt: 'Tampere Entrepreneurship Society - photoshoot',
    title: 'The rebuild has begun',
    story: `My board year building Tampere Entrepreneurship Society started on this day. We took a team picture at Eemil's aunties house. From nothing to something.`,
    date: '2021-12-28',
  },
  {
    id: 'deep-dive-qualifiers',
    src: deep_dive_qualifiers,
    alt: 'Deep Dive Hackathon 2023',
    title: 'Deep Dive Hackathon 2023',
    story: `I have competed in 6+ hackathons and this was the first one I won.`,
    date: '2023-06-17',
  },

  {
    id: 'san-francisco-with-friends',
    src: san_francisco_with_friends,
    alt: 'San Francisco with Friends 2025',
    title: 'San Francisco 2025',
    story: `Building and living startups in San Francisco`,
    date: '2025-06-13',
  },
]
/*
{
  id: 'graduation-oration',
  src: graduation_oration,
  alt: 'Graduation Oration 2021 Omnia',
  title: 'Graduation Oration 2021',
  story: `I had the honor of speaking for the new graduates of class 2021. I was asked to speak only few days prior, moments after arriving back to the barracks after a 2-week long training in military.`,
  date: '2021-06-10',
},
*/