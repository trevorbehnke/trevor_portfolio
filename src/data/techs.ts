import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faCss3Alt,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faFlaskVial } from '@fortawesome/free-solid-svg-icons'

export type Tech = {
  id: string
  label: string
  brand: string
  icon?: IconDefinition
  textIcon?: string
}

export const DEFAULT_TECHS: Tech[] = [
  { id: 'javascript', label: 'JavaScript', brand: '#F7DF1E', icon: faJs },
  { id: 'git', label: 'Git', brand: '#F05032', icon: faGitAlt },
  { id: 'html', label: 'HTML5', brand: '#E34F26', icon: faHtml5 },
  { id: 'css', label: 'CSS3', brand: '#1572B6', icon: faCss3Alt },
  { id: 'react', label: 'React', brand: '#61DAFB', icon: faReact },
  { id: 'node', label: 'Node.js', brand: '#339933', icon: faNodeJs },
  { id: 'sql', label: 'SQL', brand: '#0064A5', icon: faDatabase },
  { id: 'python', label: 'Python', brand: '#3776AB', textIcon: 'Py' },
  { id: 'typescript', label: 'TypeScript', brand: '#3178C6', textIcon: 'TS' },
  { id: 'postgresql', label: 'PostgreSQL', brand: '#336791', textIcon: 'PG' },
  { id: 'github', label: 'GitHub', brand: '#181717', textIcon: 'GH' },
  { id: 'express', label: 'Express', brand: '#000000', textIcon: 'Ex' },
  { id: 'vscode', label: 'VS Code', brand: '#007ACC', textIcon: 'VS' },
  { id: 'jest', label: 'Jest', brand: '#C21325', icon: faFlaskVial },
  { id: 'next', label: 'Next.js', brand: '#000000', textIcon: 'NEXT' },
  { id: 'gcp', label: 'GCP', brand: '#4285F4', textIcon: 'GCP' },
  { id: 'figma', label: 'Figma', brand: '#F24E1E', textIcon: 'Fg' },
  { id: 'vercel', label: 'Vercel', brand: '#000000', textIcon: 'V' },
  { id: 'firebase', label: 'Firebase', brand: '#FFCA28', textIcon: 'FB' },
  { id: 'tailwind', label: 'Tailwind', brand: '#38BDF8', textIcon: 'TW' },
  { id: 'heroku', label: 'Heroku', brand: '#430098', textIcon: 'Hk' },
  { id: 'stripe', label: 'Stripe', brand: '#635BFF', textIcon: 'S' },
  { id: 'postman', label: 'Postman', brand: '#FF6C37', textIcon: 'PM' },
  { id: 'openai', label: 'OpenAI', brand: '#10A37F', textIcon: 'AI' },
]

