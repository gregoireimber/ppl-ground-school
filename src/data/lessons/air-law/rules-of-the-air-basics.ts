import { Lesson } from '@/types';

export const rulesOfTheAirBasics: Lesson = {
  id: 'rules-of-the-air-basics',
  topicId: 'rules-of-the-air',
  title: 'Rules of the Air - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Rules of the Air',
    },
    {
      type: 'paragraph',
      text: 'The Rules of the Air are a set of regulations designed to prevent collisions and ensure safe flight operations. These rules apply to all aircraft operating in UK airspace and are based on ICAO Annex 2.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The Rules of the Air are legally binding. Non-compliance can result in enforcement action by the CAA.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Right of Way Rules',
    },
    {
      type: 'paragraph',
      text: 'When two aircraft are approaching head-on or approximately so, and there is danger of collision, each shall alter its heading to the right. However, some aircraft have priority over others:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Aircraft in distress (emergency)',
        'Balloons (least maneuverable)',
        'Gliders',
        'Airships',
        'Aircraft towing objects',
        'Powered aircraft (most maneuverable)',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid: "Bad Gliders Always Take Priority" - Balloons, Gliders, Airships, Towing, Powered.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Converging Aircraft',
    },
    {
      type: 'paragraph',
      text: 'When two aircraft are converging at approximately the same altitude, the aircraft that has the other on its right shall give way. This means you must give way to traffic on your right.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Always keep a lookout! The give-way rules do NOT remove your responsibility to avoid collisions.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Overtaking',
    },
    {
      type: 'paragraph',
      text: 'An overtaking aircraft is one approaching another from behind on a line forming an angle of less than 70° with the plane of symmetry of the latter. The overtaking aircraft must keep out of the way by altering course to the right.',
    },
    {
      type: 'paragraph',
      text: 'The aircraft being overtaken has the right of way and should maintain heading and altitude.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Circuit Procedures',
    },
    {
      type: 'paragraph',
      text: 'All turns in the circuit should be made to the left unless otherwise indicated by the aerodrome. The standard circuit pattern consists of:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Upwind leg - After takeoff, climbing straight ahead',
        'Crosswind leg - 90° left turn when safe',
        'Downwind leg - Parallel to runway, opposite direction',
        'Base leg - 90° left turn perpendicular to runway',
        'Final approach - Final 90° turn, aligned with runway',
      ],
    },
    {
      type: 'paragraph',
      text: 'Aircraft at lower altitude have priority when joining or in the circuit. Landing aircraft have priority over departing aircraft.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Minimum Safe Altitudes',
    },
    {
      type: 'paragraph',
      text: 'Except when necessary for takeoff or landing, aircraft must not fly:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Over congested areas: Below 1,500 feet above the highest obstacle within 2,000 feet',
        'Elsewhere: Below 500 feet above the surface',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Low flying without reasonable excuse is an offense. Always maintain safe altitude.',
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
        'Aircraft in distress always has priority',
        'Give way to traffic on your right when converging',
        'Overtaking aircraft must alter course to the right',
        'Standard circuit is left-hand unless indicated otherwise',
        'Lower aircraft have priority in the circuit',
        'Maintain minimum safe altitudes at all times',
      ],
    },
  ],
  keyPoints: [
    'Right of way priority: Emergency > Balloons > Gliders > Airships > Towing > Powered',
    'Give way to traffic on your right when converging',
    'Overtake on the right, stay clear of the aircraft ahead',
    'Standard circuit is left-hand, lower traffic has priority',
    'Minimum 1,500ft over congested areas, 500ft elsewhere',
  ],
  practiceQuestions: [
    'al-001',
    'al-002',
    'al-003',
    'al-004',
    'al-005',
  ],
};
