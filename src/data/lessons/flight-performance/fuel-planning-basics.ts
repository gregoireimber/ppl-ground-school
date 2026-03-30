import { Lesson } from '@/types';

export const fuelPlanningBasics: Lesson = {
  id: 'fuel-planning-basics',
  topicId: 'fuel-planning',
  title: 'Fuel Planning & Endurance',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Fuel Planning',
    },
    {
      type: 'paragraph',
      text: 'Running out of fuel in flight is entirely preventable, yet fuel exhaustion and fuel starvation remain significant causes of general aviation accidents. Thorough fuel planning before every flight, combined with diligent fuel monitoring during the flight, is one of the most important responsibilities of the pilot in command.',
    },
    {
      type: 'paragraph',
      text: 'This lesson covers the methodology for calculating fuel requirements, converting between units, and managing fuel during a cross-country flight.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Under UK VFR rules, you must carry sufficient fuel for the planned flight plus a final reserve of at least 45 minutes at normal cruise consumption. This is a legal minimum, not a target. Good airmanship often demands a greater margin.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel Planning Methodology',
    },
    {
      type: 'paragraph',
      text: 'A complete fuel plan accounts for every phase of the flight. The total fuel required is built up as follows:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Taxi fuel - Fuel used for engine start, taxi, run-up, and holding before takeoff. Typically 1-2 litres for a light single',
        'Trip fuel - Fuel required for the flight from takeoff at departure to landing at destination, including climb, cruise, and descent',
        'Contingency fuel - An allowance for deviations from the plan, such as headwinds stronger than forecast or routing changes. Typically 5-10% of trip fuel',
        'Alternate fuel - Fuel to fly from the destination to an alternate airfield, if you cannot land at the destination (e.g., weather below minima)',
        'Final reserve - The minimum fuel that must remain on landing. For VFR flights: 45 minutes at normal cruise consumption rate',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Total fuel required = Taxi fuel + Trip fuel + Contingency fuel + Alternate fuel + Final reserve. The fuel on board at departure must be at least equal to this total.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel Consumption Rates',
    },
    {
      type: 'paragraph',
      text: 'Fuel consumption rates are found in the POH performance tables. They vary with power setting, altitude, and mixture. A typical light training aircraft (e.g., Cessna 152) consumes approximately 23 litres per hour at normal cruise power. A Cessna 172 or PA-28 might consume 30 to 38 litres per hour.',
    },
    {
      type: 'paragraph',
      text: 'Consumption is higher during climb (full power) and lower during descent (reduced power). For planning purposes, using the cruise consumption rate for the entire trip provides a conservative estimate.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Calculating Endurance',
    },
    {
      type: 'paragraph',
      text: 'Endurance is the maximum time the aircraft can remain airborne on the fuel available. The calculation is straightforward:',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Endurance (hours) = Usable fuel on board (litres) divided by fuel consumption rate (litres per hour). For example, 120 litres usable at 30 litres per hour gives 4.0 hours endurance. Remember to subtract the 45-minute final reserve to get your safe operational endurance.',
    },
    {
      type: 'paragraph',
      text: 'Be careful to use usable fuel, not total fuel. The POH specifies the unusable fuel quantity, which is fuel that cannot be reliably fed to the engine and must not be counted.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel Weight Calculations',
    },
    {
      type: 'paragraph',
      text: 'Fuel is measured by volume (litres or gallons) but affects aircraft performance by weight. Converting between the two is essential for weight and balance calculations.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'AVGAS Density',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'AVGAS 100LL density: 0.72 kg per litre',
        'AVGAS 100LL density: 6.0 lb per US gallon',
        'AVGAS 100LL density: 7.2 lb per Imperial gallon',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Unit Conversions',
    },
    {
      type: 'paragraph',
      text: 'American-manufactured aircraft (the majority of UK training fleet) typically use US gallons in the POH. You must be confident converting between units:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '1 US gallon = 3.785 litres',
        '1 Imperial gallon = 4.546 litres',
        '1 Imperial gallon = 1.2 US gallons (approximately)',
        '1 kg = 2.205 lb',
        '1 litre of AVGAS = 0.72 kg = 1.59 lb',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Confusing US gallons with Imperial gallons is a classic and dangerous error. One Imperial gallon is approximately 20% larger than one US gallon. If you calculate fuel in US gallons but the refueller uses Imperial gallons, you will have significantly less fuel than planned.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Practical Fuel Planning Example',
    },
    {
      type: 'paragraph',
      text: 'Consider a cross-country flight in a PA-28 with a fuel consumption of 34 litres per hour at cruise:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Taxi fuel: 2 litres',
        'Trip fuel: Flight time 1 hour 30 minutes at 34 L/hr = 51 litres',
        'Contingency (10% of trip fuel): 5.1 litres, round up to 6 litres',
        'Alternate fuel: 20 minutes flight to alternate at 34 L/hr = 11.3 litres, round up to 12 litres',
        'Final reserve: 45 minutes at 34 L/hr = 25.5 litres, round up to 26 litres',
        'Total fuel required: 2 + 51 + 6 + 12 + 26 = 97 litres',
      ],
    },
    {
      type: 'paragraph',
      text: 'If the aircraft has 182 litres of usable fuel capacity, the fuel on board at departure must be at least 97 litres. If filling to full tanks (182 litres), the additional 85 litres provides a generous extra margin.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Always round fuel requirements up, never down. A few extra litres costs very little in weight penalty but provides a valuable safety margin.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Monitoring Fuel in Flight',
    },
    {
      type: 'paragraph',
      text: 'A fuel plan is only as good as your monitoring of it. During the flight:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Record actual time overhead each waypoint and compare with planned times',
        'Check fuel gauges at each waypoint and compare with expected remaining fuel',
        'If fuel consumption is higher than planned (e.g., stronger headwind), recalculate endurance and decide whether to continue or divert',
        'Keep a fuel log on your plog (navigation log) showing planned and actual fuel at each point',
        'Consider fuel state when deciding whether to hold, divert, or continue to destination',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Fuel gauges in light aircraft are notoriously inaccurate, especially at intermediate fuel levels. Never rely solely on the gauges. Cross-check with your calculated fuel remaining based on time and consumption rate.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'When to Divert',
    },
    {
      type: 'paragraph',
      text: 'The decision to divert for fuel should never be left until the last moment. Consider diverting when:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Actual fuel remaining drops below your planned fuel for that point in the flight',
        'Headwinds are significantly stronger than forecast, reducing your ground speed',
        'You are required to hold or reroute, consuming fuel faster than planned',
        'You calculate that continuing will leave you with less than the 45-minute final reserve on landing',
      ],
    },
    {
      type: 'paragraph',
      text: 'A timely diversion to a closer airfield to refuel is always better than pressing on and risking fuel exhaustion. There is no embarrassment in being a cautious pilot.',
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
        'Total fuel = Taxi + Trip + Contingency (5-10%) + Alternate + Final Reserve (45 min VFR)',
        'AVGAS 100LL density: 0.72 kg/litre or 6 lb/US gallon',
        'Be careful with US vs Imperial gallons: 1 Imperial gallon = 1.2 US gallons approximately',
        'Endurance = usable fuel divided by consumption rate, minus final reserve',
        'Monitor fuel against your plan at every waypoint, using time-based calculations rather than gauges alone',
        'Divert early if fuel state drops below planned values - never wait until critical',
      ],
    },
  ],
  keyPoints: [
    'VFR final reserve: minimum 45 minutes fuel at normal cruise consumption',
    'AVGAS density: 0.72 kg/litre, 6 lb/US gallon, 7.2 lb/Imperial gallon',
    '1 Imperial gallon = 1.2 US gallons approximately - do not confuse them',
    'Total fuel = taxi + trip + contingency + alternate + final reserve',
    'Monitor fuel by time-based calculation, not just fuel gauges',
    'Divert early rather than risk fuel exhaustion',
  ],
  practiceQuestions: [
    'fp-010',
    'fp-011',
    'fp-012',
  ],
};
