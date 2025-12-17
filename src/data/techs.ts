import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faCss3Alt,
  faHtml5,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export type Tech = {
  id: string
  label: string
  brand: string
  icon?: IconDefinition
  textIcon?: string
  image?: string // path under /public for exact logos
}

export const DEFAULT_TECHS: Tech[] = [
  { id: 'javascript', label: 'JavaScript', brand: '#F7DF1E', icon: faJs },
  { id: 'typescript', label: 'TypeScript', brand: '#3178C6', image: '/images/tech/typescript.svg' },
  { id: 'python', label: 'Python', brand: '#3776AB', icon: faPython },
  { id: 'next', label: 'Next.js', brand: '#000000', image: '/images/tech/next.svg' },
  { id: 'react', label: 'React', brand: '#61DAFB', icon: faReact },
  { id: 'node', label: 'Node.js', brand: '#339933', icon: faNodeJs },
  { id: 'express', label: 'Express', brand: '#000000', image: '/images/tech/express.svg' },
  { id: 'git', label: 'Git', brand: '#F05032', icon: faGitAlt },
  { id: 'github', label: 'GitHub', brand: '#181717', image: '/images/tech/github.svg' },
  { id: 'tailwind', label: 'Tailwind', brand: '#38BDF8', image: '/images/tech/tailwind.svg' },
  { id: 'sql', label: 'SQL', brand: '#0064A5', icon: faDatabase },
  { id: 'postgresql', label: 'PostgreSQL', brand: '#336791', image: '/images/tech/postgresql.svg' },
  { id: 'supabase', label: 'Supabase', brand: '##3BD08E', image: '/images/tech/supabase.svg' },
  { id: 'neon', label: 'Neon', brand: '###31C4E0', image: '/images/tech/neon.svg' },
  { id: 'firebase', label: 'Firebase', brand: '#FFCA28', image: '/images/tech/firebase.svg' },
  { id: 'jest', label: 'Jest', brand: '#C21325', image: '/images/tech/jest.svg' },
  { id: 'gcp', label: 'GCP', brand: '#4285F4', image: '/images/tech/gcp.svg' },
  { id: 'vscode', label: 'VS Code', brand: '#007ACC', image: '/images/tech/vscode.svg' },
  { id: 'vercel', label: 'Vercel', brand: '#000000', image: '/images/tech/vercel.svg' },
  { id: 'figma', label: 'Figma', brand: '#F24E1E', image: '/images/tech/figma.svg' },
  { id: 'openai', label: 'OpenAI', brand: '#10A37F', image: '/images/tech/openai.svg' },
  { id: 'stripe', label: 'Stripe', brand: '#635BFF', image: '/images/tech/stripe.svg' },
  { id: 'html', label: 'HTML5', brand: '#E34F26', icon: faHtml5 },
  { id: 'css', label: 'CSS3', brand: '#1572B6', icon: faCss3Alt },
  // { id: 'heroku', label: 'Heroku', brand: '#430098', image: '/images/tech/heroku.svg' },
  // { id: 'postman', label: 'Postman', brand: '#FF6C37', image: '/images/tech/postman.svg' },
]
