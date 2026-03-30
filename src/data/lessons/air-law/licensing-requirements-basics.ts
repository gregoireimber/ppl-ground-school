import { Lesson } from '@/types';

export const licensingRequirementsBasics: Lesson = {
  id: 'licensing-requirements-basics',
  topicId: 'licensing-requirements',
  title: 'PPL Licensing Requirements',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to PPL Licensing',
    },
    {
      type: 'paragraph',
      text: 'The Private Pilot Licence (Aeroplanes) - PPL(A) - is the standard licence for non-commercial flying in the UK. Understanding its privileges, limitations, and the requirements for obtaining and maintaining it is essential both for the ground examinations and for your career as a pilot.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Since Brexit, the UK CAA issues its own national PPL(A) under the UK regulatory framework, separate from the EASA PPL. The two licences have broadly similar requirements but are not automatically interchangeable.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Privileges and Limitations',
    },
    {
      type: 'paragraph',
      text: 'The PPL(A) permits you to act as pilot in command (PIC) or co-pilot on aeroplanes for non-commercial operations. You may carry passengers, but you may not receive remuneration for flying. The PPL does not permit you to fly for hire or reward.',
    },
    {
      type: 'paragraph',
      text: 'You may share the direct costs of a flight equally with your passengers (fuel, oil, aerodrome charges, and aircraft rental). This is known as cost-sharing and is limited to a maximum of six persons sharing the costs, including the pilot.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Receiving any form of payment or reward beyond equal cost-sharing constitutes commercial flying and requires a Commercial Pilot Licence (CPL). Advertising flights for cost-sharing may also be treated as commercial activity.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Minimum Age and Medical Requirements',
    },
    {
      type: 'paragraph',
      text: 'The minimum age to hold a UK PPL(A) is 17 years. You may begin flight training before this age, but the licence cannot be issued until you turn 17. You may fly solo from age 16 with instructor authorisation.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Medical Certificate',
    },
    {
      type: 'paragraph',
      text: 'A valid medical certificate is required to exercise the privileges of a PPL(A). The minimum standard is a Class 2 medical certificate, issued by a CAA-approved Aeromedical Examiner (AME). A LAPL medical may also be acceptable for certain operations.',
    },
    {
      type: 'paragraph',
      text: 'The Class 2 medical is valid for 60 months if issued before age 40, and 24 months if issued at or after age 40. It must be revalidated before expiry to continue exercising licence privileges.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Book your medical early in your training. If a condition is found that requires further investigation, this allows time for resolution without delaying your licence issue.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Training Requirements',
    },
    {
      type: 'paragraph',
      text: 'The PPL(A) requires a minimum of 45 hours of flight training, which must include at least 25 hours of dual instruction and at least 10 hours of supervised solo flight time. The solo time must include at least 5 hours of solo cross-country flight, including one qualifying cross-country of at least 150 nautical miles with full-stop landings at two aerodromes different from the departure aerodrome.',
    },
    {
      type: 'paragraph',
      text: 'You must also pass nine ground examinations covering subjects including Air Law, Human Performance, Meteorology, Navigation, Communications, Principles of Flight, Operational Procedures, Aircraft General Knowledge, and Flight Performance and Planning.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Recency Requirements',
    },
    {
      type: 'paragraph',
      text: 'To exercise the privileges of your PPL(A), you must meet ongoing recency requirements. These ensure that your skills remain current and safe.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Within the last 24 months: At least 12 hours flight time as PIC or under instruction, including 12 takeoffs and 12 landings, and at least 1 hour of refresher training with an instructor',
        'At least 6 of the 12 hours must be as PIC',
        'To carry passengers: At least 3 takeoffs and 3 landings in the preceding 90 days in the same type or class of aircraft',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If you do not meet the recency requirements, you must not fly as PIC. A proficiency check with an examiner or further training with an instructor may be needed to regain currency.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Rating System',
    },
    {
      type: 'paragraph',
      text: 'The PPL(A) on its own authorises you to fly single-engine piston (SEP) aeroplanes in day VFR conditions. Additional privileges require ratings or endorsements to be added to your licence.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Ratings and Endorsements',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'SEP (Single-Engine Piston): Included with the PPL(A), valid for 2 years, revalidated by experience or a proficiency check',
        'MEP (Multi-Engine Piston): Requires additional training and a skill test, valid for 1 year',
        'Night Rating: Permits flight at night under VFR, requires minimum 5 hours night flight training',
        'IR (Instrument Rating): Permits flight under IFR, requires significant additional training and testing',
        'IMC Rating / IR(R): A UK-only rating permitting flight in IMC in UK airspace (now called the IR(R) - Instrument Rating (Restricted))',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'SEP Revalidation',
    },
    {
      type: 'paragraph',
      text: 'The SEP class rating is valid for 2 years. To revalidate, within the 12 months preceding the expiry date you must either complete 12 hours flight time including 6 hours as PIC, 12 takeoffs and landings, and 1 hour of refresher training with an instructor; or pass a proficiency check with an examiner.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The SEP revalidation requirements overlap significantly with the PPL recency requirements. If you fly regularly and include an annual instructor flight, you will typically satisfy both simultaneously.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'UK CAA vs EASA Licensing Post-Brexit',
    },
    {
      type: 'paragraph',
      text: 'Following the UK departure from the EU, the UK CAA became the sole licensing authority for UK-registered aircraft. UK PPL holders who wish to fly EASA-registered aircraft in EASA member states must hold or convert to an EASA PPL, and vice versa.',
    },
    {
      type: 'paragraph',
      text: 'The UK CAA has published arrangements for licence transfer and mutual recognition. Pilots should check the current CAA guidance (CAP 804) for the latest rules on exercising UK licence privileges abroad and converting foreign licences.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'UK PPL holders can fly UK-registered aircraft within UK airspace. To fly in EASA states, check the bilateral agreements in force at the time. Regulations in this area continue to evolve.',
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
        'The PPL(A) permits non-commercial flying as PIC or co-pilot, with cost-sharing but no remuneration',
        'Minimum age is 17; a Class 2 or LAPL medical certificate is required',
        'Minimum 45 hours training including 10 hours solo and a 150 nm qualifying cross-country',
        'Recency: 12 hours in 24 months (6 as PIC), plus 3 takeoffs and landings in 90 days to carry passengers',
        'Ratings (SEP, MEP, Night, IR) extend your privileges beyond basic day VFR',
        'UK and EASA PPLs are separate post-Brexit; check current CAA guidance for cross-border flying',
      ],
    },
  ],
  keyPoints: [
    'PPL(A) is for non-commercial flight only; cost-sharing is permitted but not remuneration',
    'Minimum age 17, Class 2 medical required (60 months validity under 40, 24 months at/over 40)',
    'Minimum 45 hours training: 25 dual, 10 solo (including 150 nm qualifying cross-country)',
    'Recency: 12 hours in 24 months (6 PIC), 12 takeoffs/landings, 1 hour with instructor; 3 takeoffs/landings in 90 days to carry passengers',
    'SEP rating valid 2 years; revalidate by experience or proficiency check',
    'UK and EASA licences are separate post-Brexit - check current bilateral agreements',
  ],
  practiceQuestions: [
    'al-010',
    'al-011',
  ],
};
