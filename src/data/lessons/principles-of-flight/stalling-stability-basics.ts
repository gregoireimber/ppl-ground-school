import { Lesson } from '@/types';

export const stallingStabilityBasics: Lesson = {
  id: 'stalling-stability-basics',
  topicId: 'stalling-stability',
  title: 'Stalling & Stability',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Stalling and Stability',
    },
    {
      type: 'paragraph',
      text: 'The stall is one of the most important aerodynamic phenomena a pilot must understand. Loss of control following a stall remains a leading cause of fatal accidents in general aviation. This lesson covers what causes a stall, the factors that change the stall speed, how to recognise and recover from a stall, and the fundamentals of aircraft stability that keep you safe in normal flight.',
    },
    {
      type: 'paragraph',
      text: 'A stall is an aerodynamic event, not an engine failure. It can occur at any speed, any attitude, and any power setting if the critical angle of attack is exceeded.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'A wing always stalls at the same critical angle of attack (approximately 16 degrees for a typical training aircraft aerofoil). However, the speed at which this angle is reached varies with weight, load factor, configuration, and other factors.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'What Happens at the Stall',
    },
    {
      type: 'paragraph',
      text: 'As the angle of attack increases beyond the critical angle, the smooth airflow over the upper surface of the wing can no longer follow the surface contour. The boundary layer separates from the wing, starting near the trailing edge and progressing forward. This separation destroys the low-pressure region on the upper surface, causing a sudden and significant loss of lift.',
    },
    {
      type: 'paragraph',
      text: 'At the same time, drag increases sharply. The aircraft will pitch nose-down (in a properly designed aircraft) and one wing may drop if the stall is not symmetrical.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Stall Warning Indicators',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Stall warning horn or light - Activated by a sensor on the wing leading edge, typically triggers 5-10 knots above the stall speed',
        'Aerodynamic buffet - Turbulent air from the separated flow hits the tailplane, causing airframe vibration the pilot can feel',
        'Reducing control effectiveness - As the stall is approached, controls become sluggish and less responsive',
        'High nose attitude at low airspeed (in level flight or climbing) - though remember, stalls can occur in any attitude',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Factors Affecting Stall Speed',
    },
    {
      type: 'paragraph',
      text: 'While the critical angle of attack is constant, the speed at which it is reached depends on several factors:',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Weight',
    },
    {
      type: 'paragraph',
      text: 'A heavier aircraft must produce more lift to maintain flight. At any given angle of attack, a higher speed is needed to produce more lift. Therefore, stall speed increases with weight.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Load Factor and Bank Angle',
    },
    {
      type: 'paragraph',
      text: 'In a turn, the wing must produce more lift than in straight and level flight to support the horizontal turning component as well as the weight. The load factor (n) is the ratio of lift to weight. In a banked turn, n = 1 divided by the cosine of the bank angle.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '30 degrees bank: load factor 1.15g, stall speed increases by approximately 7%',
        '45 degrees bank: load factor 1.41g, stall speed increases by approximately 19%',
        '60 degrees bank: load factor 2.0g, stall speed increases by approximately 41%',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Stall speed in a turn: Vs(turn) = Vs(level) multiplied by the square root of the load factor. At 60 degrees bank, load factor is 2g, so stall speed increases by a factor of 1.41 (the square root of 2). This means a 50-knot stall speed becomes about 71 knots.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'CG Position',
    },
    {
      type: 'paragraph',
      text: 'A forward centre of gravity increases the stall speed. This is because the tailplane must produce a greater downward force to balance the forward CG, which means the wing must produce more lift (to support both the aircraft weight and the tail-down force). More lift at the same angle of attack requires higher speed.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Other Factors',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Flap setting - Flaps increase CL max, reducing the stall speed. Full flap gives the lowest stall speed (Vs0)',
        'Power - Applying power reduces the stall speed slightly. The propeller slipstream accelerates airflow over the wing root, providing additional lift. The vertical component of thrust also helps support the weight',
        'Icing and wing contamination - Ice, frost, rain, or insects on the wing disrupt the boundary layer, reducing CL max and increasing the stall speed. Even a thin layer of frost can increase stall speed by 10% or more',
        'Turbulence and gusts - A sudden vertical gust can momentarily increase the angle of attack beyond the critical angle, causing a stall at a higher speed than expected',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Ice contamination is insidious because it reduces CL max while increasing drag and weight simultaneously. The stall may occur with little or no warning. Never fly into known icing conditions in a light aircraft not certificated for it.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Stall Recovery',
    },
    {
      type: 'paragraph',
      text: 'The standard stall recovery procedure addresses the fundamental cause of the stall: the angle of attack is too high. Recovery must reduce the angle of attack below the critical value:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Lower the nose - Move the control column forward to reduce the angle of attack. This is the single most important action',
        'Apply full power - Simultaneously apply maximum power to minimise altitude loss and accelerate',
        'Level the wings - Use coordinated controls to bring the wings level if one has dropped',
        'Climb away - As speed builds above the stall speed, ease gently into the climb. Avoid pulling back too aggressively, which could trigger a secondary stall',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If a wing drops at the stall, do NOT use aileron to lift it. The down-going aileron on the dropped wing increases its angle of attack further, deepening the stall on that wing and potentially entering a spin. Use rudder to prevent further yaw, and reduce angle of attack first.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Spinning',
    },
    {
      type: 'paragraph',
      text: 'A spin develops when one wing is more deeply stalled than the other. The more stalled wing drops and moves rearward (auto-rotation), while the less stalled wing continues to generate some lift. The aircraft enters a steep, nose-down, rotating descent.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Spin Entry and Recognition',
    },
    {
      type: 'paragraph',
      text: 'A spin typically starts from a stall with yaw present (e.g., uncoordinated flight near the stall, or applying excessive rudder). The aircraft yaws and rolls toward the more deeply stalled wing, the nose drops well below the horizon, and the aircraft rotates. The airspeed stabilises at a relatively low value.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Spin Recovery - PARE',
    },
    {
      type: 'paragraph',
      text: 'The standard spin recovery procedure uses the PARE mnemonic:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'P - Power to idle. Reduce the throttle fully to reduce any asymmetric thrust effects and nose-up pitching tendency',
        'A - Ailerons neutral. Centralise the ailerons. Do not attempt to use ailerons to stop the rotation',
        'R - Rudder opposite. Apply full rudder in the direction opposite to the spin rotation (opposite to the direction the nose is moving around the horizon)',
        'E - Elevator forward. Move the control column positively forward to unstall the wing by reducing the angle of attack. Once the rotation stops, centralise the rudder and ease out of the resulting dive',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'PARE: Power idle, Ailerons neutral, Rudder opposite, Elevator forward. Practise saying this until it is automatic. In a real spin, there is little time for deliberation.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Aircraft Stability',
    },
    {
      type: 'paragraph',
      text: 'Stability is the tendency of an aircraft to return to its original flight condition after a disturbance. A stable aircraft is easier and safer to fly because it resists departures from the intended flight path.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Static and Dynamic Stability',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Static stability - The initial tendency after a disturbance. If the aircraft tends to return toward its original condition, it has positive static stability. If it tends to diverge further, it has negative static stability. If it remains in the new position, it is neutrally stable',
        'Dynamic stability - The long-term behaviour following the initial response. A statically stable aircraft may oscillate as it returns to equilibrium. If the oscillations diminish over time, it is dynamically stable. If the oscillations grow, it is dynamically unstable',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'An aircraft must be statically stable to be dynamically stable. However, an aircraft can be statically stable but dynamically unstable (oscillations that grow over time). For certification, training aircraft must be both statically and dynamically stable.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Three Types of Stability',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Longitudinal stability (pitch) - The most important type. Provided primarily by the tailplane. A disturbance in pitch produces a restoring moment from the tail. Forward CG enhances longitudinal stability',
        'Lateral stability (roll) - The tendency to return to wings-level after a roll disturbance. Provided by wing dihedral, sweepback, and high wing position',
        'Directional stability (yaw) - The tendency to weathercock into the relative airflow after a yaw disturbance. Provided by the fin (vertical stabiliser). A larger fin area gives more directional stability',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Effect of CG Position on Stability',
    },
    {
      type: 'paragraph',
      text: 'The position of the centre of gravity has a critical effect on longitudinal stability and handling:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Forward CG - More longitudinally stable, but requires more elevator force to flare on landing. Higher stall speed due to tail-down force. Reduced elevator authority at low speed',
        'Aft CG - Less longitudinally stable, potentially dangerously so if CG is behind the aft limit. The aircraft becomes very sensitive in pitch and may be unrecoverable from a stall or spin. Less elevator force needed, but poor stability',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Loading the aircraft with the CG behind the aft limit is extremely dangerous. The aircraft may become uncontrollable in pitch, and spin recovery may be impossible. Always check the weight and balance calculation before flight.',
    },
    {
      type: 'paragraph',
      text: 'There is also a forward CG limit. Beyond this, the tail may not have sufficient authority to raise the nose for landing, and the stall speed increases unacceptably. The CG must always be within the forward and aft limits specified in the POH.',
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
        'A stall occurs at the critical angle of attack (~16 degrees) regardless of speed, attitude, or power setting',
        'Stall speed increases with weight, load factor (bank angle), forward CG, and wing contamination',
        'Stall speed in a turn: Vs(level) multiplied by the square root of the load factor',
        'Stall recovery: lower the nose (reduce AoA), full power, level wings, climb away',
        'Spin recovery: PARE - Power idle, Ailerons neutral, Rudder opposite, Elevator forward',
        'Forward CG is more stable but increases stall speed; aft CG is less stable and potentially dangerous',
      ],
    },
  ],
  keyPoints: [
    'A wing always stalls at the same critical angle of attack (~16 degrees), regardless of speed or attitude',
    'Stall speed in a turn = Vs x square root of load factor; at 60 degrees bank stall speed increases by 41%',
    'Stall recovery: reduce angle of attack (lower the nose), apply full power, level wings, climb away',
    'PARE spin recovery: Power idle, Ailerons neutral, Rudder opposite, Elevator forward',
    'Forward CG = more stable, higher stall speed; Aft CG = less stable, potentially unrecoverable stall/spin',
    'Positive static AND dynamic stability are required for safe flight',
  ],
  practiceQuestions: [
    'pof-010',
    'pof-011',
    'pof-012',
  ],
};
