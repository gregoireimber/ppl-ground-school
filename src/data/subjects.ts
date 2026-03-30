import { Subject } from '@/types';
import { rulesOfTheAirBasics } from './lessons/air-law/rules-of-the-air-basics';
import { emergencyProceduresBasics } from './lessons/operational-procedures/emergency-procedures-basics';
import { aviationPhysiologyBasics } from './lessons/human-performance/aviation-physiology-basics';
import { deadReckoningBasics } from './lessons/navigation/dead-reckoning-basics';
import { weatherSystemsBasics } from './lessons/meteorology/weather-systems-basics';

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
    topics: [
      {
        id: 'emergency-procedures',
        subjectId: 'operational-procedures',
        name: 'Emergency Procedures',
        description: 'Distress and urgency procedures, radio failure, engine failure',
        lessons: [emergencyProceduresBasics],
      },
      {
        id: 'airfield-operations',
        subjectId: 'operational-procedures',
        name: 'Airfield Operations',
        description: 'Taxiing, runway operations, and airfield lighting',
        lessons: [],
      },
      {
        id: 'pre-flight-procedures',
        subjectId: 'operational-procedures',
        name: 'Pre-Flight Procedures',
        description: 'Aircraft inspection, fuel planning, and documentation',
        lessons: [],
      },
      {
        id: 'fuel-management',
        subjectId: 'operational-procedures',
        name: 'Fuel Management',
        description: 'Fuel planning, reserves, and endurance calculations',
        lessons: [],
      },
    ],
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
    topics: [
      {
        id: 'aviation-physiology',
        subjectId: 'human-performance',
        name: 'Aviation Physiology',
        description: 'Hypoxia, hyperventilation, spatial disorientation, and visual illusions',
        lessons: [aviationPhysiologyBasics],
      },
      {
        id: 'decision-making',
        subjectId: 'human-performance',
        name: 'Decision Making',
        description: 'Hazardous attitudes, crew resource management, and risk assessment',
        lessons: [],
      },
      {
        id: 'fitness-to-fly',
        subjectId: 'human-performance',
        name: 'Fitness to Fly',
        description: 'Medical factors, alcohol, fatigue, and the IMSAFE checklist',
        lessons: [],
      },
    ],
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
    topics: [
      {
        id: 'dead-reckoning',
        subjectId: 'navigation',
        name: 'Dead Reckoning',
        description: 'Chart reading, wind triangle, PLOG preparation, and DR navigation',
        lessons: [deadReckoningBasics],
      },
      {
        id: 'chart-reading',
        subjectId: 'navigation',
        name: 'Chart Reading',
        description: 'Chart symbols, scale, airspace depiction, and VRPs',
        lessons: [],
      },
      {
        id: 'radio-navigation',
        subjectId: 'navigation',
        name: 'Radio Navigation',
        description: 'VOR, NDB, GPS, and other navigation aids',
        lessons: [],
      },
    ],
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
    topics: [
      {
        id: 'weather-systems',
        subjectId: 'meteorology',
        name: 'Weather Systems',
        description: 'Pressure systems, fronts, and UK weather patterns',
        lessons: [weatherSystemsBasics],
      },
      {
        id: 'metar-taf',
        subjectId: 'meteorology',
        name: 'METAR and TAF',
        description: 'Weather reports and forecasts interpretation',
        lessons: [],
      },
      {
        id: 'vfr-weather',
        subjectId: 'meteorology',
        name: 'VFR Weather Minima',
        description: 'Visibility, cloud base, and VFR flight requirements',
        lessons: [],
      },
      {
        id: 'weather-hazards',
        subjectId: 'meteorology',
        name: 'Weather Hazards',
        description: 'Icing, turbulence, fog, and thunderstorms',
        lessons: [],
      },
    ],
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
