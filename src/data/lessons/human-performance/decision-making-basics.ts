import { Lesson } from '@/types';

export const decisionMakingBasics: Lesson = {
  id: 'decision-making-basics',
  topicId: 'decision-making',
  title: 'Aeronautical Decision Making',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Aeronautical Decision Making',
    },
    {
      type: 'paragraph',
      text: 'Aeronautical Decision Making (ADM) is a systematic approach to the mental process used by pilots to consistently determine the best course of action in response to a given set of circumstances. Poor decision-making is a leading cause of general aviation accidents, and the majority of these accidents are attributed to human factors rather than mechanical failure.',
    },
    {
      type: 'paragraph',
      text: 'As a single-pilot operator, you are the sole decision-maker in the cockpit. There is no co-pilot to challenge your assumptions or catch your errors. Developing robust ADM skills is therefore one of the most important aspects of your pilot training.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The Five Hazardous Attitudes',
    },
    {
      type: 'paragraph',
      text: 'Research has identified five hazardous attitudes that can impair pilot judgment and lead to poor decisions. Recognising these attitudes in yourself is the first step to countering them. Each has an antidote - a deliberate mental response you should apply when you notice the hazardous thought.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Anti-authority: "The rules don\'t apply to me." Antidote: "Follow the rules - they are usually right."',
        'Impulsivity: "I must act now, there\'s no time to think." Antidote: "Not so fast - think first."',
        'Invulnerability: "It won\'t happen to me." Antidote: "It could happen to me."',
        'Macho: "I can do it, I\'ll show them." Antidote: "Taking chances is foolish."',
        'Resignation: "What\'s the point? I can\'t make a difference." Antidote: "I\'m not helpless - I can make a difference."',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for the five hazardous attitudes: "AIMM-R" - Anti-authority, Impulsivity, Macho, (i)M-vulnerability (Invulnerability), Resignation. Recognise the thought pattern, then apply the antidote.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'These attitudes are not character flaws - every pilot experiences them at times. The danger comes from not recognising and correcting them. Self-awareness is your primary defence.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The DECIDE Model',
    },
    {
      type: 'paragraph',
      text: 'The DECIDE model provides a structured framework for working through decisions in flight. It is particularly useful when you have time to think through a problem systematically.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Detect: Recognise that a change has occurred or that something is not as expected',
        'Estimate: Assess the significance of the change and whether action is needed',
        'Choose: Identify the available options and select the safest course of action',
        'Identify: Identify the actions required to implement your chosen option',
        'Do: Carry out the chosen actions',
        'Evaluate: Monitor the results - is the situation improving? If not, restart the process',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The DECIDE model is iterative. After "Evaluate," if the situation has not improved, cycle back to "Detect" with the new information. Good ADM is a continuous loop, not a one-shot process.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Risk Assessment',
    },
    {
      type: 'paragraph',
      text: 'Risk assessment is the process of identifying hazards, evaluating the probability and severity of potential outcomes, and taking action to reduce risk to an acceptable level. In aviation, risk is never zero, but it can be managed.',
    },
    {
      type: 'paragraph',
      text: 'A simple risk matrix considers probability (how likely is it?) and severity (how bad would it be?). A low-probability, low-severity risk may be acceptable. A high-probability, high-severity risk demands immediate action or avoidance.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The PAVE checklist helps assess risk across four categories: Pilot (fitness, experience, currency), Aircraft (performance, equipment, fuel), enVironment (weather, terrain, airspace), and External pressures (schedule, passengers, commitments).',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Threat and Error Management (TEM)',
    },
    {
      type: 'paragraph',
      text: 'Threat and Error Management is a framework developed to help pilots anticipate, recognise, and manage threats and errors before they lead to undesired aircraft states or accidents.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Threats',
    },
    {
      type: 'paragraph',
      text: 'Threats are events or conditions outside the pilot\'s direct control that increase operational complexity and risk. Examples include adverse weather, high terrain, complex airspace, equipment malfunctions, and unexpected ATC instructions. The key is to anticipate threats during planning and be prepared to manage them.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Errors',
    },
    {
      type: 'paragraph',
      text: 'Errors are actions or inactions by the pilot that deviate from intentions or expectations. Errors are normal and inevitable in human performance. The TEM approach focuses on trapping errors before they have consequences, rather than blaming the pilot for making them.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Undesired Aircraft States',
    },
    {
      type: 'paragraph',
      text: 'An undesired aircraft state is a position, speed, attitude, or configuration that is unintended and reduces safety margins. Examples include unstabilised approaches, altitude deviations, and fuel states below planned reserves. The goal of TEM is to break the chain before reaching this point.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Situational Awareness',
    },
    {
      type: 'paragraph',
      text: 'Situational awareness (SA) is the perception and understanding of what is happening around you and the ability to project how the situation will develop in the near future. Loss of situational awareness is a factor in many accidents.',
    },
    {
      type: 'paragraph',
      text: 'Situational awareness has three levels: perception (knowing the facts), comprehension (understanding what the facts mean), and projection (anticipating what will happen next). Good ADM requires all three levels.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Signs of degraded situational awareness include: fixation on a single task, confusion about your position or altitude, a feeling that things are not right but being unable to explain why, and falling behind the aircraft. If in doubt, take positive action: climb, slow down, go around, or divert.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'CRM for Single Pilots',
    },
    {
      type: 'paragraph',
      text: 'Crew Resource Management (CRM) was originally developed for multi-crew operations, but its principles apply equally to single-pilot flying. Single-pilot CRM (SRM) emphasises using all available resources: ATC services, passenger briefings, automation, checklists, and pre-flight planning.',
    },
    {
      type: 'paragraph',
      text: 'As a single pilot, your "crew" includes ATC, flight information services, weather briefings, and even well-briefed passengers who can help with lookout or reading checklists. Use every resource available to reduce workload and maintain situational awareness.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Go/No-Go Decisions and Personal Minimums',
    },
    {
      type: 'paragraph',
      text: 'The go/no-go decision is the most important decision you will make on any flight. It should be made on the ground, based on a thorough assessment of pilot fitness, aircraft condition, weather, and route. Once airborne, it is far harder to make good decisions under pressure.',
    },
    {
      type: 'paragraph',
      text: 'Personal minimums are self-imposed limits that are more conservative than the legal requirements. They account for your experience level, currency, and comfort. As you gain experience, you may choose to relax some personal minimums, but they should always exist.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Set personal weather minimums higher than the legal VMC minima, especially early in your flying. For example, you might set a personal crosswind limit of 12 knots even though the aircraft POH allows more. Review and adjust your personal minimums as you gain experience.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'External pressure is the most dangerous influence on go/no-go decisions. The desire to "get there" for a meeting, event, or return home has caused many accidents. Always ask: "Would I make this same decision if I had nowhere to be?"',
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
        'ADM is a systematic approach to decision-making; poor decisions are a leading cause of GA accidents',
        'Recognise the five hazardous attitudes (anti-authority, impulsivity, invulnerability, macho, resignation) and apply their antidotes',
        'Use the DECIDE model for structured decision-making: Detect, Estimate, Choose, Identify, Do, Evaluate',
        'TEM helps manage threats and trap errors before they lead to undesired aircraft states',
        'Maintain situational awareness at all three levels: perception, comprehension, and projection',
        'Set personal minimums above legal requirements and resist external pressure on go/no-go decisions',
      ],
    },
  ],
  keyPoints: [
    'Five hazardous attitudes: Anti-authority, Impulsivity, Invulnerability, Macho, Resignation - each has a specific antidote',
    'DECIDE model: Detect, Estimate, Choose, Identify, Do, Evaluate - iterate as needed',
    'TEM framework: anticipate threats, trap errors, prevent undesired aircraft states',
    'Situational awareness has three levels: perception, comprehension, and projection',
    'Personal minimums should exceed legal minimums, especially for less experienced pilots',
    'External pressure ("get-there-itis") is the most dangerous influence on decision-making',
  ],
  practiceQuestions: [
    'hp-012',
  ],
};
