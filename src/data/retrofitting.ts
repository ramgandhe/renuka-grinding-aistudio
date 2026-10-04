import { RetrofitProject } from '../types';

export const RETROFIT_PROJECTS: RetrofitProject[] = [
  {
    id: 1,
    customer: 'Usha Telehoist Ltd',
    location: 'Hosur, Tamil Nadu',
    category: 'Automotive',
    machines: ['VMC - 345 (MKL Make) Complete Mechanical & Electrical Overhaul'],
    description: 'Precision reconditioning of slideways, spindle cartridge rebuild, and CNC panel modernization.'
  },
  {
    id: 2,
    customer: 'Motherson Sumi Systems Limited',
    location: 'Peenya, Bengaluru',
    category: 'Automotive',
    machines: ['VMC - 40 (MKL Make)', 'Hartford - 1020 (Taiwan Make)'],
    description: 'Guideway scraping, ball screw replacement, and CNC controller servicing for precision automotive component tooling.'
  },
  {
    id: 3,
    customer: 'Toyota Kirloskar Auto Parts',
    location: 'Bidadi, Bengaluru',
    category: 'Automotive',
    machines: [
      '10 x 30 AWH Landis Grinder (MKL Make)',
      'Turning Centers MKU8 / MKU 6 (14 Machines)',
      'HMC with ATC (3 Machines)'
    ],
    description: 'Fleet modernization including 14 CNC turning centers, HMCs with automatic tool changers, and 10x30 Landis cylindrical grinders to meet Toyota global quality tolerances.'
  },
  {
    id: 4,
    customer: 'Megamiles Bearing Cups Pvt Ltd',
    location: 'Jigani, Bengaluru',
    category: 'Bearings',
    machines: [
      'Internal Grinder – 1250 MKL Make (4 Machines)',
      'PMT Internal Grinder',
      'Studer – S70 Precision OD Grinder'
    ],
    description: 'Active contract for grinding critical bearing cups (SPL-90) and continuous quarterly AMC support across their internal grinding line.'
  },
  {
    id: 5,
    customer: 'Kirloskar Toyoda Textile Machinery',
    location: 'Jigani, Bengaluru',
    category: 'Machine Tools',
    machines: [
      'Internal Grinder – 1250 MKL Make',
      'Spectra-600 CNC OD Grinder'
    ],
    description: 'Complete mechanical re-engineering and hydraulic circuit overhaul for high-speed textile spindle manufacturing.'
  },
  {
    id: 6,
    customer: 'Renuka Engineering & Service R&D',
    location: 'Bengaluru',
    category: 'Machine Tools',
    machines: [
      'Internal Grinder - 1250 MKL Make (Retrofitted with Siemens 802D)',
      'Studer S-70 OD Grinder'
    ],
    description: 'Demonstration and internal job-work facility showcasing Siemens 802D integration on classic Swiss Studer and MKL frames.'
  },
  {
    id: 7,
    customer: 'V.S.T. Tillers & Tractors Ltd',
    location: 'Bengaluru Unit',
    category: 'Automotive',
    machines: [
      'VMC - 345 MKL Make',
      'CNC 500 Lathes'
    ],
    description: 'Restoration of heavy machining lines for tractor transmission housings and crankshafts.'
  },
  {
    id: 8,
    customer: 'VPCL',
    location: 'Mysuru',
    category: 'Automotive',
    machines: [
      'VMC - 40 MKL Make',
      'Pin Grinder - MKL Make',
      'MKL CNC 500 Turning Center'
    ],
    description: 'Refurbishment of high-precision pin grinder for piston pin manufacturing.'
  },
  {
    id: 9,
    customer: 'BOSCH Ltd. (earlier MICO)',
    location: 'Bengaluru & Nashik Plants',
    category: 'Automotive',
    machines: [
      '6x18 AWH Landis Grinders - 10 Machines (Bengaluru Plant)',
      '6x18 AWH Landis Grinders - 2 Machines (Nashik Plant)'
    ],
    description: 'Full refurbishment of 12 production-critical Landis grinding machines for common-rail diesel injection nozzles and pump components.'
  },
  {
    id: 10,
    customer: 'DELPHI Automotive Systems',
    location: 'Jigani, Bengaluru',
    category: 'Automotive',
    machines: [
      'Spectra 600 CNC Grinders (MKL Make)',
      'Meccandora Profile Grinder'
    ],
    description: 'Profile grinder re-engineering with digital servo upgrades for high-precision automotive steering and fuel systems.'
  },
  {
    id: 11,
    customer: 'Spicer India Ltd',
    location: 'Dharwad',
    category: 'Automotive',
    machines: [
      'Internal Grinder – 1250 MKL Make',
      'VMC – 40'
    ],
    description: 'Drivetrain component machining cell reconditioning.'
  },
  {
    id: 12,
    customer: 'Flowserve India Controls',
    location: 'Whitefield, Bengaluru',
    category: 'Hydraulics & General',
    machines: [
      'VTL & Horizontal Boring Machine',
      'Bombay Lathe Series'
    ],
    description: 'Large-capacity industrial valve and flow control housing machining restoration.'
  },
  {
    id: 13,
    customer: 'Moog Controls',
    location: 'Electronic City, Bengaluru',
    category: 'Hydraulics & General',
    machines: ['High Precision VMC Machine'],
    description: 'Ultra-precision motion control aerospace valve body machining bed refurbishment.'
  },
  {
    id: 14,
    customer: 'Automotive Axles Ltd',
    location: 'Mysuru',
    category: 'Automotive',
    machines: ['6x18 AWH Landis Grinders (2 Machines) with LG PLC Logic'],
    description: 'Electrical control modernization replacing relay logic with LG PLC automation.'
  },
  {
    id: 15,
    customer: 'WIPRO Infrastructure Ltd',
    location: 'Peenya, Bengaluru',
    category: 'Hydraulics & General',
    machines: [
      'HMT Econo CNC Lathes (7 Machines)',
      '14 x 1200 PWH OD Grinders'
    ],
    description: 'Hydraulic cylinder ram grinding lines rebuild and lathe modernization.'
  },
  {
    id: 16,
    customer: 'WIPRO Infrastructure Ltd',
    location: 'Hindupur Plant',
    category: 'Hydraulics & General',
    machines: [
      'HMT Econo CNC Lathe (1 Machine)',
      'Comprehensive Shop Floor AMC for All CNC Machines'
    ],
    description: 'Full preventive, predictive, and breakdown maintenance contract.'
  },
  {
    id: 17,
    customer: 'WIPRO Infrastructure Ltd',
    location: 'Chennai Plant',
    category: 'Hydraulics & General',
    machines: ['HMT Econo CNC Lathe & Annual CNC Maintenance'],
    description: 'Quarterly maintenance and hydraulic actuator spindle refurbishment.'
  },
  {
    id: 18,
    customer: 'Dynamatic Technologies Ltd',
    location: 'Peenya, Bengaluru',
    category: 'Hydraulics & General',
    machines: [
      '6x18 AWH Landis Grinders (3 Machines)',
      'VMC – 345 Machining Center',
      'Annual Maintenance Contract for CNC Shopfloor'
    ],
    description: 'Aerospace and hydraulic pump component grinding maintenance and retrofit.'
  },
  {
    id: 19,
    customer: 'Genau Extrusions Ltd',
    location: 'SIPCOT-II, Hosur',
    category: 'Machine Tools',
    machines: ['Studer S45 Imported High-Precision CNC Grinder'],
    description: 'Complete mechanical alignment, spindle hydro-bearing calibration, and Swiss control service.'
  },
  {
    id: 20,
    customer: 'Federal-Mogul Goetze (India) Ltd',
    location: 'Yelahanka, Bengaluru',
    category: 'Automotive',
    machines: [
      'Harris Pin Boring Retrofit (Conversion from Conventional to CNC 2-Axis) – 3 Machines',
      'Laeadle Tarabus (Imported) Twin Head CNC Machine Reconditioning'
    ],
    description: 'Landmark engineering conversion transforming 3 conventional mechanical pin borers into 2-axis CNC units, cutting cycle time by 42%.'
  },
  {
    id: 21,
    customer: 'Auto Precision',
    location: 'Bommasandra, Bengaluru',
    category: 'Machine Tools',
    machines: [
      'Focus Turning Center (Imported)',
      'Daewoo Vertical Machining Center',
      'Dainichi Turning Center (Imported)'
    ],
    description: 'Restoration of heavy imported CNC lathes and machining centers.'
  },
  {
    id: 22,
    customer: 'WIPRO Enterprises (P) Ltd',
    location: 'Bengaluru',
    category: 'Hydraulics & General',
    machines: [
      'HMT G22 Retrofit - Cylindrical Grinding Machine 5 Meter Length (3 Machines)',
      'Super Finishing Machine SPM Retrofit'
    ],
    description: 'High-tonnage 5-meter bed cylindrical grinder retrofit for large hydraulic crane cylinders.'
  },
  {
    id: 23,
    customer: 'Toyota Group / TKAP',
    location: 'Bidadi',
    category: 'Automotive',
    machines: ['PMT OD Grinding Machine Complete Refurbishment with Retrofitting'],
    description: 'Total mechanical bed rescraping, ball screw replacement, and modern CNC integration.'
  },
  {
    id: 24,
    customer: 'Island Hydraulics',
    location: 'Bengaluru',
    category: 'Hydraulics & General',
    machines: ['Pinacho CNC Turning Machine Complete Refurbishment'],
    description: 'Spanish lathe complete electrical rewiring and spindle headstock bearing replacement.'
  },
  {
    id: 25,
    customer: 'Rapsri Engineering',
    location: 'Bengaluru',
    category: 'Hydraulics & General',
    machines: ['VMC DAEWOO (ACE-VC320) CNC Machining Center'],
    description: 'Spindle nose rebuild, X/Y linear guide replacement, and Fanuc parameter optimization.'
  }
];

