import { Lesson } from '@/types';

export const preFlightProceduresBasics: Lesson = {
  id: 'pre-flight-procedures-basics',
  topicId: 'pre-flight-procedures',
  title: 'Pre-Flight Procedures',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Pre-Flight Procedures',
    },
    {
      type: 'paragraph',
      text: 'Thorough pre-flight preparation is the foundation of safe flying. Many accidents and incidents can be traced back to inadequate preparation on the ground, whether that is a missed defect on the walk-around, unchecked weather, or missing documentation.',
    },
    {
      type: 'paragraph',
      text: 'This lesson covers everything you must do before starting the engine, from the physical inspection of the aircraft to the paperwork, weather briefing, and passenger briefing. Developing a disciplined pre-flight routine will serve you throughout your flying career.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The Walk-Around Inspection',
    },
    {
      type: 'paragraph',
      text: 'The external pre-flight inspection (walk-around) is a systematic check of the aircraft\'s airworthiness conducted before every flight. Always use the checklist provided in the Pilot\'s Operating Handbook (POH) for your aircraft type.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Begin at the cabin door. Check the aircraft documents are present (see below). Turn the master switch on briefly to check fuel quantity gauges, then off again.',
        'Work methodically around the aircraft in the direction specified by the POH - typically starting at the left side of the fuselage and proceeding clockwise.',
        'Inspect the airframe for dents, cracks, loose rivets, and security of panels and fairings.',
        'Check control surfaces (ailerons, elevators, rudder, flaps) for freedom of movement, security, and correct locking of hinge bolts.',
        'Inspect the propeller for nicks, cracks, and security. Check the spinner for cracks.',
        'Check the engine compartment: oil level within limits, no fluid leaks, cowl flap operation, exhaust system security.',
        'Check the undercarriage: tyre condition and inflation, brake disc/pad wear, oleo strut extension (if retractable gear, check down-lock indicators).',
        'Remove all tie-downs, chocks, pitot cover, control locks, and intake blanks.',
        'Drain fuel from the fuel strainer and tank sumps into a clear container. Check for water, debris, and correct fuel colour.',
        'Check the static ports are unblocked and the pitot tube is clear.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never skip the walk-around, even if the aircraft has just returned from another flight. Conditions can change rapidly and defects can develop at any time.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Aircraft Documents Required on Board',
    },
    {
      type: 'paragraph',
      text: 'Certain documents must be carried on board the aircraft for every flight. The CAA requires the following:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Certificate of Airworthiness (C of A) or Permit to Fly - Confirms the aircraft meets airworthiness standards. Must be current and valid.',
        'Certificate of Registration - Shows the aircraft is registered with the CAA and identifies the registered owner.',
        'Insurance certificate - Third-party liability insurance is a legal requirement for all flights.',
        'Radio licence (Station Licence) - Required if the aircraft is fitted with radio equipment. Issued by Ofcom.',
        'Noise certificate - Required under ICAO Annex 16 for aircraft that meet noise standards.',
        'Aircraft flight manual or POH - Must be available to the pilot. Contains limitations, performance data, and emergency procedures.',
        'Technical log or maintenance records - Evidence that the aircraft is within its maintenance schedule.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for aircraft documents: "ARROW" - Airworthiness certificate, Registration, Radio licence, Operating handbook (POH/AFM), Weight and balance data.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Pilot Documents',
    },
    {
      type: 'paragraph',
      text: 'As pilot in command, you must carry the following personal documents and be able to produce them if requested by an authorised person:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Pilot\'s licence - A valid PPL(A) or higher, with the appropriate ratings for the flight (e.g., SEP rating for single-engine piston aircraft).',
        'Valid medical certificate - Class 2 medical or a UK LAPL medical declaration, as appropriate. Check the expiry date before every flight.',
        'Personal flying logbook - Not legally required to be carried in flight, but is strong evidence of recency. You must be able to demonstrate recency if asked.',
        'Photo identification - While not a strict legal requirement for the flight, it is good practice and often required at controlled aerodromes.',
        'Radiotelephony licence (FRTOL) - Required if you will operate the aircraft\'s radio.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Recency: To carry passengers, a PPL holder must have completed at least 3 takeoffs and 3 landings in the preceding 90 days in an aircraft of the same class or type.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'NOTAM and Weather Briefing',
    },
    {
      type: 'heading',
      level: 2,
      text: 'NOTAMs',
    },
    {
      type: 'paragraph',
      text: 'Notices to Airmen (NOTAMs) contain time-critical information about changes to aerodromes, airspace, navigation aids, and hazards. You must check NOTAMs for your departure aerodrome, destination, alternate, and route before every flight.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Check for temporary airspace restrictions (e.g., Royal flights, military exercises, air displays).',
        'Check for aerodrome closures, runway restrictions, or changes to facilities.',
        'Check for temporary obstacles (cranes, wind farms under construction).',
        'NOTAMs can be accessed via the NATS AIS website or other approved briefing services.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Weather Briefing',
    },
    {
      type: 'paragraph',
      text: 'A thorough weather briefing is essential for every flight. As a VFR pilot, you need to confirm that conditions will remain suitable throughout the flight. Sources include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'METARs - Actual weather reports from specific aerodromes, issued every 30 minutes or hourly.',
        'TAFs - Terminal Aerodrome Forecasts, typically covering a 9-hour or 24-hour period.',
        'Form 214 (Spot Wind Chart) - Forecast winds at various altitudes for flight planning.',
        'Form 215 (Low-Level Forecast) - A graphical chart showing significant weather, cloud, visibility, and icing for low-level flights across the UK.',
        'SIGMET/AIRMET - Warnings of significant or hazardous weather phenomena.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'VFR flight requires adequate visibility and cloud clearance. If the forecast conditions are marginal, have a clear plan to divert or return. "Get-there-itis" is a leading factor in weather-related accidents.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Weight and Balance',
    },
    {
      type: 'paragraph',
      text: 'Before every flight you must confirm that the aircraft is within its weight and balance limits. An aircraft loaded outside its approved envelope may have dangerous handling characteristics, insufficient performance, or structural overstress.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Determine the basic empty mass and centre of gravity (CG) position from the aircraft\'s weight schedule.',
        'Add the mass of the pilot, passengers, baggage, and fuel.',
        'Calculate the total mass and check it does not exceed the Maximum Takeoff Mass (MTOM).',
        'Calculate the loaded CG position and verify it falls within the forward and aft limits for the flight.',
        'Remember that CG moves as fuel is burned - check the CG remains within limits throughout the flight, including at landing weight.',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel State Verification',
    },
    {
      type: 'paragraph',
      text: 'Verify the fuel state visually and cross-check against the gauges. Never rely solely on fuel gauges, which are only required to read accurately at empty. Use dipsticks or sight gauges to confirm the quantity matches your fuel plan.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Always physically verify fuel quantity with a dipstick or visual check - fuel gauges in light aircraft are notoriously inaccurate. Also confirm the correct fuel type was loaded (AVGAS 100LL is dyed blue).',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Personal Equipment and Fitness',
    },
    {
      type: 'paragraph',
      text: 'Before flight, assess your own fitness to fly. The IMSAFE checklist is a useful self-assessment tool:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'I - Illness: Am I suffering from any illness or symptoms?',
        'M - Medication: Am I taking any medication that could affect my performance?',
        'S - Stress: Am I under excessive psychological stress?',
        'A - Alcohol: Have I consumed alcohol within the last 8 hours (and am I below the legal blood alcohol limit)?',
        'F - Fatigue: Am I adequately rested?',
        'E - Eating: Have I eaten and am I properly hydrated?',
      ],
    },
    {
      type: 'paragraph',
      text: 'Ensure you have charts for the route, a working navigation device or plotter, a pen, kneeboard, and sunglasses. Carry a torch if there is any possibility of flying after dusk.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Passenger Briefing',
    },
    {
      type: 'paragraph',
      text: 'Before flight, the pilot in command must brief passengers on safety-critical items. This is a legal requirement and good airmanship. The briefing should cover:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Seat belt and harness - How to fasten, adjust, and release.',
        'Door operation - How to open and secure the cabin door, including in an emergency.',
        'Emergency exits - Location and operation.',
        'Fire extinguisher - Location and basic use.',
        'Emergency procedures - What to do in an emergency, including the brace position.',
        'Smoking - No smoking on board.',
        'Loose articles - All items must be secured to prevent them jamming controls or becoming projectiles.',
        'Sterile cockpit - No unnecessary conversation during takeoff, landing, or when instructed by the pilot.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The passenger briefing is a legal requirement under UK Air Navigation Order provisions. Brief every passenger on every flight, even if they are experienced pilots themselves.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Key Takeaways',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Always conduct a thorough walk-around using the POH checklist before every flight.',
        'Aircraft documents on board must include the C of A, registration, insurance, radio licence, and noise certificate.',
        'Check NOTAMs and obtain a full weather briefing for departure, route, destination, and alternate.',
        'Verify weight and balance, and confirm CG remains within limits throughout the flight.',
        'Physically verify fuel quantity - do not rely solely on fuel gauges.',
        'Brief all passengers on safety procedures, including seat belts, doors, and emergency actions.',
      ],
    },
  ],
  keyPoints: [
    'Conduct a systematic walk-around using the POH checklist before every flight - never skip it',
    'Required aircraft documents: C of A, Registration, Insurance, Radio Licence, Noise Certificate',
    'Pilots must carry a valid licence, medical certificate, and FRTOL',
    'Always check NOTAMs and weather for departure, route, destination, and alternate',
    'Verify weight, balance, and fuel state before every flight',
    'Passenger briefing covering safety equipment and emergency procedures is a legal requirement',
  ],
  practiceQuestions: [
    'op-012',
  ],
};
