import { Lesson } from '@/types';

export const airframeSystemsBasics: Lesson = {
  id: 'airframe-systems-basics',
  topicId: 'airframe-systems',
  title: 'Airframe & Control Systems',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Airframe & Control Systems',
    },
    {
      type: 'paragraph',
      text: 'To fly an aircraft safely, you need to understand how the airframe is constructed and how the flight controls work. This lesson covers the primary and secondary control surfaces, the systems that support them, and the ancillary airframe systems every PPL pilot must know.',
    },
    {
      type: 'paragraph',
      text: 'Flight controls allow the pilot to manoeuvre the aircraft around its three axes. Understanding each control surface, the axis it acts on, and any secondary effects is fundamental to safe aircraft handling.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Three Axes of Flight',
    },
    {
      type: 'paragraph',
      text: 'An aircraft moves around three axes, all passing through the centre of gravity:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Longitudinal axis (nose to tail) - Roll movement, controlled by the ailerons',
        'Lateral axis (wingtip to wingtip) - Pitch movement, controlled by the elevator',
        'Normal (vertical) axis (top to bottom) - Yaw movement, controlled by the rudder',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Primary Flight Controls',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Ailerons',
    },
    {
      type: 'paragraph',
      text: 'Ailerons are hinged surfaces on the outer trailing edge of each wing. They work in opposition: when one goes up, the other goes down. Moving the control column left raises the left aileron and lowers the right aileron, causing the aircraft to roll left.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The raised aileron reduces lift on its wing, and the lowered aileron increases lift on the other wing. Together they create the rolling moment.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Elevator',
    },
    {
      type: 'paragraph',
      text: 'The elevator is a hinged surface on the trailing edge of the tailplane (horizontal stabiliser). Pulling the control column back raises the elevator, which deflects the tail down and pitches the nose up. Pushing forward lowers the elevator, pitching the nose down.',
    },
    {
      type: 'paragraph',
      text: 'Some aircraft use a stabilator (all-moving tailplane) instead of a fixed tailplane with a hinged elevator. The function is the same, but the entire surface moves as one piece.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Rudder',
    },
    {
      type: 'paragraph',
      text: 'The rudder is a hinged surface on the trailing edge of the fin (vertical stabiliser). Pressing the left rudder pedal deflects the rudder to the left, yawing the nose to the left. The rudder is primarily used to coordinate turns and counteract adverse yaw, not to turn the aircraft.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Secondary Effects of Controls',
    },
    {
      type: 'paragraph',
      text: 'Each primary control has a secondary effect beyond its primary axis:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Ailerons produce adverse yaw - The down-going aileron creates more drag than the up-going one, causing an initial yaw toward the raised wing (opposite to the intended turn direction). Rudder is applied to counteract this',
        'Rudder produces a secondary roll - Yawing the aircraft causes the outer wing to speed up and generate more lift, creating a rolling moment toward the direction of yaw',
        'Elevator can affect yaw - Pitching up changes the angle at which the slipstream meets the fin, which can produce a yawing tendency',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Adverse yaw is why we coordinate turns with rudder. When rolling into a left turn, apply left rudder to counteract the adverse yaw from the ailerons.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Trim',
    },
    {
      type: 'paragraph',
      text: 'Trim allows the pilot to relieve sustained control forces. Without trim, you would need to hold continuous pressure on the control column to maintain a desired attitude. The most common trim system on light aircraft is the elevator trim tab.',
    },
    {
      type: 'paragraph',
      text: 'A trim tab is a small hinged surface on the trailing edge of the elevator. It moves in the opposite direction to the desired elevator deflection. For example, to trim the nose up, the trim tab deflects downward, which aerodynamically holds the elevator in a slightly raised position.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Always set trim to the takeoff position before departure, as specified in the POH. Incorrect trim on takeoff can lead to an unexpected pitch-up or pitch-down, which is particularly dangerous at low altitude.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Flaps',
    },
    {
      type: 'paragraph',
      text: 'Flaps are high-lift devices on the inboard trailing edge of the wing. They increase the wing\'s camber and, in some designs, its effective area. They allow the aircraft to fly at slower speeds for takeoff and landing.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Types of Flaps',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Plain flap - Hinges down from the trailing edge. Simplest design. Increases lift and drag',
        'Split flap - Only the lower surface deflects downward. Produces more drag than a plain flap for a given lift increase',
        'Slotted flap - A gap (slot) between the wing and flap allows high-energy air to flow over the flap surface, delaying separation. More effective at increasing lift',
        'Fowler flap - Extends rearward before deflecting downward, increasing both camber and wing area. Most effective flap type, used on more complex aircraft',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Effects of Flap Deployment',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Increased lift coefficient (CL), allowing a lower stall speed',
        'Increased drag, especially at larger flap settings',
        'Steeper approach angle possible due to increased drag',
        'Nose-down pitching moment as the centre of pressure shifts',
        'Reduced stall speed (Vs0 with full flap is lower than Vs1 clean)',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Small flap settings (e.g., 10 degrees) primarily increase lift with a modest drag increase - useful for takeoff. Larger settings (e.g., 30-40 degrees) produce a much greater drag increase - useful for steepening the approach on landing.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Other Aerodynamic Devices',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Leading edge slats - Moveable surfaces on the wing leading edge that open a slot to direct high-energy air over the upper surface, delaying the stall to a higher angle of attack',
        'Spoilers - Panels on the upper wing surface that deploy to destroy (spoil) lift and increase drag. Used for roll control on some aircraft, or as airbrakes/lift dumpers during approach and after landing',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Landing Gear',
    },
    {
      type: 'paragraph',
      text: 'Light aircraft use either fixed or retractable landing gear. Fixed gear is simpler, lighter, and requires less maintenance. Retractable gear reduces drag in cruise but adds weight, complexity, and the risk of a wheels-up landing.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Tricycle gear - Nose wheel and two main wheels. Most common on modern trainers. Good forward visibility on the ground and directional stability during ground roll',
        'Tailwheel (conventional) gear - Two main wheels and a tailwheel. The centre of gravity is behind the main wheels, which can cause ground-looping if directional control is lost',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Braking Systems',
    },
    {
      type: 'paragraph',
      text: 'Most light aircraft use hydraulic disc brakes on the main wheels, operated by toe pedals on the rudder bars. Some older aircraft use drum brakes. Differential braking (applying more brake on one side) can be used for ground steering at low speeds.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Harsh braking on landing, especially on a wet or contaminated runway, can cause the aircraft to skid. Brake smoothly and progressively after the nosewheel is on the ground.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Electrical System',
    },
    {
      type: 'paragraph',
      text: 'The aircraft electrical system powers the avionics, lighting, flaps (if electrically operated), fuel pump, and other accessories. The key components are:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Alternator (or generator) - Driven by the engine, the primary source of electrical power in flight. Produces alternating current that is rectified to direct current',
        'Battery - Provides power for engine starting and serves as a backup if the alternator fails. Typically 12V or 24V lead-acid',
        'Bus bar - A central distribution point that connects the alternator and battery to all electrical circuits',
        'Circuit breakers and fuses - Protect individual circuits from overloading. Circuit breakers can be reset; fuses must be replaced',
        'Master switch - Usually a split switch: one side for the battery, one side for the alternator',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'If the alternator fails in flight, the battery will continue to power essential services for a limited time. Shed non-essential electrical loads and plan to land as soon as practicable.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Vacuum System',
    },
    {
      type: 'paragraph',
      text: 'The vacuum system provides suction to spin the gyroscopes in the attitude indicator and heading indicator. An engine-driven vacuum pump draws air through the instrument cases, and this airflow spins the gyro rotors at high speed (typically around 15,000 RPM).',
    },
    {
      type: 'paragraph',
      text: 'A vacuum gauge in the cockpit indicates system performance, typically reading 4.5 to 5.5 inches of mercury (inHg). If the vacuum pump fails, the attitude indicator and heading indicator will gradually become unreliable as the gyros spool down.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The turn coordinator is usually electrically powered, providing backup attitude information if the vacuum system fails. Conversely, the vacuum-driven AI and DI provide backup if the electrical turn coordinator fails. This cross-system redundancy is deliberate.',
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
        'Ailerons control roll (longitudinal axis), elevator controls pitch (lateral axis), rudder controls yaw (normal axis)',
        'Ailerons produce adverse yaw, which must be counteracted with coordinated rudder input',
        'Trim relieves sustained control forces; always check trim is in the takeoff position before departure',
        'Flaps reduce stall speed and allow steeper approaches; Fowler flaps are the most effective type',
        'The electrical system uses an alternator as primary source and battery as backup',
        'Vacuum system powers the AI and DI; the turn coordinator is electrically powered for redundancy',
      ],
    },
  ],
  keyPoints: [
    'Three axes: longitudinal (roll/ailerons), lateral (pitch/elevator), normal (yaw/rudder)',
    'Adverse yaw from ailerons requires coordinated rudder input',
    'Trim tabs move opposite to the desired control surface deflection',
    'Flap types in increasing effectiveness: plain, split, slotted, Fowler',
    'Alternator is the primary electrical source; battery provides backup and starting power',
    'Vacuum system drives AI and DI; turn coordinator is electrically driven for redundancy',
  ],
  practiceQuestions: [
    'agk-011',
    'agk-012',
    'agk-013',
    'agk-014',
    'agk-015',
  ],
};
