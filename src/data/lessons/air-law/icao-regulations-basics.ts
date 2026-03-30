import { Lesson } from '@/types';

export const icaoRegulationsBasics: Lesson = {
  id: 'icao-regulations-basics',
  topicId: 'icao-regulations',
  title: 'ICAO & National Regulations',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to International and National Aviation Regulation',
    },
    {
      type: 'paragraph',
      text: 'Aviation is one of the most internationally regulated industries in the world. A flight from London to Paris crosses national boundaries, uses shared airspace, and relies on common standards for communication, navigation, and safety. This lesson covers the international framework that makes this possible and how the UK implements it domestically.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The International Civil Aviation Organization (ICAO)',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Chicago Convention 1944',
    },
    {
      type: 'paragraph',
      text: 'ICAO was established by the Convention on International Civil Aviation, signed in Chicago in 1944. The Convention recognised that the growth of international air transport required common rules and standards to ensure safety and orderly development. ICAO is a specialised agency of the United Nations with headquarters in Montreal, Canada.',
    },
    {
      type: 'paragraph',
      text: 'The Chicago Convention established fundamental principles including: each state has complete and exclusive sovereignty over the airspace above its territory; aircraft have the nationality of the state in which they are registered; and international standards should be adopted to facilitate safe air navigation.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The Chicago Convention has 96 Articles and 19 Annexes. The UK is a Contracting State to the Convention and is obliged to implement its Standards and Recommended Practices (SARPs) or file a "difference" where national rules deviate.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'ICAO Annexes',
    },
    {
      type: 'paragraph',
      text: 'ICAO publishes its standards in a series of 19 Annexes to the Chicago Convention. Each Annex covers a specific area of civil aviation. For the PPL ground examinations, the most relevant Annexes are:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Annex 1 - Personnel Licensing: Standards for pilot licensing, medical certification, and flight crew requirements',
        'Annex 2 - Rules of the Air: General rules, visual flight rules, instrument flight rules, and signals',
        'Annex 3 - Meteorological Service for International Air Navigation: Weather observations, forecasts, and reporting for aviation',
        'Annex 4 - Aeronautical Charts: Standards for the production and content of aviation charts',
        'Annex 6 - Operation of Aircraft: Operational standards for international commercial and general aviation',
        'Annex 8 - Airworthiness of Aircraft: Standards for the design, manufacture, and maintenance of aircraft',
        'Annex 14 - Aerodromes: Physical characteristics, lighting, marking, and obstacle clearance at aerodromes',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for the key Annexes: "1-People, 2-Rules, 3-Met, 4-Charts, 6-Ops, 8-Airworthy, 14-Aerodromes". You do not need to memorise all 19 Annexes, but know the subjects of these seven.',
    },
    {
      type: 'paragraph',
      text: 'Other notable Annexes include Annex 10 (Aeronautical Telecommunications), Annex 11 (Air Traffic Services), Annex 12 (Search and Rescue), Annex 13 (Aircraft Accident Investigation), and Annex 15 (Aeronautical Information Services).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Standards and Recommended Practices (SARPs)',
    },
    {
      type: 'paragraph',
      text: 'ICAO distinguishes between Standards (which member states are expected to comply with) and Recommended Practices (which are desirable but not mandatory). Where a state cannot comply with a Standard, it must notify ICAO of the difference.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'UK National Regulation',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The UK Civil Aviation Authority (CAA)',
    },
    {
      type: 'paragraph',
      text: 'The UK CAA is the National Aviation Authority responsible for regulating civil aviation in the United Kingdom. It oversees flight safety, airspace policy, economic regulation of airlines and airports, and consumer protection. The CAA operates under the authority of the Secretary of State for Transport.',
    },
    {
      type: 'paragraph',
      text: 'The CAA has statutory powers to make regulations, issue licences and certificates, conduct inspections, and take enforcement action. It publishes Civil Aviation Publications (CAPs) providing guidance, information, and regulatory requirements.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Air Navigation Order (ANO)',
    },
    {
      type: 'paragraph',
      text: 'The Air Navigation Order is the principal piece of UK secondary legislation governing civil aviation. It is made under the Civil Aviation Act 1982 and covers a wide range of topics including: aircraft registration and airworthiness, personnel licensing, rules of the air, air traffic services, and aerodrome standards.',
    },
    {
      type: 'paragraph',
      text: 'The ANO is the legal instrument that transposes many ICAO standards into UK law. It is regularly amended to reflect changes in international standards and national requirements.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The ANO is published as a Statutory Instrument. It has the force of law, and breaching its requirements can result in prosecution. The current version is the Air Navigation Order 2016 (as amended).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'SERA - Standardised European Rules of the Air',
    },
    {
      type: 'paragraph',
      text: 'SERA (Standardised European Rules of the Air) originated as an EU regulation that standardised the Rules of the Air across European states, based on ICAO Annex 2. Following Brexit, SERA was retained in UK law as "retained EU law" and continues to apply in UK airspace.',
    },
    {
      type: 'paragraph',
      text: 'SERA covers: general rules (applicability, authority of PIC, negligent flying), visual flight rules (VMC minima, VFR flight plans), instrument flight rules (IFR requirements), and signals (visual, light, and marshalling signals). SERA effectively replaces the old UK Rules of the Air Regulations for most purposes.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'When exam questions refer to "Rules of the Air," they are now primarily referencing SERA. The VMC minima, right-of-way rules, and flight rules you learn are all defined in SERA.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Other Key Regulatory Documents',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'UK AIP (Aeronautical Information Publication): The definitive reference for aeronautical information in the UK, including airspace, aerodromes, and procedures',
        'NOTAMs (Notices to Airmen): Time-critical information about changes to published aeronautical information',
        'CAPs (Civil Aviation Publications): CAA guidance documents covering a wide range of topics (e.g., CAP 393 - the ANO consolidated, CAP 413 - Radiotelephony Manual)',
        'AICs (Aeronautical Information Circulars): Advance notice of changes to procedures, facilities, or regulations',
      ],
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
        'ICAO was established by the Chicago Convention 1944 and sets international standards through 19 Annexes',
        'Key Annexes: 1 (Licensing), 2 (Rules of the Air), 3 (Met), 4 (Charts), 6 (Ops), 8 (Airworthiness), 14 (Aerodromes)',
        'The UK CAA is the national authority responsible for regulating civil aviation in the UK',
        'The Air Navigation Order (ANO) is the principal UK aviation legislation',
        'SERA provides the standardised rules of the air in UK airspace, retained after Brexit',
        'Pilots must be familiar with the UK AIP, NOTAMs, and relevant CAPs',
      ],
    },
  ],
  keyPoints: [
    'ICAO was established by the Chicago Convention 1944 to set international aviation standards',
    'ICAO Annexes contain Standards and Recommended Practices (SARPs); key ones are 1, 2, 3, 4, 6, 8, and 14',
    'The UK CAA regulates civil aviation under the Civil Aviation Act 1982',
    'The Air Navigation Order (ANO 2016) is the principal UK aviation law, implementing ICAO standards domestically',
    'SERA defines the Rules of the Air in UK airspace, including VMC minima and right-of-way rules',
  ],
  practiceQuestions: [
    'al-012',
  ],
};
