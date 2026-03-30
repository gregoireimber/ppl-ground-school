import { Lesson } from '@/types';

export const takeoffLandingPerformanceBasics: Lesson = {
  id: 'takeoff-landing-performance-basics',
  topicId: 'takeoff-landing-performance',
  title: 'Takeoff & Landing Performance',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Takeoff & Landing Performance',
    },
    {
      type: 'paragraph',
      text: 'Understanding takeoff and landing performance is one of the most safety-critical aspects of flight planning. Getting the calculations wrong can mean running off the end of the runway on takeoff, or overshooting on landing. Every flight requires a performance assessment that accounts for the actual conditions.',
    },
    {
      type: 'paragraph',
      text: 'Performance data comes from the aircraft\'s Pilot Operating Handbook (POH). However, the POH figures assume a test-pilot standard of flying, a brand-new aircraft, and specific conditions. Real-world performance will usually be worse, which is why safety factors are applied.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The UK CAA requires a safety factor of 1.33 (multiply by 1.33) to be applied to takeoff and landing distances taken from the POH for public transport and recommended for private flights. This is your primary margin of safety.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Density Altitude',
    },
    {
      type: 'paragraph',
      text: 'Density altitude is the altitude in the International Standard Atmosphere (ISA) that corresponds to the actual air density at your location. It is the single most important concept for understanding performance. Higher density altitude means reduced performance.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The ISA Standard Atmosphere',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Mean sea level: 15 degrees C, 1013.25 hPa',
        'Temperature lapse rate: approximately 2 degrees C per 1,000 ft (1.98 degrees C precisely)',
        'At 5,000 ft ISA: temperature is 5 degrees C',
        'At 10,000 ft ISA: temperature is minus 5 degrees C',
      ],
    },
    {
      type: 'paragraph',
      text: 'Density altitude is pressure altitude corrected for non-standard temperature. Pressure altitude is what the altimeter reads with 1013.25 hPa set on the subscale. If the temperature is higher than ISA for that pressure altitude, density altitude is higher than pressure altitude, and performance is worse.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Hot, high, and humid conditions all increase density altitude. A high airfield on a hot summer day represents the worst case for performance. Remember: the engine produces less power and the wings produce less lift in thin air.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Factors Affecting Takeoff Distance',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Weight',
    },
    {
      type: 'paragraph',
      text: 'Heavier aircraft require a higher speed to generate sufficient lift for takeoff. This means a longer ground roll to achieve that speed and a reduced rate of climb after liftoff. Always check that your actual takeoff weight is within limits and that the runway is adequate.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Wind Component',
    },
    {
      type: 'paragraph',
      text: 'A headwind component reduces the ground speed needed to achieve flying speed, shortening the ground roll. A tailwind component does the opposite and increases the ground roll significantly.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The effect of wind is asymmetric. A tailwind increases takeoff distance by a much greater proportion than the same headwind reduces it. The UK CAA recommends applying only 50% of a reported headwind benefit but 150% of any tailwind penalty in performance calculations.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Runway Slope',
    },
    {
      type: 'paragraph',
      text: 'An uphill slope increases the takeoff distance because a component of gravity acts against the aircraft\'s acceleration. A downhill slope reduces it. Where possible, takeoff downhill into wind, but the headwind component usually has a greater effect than slope.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Runway Surface and Condition',
    },
    {
      type: 'paragraph',
      text: 'POH figures are normally quoted for a hard, dry runway. If operating from grass, the additional rolling resistance increases the ground roll:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Dry, short grass - Factor of approximately 1.2 (20% increase)',
        'Wet grass or longer grass - Factor of approximately 1.3 (30% increase)',
        'Very long, wet, or soft grass - Factor can exceed 1.33 and may make the takeoff inadvisable',
        'Standing water, slush, or snow on the runway significantly increases ground roll and reduces braking effectiveness on landing',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Density Altitude Effects',
    },
    {
      type: 'paragraph',
      text: 'High density altitude degrades performance in three ways simultaneously: the engine produces less power (less oxygen for combustion), the propeller is less efficient (thinner air), and the wings need a higher true airspeed to generate the same lift. All three combine to increase the takeoff distance.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Takeoff Distance Definitions',
    },
    {
      type: 'paragraph',
      text: 'The POH may provide two figures for takeoff:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Takeoff ground roll - The distance from brake release to the point where the wheels leave the ground',
        'Takeoff distance to 50 ft (screen height) - The total distance from brake release to the point where the aircraft reaches 50 ft above the runway surface. This is the figure used for planning to clear obstacles',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The screen height for takeoff and landing in the UK is 50 ft. This is the reference height used when calculating performance distances.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Factors Affecting Landing Distance',
    },
    {
      type: 'paragraph',
      text: 'Many of the same factors that affect takeoff distance also affect landing distance, but some work differently:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Weight - Heavier aircraft have a higher approach speed and more kinetic energy to dissipate, increasing landing distance',
        'Headwind - Reduces ground speed on approach, shortening the landing distance. Apply only 50% of headwind benefit',
        'Tailwind - Increases ground speed, significantly increasing landing distance. Apply 150% of tailwind penalty',
        'Runway slope - An uphill slope shortens the landing roll; downhill increases it',
        'Grass or wet surface - Reduces braking effectiveness, increasing the stopping distance',
        'High elevation and high temperature - Higher true airspeed for the same indicated airspeed, increasing ground speed and landing distance',
        'Flap setting - Full flap allows a steeper approach and lower approach speed, reducing landing distance',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'A wet runway can increase the landing distance by 15% or more on a hard surface, and much more on grass. Standing water introduces the risk of aquaplaning, where the tyres ride on a film of water and braking is virtually eliminated.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Using the POH Performance Charts',
    },
    {
      type: 'paragraph',
      text: 'Performance charts in the POH present takeoff and landing data as either tables or graphs. To use them correctly:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Determine pressure altitude and outside air temperature',
        'Calculate the density altitude or enter the chart with pressure altitude and temperature',
        'Read off the ground roll and distance to clear 50 ft for the appropriate weight',
        'Adjust for wind component (headwind or tailwind)',
        'Apply surface correction if operating from grass',
        'Apply the 1.33 safety factor',
        'Compare the result with the available runway length',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Always work through the performance calculation in a consistent order. A good practice is to write it down on your flight planning form: base distance, then each correction factor, then the safety factor, then compare to available runway.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Practical Considerations',
    },
    {
      type: 'paragraph',
      text: 'Performance planning is not just about numbers. Consider these practical points:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'If the calculated takeoff distance uses more than about 75% of the available runway, consider whether there is adequate margin',
        'On short runways, consider delaying departure until temperature drops (early morning or evening)',
        'Soft or contaminated surfaces can make published factors unreliable - use conservative judgement',
        'If in doubt, reduce weight by carrying less fuel (refuel en route) or fewer passengers',
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
        'Density altitude is the key performance driver: hot, high, and humid conditions increase takeoff and landing distances',
        'UK CAA safety factor: multiply POH distances by 1.33',
        'Apply only 50% headwind benefit and 150% tailwind penalty',
        'Grass surface factor: approximately 1.2 for dry short grass, up to 1.33 for longer or wet grass',
        'Screen height is 50 ft for both takeoff and landing distance calculations',
        'Always check performance for actual conditions before every flight - never assume the runway is long enough',
      ],
    },
  ],
  keyPoints: [
    'Density altitude = pressure altitude corrected for temperature; higher density altitude = worse performance',
    'ISA standard: 15 degrees C at MSL, lapse rate approximately 2 degrees C per 1,000 ft',
    'UK CAA safety factor: 1.33 applied to POH takeoff and landing distances',
    'Wind: use only 50% of headwind benefit, 150% of tailwind penalty',
    'Grass surface adds approximately 20-33% to the ground roll',
    'Screen height is 50 ft for both takeoff and landing calculations',
  ],
  practiceQuestions: [
    'fp-005',
    'fp-006',
    'fp-007',
    'fp-008',
    'fp-009',
  ],
};
