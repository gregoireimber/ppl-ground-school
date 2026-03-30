import { Lesson } from '@/types';

export const chartReadingBasics: Lesson = {
  id: 'chart-reading-basics',
  topicId: 'chart-reading',
  title: 'Chart Reading for VFR Navigation',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to VFR Chart Reading',
    },
    {
      type: 'paragraph',
      text: 'The aeronautical chart is the single most important tool for VFR navigation. It is your primary reference for planning routes, identifying airspace, assessing terrain, and locating visual reference points during flight. Being able to read a chart quickly and accurately is essential for safe and legal VFR operations.',
    },
    {
      type: 'paragraph',
      text: 'This lesson covers the charts used in UK VFR flying, the symbols and information they contain, and the skills you need to extract useful navigational data from them.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Always check your chart is current before flight. Airspace boundaries, frequencies, and procedures can change with each AIRAC cycle. Using an out-of-date chart is both dangerous and a potential infringement risk.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Types of CAA VFR Charts',
    },
    {
      type: 'heading',
      level: 2,
      text: '1:500,000 Chart',
    },
    {
      type: 'paragraph',
      text: 'The 1:500,000 ICAO chart is the primary chart for VFR cross-country navigation in the UK. It covers large areas, making it ideal for route planning and en-route navigation. At this scale, 1 centimetre on the chart represents 5 kilometres on the ground, or approximately 2.7 nautical miles.',
    },
    {
      type: 'paragraph',
      text: 'The chart uses a Lambert Conformal Conic projection, which preserves angles and shapes over moderate areas. This means a straight line drawn on the chart closely approximates a great circle track, which is important for accurate course measurement.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Scale: 1 cm = 5 km (1 inch = approximately 8 statute miles)',
        'Coverage: typically the whole of the UK on two sheets (Northern and Southern England, plus Scotland)',
        'Published by the CAA and updated on a regular AIRAC cycle',
        'Shows all aeronautical information, airspace, and topographical detail needed for VFR flight',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: '1:250,000 Chart',
    },
    {
      type: 'paragraph',
      text: 'The 1:250,000 chart provides double the detail of the 1:500,000 chart. At this scale, 1 centimetre represents 2.5 kilometres. These charts are particularly useful for flight in congested airspace areas or when more topographical detail is needed, such as around major airports or in hilly terrain.',
    },
    {
      type: 'paragraph',
      text: 'Because they cover a smaller area per sheet, you may need multiple 1:250,000 charts for a cross-country flight. Many pilots carry both scales: the 1:500,000 for overall route planning and the 1:250,000 for areas requiring more detail.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: Remember the scale relationship. On a 1:500,000 chart, 1 cm = 5 km. On a 1:250,000 chart, 1 cm = 2.5 km. The 1:250,000 chart shows the same area at twice the size.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Latitude and Longitude',
    },
    {
      type: 'paragraph',
      text: 'Charts are gridded with lines of latitude (parallels) and longitude (meridians). Latitude is measured north or south from the equator (0 to 90 degrees). Longitude is measured east or west from the Prime Meridian at Greenwich (0 to 180 degrees).',
    },
    {
      type: 'paragraph',
      text: 'Each degree is divided into 60 minutes, and each minute into 60 seconds. One minute of latitude equals one nautical mile. This relationship is critical for measuring distance on the chart: always use the latitude scale on the side of the chart, not the longitude scale.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid: 1 minute of latitude = 1 nautical mile. The latitude scale (on the sides of the chart) is your ruler. Never use the longitude scale (top and bottom) for distance because the spacing of meridians varies with latitude.',
    },
    {
      type: 'paragraph',
      text: 'When measuring track direction, place your protractor at the point where your track line crosses a meridian. Read the angle from True North. Remember to use a meridian close to the midpoint of your route for the most accurate reading.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Chart Symbols',
    },
    {
      type: 'paragraph',
      text: 'ICAO aeronautical charts use a standardised set of symbols. You must be thoroughly familiar with these, as they convey critical information at a glance. The chart legend (usually printed on the chart margin) lists all symbols used.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Aerodrome Symbols',
    },
    {
      type: 'paragraph',
      text: 'Aerodromes are depicted differently depending on their status and facilities. Civil aerodromes with a paved runway are shown as a circle with internal markings indicating runway orientation. Military aerodromes use a different symbol, typically a circle with a flag-like marker.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Civil aerodrome with hard runway: circle with runway orientation line(s)',
        'Civil aerodrome with grass runway: open circle',
        'Military aerodrome: distinctive military symbol (circle with flag)',
        'Heliport: marked with an "H"',
        'Disused or abandoned aerodrome: circle with an "X" through it',
        'Aerodrome information box: shows ICAO code, elevation, runway length, and frequency',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Airspace Boundaries',
    },
    {
      type: 'paragraph',
      text: 'Airspace is depicted using colour-coded boundaries and labels. Controlled airspace (CTR, CTA, TMA) is shown with solid or dashed lines in specific colours. Each airspace block is labelled with its classification (Class A, C, D, E, or G), vertical limits, and the controlling authority.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Control Zones (CTR): typically shown with a dashed blue boundary, extend from the surface',
        'Control Areas (CTA) and Terminal Manoeuvring Areas (TMA): shown with solid boundaries, with vertical limits annotated (e.g., FL55-FL195)',
        'Airways: shown as corridors with centreline and boundary markings',
        'Airspace class letter annotated adjacent to the boundary (e.g., "D" for Class D)',
        'ATZ (Aerodrome Traffic Zone): circle centred on the aerodrome, typically 2 or 2.5 nm radius, surface to 2,000 ft AAL',
        'MATZ (Military Aerodrome Traffic Zone): depicted with a specific symbol, typically 5 nm radius with stub extensions',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Vertical limits on charts are shown as altitudes (e.g., 3500 ft), flight levels (e.g., FL55), or SFC (surface). "SFC" means the airspace starts at the ground. Heights may be AMSL (altitude) or AGL (height above ground).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Obstacles and Hazards',
    },
    {
      type: 'paragraph',
      text: 'Obstacles such as masts, towers, chimneys, and wind farms are marked on the chart if they exceed a certain height. Each obstacle symbol shows the elevation AMSL (in bold) and the height AGL (in brackets). The symbol distinguishes between lit and unlit obstacles.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Obstacle with lighting: filled symbol (typically a filled inverted triangle or dot)',
        'Obstacle without lighting: open (unfilled) symbol',
        'Group of obstacles: symbol with "gp" annotation',
        'Elevation in bold = AMSL, value in brackets = AGL height',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Danger, Restricted, and Prohibited Areas',
    },
    {
      type: 'paragraph',
      text: 'These areas are depicted with specific boundary markings and labelled with their designation number:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Danger Areas (D): areas where activities dangerous to aircraft may take place (e.g., D012). Some are permanently active, others have scheduled or notified activity times',
        'Restricted Areas (R): entry requires permission from the controlling authority',
        'Prohibited Areas (P): flight is prohibited at all times',
        'Temporary Danger/Restricted Areas: notified by NOTAM, may not appear on the printed chart',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Always check NOTAMs before flight for temporary danger areas and other airspace changes not shown on your chart. Danger area activity status can be checked via DACS (Danger Area Crossing Service) or DAAIS (Danger Area Activity Information Service).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Visual Reporting Points (VRPs)',
    },
    {
      type: 'paragraph',
      text: 'VRPs are prominent landmarks designated for position reporting when communicating with ATC or AFIS. They are shown on the chart with a specific symbol (a small filled triangle with the VRP name). Examples include motorway junctions, reservoirs, prominent buildings, or bridges.',
    },
    {
      type: 'paragraph',
      text: 'When flying near controlled airspace, ATC may instruct you to report at a VRP. Knowing the VRPs along your route and near your destination aerodrome is essential for efficient radio communication.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Elevation, Contours, and Maximum Elevation Figures',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Contours and Layer Tinting',
    },
    {
      type: 'paragraph',
      text: 'Terrain elevation is shown through contour lines (connecting points of equal elevation) and layer tinting (colour shading indicating height bands). Spot heights mark the highest points in an area. On UK VFR charts, elevations are in feet AMSL.',
    },
    {
      type: 'paragraph',
      text: 'Layer tinting uses a progression of colours from green (low-lying) through brown and darker shades as elevation increases. Steep terrain is indicated by closely spaced contour lines.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Maximum Elevation Figures (MEF)',
    },
    {
      type: 'paragraph',
      text: 'The chart is divided into grid squares, each containing a Maximum Elevation Figure (MEF). The MEF represents the highest known feature within that grid square, including terrain and obstacles, with a safety margin added. It is displayed in thousands and hundreds of feet AMSL.',
    },
    {
      type: 'paragraph',
      text: 'For example, an MEF shown as "23" means the maximum elevation in that grid square is 2,300 feet AMSL. This is a quick reference for terrain clearance planning, but it does not replace proper altimetry and PLOG preparation.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: The MEF is shown in large figures in each half-degree grid square. The large number is thousands of feet, the small number is hundreds. For example, "32" means 3,200 ft AMSL.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Scale and Distance Measurement',
    },
    {
      type: 'paragraph',
      text: 'To measure distance on a chart, use the latitude scale printed along the side margins. Place a ruler or dividers between two points and transfer the span to the latitude scale. Remember that one minute of latitude equals one nautical mile.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Place your dividers (or mark a straight edge) between the two points on the chart',
        'Transfer this span to the latitude scale on the nearest chart margin',
        'Read off the distance in nautical miles (one minute of latitude = one nautical mile)',
        'For long routes, measure in segments to avoid error from the chart projection',
      ],
    },
    {
      type: 'paragraph',
      text: 'On a 1:500,000 chart, the graduated scale bar at the bottom also allows you to read off statute miles, kilometres, and nautical miles directly.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Chart Currency and AIRAC Cycles',
    },
    {
      type: 'paragraph',
      text: 'Aeronautical charts are updated on the AIRAC (Aeronautical Information Regulation And Control) cycle, which is a fixed 28-day schedule used worldwide. Each cycle has an effective date, and chart amendments are published in advance so that all users apply changes on the same day.',
    },
    {
      type: 'paragraph',
      text: 'The CAA VFR charts are typically re-issued annually or semi-annually, with the effective date and edition number printed on the chart. Between printed editions, amendments are published via NOTAMs and AIP supplements. It is your responsibility as pilot-in-command to ensure your chart reflects the current state of airspace.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The AIRAC cycle ensures global synchronisation of aeronautical information changes. In the UK, chart amendments are also published in the AIP (Aeronautical Information Publication) and notified via NOTAM.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Reading Airspace Boundaries and Altitudes',
    },
    {
      type: 'paragraph',
      text: 'Each piece of controlled airspace shown on the chart has its vertical limits annotated. The upper limit is written above a line and the lower limit below. Understanding these annotations is essential for staying clear of controlled airspace.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'FL (Flight Level): altitudes referenced to standard pressure 1013 hPa (e.g., FL55 = 5,500 ft on 1013)',
        'ALT: altitude AMSL, referenced to QNH (e.g., 3500 ft ALT)',
        'SFC: surface - the airspace extends down to the ground',
        'AGL: above ground level (used for some local airspace)',
      ],
    },
    {
      type: 'paragraph',
      text: 'For example, a CTA annotated as "FL55 / 2500 ALT" means the controlled airspace extends from 2,500 feet AMSL (on QNH) up to Flight Level 55. You may fly beneath it if you remain below 2,500 feet on QNH.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Airspace infringements are a serious safety issue and enforcement matter. Always positively identify your position relative to controlled airspace boundaries, both laterally and vertically, before and during flight.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'ICAO Chart Symbols Summary',
    },
    {
      type: 'paragraph',
      text: 'The ICAO symbology system is standardised internationally. The following are among the most important symbols to know:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'VOR: a compass rose symbol with a central dot, labelled with the station identifier and frequency',
        'NDB: a circle with dots around the circumference, labelled with identifier and frequency',
        'DME: a trapezoid or specific symbol adjacent to the associated VOR or standalone',
        'Compulsory reporting point: solid triangle',
        'Non-compulsory (on-request) reporting point: open triangle',
        'VRP (Visual Reporting Point): filled triangle with name label',
        'Isogonal: dashed line showing magnetic variation value and direction',
      ],
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
        '1:500,000 is the primary UK VFR chart; 1:250,000 provides more detail for congested areas',
        'One minute of latitude always equals one nautical mile - use the latitude scale for distance',
        'MEF shows the highest feature in a grid square in thousands and hundreds of feet AMSL',
        'Airspace boundaries show class, vertical limits (FL or ALT), and controlling authority',
        'VRPs are designated landmarks used for position reporting to ATC',
        'Always check chart currency and NOTAMs before flight - the AIRAC cycle is 28 days',
      ],
    },
  ],
  keyPoints: [
    '1:500,000 is the standard UK VFR chart; 1:250,000 gives greater detail for congested areas',
    'One minute of latitude = one nautical mile; always use the latitude scale for distance measurement',
    'Maximum Elevation Figures (MEF) show the highest known feature in each grid square, in feet AMSL',
    'Airspace boundaries are annotated with class letter, vertical limits (FL, ALT, SFC), and controlling authority',
    'Visual Reporting Points (VRPs) are charted landmarks for position reporting to ATC',
    'Charts follow the 28-day AIRAC cycle; always verify currency and check NOTAMs before flight',
  ],
  practiceQuestions: [
    'nav-009',
    'nav-010',
  ],
};
