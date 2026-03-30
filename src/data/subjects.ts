import { Subject } from '@/types';
import { rulesOfTheAirBasics } from './lessons/air-law/rules-of-the-air-basics';

export const subjects: Subject[] = [
  {
    id: 'air-law',
    name: 'Air Law',
    description: 'UK and international aviation law, regulations, and procedures',
    examInfo: {
      questionCount: 16,
      timeLimit: 35,
      passMark: 75,
    },
    topics: [
      {
        id: 'rules-of-the-air',
        subjectId: 'air-law',
        name: 'Rules of the Air',
        description: 'Right of way, circuit procedures, and collision avoidance',
        lessons: [rulesOfTheAirBasics],
      },
      {
        id: 'airspace-classification',
        subjectId: 'air-law',
        name: 'Airspace Classification',
        description: 'UK airspace structure and VFR requirements',
        lessons: [],
      },
      {
        id: 'licensing-requirements',
        subjectId: 'air-law',
        name: 'Licensing Requirements',
        description: 'PPL privileges, limitations, and currency requirements',
        lessons: [],
      },
      {
        id: 'icao-regulations',
        subjectId: 'air-law',
        name: 'ICAO and National Regulations',
        description: 'International and UK regulatory framework',
        lessons: [],
      },
    ],
  },
  {
    id: 'operational-procedures',
    name: 'Operational Procedures',
    description: 'Standard operating procedures and airfield operations',
    examInfo: {
      questionCount: 12,
      timeLimit: 30,
      passMark: 75,
    },
    topics: [],
  },
  {
    id: 'human-performance',
    name: 'Human Performance & Limitations',
    description: 'Aviation physiology, psychology, and crew resource management',
    examInfo: {
      questionCount: 12,
      timeLimit: 25,
      passMark: 75,
    },
    topics: [],
  },
  {
    id: 'navigation',
    name: 'Navigation & Radio Aids',
    description: 'Navigation techniques, maps, radio navigation aids',
    examInfo: {
      questionCount: 12,
      timeLimit: 45,
      passMark: 75,
    },
    topics: [],
  },
  {
    id: 'meteorology',
    name: 'Meteorology',
    description: 'Weather theory, interpretation of reports and forecasts',
    examInfo: {
      questionCount: 16,
      timeLimit: 50,
      passMark: 75,
    },
    topics: [],
  },
  {
    id: 'aircraft-general',
    name: 'Aircraft General Knowledge',
    description: 'Aircraft systems, engines, and instruments',
    examInfo: {
      questionCount: 16,
      timeLimit: 35,
      passMark: 75,
    },
    topics: [],
  },
  {
    id: 'flight-performance',
    name: 'Flight Performance & Planning',
    description: 'Weight and balance, performance calculations, flight planning',
    examInfo: {
      questionCount: 12,
      timeLimit: 45,
      passMark: 75,
    },
    topics: [],
  },
  {
    id: 'principles-of-flight',
    name: 'Principles of Flight',
    description: 'Aerodynamics, stability, and control',
    examInfo: {
      questionCount: 12,
      timeLimit: 35,
      passMark: 75,
    },
    topics: [],
  },
  {
    id: 'communications',
    name: 'Communications',
    description: 'RT procedures, phraseology, and emergency calls',
    examInfo: {
      questionCount: 12,
      timeLimit: 20,
      passMark: 75,
    },
    topics: [],
  },
];

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}
