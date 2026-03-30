import { Lesson } from '@/types';

export const weatherHazardsBasics: Lesson = {
  id: 'weather-hazards-basics',
  topicId: 'weather-hazards',
  title: 'Weather Hazards for Pilots',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Weather Hazards',
    },
    {
      type: 'paragraph',
      text: 'Weather is the single greatest threat to general aviation safety. Understanding weather hazards, how they form, and how to avoid them is a fundamental part of being a safe pilot. This lesson covers the main weather hazards you will encounter in UK flying: icing, turbulence, fog and low visibility, thunderstorms, wind shear, and crosswind limitations.',
    },
    {
      type: 'paragraph',
      text: 'The key principle is simple: respect the weather and never attempt to fly through hazards that exceed your experience or your aircraft\'s capability. The best strategy is always avoidance.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Weather-related accidents are disproportionately fatal. VFR flight into IMC, icing, and thunderstorm encounters have some of the highest fatality rates of any accident category. Prevention through good planning and conservative decision-making is your best defence.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Icing',
    },
    {
      type: 'paragraph',
      text: 'Airframe icing occurs when an aircraft flies through visible moisture (cloud, rain, or drizzle) at temperatures at or below 0 degrees Celsius. Ice accumulates on the leading edges of wings, tail surfaces, propeller, pitot tube, and other exposed surfaces. It degrades aerodynamic performance, increases weight, and can block instruments.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Types of Airframe Icing',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Rime ice: Forms when small supercooled water droplets freeze on impact. It is white, rough, and opaque. Rime ice typically forms in stratus-type cloud at temperatures between 0 and minus 20 degrees C. It tends to conform to the shape of the leading edge',
        'Clear (glaze) ice: Forms when large supercooled water droplets hit the surface and spread before freezing. It is transparent, smooth, and very hard. Clear ice is the most dangerous type because it is heavy, difficult to detect, and can form irregular shapes that severely disrupt airflow. It is associated with freezing rain and cumuliform cloud',
        'Mixed ice: A combination of rime and clear ice. Occurs when a mixture of droplet sizes are present. It forms rough, irregular shapes',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Most light aircraft used for PPL training have no ice protection systems. If you encounter icing conditions, take immediate action: change altitude to find warmer air (climb above the freezing level or descend below it), and consider diverting or turning back. Do not continue into known icing.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Carburettor Icing',
    },
    {
      type: 'paragraph',
      text: 'Carburettor icing is one of the most insidious hazards for piston-engine aircraft. As fuel vaporises in the carburettor venturi and air expands through the throttle valve, the temperature can drop by 20-30 degrees Celsius. If moisture is present, ice forms inside the carburettor, restricting or blocking the fuel-air mixture.',
    },
    {
      type: 'paragraph',
      text: 'Critically, carburettor icing can occur in ambient temperatures well above freezing - even in temperatures up to 30 degrees Celsius with high humidity. It is most likely in warm, moist conditions, especially at reduced power settings such as during descent.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Symptoms: unexplained drop in RPM (fixed-pitch propeller) or manifold pressure (constant-speed propeller), rough running, eventual engine stoppage',
        'Prevention: apply carburettor heat regularly, especially during descents and at low power settings',
        'Treatment: apply full carburettor heat. Expect a further brief drop in RPM as the ice melts and passes through the engine, then a recovery',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: Carburettor icing is most likely in warm, moist conditions at low power settings. The carburettor icing probability chart (shown in the CAA Safety Sense leaflet) shows that serious icing can occur even at OAT of plus 25 degrees C with high relative humidity.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Pitot Icing',
    },
    {
      type: 'paragraph',
      text: 'Ice blocking the pitot tube causes erroneous airspeed indications. If the pitot tube blocks while the static port remains clear, the airspeed indicator behaves like an altimeter (reading increases with altitude, decreases with altitude). If both block, the airspeed freezes at the last reading.',
    },
    {
      type: 'paragraph',
      text: 'Most aircraft have a pitot heater that should be turned on when flying in or near icing conditions. Always check the pitot heater during pre-flight.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Turbulence',
    },
    {
      type: 'paragraph',
      text: 'Turbulence is irregular motion of the air that causes bumps, jolts, and uncommanded changes in altitude and attitude. It ranges from light (slight erratic changes) to extreme (aircraft may be momentarily out of control). Understanding the causes helps you avoid or minimise exposure.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Types of Turbulence',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Convective turbulence: caused by thermal activity (rising warm air). Most common on hot summer afternoons over land. Produces bumpy conditions, especially below cumulus clouds. Strength depends on surface heating and atmospheric instability',
        'Mechanical (orographic) turbulence: caused by wind flowing over rough terrain, hills, and mountains. The air is disrupted by the surface features, creating eddies and downdrafts. Particularly severe on the lee (downwind) side of hills and ridges',
        'Clear Air Turbulence (CAT): occurs at high altitude, usually near jet streams. Not typically encountered by PPL pilots but can occasionally affect higher-altitude flight in turboprops',
        'Rotor turbulence: severe rolling eddies that form on the lee side of mountain ridges in strong wind. Can be extremely dangerous, even at low levels. Look for lenticular clouds as an indicator',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Wind Shear',
    },
    {
      type: 'paragraph',
      text: 'Wind shear is a sudden change in wind speed or direction over a short distance. It is most hazardous during approach and departure, when the aircraft is at low altitude and low speed.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'On approach: a sudden decrease in headwind or an increase in tailwind causes a loss of airspeed and rapid sink. The aircraft may drop below the glidepath with insufficient height to recover',
        'On departure: encountering a downdraft or tailwind shear shortly after take-off, when the aircraft has limited climb performance, can be catastrophic',
        'Causes: thunderstorms (microbursts and gust fronts), frontal passages, temperature inversions, and strong surface wind flowing around buildings or terrain near the runway',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Wind shear on approach is a killer. If you experience a sudden, uncommanded loss of airspeed or an unexpected sink rate on approach, apply full power immediately and execute a go-around. Do not attempt to salvage the approach.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fog and Low Visibility',
    },
    {
      type: 'paragraph',
      text: 'Fog is cloud at ground level, reducing visibility below 1,000 metres. For VFR pilots, fog is one of the most common and dangerous weather hazards, as it can form quickly and ground an aircraft at its destination or trap a pilot en route.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Types of Fog',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Radiation fog: forms on clear nights with light winds when the ground cools by radiating heat. The air in contact with the ground cools to its dew point and condensation occurs. Most common in autumn and winter, in low-lying areas and valleys. Requires clear skies, light wind (2-8 kt), and moist air. Disperses after sunrise as the ground warms',
        'Advection fog: forms when warm, moist air moves over a cooler surface (such as cool sea or cold land). It can form at any time of day or night and does not require light winds. Advection fog can be persistent and widespread, and it can move inland quickly with an onshore wind',
        'Hill fog (orographic fog): simply cloud covering high ground. When the cloud base is lower than the hilltops, the hills are in fog. This is extremely common in the UK uplands and can appear as clear weather in the valleys below',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Conditions for Fog Formation and Dispersal',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Formation: temperature approaching dew point (small T/Td spread), adequate moisture, cooling mechanism (radiative cooling, advection over cool surface, or orographic lift)',
        'Radiation fog dispersal: solar heating after sunrise. May take several hours in winter. Will persist longer in sheltered valleys',
        'Advection fog dispersal: requires a change in wind direction or the air mass. It does NOT disperse with sunrise since it is not caused by surface cooling',
        'Hill fog dispersal: requires the cloud base to rise above the terrain, which needs warming, drying, or a change in wind pattern',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: Radiation fog requires clear skies and light wind (2-8 knots). Calm conditions produce dew (not fog) because there is no mixing. Advection fog does not require light winds and does not burn off after sunrise.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Thunderstorms',
    },
    {
      type: 'paragraph',
      text: 'Thunderstorms are produced by cumulonimbus (Cb) clouds and represent the most severe weather hazard a pilot can encounter. They contain virtually every aviation hazard simultaneously: severe turbulence, heavy rain, hail, lightning, icing, and extreme updrafts and downdrafts.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Cumulonimbus Development',
    },
    {
      type: 'paragraph',
      text: 'Cumulonimbus clouds develop through three stages:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Developing (cumulus) stage: dominated by strong updrafts, building vertically. Rain has not yet reached the surface',
        'Mature stage: both updrafts and downdrafts present. This is the most hazardous stage, with heavy rain, hail, lightning, and the most severe turbulence. Rain reaches the surface',
        'Dissipating stage: dominated by downdrafts. Updrafts weaken, the cloud spreads out into an anvil shape, and precipitation decreases. Turbulence remains a hazard',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Thunderstorm Hazards',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Severe turbulence: updrafts and downdrafts can exceed 3,000 ft/min. Aircraft structural limits may be exceeded',
        'Hail: can be thrown out of the cloud by updrafts and encountered in clear air near a Cb. Can cause severe structural damage',
        'Lightning: can cause temporary blindness, compass errors, and damage to avionics. Rarely causes structural failure but is startling and disorienting',
        'Microbursts: intense, localised downdrafts that spread outward on reaching the ground, creating violent wind shear. Extremely dangerous on approach and departure',
        'Heavy rain: can reduce visibility to near zero and cause engine ingestion problems in extreme cases',
        'Severe icing: rapid accumulation of clear or mixed ice in the upper levels of the cloud',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'How to Avoid Thunderstorms',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Maintain at least 10 nm lateral separation from a known Cb or thunderstorm cell',
        'Do not fly under a Cb - the downdrafts, turbulence, and hail extend well below the cloud base',
        'Do not attempt to fly between thunderstorm cells unless you can maintain clear visual separation of at least 20 nm between them',
        'If caught near a thunderstorm: reduce speed to the turbulence penetration speed (VA), keep wings level, maintain attitude, and accept altitude excursions rather than fighting them',
        'On the ground: delay departure until the storm passes. Thunderstorm cells typically move through in 20-40 minutes',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never attempt to fly through or under a cumulonimbus cloud. Light aircraft simply cannot survive the severe turbulence, hail, and wind shear within a mature thunderstorm. The only safe strategy is complete avoidance.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Freezing Rain',
    },
    {
      type: 'paragraph',
      text: 'Freezing rain occurs when rain falls from a warm air layer aloft into a layer of sub-zero air near the surface. The raindrops remain liquid despite being below 0 degrees Celsius (supercooled) and freeze instantly on contact with the aircraft. This produces rapid, severe clear ice accumulation.',
    },
    {
      type: 'paragraph',
      text: 'Freezing rain is associated with warm fronts where warm air overrides cold air at the surface. The ice accumulation rate can be extreme, and even aircraft with ice protection systems may be overwhelmed. Light aircraft should never fly in freezing rain.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Freezing rain causes the most rapid and severe ice accumulation of any icing hazard. If you encounter freezing rain, change altitude immediately or reverse course. Climbing into the warm air above may be an option, but only if you know the warm layer exists above you.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Crosswind Limitations',
    },
    {
      type: 'paragraph',
      text: 'Every aircraft has a maximum demonstrated crosswind component, published in the Pilot Operating Handbook (POH). This is the maximum crosswind in which the aircraft has been demonstrated to land or take off safely during certification testing.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Typical training aircraft: maximum demonstrated crosswind 15-17 knots',
        'The demonstrated crosswind is not a hard limitation (unlike some other POH limits), but exceeding it significantly increases risk',
        'Your personal crosswind limit should be based on your experience, recency, and the conditions (gusty crosswinds are more challenging than steady crosswinds)',
        'Crosswind calculation: the crosswind component is approximately the wind speed multiplied by the sine of the angle between the wind direction and the runway',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Quick crosswind estimation: at 30 degrees off the runway, the crosswind component is half the wind speed. At 60 degrees, it is about 87%. At 90 degrees, it equals the full wind speed.',
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
        'Icing types: rime (white, rough), clear/glaze (transparent, heavy, most dangerous), mixed. Most light aircraft have no ice protection',
        'Carburettor icing can occur in OAT up to plus 30 degrees C. Apply carb heat regularly, especially at low power',
        'Radiation fog: clear night, light wind (2-8 kt), moist air. Advection fog: warm air over cool surface, any time, any wind speed',
        'Thunderstorms: avoid by at least 10 nm. Never fly under or through a Cb',
        'Wind shear on approach: if airspeed drops suddenly, apply full power and go around immediately',
        'Freezing rain causes rapid, severe clear ice. Vacate the area immediately if encountered',
      ],
    },
  ],
  keyPoints: [
    'Clear (glaze) ice is the most dangerous type - heavy, hard to see, and disrupts airflow. Rime ice is white and rough',
    'Carburettor icing can occur at ambient temperatures up to 30 degrees C with high humidity; apply carb heat at low power settings',
    'Radiation fog: clear nights, light wind (2-8 kt), moist air. Advection fog: warm air over cool surface, any time, does not burn off with sunrise',
    'Thunderstorms (Cb): maintain at least 10 nm clearance. Never fly under or through a cumulonimbus cloud',
    'Wind shear on approach: sudden airspeed loss demands immediate full power and go-around',
    'Freezing rain produces the most rapid ice accumulation; vacate the conditions immediately',
  ],
  practiceQuestions: [],
};
