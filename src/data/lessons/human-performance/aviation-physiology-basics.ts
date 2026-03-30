import { Lesson } from '@/types';

export const aviationPhysiologyBasics: Lesson = {
  id: 'aviation-physiology-basics',
  topicId: 'aviation-physiology',
  title: 'Aviation Physiology - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Aviation Physiology',
    },
    {
      type: 'paragraph',
      text: 'Aviation physiology studies how the human body responds to the flight environment. Understanding these physiological effects is essential for safe flight operations, as they can significantly impair pilot performance and decision-making.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Many physiological issues develop gradually and can be subtle. Self-awareness and the IMSAFE checklist are your primary defenses.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The IMSAFE Checklist',
    },
    {
      type: 'paragraph',
      text: 'Before every flight, pilots should assess their fitness using the IMSAFE checklist:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'I - Illness: Am I suffering from any illness or symptom of illness?',
        'M - Medication: Am I taking any medication that might affect my performance?',
        'S - Stress: Am I under psychological pressure or worried about something?',
        'A - Alcohol: Have I consumed alcohol in the last 8 hours (minimum)?',
        'F - Fatigue: Am I tired or not adequately rested?',
        'E - Eating: Am I properly nourished and hydrated?',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The CAA recommends a minimum of 8 hours "bottle to throttle" for alcohol, but longer periods are advisable depending on consumption.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Hypoxia - Oxygen Deficiency',
    },
    {
      type: 'paragraph',
      text: 'Hypoxia is a state of insufficient oxygen supply to body tissues. In aviation, it typically results from reduced atmospheric pressure at altitude. The effects vary by altitude:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Sea level to 10,000 ft: Minimal effects for most people',
        '10,000 to 15,000 ft: Night vision deteriorates, slight impairment',
        'Above 15,000 ft: Significant cognitive and physical impairment',
        'Above 20,000 ft: Rapid deterioration, loss of consciousness possible',
      ],
    },
    {
      type: 'paragraph',
      text: 'Symptoms of hypoxia include euphoria, impaired judgment, cyanosis (blue lips/fingernails), headache, dizziness, fatigue, and eventual unconsciousness. The insidious nature of hypoxia is that impaired judgment prevents recognition of the problem.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Time of Useful Consciousness at 25,000 ft is only 3-5 minutes. At 40,000 ft, it reduces to 15-20 seconds.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Hyperventilation',
    },
    {
      type: 'paragraph',
      text: 'Hyperventilation is abnormally rapid or deep breathing, often caused by stress or anxiety. It reduces carbon dioxide levels in the blood, causing:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Dizziness and lightheadedness',
        'Tingling in extremities',
        'Visual impairment',
        'Muscle spasms',
        'Eventual unconsciousness if uncorrected',
      ],
    },
    {
      type: 'paragraph',
      text: 'Treatment: Consciously slow breathing rate, breathe into a bag (if available), or talk aloud to regulate breathing. Symptoms of hyperventilation can mimic hypoxia, so if unsure at altitude, descend and use supplemental oxygen.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Spatial Disorientation and Illusions',
    },
    {
      type: 'paragraph',
      text: 'The vestibular system (inner ear) can be fooled in flight, leading to spatial disorientation - a false sense of attitude or motion. Common illusions include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'The Leans: False sensation of banking after prolonged turn',
        'Graveyard Spiral: Failure to detect gradual turn, feeling level while spiraling',
        'Somatogravic Illusion: Acceleration feels like pitch up, deceleration like pitch down',
        'False Horizon: Mistaking clouds, stars, or ground lights for the horizon',
        'Autokinesis: Stationary light appears to move when stared at in darkness',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'TRUST YOUR INSTRUMENTS. In IMC or at night, your sensory system will lie to you. Always believe the attitude indicator over your body.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Visual Illusions and Vision',
    },
    {
      type: 'paragraph',
      text: 'Vision is the primary sense for flight, but it has limitations and can create illusions:',
    },
    {
      type: 'paragraph',
      text: 'Runway Width Illusion: A narrower runway creates the illusion of being higher, leading to a low approach. A wider runway creates the opposite effect.',
    },
    {
      type: 'paragraph',
      text: 'Sloping Terrain: Upsloping terrain creates the illusion of being too high, downsloping terrain too low.',
    },
    {
      type: 'paragraph',
      text: 'At night, vision is significantly degraded. The central vision (fovea) loses sensitivity, requiring scanning techniques to use peripheral vision effectively. Always use "off-center viewing" to detect dim objects at night.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Carbon Monoxide Poisoning',
    },
    {
      type: 'paragraph',
      text: 'Carbon monoxide (CO) is a colorless, odorless gas produced by incomplete combustion. In aircraft with combustion heaters, exhaust leaks can introduce CO into the cabin.',
    },
    {
      type: 'paragraph',
      text: 'Symptoms are similar to hypoxia: headache, drowsiness, nausea, impaired judgment, and cherry-red skin. CO has 200 times greater affinity for hemoglobin than oxygen, making even small concentrations dangerous.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If you suspect CO poisoning: turn off cabin heat, open fresh air vents, consider descending, and land as soon as practical.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Decompression Sickness (The Bends)',
    },
    {
      type: 'paragraph',
      text: 'Decompression sickness occurs when dissolved nitrogen in body tissues forms bubbles due to rapid pressure reduction. It is rare below 18,000 feet but can occur after scuba diving.',
    },
    {
      type: 'paragraph',
      text: 'CAA regulation: Do not fly for at least 24 hours after scuba diving involving decompression stops, or 12 hours after no-decompression dives.',
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
        'Use IMSAFE checklist before every flight to assess fitness',
        'Hypoxia is insidious - symptoms include euphoria and impaired judgment',
        'Hyperventilation mimics hypoxia - slow breathing or breathe into a bag',
        'Trust instruments over bodily sensations in IMC or at night',
        'Runway width and terrain slope create visual illusions on approach',
        'No flying for 12-24 hours after scuba diving',
      ],
    },
  ],
  keyPoints: [
    'IMSAFE checklist: Illness, Medication, Stress, Alcohol, Fatigue, Eating',
    'Hypoxia is oxygen deficiency - insidious, impairs judgment, dangerous above 10,000 ft',
    'Hyperventilation causes dizziness and tingling - slow breathing to correct',
    'Spatial disorientation - TRUST YOUR INSTRUMENTS in IMC or at night',
    'Carbon monoxide is colorless/odorless - turn off heat, open vents if suspected',
  ],
  practiceQuestions: [
    'hp-001',
    'hp-002',
    'hp-003',
    'hp-004',
    'hp-005',
  ],
};
