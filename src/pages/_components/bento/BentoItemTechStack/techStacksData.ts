import { Astro } from '@icons/Astro'
import { Docker } from '@icons/Docker'
import { NextJs } from '@icons/NextJs'
import { ReactJs } from '@icons/ReactJs'
import { Tailwindcss } from '@icons/Tailwind'
import { TypeScript } from '@icons/TypeScript'
import { Python } from '@icons/Python'
import {SQL} from '@icons/SQL'
import { MachineLearning } from '@icons/MachineLearning'
import { ArtificialIntelligence } from '@icons/ArtificialIntelligence'
import { Angular } from '@icons/Angular'
import { Django } from '@icons/Django'
import { FastAPI } from '@icons/Fastapi'
import { Flask } from '@icons/Flask'
import { SpringBoot } from '@icons/SpringBoot'
import { Flutter } from '@icons/Flutter'
import type { JSX, SVGProps } from 'react'

type TechStack = {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  description: string
}

const techStacks: TechStack[] = [
  {
    name: 'TypeScript',
    icon: TypeScript,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Flutter',
    icon: Flutter,
    description:
      'Flutter.'
  },
  {
    name: 'Next',
    icon: NextJs,
    description:
      'Next'
  },
  {
    name: 'React Native',
    icon: ReactJs,
    description:
      'React Native'
  },
  {
    name: 'Python',
    icon: Python,
    description:
      'Python'
  },
  {
    name: 'Machine Learning',
    icon: MachineLearning,
    description:
      'Machine Learning'
  },
  {
    name: 'Artificial Intelligence',
    icon: ArtificialIntelligence,
    description:
      'Artificial Intelligence'
  },
  {
    name: 'SQL',
    icon: SQL,
    description:
      'SQL'
  },
  {
    name: 'Angular',
    icon: Angular,
    description:
      'Angular'
  },
  {
    name: 'Flask',
    icon: Flask,
    description:
      'Flask'
  },
  {
    name: 'FastAPI',
    icon: FastAPI,
    description:
      'FastAPI'
  },
  {
    name: 'SpringBoot',
    icon: SpringBoot,
    description:
      'SpringBoot'
  },
  {
    name: 'Django',
    icon: Django,
    description:
      'Django'
  },
  {
    name: 'Tailwind',
    icon: Tailwindcss,
    description:
      'Tailwind'
  },
  {
    name: 'Astro',
    icon: Astro,
    description:
      'Astro'
  },
  {
    name: 'Docker',
    icon: Docker,
    description:
      'Docker'
  }
]

export default techStacks