export const CLIENT_LOGOS = [
  'BOSCH',
  'Toyota Kirloskar',
  'Wipro',
  'Delphi Automotive',
  'V.S.T. Tillers & Tractors',
  'Megamiles Bearing Cups',
  'Motherson Sumi',
  'Spicer India',
  'Federal-Mogul Goetze',
  'Dynamatic Technologies',
  'Nexteer Automotive',
  'Moog Controls',
  'Flowserve India',
  'Usha Telehoist',
  'Automotive Axles',
  'Tyco Electronics'
];

export const AMC_HIGHLIGHTS = [
  {
    client: 'Wipro Infrastructure & Enterprises',
    facilities: 'Peenya (Bengaluru), Hindupur (Andhra Pradesh), Chennai (Tamil Nadu)',
    scope: 'Comprehensive Annual Maintenance Contracts (AMC) covering 20+ CNC lathes, 5m cylindrical grinders, and hydraulic pump production lines with guaranteed emergency breakdown response times.'
  },
  {
    client: 'Toyota Kirloskar Auto Parts & Motor Ltd',
    facilities: 'Bidadi Industrial Area, Karnataka',
    scope: 'Quarterly predictive maintenance, precision spindle run-out calibration, and breakdown support for 14+ turning centers and Landis cylindrical grinders.'
  },
  {
    client: 'Megamiles Bearing Cups Pvt Ltd',
    facilities: 'Jigani Industrial Area, Bengaluru',
    scope: 'Dedicated quarterly AMC on all CNC internal grinding machines producing high-precision SPL-90 automotive bearing cups.'
  },
  {
    client: 'Dynamatic Technologies Ltd',
    facilities: 'Peenya Industrial Area, Bengaluru',
    scope: 'Full shop-floor CNC machining center and Landis grinder preventive maintenance schedule ensuring 99.2% line availability.'
  }
];
