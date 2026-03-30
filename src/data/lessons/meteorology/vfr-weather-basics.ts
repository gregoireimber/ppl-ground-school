import { Lesson } from '@/types';

export const vfrWeatherBasics: Lesson = {
  id: 'vfr-weather-basics',
  topicId: 'vfr-weather',
  title: 'VFR Weather Minima',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to VFR Weather Minima',
    },
    {
      type: 'paragraph',
      text: 'Visual Flight Rules (VFR) exist to ensure that pilots flying by visual reference have sufficient visibility and clearance from cloud to see and avoid other traffic and terrain. The weather minima define the minimum conditions under which VFR flight is permitted in each class of airspace.',
    },
    {
      type: 'paragraph',
      text: 'These minima are set by SERA (Standardised European Rules of the Air), which the UK has adopted. Knowing the exact minima for each airspace class and altitude band is essential for legal and safe flight. Getting this wrong can result in an airspace infringement, loss of separation from other traffic, or flight into IMC.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'VFR weather minima are legal minimums, not targets. Good airmanship means maintaining comfortable margins above the minima. Conditions at the legal minimum are challenging even for experienced pilots.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'VMC and IMC Defined',
    },
    {
      type: 'paragraph',
      text: 'VMC (Visual Meteorological Conditions) means the visibility, distance from cloud, and ceiling meet or exceed the VFR minima for the airspace you are in. When conditions are VMC, VFR flight is permitted.',
    },
    {
      type: 'paragraph',
      text: 'IMC (Instrument Meteorological Conditions) means the conditions are below VFR minima. When IMC exists, VFR flight is not permitted. Only pilots with an instrument qualification and aircraft with appropriate equipment may fly in IMC under IFR.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'A PPL holder without an instrument rating must not fly in IMC. If conditions deteriorate below VFR minima during flight, you must take immediate action: turn back, divert, or request assistance.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'SERA VFR Weather Minima by Airspace Class',
    },
    {
      type: 'paragraph',
      text: 'The minima vary depending on the class of airspace and, in Class G, on your altitude. The following sections set out the requirements.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class G Airspace: At or Above 3,000 ft AMSL (or 1,000 ft AGL, Whichever is Higher)',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Flight visibility: 5 km',
        'Distance from cloud: 1,500 metres horizontally, 1,000 feet vertically',
      ],
    },
    {
      type: 'paragraph',
      text: 'At this altitude band in uncontrolled airspace, you must maintain positive separation from cloud in all directions. The 1,500 m horizontal and 1,000 ft vertical cloud clearance requirements ensure you have time to see and avoid traffic that may emerge from cloud.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class G Airspace: Below 3,000 ft AMSL (or 1,000 ft AGL, Whichever is Higher)',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Flight visibility: 5 km (see note below for reduced visibility provision)',
        'Distance from cloud: clear of cloud and in sight of the surface',
      ],
    },
    {
      type: 'paragraph',
      text: 'Below 3,000 ft AMSL in Class G, the cloud clearance requirement is relaxed: you need only remain clear of cloud and in sight of the surface. This recognises that much low-level VFR flight occurs beneath cloud. However, "clear of cloud" means exactly that - you must not enter any cloud.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Reduced visibility provision: In Class G below 3,000 ft AMSL, aeroplanes flying at 140 knots IAS or less may fly with a flight visibility of 1,500 metres, provided they remain clear of cloud and in sight of the surface. This is commonly called the "1,500 m rule". Note: this does NOT apply if flying at more than 140 knots IAS.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class D and E Airspace',
    },
    {
      type: 'paragraph',
      text: 'In Class D and E controlled airspace, VFR flight is permitted subject to ATC clearance and the following minima:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Flight visibility: 5 km',
        'Distance from cloud: 1,500 metres horizontally, 1,000 feet vertically',
      ],
    },
    {
      type: 'paragraph',
      text: 'These minima apply regardless of altitude within the airspace. Class D is the most common type of controlled airspace that PPL holders will encounter (around major regional airports). You must obtain an ATC clearance before entering Class D airspace.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class A, B, and C Airspace',
    },
    {
      type: 'paragraph',
      text: 'Class A airspace (which includes most airways and the London TMA) is IFR only. VFR flight is not permitted in Class A airspace in the UK. Class B is not used in UK airspace. Class C airspace exists above FL195 and is also not accessible to PPL holders under VFR.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'VFR flight is NOT permitted in Class A airspace. This is one of the most frequently infringed rules. Know where Class A airspace is on your chart and plan your route to avoid it.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Special VFR (SVFR)',
    },
    {
      type: 'paragraph',
      text: 'Special VFR is a clearance that allows a pilot to fly within a control zone (CTR) when conditions are below normal VFR minima but above certain reduced minima. It is granted at the discretion of ATC and is not available in all circumstances.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'SVFR Minima',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Flight visibility: 1,500 metres for aeroplanes (or as specified by ATC)',
        'Clear of cloud and in sight of the surface',
        'Speed: 140 knots IAS or less (aeroplanes)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'When to Request SVFR',
    },
    {
      type: 'paragraph',
      text: 'SVFR is typically requested when you need to transit through or depart from or arrive at an aerodrome within a control zone but the weather is below standard VFR minima for that class of airspace. You request it from ATC by saying "Request Special VFR".',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'SVFR is only available within a control zone (CTR), not in the open FIR',
        'ATC may refuse the request if traffic does not permit',
        'SVFR clearances specify a route and altitude - you must comply with the clearance',
        'SVFR is not a substitute for an instrument rating. It is for short transits in marginal conditions, not extended flight in poor weather',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: SVFR is only available within a CTR (control zone). You cannot request SVFR in Class G airspace or in a CTA (control area) that does not extend to the surface.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Night VFR',
    },
    {
      type: 'paragraph',
      text: 'Under UK regulations, a PPL holder may not fly at night unless they hold a night rating. Night is defined as the period from 30 minutes after sunset to 30 minutes before sunrise (based on the local time of the surface location).',
    },
    {
      type: 'paragraph',
      text: 'Night VFR minima are more restrictive than day VFR. Pilots with a night rating must maintain higher visibility and cloud clearance standards. The key requirements include remaining within controlled airspace or in the vicinity of an aerodrome, and maintaining communication with ATC.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Night is defined as beginning 30 minutes after sunset and ending 30 minutes before sunrise. A PPL holder without a night rating must plan all flights to be completed within the day period. Always check sunset times during pre-flight planning.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Practical Decision-Making for Weather',
    },
    {
      type: 'paragraph',
      text: 'Knowing the legal minima is only part of the picture. Good decision-making means considering whether conditions are safe and comfortable, not just whether they are legal. Factors to consider include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Your personal experience and recency: less experienced pilots should use wider margins',
        'Terrain along your route: low cloud over flat terrain is different from low cloud over hills',
        'Trend of the weather: is it improving or deteriorating?',
        'Availability of alternate aerodromes with better weather',
        'Time of day: conditions often deteriorate towards evening, especially in autumn and winter',
        'The "get-there-itis" trap: pressure to complete a flight is a major accident factor. Always be willing to cancel, delay, or divert',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The most dangerous situation for a VFR pilot is inadvertent entry into IMC. If visibility is marginal, turn back early. The accident statistics show that VFR flight into IMC is one of the leading causes of fatal general aviation accidents.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Summary Table of VFR Minima',
    },
    {
      type: 'paragraph',
      text: 'This summary covers the key minima you must know for the PPL examination and practical flying:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Class G below 3,000 ft AMSL: 5 km visibility (1,500 m at 140 kt or less), clear of cloud, in sight of surface',
        'Class G at or above 3,000 ft AMSL: 5 km visibility, 1,500 m horizontal / 1,000 ft vertical from cloud',
        'Class D and E: 5 km visibility, 1,500 m horizontal / 1,000 ft vertical from cloud (ATC clearance required)',
        'Class A: VFR NOT permitted',
        'SVFR (within CTR only): 1,500 m visibility, clear of cloud, in sight of surface, 140 kt or less',
      ],
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
        'VMC = conditions meet VFR minima; IMC = below VFR minima. PPL holders must not fly in IMC',
        'Class G below 3,000 ft: 5 km vis, clear of cloud, in sight of surface (1,500 m vis at 140 kt or less)',
        'Class G at/above 3,000 ft: 5 km vis, 1,500 m horizontal / 1,000 ft vertical from cloud',
        'VFR is not permitted in Class A airspace',
        'SVFR is available within control zones only, at ATC discretion',
        'Night flying requires a night rating. Night begins 30 minutes after sunset',
      ],
    },
  ],
  keyPoints: [
    'Class G below 3,000 ft AMSL: 5 km visibility (1,500 m at 140 kt IAS or less), clear of cloud, in sight of surface',
    'Class G at/above 3,000 ft AMSL: 5 km visibility, 1,500 m horizontal and 1,000 ft vertical from cloud',
    'Class D and E: 5 km visibility, 1,500 m horizontal and 1,000 ft vertical from cloud, ATC clearance required',
    'VFR flight is NOT permitted in Class A airspace in the UK',
    'Special VFR is available within CTRs only, at ATC discretion, with reduced minima (1,500 m vis, clear of cloud)',
    'Night requires a night rating; defined as 30 minutes after sunset to 30 minutes before sunrise',
  ],
  practiceQuestions: [
    'met-010',
  ],
};
