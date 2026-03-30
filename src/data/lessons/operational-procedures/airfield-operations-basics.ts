import { Lesson } from '@/types';

export const airfieldOperationsBasics: Lesson = {
  id: 'airfield-operations-basics',
  topicId: 'airfield-operations',
  title: 'Airfield Operations',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Airfield Operations',
    },
    {
      type: 'paragraph',
      text: 'Safe and efficient aerodrome operations form the backbone of everyday flying. Understanding how aerodromes are categorised, how to interpret signals and markings, and how to integrate into the traffic pattern is essential for every PPL holder.',
    },
    {
      type: 'paragraph',
      text: 'Errors on the ground or in the circuit cause a disproportionate number of incidents. This lesson covers the knowledge you need to operate safely at any UK aerodrome, from a major licensed field to a small farm strip.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Types of Aerodrome',
    },
    {
      type: 'paragraph',
      text: 'UK aerodromes fall into several categories, each with different rules governing their use:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Licensed aerodromes - Approved by the CAA under an aerodrome licence. They must meet defined standards for runway surfaces, lighting, rescue and fire-fighting, and obstacle clearance. Published in the UK AIP.',
        'Unlicensed aerodromes - Not CAA-licensed but still legally usable. Standards vary widely. Pilots should obtain prior permission (PPR) and check NOTAMs for local procedures. Many are grass strips with limited facilities.',
        'Military aerodromes - Operated by the Ministry of Defence. Civil aircraft may use them only with prior permission and must comply with military procedures. Published in the Military AIP (MilAIP).',
        'Government aerodromes - Operated by government agencies. Access is usually restricted and by arrangement only.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Always check whether an aerodrome requires Prior Permission Required (PPR) before planning to land there. This information is found in the AIP, airfield plates, or pooleys/AFE guides.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Aerodrome Signals and Markings',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Signal Square',
    },
    {
      type: 'paragraph',
      text: 'The signal square (or signals area) is a flat area near the control tower or landing area that displays ground signals visible from the air. It tells you critical information about the aerodrome when radio communication is not available or to supplement radio information.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'White T - Indicates the landing direction; aircraft land along the shaft towards the cross-bar.',
        'White dumbbell - Use hard surfaces only (runways and taxiways).',
        'White dumbbell with black strips - Use hard surfaces for takeoff and landing, but grass taxiways are available.',
        'Red L - Right-hand circuit is in effect.',
        'Red and yellow striped board - Indicates special precautions are necessary due to the poor state of the manoeuvring area.',
        'White cross - Glider operations in progress.',
        'Black ball - A right-hand circuit is in effect for the runway it is associated with.',
        'White double cross - Helicopter operations in progress.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Runway Markings',
    },
    {
      type: 'paragraph',
      text: 'Runway markings are painted in white and follow ICAO standards. Key markings include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Runway designator - A two-digit number indicating the magnetic bearing of the runway divided by 10, rounded to the nearest 10 degrees (e.g., runway 27 = approximately 270 degrees magnetic).',
        'Threshold markings - White stripes at the beginning of the runway indicating the start of the usable landing area.',
        'Displaced threshold - White arrows leading up to a threshold bar; the area before the threshold can be used for takeoff or rollout but not for landing.',
        'Closed runway cross - A large white X on the runway means it is permanently or temporarily closed and must not be used.',
        'Aiming point markings - Bold rectangular blocks either side of the centreline, located roughly 300 m from the threshold on longer runways.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Windsock',
    },
    {
      type: 'paragraph',
      text: 'The windsock indicates wind direction and approximate speed. It is mounted near the landing area and shows the direction the wind is blowing from. A fully extended windsock indicates approximately 15 knots or more. A limp windsock indicates calm or very light wind.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The windsock points away from the wind. You take off and land into the wind, so you fly towards the windsock on approach.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Taxiway Procedures',
    },
    {
      type: 'paragraph',
      text: 'Taxiways are identified by letter designations (Alpha, Bravo, Charlie, etc.) and are marked with yellow centreline markings. Correct taxiway procedures prevent runway incursions, which are among the most dangerous aerodrome incidents.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Follow the yellow taxiway centreline at all times.',
        'Taxiway edge markings are two continuous yellow lines.',
        'Intermediate holding positions (a single dashed yellow line) require you to hold if instructed by ATC.',
        'Runway holding point (a solid yellow line paired with dashed lines) marks the boundary with the runway. You MUST NOT cross this line without explicit ATC clearance.',
        'Enhanced taxiway centreline markings (alternating yellow dashes) warn you that you are approaching a runway holding point.',
        'Category II/III holding points are positioned further from the runway threshold and are used during low-visibility operations.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never cross a runway holding point without ATC clearance. At uncontrolled aerodromes you must visually confirm the runway and approach are clear before entering.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Runway Operations',
    },
    {
      type: 'paragraph',
      text: 'When you are cleared onto the runway, standard instructions include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '"Line up and wait" - Taxi onto the runway and line up on the centreline, but do not commence the takeoff roll until you receive a separate takeoff clearance.',
        '"Cleared for takeoff" - You may commence the takeoff roll. This is the only phrase that authorises takeoff.',
        '"Backtrack" - Taxi along the runway in the opposite direction to landing traffic, usually to reach the full runway length for departure. You must be clear of the runway before opposing traffic lands.',
        '"Vacate" - Leave the runway as expeditiously as possible after landing, via the nearest suitable taxiway.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The word "takeoff" is ONLY used in the clearance itself. At all other times, pilots and controllers say "departure" to avoid any confusion.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Aerodrome Lighting',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Approach Slope Indicators',
    },
    {
      type: 'paragraph',
      text: 'Precision Approach Path Indicators (PAPI) and Visual Approach Slope Indicators (VASI) help pilots maintain the correct glide slope on approach:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'PAPI - A set of four light units beside the runway. Two red and two white means you are on the correct glide path. All white means too high; all red means too low. Three reds and one white means slightly low; three whites and one red means slightly high.',
        'VASI - An older system using two bars of lights. The near bar shows red or white relative to a lower angle and the far bar relative to a higher angle. On the correct path, the near bar is white and the far bar is red.',
        'Abbreviated PAPI (APAPI) - A two-unit version of PAPI, common at smaller aerodromes. One red and one white means on slope.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'PAPI memory aid: "Red over white, you\'re alright. Red over red, you\'re dead" - too low. White over white, you\'re out of sight - too high.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Other Aerodrome Lighting',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Runway edge lights - White lights along both sides of the runway. The last 600 m (or one-third of the runway, whichever is less) shows yellow (caution zone).',
        'Threshold lights - Green lights at the landing threshold, red when viewed from the runway (indicating the end).',
        'Runway end lights - Red lights visible only from the runway, marking the far end.',
        'Taxiway edge lights - Blue lights marking taxiway edges.',
        'Taxiway centreline lights - Green lights embedded in the taxiway surface.',
        'Stopbar lights - A row of red lights across a taxiway at a runway holding point. You must not cross an illuminated stopbar.',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Circuit Joining Procedures',
    },
    {
      type: 'paragraph',
      text: 'The traffic circuit (or pattern) is a standard rectangular flight path around the runway that organises arriving and departing traffic. Standard UK circuits are left-hand unless published otherwise.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Standard Overhead Join',
    },
    {
      type: 'paragraph',
      text: 'The overhead join is the standard procedure at UK aerodromes and is recommended when you are unfamiliar with the aerodrome or traffic is busy:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Approach the aerodrome from a direction that avoids overflying the live side of the circuit.',
        'Cross overhead the aerodrome at a height not below 2,000 feet AAL (above aerodrome level) to observe the signals area and assess the traffic situation.',
        'Determine the runway in use and circuit direction.',
        'Descend on the dead side (non-traffic side) of the circuit to circuit height.',
        'Cross the upwind end of the runway at circuit height and join the crosswind leg.',
        'Continue around the circuit, fitting in with existing traffic.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Other Joining Methods',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Crosswind join - Join directly onto the crosswind leg at circuit height. Requires good lookout to integrate with departing traffic.',
        'Direct downwind join - Join the downwind leg directly, usually from 45 degrees. Common when ATC directs you or when the aerodrome layout makes it convenient.',
        'Straight-in approach - Align with the final approach directly. Usually only when instructed by ATC at a controlled aerodrome.',
        'Base leg join - Join directly onto the base leg. Less common and requires careful traffic management.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'At busy or unfamiliar aerodromes, always use the overhead join unless ATC instructs otherwise. It gives you the best opportunity to assess the traffic situation before committing to the circuit.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Noise Abatement Procedures',
    },
    {
      type: 'paragraph',
      text: 'Many aerodromes publish noise abatement procedures to minimise the impact of aircraft noise on surrounding communities. These may include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Preferred runway directions to avoid noise-sensitive areas.',
        'Specific departure routes that avoid overflying villages or towns.',
        'Minimum altitudes over built-up areas.',
        'Restricted hours of operation (e.g., no circuits before 0800 or after sunset).',
        'Power reduction requirements after a specified altitude or distance.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Noise abatement procedures are published in the AIP and on aerodrome plates. They should always be followed unless safety requires otherwise. A pilot may deviate from noise abatement procedures if doing so is necessary for safety.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Wake Turbulence',
    },
    {
      type: 'paragraph',
      text: 'Wake turbulence is created by all aircraft in flight, generated primarily by wingtip vortices. It is greatest behind heavy, slow, clean-configuration aircraft. Vortices descend at 400-500 feet per minute and drift with the wind.',
    },
    {
      type: 'paragraph',
      text: 'ICAO defines wake turbulence categories based on maximum takeoff mass:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Heavy (H) - Aircraft with a maximum takeoff mass of 136,000 kg or more (e.g., Boeing 747, Airbus A380).',
        'Medium (M) - Aircraft between 7,000 kg and 136,000 kg (e.g., Boeing 737, ATR 72).',
        'Light (L) - Aircraft of 7,000 kg or less (most PPL training aircraft fall into this category).',
      ],
    },
    {
      type: 'paragraph',
      text: 'When a light aircraft follows a heavy or medium aircraft, ATC applies minimum separation. However, at aerodromes without ATC, you are responsible for your own wake turbulence separation.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'On approach: Stay on or above the preceding aircraft\'s glide path.',
        'On departure: Rotate before the preceding aircraft\'s rotation point and climb above its flight path.',
        'In crosswind conditions: Vortices from a parallel runway may drift onto your runway.',
        'Time separation: A light aircraft following a heavy should allow at least 3 minutes; following a medium, at least 2 minutes.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Wake vortices are invisible and can cause a light aircraft to roll beyond recovery at low altitude. Always allow adequate separation and be especially vigilant behind departing or arriving large aircraft.',
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
        'Know the differences between licensed, unlicensed, and military aerodromes and check PPR requirements.',
        'The signal square provides essential landing information visible from the air; know each symbol.',
        'Never cross a runway holding point without ATC clearance or confirming the runway is clear.',
        'PAPI shows two red and two white when you are on the correct glide path.',
        'The standard overhead join at 2,000 feet AAL is the recommended circuit joining method at unfamiliar aerodromes.',
        'Wake turbulence from heavier aircraft is a serious hazard; always allow adequate separation.',
      ],
    },
  ],
  keyPoints: [
    'Aerodromes are categorised as licensed, unlicensed, or military - check PPR and local procedures before visiting',
    'The signal square and windsock provide critical information about landing direction and conditions',
    'Runway holding points must never be crossed without clearance or visual confirmation that the runway is clear',
    'PAPI: two red, two white = correct glide path; all red = too low; all white = too high',
    'The overhead join at 2,000 feet AAL is the standard UK circuit joining procedure',
    'Wake turbulence is greatest behind heavy, slow, clean-configuration aircraft - allow adequate time and distance separation',
  ],
  practiceQuestions: [
    'op-009',
    'op-010',
  ],
};
