import { Subject } from '@/types';

// Air Law
import { rulesOfTheAirBasics } from './lessons/air-law/rules-of-the-air-basics';
import { airspaceClassificationBasics } from './lessons/air-law/airspace-classification-basics';
import { licensingRequirementsBasics } from './lessons/air-law/licensing-requirements-basics';
import { icaoRegulationsBasics } from './lessons/air-law/icao-regulations-basics';

// Operational Procedures
import { emergencyProceduresBasics } from './lessons/operational-procedures/emergency-procedures-basics';
import { airfieldOperationsBasics } from './lessons/operational-procedures/airfield-operations-basics';
import { preFlightProceduresBasics } from './lessons/operational-procedures/pre-flight-procedures-basics';
import { fuelManagementBasics } from './lessons/operational-procedures/fuel-management-basics';

// Human Performance & Limitations
import { aviationPhysiologyBasics } from './lessons/human-performance/aviation-physiology-basics';
import { decisionMakingBasics } from './lessons/human-performance/decision-making-basics';
import { fitnessToFlyBasics } from './lessons/human-performance/fitness-to-fly-basics';

// Navigation & Radio Aids
import { deadReckoningBasics } from './lessons/navigation/dead-reckoning-basics';
import { chartReadingBasics } from './lessons/navigation/chart-reading-basics';
import { radioNavigationBasics } from './lessons/navigation/radio-navigation-basics';

// Meteorology
import { weatherSystemsBasics } from './lessons/meteorology/weather-systems-basics';
import { metarTafBasics } from './lessons/meteorology/metar-taf-basics';
import { vfrWeatherBasics } from './lessons/meteorology/vfr-weather-basics';
import { weatherHazardsBasics } from './lessons/meteorology/weather-hazards-basics';

// Aircraft General Knowledge
import { pistonEnginesBasics } from './lessons/aircraft-general/piston-engines-basics';
import { flightInstrumentsBasics } from './lessons/aircraft-general/flight-instruments-basics';
import { airframeSystemsBasics } from './lessons/aircraft-general/airframe-systems-basics';

// Flight Performance & Planning
import { massBalanceBasics } from './lessons/flight-performance/mass-balance-basics';
import { takeoffLandingPerformanceBasics } from './lessons/flight-performance/takeoff-landing-performance-basics';
import { fuelPlanningBasics } from './lessons/flight-performance/fuel-planning-basics';

// Principles of Flight
import { fourForcesBasics } from './lessons/principles-of-flight/four-forces-basics';
import { airfoilsLiftBasics } from './lessons/principles-of-flight/airfoils-lift-basics';
import { stallingStabilityBasics } from './lessons/principles-of-flight/stalling-stability-basics';

