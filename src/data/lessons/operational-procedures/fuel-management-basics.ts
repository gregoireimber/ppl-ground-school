import { Lesson } from '@/types';

export const fuelManagementBasics: Lesson = {
  id: 'fuel-management-basics',
  topicId: 'fuel-management',
  title: 'Fuel Management',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Fuel Management',
    },
    {
      type: 'paragraph',
      text: 'Fuel exhaustion and fuel starvation remain significant causes of general aviation accidents, and virtually all of them are preventable. Sound fuel management begins on the ground with proper planning and continues in the air with disciplined monitoring and tank selection.',
    },
    {
      type: 'paragraph',
      text: 'This lesson covers fuel types, the fuel system in a typical training aircraft, fuel planning calculations, contamination checks, and in-flight fuel management procedures.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Aviation Fuel Types',
    },
    {
      type: 'paragraph',
      text: 'Piston-engine training aircraft use Aviation Gasoline (AVGAS). The standard grade in use across the UK and internationally is:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'AVGAS 100LL (Low Lead) - Dyed blue. This is the most commonly available grade for piston-engine aircraft. The "100" refers to its octane rating and "LL" indicates it has a lower lead content than the older 100/130 grade.',
        'AVGAS UL91 - An unleaded alternative with a lower octane rating, suitable for certain engine types approved for it. Dyed clear/straw.',
        'MOGAS (motor gasoline) - Some aircraft are approved via a Supplemental Type Certificate (STC) to use unleaded motor gasoline. Check the POH and STC before using MOGAS.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never use Jet A-1 (turbine fuel, dyed straw/clear) in a piston engine. It will cause engine failure. Jet A-1 nozzles are a different size to AVGAS nozzles to prevent misfuelling, but always verify the fuel type visually before accepting fuel.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The Fuel System',
    },
    {
      type: 'paragraph',
      text: 'A typical single-engine training aircraft (e.g., Cessna 152/172, Piper PA-28) has a relatively simple fuel system. Understanding each component is essential for proper management:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Fuel tanks - Usually one in each wing. Capacity is stated in the POH as total capacity and usable capacity (the difference is unusable fuel that cannot reach the engine).',
        'Fuel selector valve - Allows the pilot to select Left, Right, Both, or Off. Not all aircraft have a "Both" position. The POH specifies the correct positions for each phase of flight.',
        'Fuel strainer (gascolator) - A low point in the fuel system where water and sediment collect. It has a drain valve for pre-flight sampling.',
        'Fuel pump - Low-wing aircraft have an engine-driven mechanical pump and usually an electric auxiliary (boost) pump. High-wing aircraft may rely on gravity feed and only have a primer.',
        'Carburettor or fuel injection system - Delivers fuel to the engine. Carburettor-equipped engines are susceptible to carburettor icing; fuel-injected engines are not, but may suffer from vapour lock in hot conditions.',
        'Fuel quantity gauges - Electrically operated gauges on the instrument panel. Required only to read accurately at zero (empty). Never rely on them as the primary quantity reference.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The fuel selector position matters. In aircraft without a "Both" setting, alternate between tanks at regular intervals (typically every 30 minutes) to keep wing loading balanced. Always switch to the fullest tank before entering the circuit.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel Planning',
    },
    {
      type: 'paragraph',
      text: 'Proper fuel planning ensures you have enough fuel for the flight with legally required reserves. The total fuel required is the sum of several components:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Taxi fuel - Fuel for engine start, taxi, run-up, and taxi at the destination. Typically 1-2 litres or as per the POH.',
        'Trip fuel - The fuel required to fly from departure to destination, based on route distance, planned altitude, forecast winds, and the POH performance data.',
        'Contingency fuel - Additional fuel to cover unforeseen deviations such as weather diversions or ATC routing. Typically 5-10% of the trip fuel.',
        'Alternate fuel - If you plan an alternate aerodrome, include the fuel to fly from the destination to the alternate.',
        'Final reserve fuel - The minimum fuel remaining on landing. For VFR day flights this is 45 minutes at normal cruise consumption. This is a regulatory minimum and must not be planned to be used.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Total fuel required = Taxi fuel + Trip fuel + Contingency fuel + Alternate fuel + Final reserve fuel. The fuel on board at departure must equal or exceed this total.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The 45-minute final reserve for VFR day flights is a regulatory minimum under SERA and UK CAA rules. This reserve must remain unused at landing. If at any point you expect to land with less than final reserve fuel, you must declare a fuel emergency.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel Consumption Calculations',
    },
    {
      type: 'paragraph',
      text: 'Fuel consumption is stated in the POH and varies with power setting, altitude, and mixture leaning. Typical training aircraft burn approximately:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Cessna 152 - Approximately 23 litres per hour (6 US gallons per hour) at 75% power.',
        'Cessna 172 - Approximately 34 litres per hour (9 US gallons per hour) at 75% power.',
        'Piper PA-28 Warrior - Approximately 36 litres per hour (9.5 US gallons per hour) at 75% power.',
      ],
    },
    {
      type: 'paragraph',
      text: 'When calculating, be careful with units. AVGAS is dispensed in litres in the UK, but many POHs quote consumption in US gallons. Key conversions:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '1 US gallon = 3.785 litres',
        '1 Imperial gallon = 4.546 litres',
        '1 US gallon of AVGAS 100LL weighs approximately 6 lb (2.72 kg)',
        '1 litre of AVGAS 100LL weighs approximately 0.72 kg',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: Be very careful with US gallons vs Imperial gallons. Most aircraft POHs use US gallons. 1 Imperial gallon = 1.2 US gallons. A common exam trap is mixing up the two units.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel Quantity Checks',
    },
    {
      type: 'paragraph',
      text: 'Before flight, always verify the fuel quantity physically. Methods include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Dipstick - A calibrated rod inserted into the fuel tank filler. The fuel level is read against markings on the stick. This is the most common and reliable method for light aircraft.',
        'Sight gauges - Some aircraft have transparent tubes or windows on the fuel tank showing the fuel level directly.',
        'Visual inspection - With filler caps removed, you can see the fuel level in the tank. Estimate carefully against known references.',
        'Fuel totaliser - An electronic device that calculates remaining fuel based on fuel flow and initial quantity entered by the pilot. Useful in flight but only as accurate as the initial input.',
        'Panel gauges - The cockpit fuel quantity gauges. As noted, these are unreliable except at the empty reading. Use them as a secondary reference only.',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Contamination Checks',
    },
    {
      type: 'paragraph',
      text: 'Fuel contamination is a leading cause of engine failure in piston aircraft. During the pre-flight inspection, drain fuel from all drain points into a clear container and inspect for:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Water - Appears as clear bubbles or droplets sitting at the bottom of the sample (water is denser than AVGAS). Water can enter tanks through condensation or rain ingress.',
        'Sediment and debris - Particles, rust, or fibres visible in the sample indicate contamination of the fuel system.',
        'Correct colour - AVGAS 100LL should be blue. A straw or clear colour could indicate Jet A-1 contamination, which is extremely dangerous. Any unexpected colour should ground the aircraft.',
        'Correct smell - AVGAS has a distinctive sharp smell. Jet A-1 smells more like paraffin or diesel.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If you find water or any contamination, continue draining until the sample is clean. If contamination persists, do not fly the aircraft - report it to the aircraft operator or maintenance organisation.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'In-Flight Fuel Management',
    },
    {
      type: 'paragraph',
      text: 'Fuel management does not stop once airborne. Active monitoring throughout the flight is essential:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Tank selection - Switch tanks at regular intervals as specified in the POH. In aircraft without a "Both" position, this prevents uneven fuel loading and ensures both tanks are used.',
        'Fuel log - Record fuel state at waypoints and compare against your plan. If actual consumption exceeds planned consumption, reassess whether you have sufficient fuel to reach the destination with reserves.',
        'Mixture management - Lean the mixture at cruise altitude above 3,000 feet (as per POH) to reduce fuel consumption and prevent spark plug fouling. Enrichen the mixture before descent.',
        'Monitor gauges and time - Cross-reference gauge readings with elapsed time and known burn rate. If gauges disagree with your calculations, assume the worst case.',
        'Decision making - If fuel becomes a concern, divert early. Landing with insufficient reserves is never acceptable.',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Fuel Emergency Procedures',
    },
    {
      type: 'paragraph',
      text: 'If you expect to land with less than the required final reserve fuel (45 minutes for VFR day), you must take action:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Declare a PAN PAN (urgency) to ATC, stating your fuel state in minutes of flying time remaining.',
        'If the situation worsens and you may not be able to reach any aerodrome, upgrade to a MAYDAY (distress).',
        'Request priority handling and the most direct routing to the nearest suitable aerodrome.',
        'Lean the mixture for best economy to maximise endurance.',
        'Reduce speed to best endurance speed (as per POH) to maximise time in the air.',
        'Switch to the tank with the most fuel and consider switching off non-essential electrical equipment to reduce alternator load.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The terms "MINIMUM FUEL" and "MAYDAY FUEL" have specific meanings in ATC communications. "MINIMUM FUEL" advises ATC that any delay may result in landing below final reserve. "MAYDAY FUEL" means you will land with less than final reserve and constitutes a distress declaration.',
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
        'AVGAS 100LL is dyed blue - always verify fuel type visually before accepting fuel and never use Jet A-1 in a piston engine.',
        'Fuel planning must include taxi, trip, contingency, alternate, and final reserve (45 minutes VFR day).',
        'Physically check fuel quantity with a dipstick - do not rely solely on cockpit gauges.',
        'Drain and inspect fuel samples for water, sediment, and correct colour before every flight.',
        'Manage fuel actively in flight: switch tanks, log fuel state, and lean the mixture at cruise.',
        'If fuel becomes a concern, declare a PAN PAN early and divert to the nearest suitable aerodrome.',
      ],
    },
  ],
  keyPoints: [
    'AVGAS 100LL is dyed blue; never misfuel with Jet A-1 (straw/clear) which will cause engine failure',
    'Total fuel = taxi + trip + contingency + alternate + final reserve (45 min VFR day)',
    'Always physically verify fuel quantity with a dipstick - gauges are only required to be accurate at empty',
    'Drain fuel samples before flight and check for water, sediment, correct blue colour, and correct smell',
    'Switch tanks at regular intervals, log fuel state at waypoints, lean mixture at cruise',
    'Declare PAN PAN if you expect to land below final reserve; MAYDAY FUEL if landing below reserve is certain',
  ],
  practiceQuestions: [
    'op-013',
  ],
};
