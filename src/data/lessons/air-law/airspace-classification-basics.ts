import { Lesson } from '@/types';

export const airspaceClassificationBasics: Lesson = {
  id: 'airspace-classification-basics',
  topicId: 'airspace-classification',
  title: 'UK Airspace Classification',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to UK Airspace Classification',
    },
    {
      type: 'paragraph',
      text: 'Understanding airspace classification is fundamental to safe and legal flight in the UK. Different classes of airspace exist to separate traffic, manage workload for air traffic services, and protect busy or sensitive areas. As a PPL holder, you must know which classes you may enter, what services are available, and what rules apply in each.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'UK airspace classification follows the ICAO system as implemented through SERA (Standardised European Rules of the Air). The UK retained SERA in domestic law after Brexit.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Controlled vs Uncontrolled Airspace',
    },
    {
      type: 'paragraph',
      text: 'Airspace is broadly divided into controlled airspace (Classes A to E) and uncontrolled airspace (Classes F and G). In controlled airspace, ATC provides separation services and entry requires a clearance. In uncontrolled airspace, pilots are largely responsible for their own separation.',
    },
    {
      type: 'paragraph',
      text: 'Controlled airspace in the UK takes various forms: Control Zones (CTR) around major aerodromes, Control Areas (CTA) linking CTRs, Terminal Manoeuvring Areas (TMA) at complex terminal environments, and Airways connecting en-route traffic.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The Airspace Classes',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class A',
    },
    {
      type: 'paragraph',
      text: 'Class A is the most restrictive airspace. Only IFR flights are permitted; VFR flight is not allowed. ATC provides full separation between all aircraft. An ATC clearance is required before entry.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'VFR flight is prohibited in Class A airspace. As a PPL pilot without an instrument rating, you may not enter Class A airspace under any circumstances. Most Airways above FL195 and some lower airspace around major airports are Class A.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class B',
    },
    {
      type: 'paragraph',
      text: 'Class B permits both IFR and VFR flights. ATC provides separation between all aircraft. An ATC clearance is required. Class B is not currently used in UK airspace, but you should be aware of it for examination purposes.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class C',
    },
    {
      type: 'paragraph',
      text: 'Class C permits both IFR and VFR flights. ATC provides separation between IFR and IFR, and between IFR and VFR. VFR traffic receives traffic information about other VFR flights. An ATC clearance is required before entry. In the UK, the Upper Airspace (above FL195) that is not Class A is generally Class C.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class D',
    },
    {
      type: 'paragraph',
      text: 'Class D is the most common controlled airspace that VFR pilots encounter in the UK. Both IFR and VFR flights are permitted. ATC provides separation between IFR flights and gives traffic information to VFR flights about other traffic. An ATC clearance is required before entry.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Class D is your most likely encounter with controlled airspace as a PPL pilot. Many CTRs around regional airports are Class D. You need a clearance to enter, and you must comply with ATC instructions, but VFR flight is permitted.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class E',
    },
    {
      type: 'paragraph',
      text: 'Class E permits both IFR and VFR flights. ATC provides separation between IFR flights only. VFR flights do not require a clearance to enter, but IFR flights do. VFR traffic receives traffic information as far as practical. Class E is relatively uncommon in the UK but does exist in some areas.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class F',
    },
    {
      type: 'paragraph',
      text: 'Class F is uncontrolled airspace with an advisory service. Both IFR and VFR flights are permitted without a clearance. An air traffic advisory service is available to participating IFR flights. Class F is associated with Advisory Routes (ADRs) in the UK, though these are being phased out.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Class G',
    },
    {
      type: 'paragraph',
      text: 'Class G is open, uncontrolled airspace. Both IFR and VFR flights are permitted without ATC clearance. No separation is provided by ATC. Pilots are responsible for their own separation from other traffic using see-and-avoid. A Flight Information Service (FIS) is available on request.',
    },
    {
      type: 'paragraph',
      text: 'The majority of UK airspace below the controlled airspace structure is Class G. This is where most PPL training and general aviation flying takes place.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'VFR Weather Minima by Airspace Class',
    },
    {
      type: 'paragraph',
      text: 'SERA defines the minimum weather conditions for VFR flight in each class of airspace. These vary depending on altitude and airspace classification. The standard VMC minima for controlled airspace (Classes C, D, and E at and above FL100) are: 8 km flight visibility, 1500 m horizontally and 1000 ft vertically clear of cloud.',
    },
    {
      type: 'paragraph',
      text: 'Below FL100 in controlled airspace (Classes C, D, E), the minima reduce to: 5 km flight visibility, 1500 m horizontally and 1000 ft vertically clear of cloud.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Special Rules for Class G Below 3000 ft AMSL',
    },
    {
      type: 'paragraph',
      text: 'In Class G airspace at or below 3000 ft AMSL (or 1000 ft above terrain, whichever is higher), significantly reduced VMC minima apply. The aircraft must remain clear of cloud and in sight of the surface, with a flight visibility of at least 5 km.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'A further reduction applies for aircraft flying at 140 knots IAS or less: the flight visibility minimum reduces to 1500 m, provided the aircraft remains clear of cloud and in sight of the surface. This applies to helicopters and slower fixed-wing aircraft such as microlights.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for Class G below 3000 ft AMSL: "Clear of Cloud, Sight of Surface, 5 km Vis" (or 1500 m at 140 kts or less). Think "CSS-5" for the three conditions at standard speed.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Summary Table of VFR Requirements',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Class A: VFR not permitted',
        'Class B: ATC clearance required, separation provided, 8 km vis at/above FL100, 5 km below FL100',
        'Class C: ATC clearance required, IFR/VFR separation, 8 km vis at/above FL100, 5 km below FL100',
        'Class D: ATC clearance required, traffic information for VFR, 8 km vis at/above FL100, 5 km below FL100',
        'Class E: No clearance for VFR, 8 km vis at/above FL100, 5 km below FL100',
        'Class F: No clearance required, advisory service available, same minima as Class G',
        'Class G above 3000 ft AMSL: 5 km vis, 1500 m horizontal / 1000 ft vertical clear of cloud',
        'Class G at/below 3000 ft AMSL: 5 km vis (1500 m at 140 kts or less), clear of cloud, in sight of surface',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Practical Considerations',
    },
    {
      type: 'paragraph',
      text: 'Always check NOTAM and the current UK AIP for the classification of airspace along your planned route. Airspace classification can change through NOTAM action, and temporary restricted or danger areas may be activated.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Entering controlled airspace without a clearance (an "airspace infringement") is a serious safety event and may result in enforcement action by the CAA. Always plan your route to remain clear of controlled airspace unless you have obtained a clearance.',
    },
    {
      type: 'paragraph',
      text: 'When requesting a clearance to enter controlled airspace, contact the appropriate ATC unit on the correct frequency, state your callsign, aircraft type, position, altitude, and intentions. Do not enter until you receive an explicit clearance.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Key Takeaways',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Controlled airspace (A-E) requires varying levels of ATC interaction; uncontrolled airspace (F-G) does not require a clearance',
        'VFR flight is prohibited in Class A airspace',
        'Class D is the most common controlled airspace encountered by VFR pilots in the UK',
        'VMC minima vary by airspace class and altitude; reduced minima apply in Class G below 3000 ft AMSL',
        'In Class G below 3000 ft AMSL: clear of cloud, in sight of surface, 5 km visibility (1500 m at 140 kts or less)',
        'Always obtain an ATC clearance before entering controlled airspace to avoid an airspace infringement',
      ],
    },
  ],
  keyPoints: [
    'Airspace Classes A-E are controlled; F and G are uncontrolled',
    'VFR flight is prohibited in Class A; Class D is the most commonly encountered controlled airspace for PPL pilots',
    'An ATC clearance is required to enter Classes A, B, C, and D; Class E requires clearance for IFR only',
    'Standard VMC minima: 5 km visibility, 1500 m horizontal and 1000 ft vertical clear of cloud (below FL100)',
    'Class G below 3000 ft AMSL: clear of cloud, in sight of surface, 5 km vis (1500 m at 140 kts IAS or less)',
    'Airspace infringement is a serious safety event - always plan routes and obtain clearances',
  ],
  practiceQuestions: [
    'al-008',
    'al-009',
  ],
};
