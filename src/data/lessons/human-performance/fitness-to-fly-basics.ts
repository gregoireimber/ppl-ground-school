import { Lesson } from '@/types';

export const fitnessToFlyBasics: Lesson = {
  id: 'fitness-to-fly-basics',
  topicId: 'fitness-to-fly',
  title: 'Fitness to Fly',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Fitness to Fly',
    },
    {
      type: 'paragraph',
      text: 'A pilot may hold a valid licence and medical certificate yet still be unfit to fly on a given day. Temporary conditions such as illness, medication, fatigue, alcohol, and stress can severely impair your ability to operate an aircraft safely. The responsibility for assessing your fitness before every flight rests entirely with you as pilot in command.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Under the Air Navigation Order, it is an offence to act as a crew member while unfit to do so, whether through drink, drugs, or any other cause. A valid medical certificate does not relieve you of the duty to self-assess before every flight.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The IMSAFE Checklist',
    },
    {
      type: 'paragraph',
      text: 'The IMSAFE checklist is a structured self-assessment tool that every pilot should use before flying. Each letter represents a potential area of impairment. If the answer to any item is unsatisfactory, you should not fly.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'I - Illness',
    },
    {
      type: 'paragraph',
      text: 'Am I suffering from any illness or symptom of illness? Even a common cold can be dangerous in the cockpit. Upper respiratory infections cause congestion that can prevent equalisation of pressure in the sinuses and middle ear during climb and descent, leading to severe pain or even a ruptured eardrum.',
    },
    {
      type: 'paragraph',
      text: 'Gastrointestinal illness can cause distraction and incapacitation. Any condition that causes pain, discomfort, or distraction should ground you until fully recovered.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never fly with a blocked nose or ear infection. During descent, the pressure differential can cause extreme ear or sinus pain (barotrauma), and in severe cases, a ruptured tympanic membrane. If you cannot clear your ears on the ground, do not fly.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'M - Medication',
    },
    {
      type: 'paragraph',
      text: 'Am I taking any medication that might affect my ability to fly? Many common medications have side effects that are incompatible with safe flight, including drowsiness, impaired coordination, blurred vision, and altered reaction times.',
    },
    {
      type: 'paragraph',
      text: 'This includes over-the-counter remedies. Antihistamines, cold and flu medications, painkillers containing codeine, and sleep aids are all examples of readily available drugs that can impair flying ability. Some herbal remedies and supplements may also cause adverse effects.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The CAA publishes guidance on medications acceptable for pilots. If in doubt, consult your Aeromedical Examiner (AME) before flying while taking any medication. The general rule is: if you need the medication, the underlying condition may itself make you unfit to fly.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'S - Stress',
    },
    {
      type: 'paragraph',
      text: 'Am I under excessive psychological stress? Stress narrows attention, impairs decision-making, and reduces the capacity to cope with unexpected events. Both acute stress (a recent argument, financial worry) and chronic stress (ongoing personal or work problems) can significantly degrade performance.',
    },
    {
      type: 'paragraph',
      text: 'A pilot under significant stress is more likely to make errors, miss radio calls, and lose situational awareness. If you are preoccupied with problems on the ground, your mind is not fully in the cockpit.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'A - Alcohol',
    },
    {
      type: 'paragraph',
      text: 'Have I consumed alcohol recently? Alcohol impairs virtually every cognitive and motor function required for safe flight: judgment, reaction time, coordination, vision, and information processing. Its effects are amplified at altitude due to reduced oxygen availability.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The UK legal blood alcohol limit for pilots is 20 mg per 100 ml of blood - this is one quarter of the UK drink-drive limit and is effectively zero tolerance. Even small amounts of alcohol can put you over this limit. The minimum "bottle-to-throttle" period is 8 hours, but this alone may not be sufficient after heavy consumption.',
    },
    {
      type: 'paragraph',
      text: 'Alcohol is metabolised at approximately one unit per hour. After a heavy evening of drinking, you may still be above the legal limit the following morning, well beyond the 8-hour minimum. A hangover also impairs performance, regardless of whether your blood alcohol level has returned to zero.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'F - Fatigue',
    },
    {
      type: 'paragraph',
      text: 'Am I adequately rested? Fatigue is one of the most insidious threats to pilot performance. It degrades attention, reaction time, decision-making, and mood. Fatigued pilots are more likely to take risks and less likely to notice errors.',
    },
    {
      type: 'paragraph',
      text: 'Acute fatigue results from recent physical or mental exertion or lack of sleep. Chronic fatigue builds up over time from consistently inadequate rest. Both are dangerous. A minimum of 7-8 hours of quality sleep in the preceding 24 hours is recommended before flying.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Fatigue impairs performance to a similar degree as alcohol. Studies show that 17 hours without sleep produces impairment equivalent to a blood alcohol concentration of 0.05%. After 24 hours, this rises to the equivalent of 0.10%.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'E - Eating and Emotion',
    },
    {
      type: 'paragraph',
      text: 'Am I properly nourished and hydrated? Am I in a stable emotional state? Low blood sugar causes irritability, poor concentration, and impaired judgment. Dehydration, particularly at altitude where cabin air is dry, worsens fatigue and reduces cognitive performance.',
    },
    {
      type: 'paragraph',
      text: 'Strong emotions - anger, grief, anxiety, excitement - can be just as distracting as physical illness. If a significant emotional event has occurred, consider whether you are truly able to concentrate fully on flying.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Specific Fitness Considerations',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Scuba Diving Before Flying',
    },
    {
      type: 'paragraph',
      text: 'After scuba diving, dissolved nitrogen remains in body tissues. If you ascend to altitude too soon, this nitrogen can form bubbles (decompression sickness). The recommended minimum intervals before flying are:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'After dives not requiring decompression stops: Wait at least 12 hours before flying',
        'After dives requiring decompression stops: Wait at least 24 hours before flying',
        'After a series of dives over multiple days or any dive requiring decompression stops: Wait at least 24 hours',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The Diving Medical Advisory Committee (DMAC) and CAA recommend a minimum of 24 hours after any diving before flying above 2000 ft cabin altitude. When in doubt, wait the full 24 hours regardless of the type of dive.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Blood Donation',
    },
    {
      type: 'paragraph',
      text: 'After donating blood, your oxygen-carrying capacity is temporarily reduced. The CAA recommends not flying for at least 24 hours after giving blood. This allows your body to begin restoring the lost blood volume and red blood cells.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Illnesses and Pressure Changes',
    },
    {
      type: 'paragraph',
      text: 'The atmospheric pressure in an unpressurised aircraft cabin decreases with altitude. Trapped gas in body cavities expands according to Boyle\'s Law. This affects the sinuses, middle ear, teeth (if there are cavities or recent dental work), and gastrointestinal tract.',
    },
    {
      type: 'paragraph',
      text: 'During descent, the middle ear must equalise pressure through the Eustachian tube. If this tube is blocked due to a cold, hay fever, or sinus infection, equalisation fails and barotrauma can result. The Valsalva manoeuvre (pinching the nose and gently blowing) can assist, but should not be forced if congested.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Class 2 Medical Certificate',
    },
    {
      type: 'paragraph',
      text: 'The Class 2 medical certificate is the standard medical for PPL holders. It is issued following an examination by a CAA-approved Aeromedical Examiner (AME). The examination covers cardiovascular health, vision, hearing, mental health, neurological function, and general fitness.',
    },
    {
      type: 'paragraph',
      text: 'The validity period depends on your age: 60 months if issued before age 40, and 24 months if issued at or after age 40. You must not fly once your medical has expired, even if you feel fit. Any significant change in your health between examinations must be reported to the CAA.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'You must inform the CAA if you are admitted to hospital for more than 12 hours, or if you suffer any injury or illness that keeps you unfit to fly for more than 20 days. Operating while aware of a reportable medical condition is an offence.',
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
        'Use the IMSAFE checklist (Illness, Medication, Stress, Alcohol, Fatigue, Eating/Emotion) before every flight',
        'UK pilot alcohol limit is 20 mg/100 ml blood (effectively zero); minimum 8-hour bottle-to-throttle rule',
        'Never fly with a cold, blocked sinuses, or ear infection due to the risk of barotrauma',
        'Wait at least 12-24 hours after scuba diving and 24 hours after blood donation before flying',
        'Fatigue impairs performance similarly to alcohol; ensure adequate rest before flight',
        'The Class 2 medical certificate must remain valid and any significant health changes must be reported to the CAA',
      ],
    },
  ],
  keyPoints: [
    'IMSAFE checklist: Illness, Medication, Stress, Alcohol, Fatigue, Eating/Emotion - use before every flight',
    'UK pilot blood alcohol limit is 20 mg/100 ml (effectively zero); 8-hour bottle-to-throttle minimum',
    'Never fly with upper respiratory infections - risk of ear/sinus barotrauma during pressure changes',
    'Wait 12-24 hours after scuba diving and 24 hours after blood donation before flying',
    'Fatigue after 17 hours awake impairs performance equivalent to 0.05% blood alcohol',
    'Class 2 medical valid 60 months (under 40) or 24 months (40+); report significant health changes to CAA',
  ],
  practiceQuestions: [],
};
