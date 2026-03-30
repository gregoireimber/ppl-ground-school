import { Lesson } from '@/types';

export const massBalanceBasics: Lesson = {
  id: 'mass-balance-basics',
  topicId: 'mass-balance',
  title: 'Mass & Balance - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Mass & Balance',
    },
    {
      type: 'paragraph',
      text: 'Mass and balance calculations ensure the aircraft is within safe weight limits and that the centre of gravity (CG) is within approved limits. Operating outside these limits can make the aircraft uncontrollable.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'An aircraft loaded outside CG limits may be unrecoverable from a stall or spin. Mass and balance is a critical safety check.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Key Terminology',
    },
    {
      type: 'paragraph',
      text: 'Understanding these terms is essential for mass and balance calculations:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Maximum Take-Off Mass (MTOM) - The maximum weight at which the aircraft is permitted to take off',
        'Basic Empty Mass (BEM) - Weight of the aircraft with unusable fuel, oil, and standard equipment',
        'Zero Fuel Mass (ZFM) - Maximum weight of aircraft and contents, excluding usable fuel',
        'Moment - Force times distance from the datum (usually in kg·m or lb·in)',
        'Datum - Reference point from which all measurements are taken (often firewall or nose)',
        'Arm - Distance from datum to item\'s centre of gravity',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Centre of Gravity (CG)',
    },
    {
      type: 'paragraph',
      text: 'The CG is the point where the aircraft would balance if suspended. It must remain within limits defined by the aircraft manufacturer, usually expressed as a range along the longitudinal axis.',
    },
    {
      type: 'paragraph',
      text: 'Effects of CG position:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'CG too far forward - Nose-heavy, high stalling speed, difficulty flaring, may run out of elevator authority',
        'CG too far aft - Tail-heavy, unstable, reduced stall margin, difficult to recover from stall/spin',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'An aft CG gives better fuel efficiency (less tail-down force needed) but reduces stability. Always stay within limits.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Performing Mass & Balance Calculations',
    },
    {
      type: 'paragraph',
      text: 'Step-by-step process for a typical light aircraft:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Start with Basic Empty Mass and moment from aircraft weight schedule',
        'Add mass of pilot, passengers, baggage - each at their station arm',
        'Calculate moment for each item: Moment = Mass × Arm',
        'Sum all masses to get total mass - must not exceed MTOM',
        'Sum all moments to get total moment',
        'Calculate CG position: CG = Total Moment ÷ Total Mass',
        'Check CG is within forward and aft limits from the loading graph',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Most aircraft have a loading graph or table in the POH that shows acceptable CG range for different weights.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Practical Example',
    },
    {
      type: 'paragraph',
      text: 'Consider a Cessna 152 (typical values):',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'BEM: 510 kg at moment 135,000 kg·cm',
        'Front seats (2 people × 80 kg): 160 kg at arm 95 cm = 15,200 kg·cm',
        'Baggage (10 kg) at arm 150 cm = 1,500 kg·cm',
        'Fuel (80 litres × 0.72 kg/L = 58 kg) at arm 100 cm = 5,800 kg·cm',
      ],
    },
    {
      type: 'paragraph',
      text: 'Total mass = 510 + 160 + 10 + 58 = 738 kg (below MTOM of 757 kg). Total moment = 157,500 kg·cm. CG = 157,500 ÷ 738 = 213 cm from datum. Check this against the loading graph.',
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
        'Always perform mass and balance before flight',
        'CG too far forward or aft creates dangerous handling characteristics',
        'Use the loading graph in the POH to verify CG is within limits',
        'Moment = Mass × Arm from datum',
        'Total mass must not exceed MTOM',
      ],
    },
  ],
  keyPoints: [
    'CG must be within limits for safe controllability',
    'Forward CG = nose-heavy, high stall speed, reduced elevator authority',
    'Aft CG = tail-heavy, unstable, dangerous in stall/spin',
    'Moment = Mass × Arm; CG = Total Moment ÷ Total Mass',
    'Always check total mass ≤ MTOM and CG within limits',
  ],
  practiceQuestions: [
    'fp-001',
    'fp-002',
    'fp-003',
    'fp-004',
  ],
};
