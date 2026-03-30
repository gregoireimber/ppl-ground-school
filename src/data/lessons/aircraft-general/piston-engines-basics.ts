import { Lesson } from '@/types';

export const pistonEnginesBasics: Lesson = {
  id: 'piston-engines-basics',
  topicId: 'piston-engines',
  title: 'Piston Engines - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Piston Engines',
    },
    {
      type: 'paragraph',
      text: 'Most light aircraft, such as the Cessna 152 or Piper PA-28, use four-stroke piston engines. These engines convert fuel into rotational power to drive the propeller.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Understanding your engine is critical for safe operation and recognizing abnormal conditions during flight.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Four-Stroke Cycle',
    },
    {
      type: 'paragraph',
      text: 'Piston engines operate on a four-stroke cycle, where each cylinder completes four distinct phases:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Induction - Piston moves down, inlet valve opens, fuel/air mixture enters cylinder',
        'Compression - Both valves closed, piston moves up, compressing the mixture',
        'Power - Spark ignites mixture, explosion drives piston down (power stroke)',
        'Exhaust - Exhaust valve opens, piston moves up, expelling burnt gases',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid: "Suck, Squeeze, Bang, Blow" - Induction, Compression, Power, Exhaust.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Magneto Ignition System',
    },
    {
      type: 'paragraph',
      text: 'Aircraft piston engines use a dual magneto ignition system for redundancy and safety. Unlike a car, the ignition is NOT dependent on the electrical system.',
    },
    {
      type: 'paragraph',
      text: 'Each magneto is independent and fires one spark plug per cylinder. This provides two key benefits:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Safety - If one magneto fails, the engine continues running on the other',
        'Efficiency - Dual ignition provides better combustion and slightly more power',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'During pre-flight checks, you test each magneto independently. A significant RPM drop indicates a problem.',
    },
    {
      type: 'paragraph',
      text: 'The magneto switch has four positions: OFF, L (left magneto), R (right magneto), and BOTH. Normal operation is with BOTH selected.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Carburettor Icing',
    },
    {
      type: 'paragraph',
      text: 'Carburettor icing is a serious hazard that can occur even in warm weather. As fuel evaporates in the carburettor, it causes cooling. Combined with the pressure drop through the venturi, this can drop temperatures by 20-30°C.',
    },
    {
      type: 'paragraph',
      text: 'Ice can form when:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Outside air temperature is between -7°C and +25°C',
        'Relative humidity is high (above 60%)',
        'Engine is at low power settings (descent, cruise)',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Symptoms of carb ice: Rough running, gradual RPM loss (fixed-pitch prop), or manifold pressure loss (constant-speed prop).',
    },
    {
      type: 'paragraph',
      text: 'Carburettor heat applies hot air from around the exhaust manifold to the carburettor. When applied, you may see a temporary RPM drop (due to less dense air) followed by a rise as ice melts.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Engine Management',
    },
    {
      type: 'paragraph',
      text: 'Proper engine management ensures longevity and reliability:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Avoid prolonged operation at low RPM or high manifold pressure (if applicable)',
        'Monitor oil temperature and pressure - oil lubricates and cools the engine',
        'Use carburettor heat preventively in susceptible conditions',
        'Avoid rapid throttle changes when engine is cold',
        'Keep mixture lean at altitude to prevent plug fouling',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The POH (Pilot\'s Operating Handbook) contains specific power settings and limitations for your aircraft.',
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
        'Four-stroke cycle: Induction, Compression, Power, Exhaust',
        'Dual magneto system provides redundancy and better combustion',
        'Carburettor icing can occur in surprisingly warm conditions',
        'Use carb heat preventively during low power descents',
        'Monitor engine instruments and operate within POH limits',
      ],
    },
  ],
  keyPoints: [
    'Four-stroke cycle: Suck, Squeeze, Bang, Blow',
    'Dual magneto system operates independently of electrical system',
    'Carb ice can form between -7°C and +25°C with high humidity',
    'Carb heat melts ice by applying hot air from exhaust manifold',
    'Monitor oil temp, oil pressure, and RPM for engine health',
  ],
  practiceQuestions: [
    'agk-001',
    'agk-002',
    'agk-003',
    'agk-004',
  ],
};
