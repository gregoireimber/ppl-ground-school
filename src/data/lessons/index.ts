import { Lesson } from '@/types';
import { rulesOfTheAirBasics } from './air-law/rules-of-the-air-basics';
import { airspaceClassificationBasics } from './air-law/airspace-classification-basics';
import { licensingRequirementsBasics } from './air-law/licensing-requirements-basics';
import { icaoRegulationsBasics } from './air-law/icao-regulations-basics';
import { emergencyProceduresBasics } from './operational-procedures/emergency-procedures-basics';
import { airfieldOperationsBasics } from './operational-procedures/airfield-operations-basics';
import { preFlightProceduresBasics } from './operational-procedures/pre-flight-procedures-basics';
import { fuelManagementBasics } from './operational-procedures/fuel-management-basics';
import { aviationPhysiologyBasics } from './human-performance/aviation-physiology-basics';
import { decisionMakingBasics } from './human-performance/decision-making-basics';
import { fitnessToFlyBasics } from './human-performance/fitness-to-fly-basics';
import { deadReckoningBasics } from './navigation/dead-reckoning-basics';
import { weatherSystemsBasics } from './meteorology/weather-systems-basics';
import { pistonEnginesBasics } from './aircraft-general/piston-engines-basics';
import { massBalanceBasics } from './flight-performance/mass-balance-basics';
import { rtPhraseologyBasics } from './communications/rt-phraseology-basics';
import { emergencyCommunicationsBasics } from './communications/emergency-communications-basics';
import { frequencyManagementBasics } from './communications/frequency-management-basics';
import { fourForcesBasics } from './principles-of-flight/four-forces-basics';
import { flightInstrumentsBasics } from './aircraft-general/flight-instruments-basics';
import { airframeSystemsBasics } from './aircraft-general/airframe-systems-basics';
import { takeoffLandingPerformanceBasics } from './flight-performance/takeoff-landing-performance-basics';
import { fuelPlanningBasics } from './flight-performance/fuel-planning-basics';
import { airfoilsLiftBasics } from './principles-of-flight/airfoils-lift-basics';
import { stallingStabilityBasics } from './principles-of-flight/stalling-stability-basics';
import { chartReadingBasics } from './navigation/chart-reading-basics';
import { radioNavigationBasics } from './navigation/radio-navigation-basics';
import { metarTafBasics } from './meteorology/metar-taf-basics';
import { vfrWeatherBasics } from './meteorology/vfr-weather-basics';
import { weatherHazardsBasics } from './meteorology/weather-hazards-basics';

// Lesson registry - all lessons indexed by ID
const lessonRegistry: Record<string, Lesson> = {
  'rules-of-the-air-basics': rulesOfTheAirBasics,
  'airspace-classification-basics': airspaceClassificationBasics,
  'licensing-requirements-basics': licensingRequirementsBasics,
  'icao-regulations-basics': icaoRegulationsBasics,
  'emergency-procedures-basics': emergencyProceduresBasics,
  'airfield-operations-basics': airfieldOperationsBasics,
  'pre-flight-procedures-basics': preFlightProceduresBasics,
  'fuel-management-basics': fuelManagementBasics,
  'aviation-physiology-basics': aviationPhysiologyBasics,
  'decision-making-basics': decisionMakingBasics,
  'fitness-to-fly-basics': fitnessToFlyBasics,
  'dead-reckoning-basics': deadReckoningBasics,
  'weather-systems-basics': weatherSystemsBasics,
  'piston-engines-basics': pistonEnginesBasics,
  'mass-balance-basics': massBalanceBasics,
  'rt-phraseology-basics': rtPhraseologyBasics,
  'emergency-communications-basics': emergencyCommunicationsBasics,
  'frequency-management-basics': frequencyManagementBasics,
  'four-forces-basics': fourForcesBasics,
  'flight-instruments-basics': flightInstrumentsBasics,
  'airframe-systems-basics': airframeSystemsBasics,
  'takeoff-landing-performance-basics': takeoffLandingPerformanceBasics,
  'fuel-planning-basics': fuelPlanningBasics,
  'airfoils-lift-basics': airfoilsLiftBasics,
  'stalling-stability-basics': stallingStabilityBasics,
  'chart-reading-basics': chartReadingBasics,
  'radio-navigation-basics': radioNavigationBasics,
  'metar-taf-basics': metarTafBasics,
  'vfr-weather-basics': vfrWeatherBasics,
  'weather-hazards-basics': weatherHazardsBasics,
};

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessonRegistry[lessonId];
}

export function getAllLessons(): Lesson[] {
  return Object.values(lessonRegistry);
}

// Export individual lessons for direct import if needed
export {
  rulesOfTheAirBasics,
  airspaceClassificationBasics,
  licensingRequirementsBasics,
  icaoRegulationsBasics,
  emergencyProceduresBasics,
  airfieldOperationsBasics,
  preFlightProceduresBasics,
  fuelManagementBasics,
  aviationPhysiologyBasics,
  decisionMakingBasics,
  fitnessToFlyBasics,
  deadReckoningBasics,
  weatherSystemsBasics,
  pistonEnginesBasics,
  massBalanceBasics,
  rtPhraseologyBasics,
  emergencyCommunicationsBasics,
  frequencyManagementBasics,
  fourForcesBasics,
  flightInstrumentsBasics,
  airframeSystemsBasics,
  takeoffLandingPerformanceBasics,
  fuelPlanningBasics,
  airfoilsLiftBasics,
  stallingStabilityBasics,
  chartReadingBasics,
  radioNavigationBasics,
  metarTafBasics,
  vfrWeatherBasics,
  weatherHazardsBasics
};