// Communications
import { rtPhraseologyBasics } from './lessons/communications/rt-phraseology-basics';
import { emergencyCommunicationsBasics } from './lessons/communications/emergency-communications-basics';
import { frequencyManagementBasics } from './lessons/communications/frequency-management-basics';

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
        lessons: [airspaceClassificationBasics],
      },
      {
        id: 'licensing-requirements',
        subjectId: 'air-law',
        name: 'Licensing Requirements',
        description: 'PPL privileges, limitations, and currency requirements',
        lessons: [licensingRequirementsBasics],
      },
      {
        id: 'icao-regulations',
        subjectId: 'air-law',
        name: 'ICAO and National Regulations',
        description: 'International and UK regulatory framework',
        lessons: [icaoRegulationsBasics],
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
        lessons: [airfieldOperationsBasics],
      },
      {
        id: 'pre-flight-procedures',
        subjectId: 'operational-procedures',
        name: 'Pre-Flight Procedures',
        description: 'Aircraft inspection, fuel planning, and documentation',
        lessons: [preFlightProceduresBasics],
      },
      {
        id: 'fuel-management',
        subjectId: 'operational-procedures',
        name: 'Fuel Management',
        description: 'Fuel planning, reserves, and endurance calculations',
        lessons: [fuelManagementBasics],
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
        lessons: [decisionMakingBasics],
      },
      {
        id: 'fitness-to-fly',
        subjectId: 'human-performance',
        name: 'Fitness to Fly',
        description: 'Medical factors, alcohol, fatigue, and the IMSAFE checklist',
        lessons: [fitnessToFlyBasics],
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
        lessons: [chartReadingBasics],
      },
      {
        id: 'radio-navigation',
        subjectId: 'navigation',
        name: 'Radio Navigation',
        description: 'VOR, NDB, GPS, and other navigation aids',
        lessons: [radioNavigationBasics],
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
        lessons: [metarTafBasics],
      },
      {
        id: 'vfr-weather',
        subjectId: 'meteorology',
        name: 'VFR Weather Minima',
        description: 'Visibility, cloud base, and VFR flight requirements',
        lessons: [vfrWeatherBasics],
      },
      {
        id: 'weather-hazards',
        subjectId: 'meteorology',
        name: 'Weather Hazards',
        description: 'Icing, turbulence, fog, and thunderstorms',
        lessons: [weatherHazardsBasics],
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
    topics: [
      {
        id: 'piston-engines',
        subjectId: 'aircraft-general',
        name: 'Piston Engines',
        description: 'Four-stroke cycle, magneto ignition, carburettor icing',
        lessons: [pistonEnginesBasics],
      },
      {
        id: 'flight-instruments',
        subjectId: 'aircraft-general',
        name: 'Flight Instruments',
        description: 'ASI, altimeter, VSI, gyroscopic instruments',
        lessons: [flightInstrumentsBasics],
      },
      {
        id: 'airframe-systems',
        subjectId: 'aircraft-general',
        name: 'Airframe & Control Systems',
        description: 'Control surfaces, flaps, trim, primary and secondary controls',
        lessons: [airframeSystemsBasics],
      },
    ],
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
    topics: [
      {
        id: 'mass-balance',
        subjectId: 'flight-performance',
        name: 'Mass & Balance',
        description: 'CG limits, moment arms, weight calculations',
        lessons: [massBalanceBasics],
      },
      {
        id: 'takeoff-landing-performance',
        subjectId: 'flight-performance',
        name: 'Takeoff & Landing Performance',
        description: 'Density altitude, runway slope, wind component effects',
        lessons: [takeoffLandingPerformanceBasics],
      },
      {
        id: 'fuel-planning',
        subjectId: 'flight-performance',
        name: 'Fuel Planning',
        description: 'Fuel consumption, reserves, endurance calculations',
        lessons: [fuelPlanningBasics],
      },
    ],
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
    topics: [
      {
        id: 'four-forces',
        subjectId: 'principles-of-flight',
        name: 'Four Forces of Flight',
        description: 'Lift, weight, thrust, drag and their relationships',
        lessons: [fourForcesBasics],
      },
      {
        id: 'airfoils-lift',
        subjectId: 'principles-of-flight',
        name: 'Airfoils & Lift Generation',
        description: 'Bernoulli\'s principle, angle of attack, coefficient of lift',
        lessons: [airfoilsLiftBasics],
      },
      {
        id: 'stalling-stability',
        subjectId: 'principles-of-flight',
        name: 'Stalling & Stability',
        description: 'Stall characteristics, recovery, longitudinal and lateral stability',
        lessons: [stallingStabilityBasics],
      },
    ],
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
    topics: [
      {
        id: 'rt-phraseology',
        subjectId: 'communications',
        name: 'RT Phraseology',
        description: 'Standard calls, readback requirements, phonetic alphabet',
        lessons: [rtPhraseologyBasics],
      },
      {
        id: 'emergency-communications',
        subjectId: 'communications',
        name: 'Emergency Communications',
        description: 'Distress (MAYDAY), urgency (PAN PAN), radio failure',
        lessons: [emergencyCommunicationsBasics],
      },
      {
        id: 'frequency-management',
        subjectId: 'communications',
        name: 'Frequency Management',
        description: 'ATIS, tower, approach, ground frequencies and procedures',
        lessons: [frequencyManagementBasics],
      },
    ],
  },
];

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}

export function getAllSubjects(): Subject[] {
  return subjects;
}
