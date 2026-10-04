import { MachineModel } from '../types';

export const MACHINES: MachineModel[] = [
  {
    id: 'awh-cnc',
    name: 'AWH CNC Cylindrical Grinder',
    category: 'cylindrical',
    categoryLabel: 'Cylindrical Grinding',
    tagline: 'High-Rigidity Flat & V Guideways with Hydro-Dynamic Microsphere Bearings',
    description: 'Engineered for high-volume automotive shafts, bearing components, and precision machine tool spindles. Features our signature zero-friction Hydro-Dynamic Microsphere spindle bearing that guarantees high precision grinding under CSS (Constant Surface Speed) at 45 m/sec.',
    imageAlt: 'Renuka AWH CNC Cylindrical Grinder Machine Front View',
    accentColor: '#DC2626',
    modelsAvailable: ['AWH 160 x 460', 'AWH 250 x 460', 'AWH 350 x 900'],
    keyHighlights: [
      'Hydro-Dynamic Microsphere bearing for Wheel Head spindle - zero metal-to-metal contact with perpetual oil wedge',
      'Flat & V type guide with hand-scraped Turcite for superior vibration damping and heavy cutting loads',
      'Hydraulic Tailstock with MT3/MT4 center, Spieth bush, and micro taper correction attachment',
      'Stress-relieved heavy cast iron bed with ribbed internal damping chambers for lifetime dimensional stability',
      'Dual-axis CNC interpolation (X & Z) for intricate plunge, traverse, and step grinding'
    ],
    specs: [
      { label: 'CNC Controlled Axes', value: '2 Axes (X & Z simultaneous)', category: 'Control' },
      { label: 'Admit Between Centers', value: '460 mm / 900 mm', category: 'Capacity' },
      { label: 'Max. Grinding Diameter', value: '150 mm / 250 mm / 350 mm', category: 'Capacity' },
      { label: 'Max. Grinding Length', value: '115 mm (plunge) / Full ABC (traverse)', category: 'Capacity' },
      { label: 'Center Height', value: '86 mm', category: 'Capacity' },
      { label: 'Max. Component Weight', value: '30 kg (between centers)', category: 'Capacity' },
      { label: 'Grinding Wheel Size', value: 'Ø600 x 100 x Ø203.2 mm', category: 'Wheel Head' },
      { label: 'Spindle Motor Power', value: '7.5 kW', category: 'Wheel Head' },
      { label: 'Spindle Bearing Type', value: 'Hydro-Dynamic Micro Sphere (Ø76)', category: 'Wheel Head' },
      { label: 'Grinding Wheel Speed', value: '45 m/sec (CSS standard)', category: 'Wheel Head' },
      { label: 'Rapid Feed Rate (X & Z)', value: '10 m/min', category: 'Axes' },
      { label: 'Min. Incremental Feed', value: '0.001 mm (1 µm)', category: 'Axes' },
      { label: 'Slide Guideways', value: 'Flat & V type with hand-scraped Turcite', category: 'Axes' },
      { label: 'Work Head Speed Range', value: '50 to 800 RPM (Infinitely variable)', category: 'Work Head' },
      { label: 'Work Head Center', value: 'Dead Center std. (Live-cum-Dead opt.) MT3/MT4', category: 'Work Head' },
      { label: 'Tailstock Quill Dia & Stroke', value: 'Ø50 mm quill / 40 mm stroke', category: 'Tailstock' },
      { label: 'Floor Space (L x W x H)', value: '2500 x 1900 x 1900 mm', category: 'Physical' },
      { label: 'Machine Weight', value: '4,000 kg', category: 'Physical' }
    ],
    standardAccessories: [
      'Paper Band Magnetic Separator (PBMF) Coolant Tank',
      'Hydraulically Operated Tailstock with MT3/MT4 Center',
      'Fully Enclosed Heavy Machine Guarding with Interlock',
      'Full Set of Precision Service & Maintenance Tools',
      'Choice of CNC Controller: Fanuc, Siemens, Mitsubishi, or Fagor',
      'Centralized Automated Lubrication for Ball Screws & Slides'
    ],
    optionalAccessories: [
      'Industrial Electrostatic Fume Extractor',
      'High-Precision Rotary Diamond Dresser for profile wheels',
      'In-Process Active Diameter Gauging System (Marposs / equivalent)',
      'Touch Probe Gauge for axial shoulder locating',
      'Acoustic Gap Control & Crash Protection monitor',
      'Automatic / Semi-automatic Dynamic Wheel Balancer',
      'Component Loading / Unloading Gantry or Robot Interface',
      'Custom Hydraulic Collet Chucks & Application Tooling'
    ],
    youtubeId: 'FKHEkwB4uL4'
  },
  {
    id: 'ig-cnc',
    name: 'IG CNC High-Precision Internal Grinder',
    category: 'internal',
    categoryLabel: 'Internal Bore Grinding',
    tagline: 'High-Frequency Spindles up to 105,000 RPM & Needle Roller M & V Guideways',
    description: 'Specifically developed for bearing cups, transmission bushes, fuel injector sleeves, and hydraulic cartridges requiring deep or micro-bore grinding. Combines linear needle roller guide ways with high-frequency motorized spindles for mirror finishes down to Ra 0.08 µm.',
    imageAlt: 'Renuka IG CNC Internal Grinder Machine',
    accentColor: '#0284C7',
    modelsAvailable: ['IG CNC 1260', 'IG CNC 1260XL'],
    keyHighlights: [
      'High-frequency spindle option reaching up to 105,000 RPM with oil-air mist lubrication',
      'Belt-driven spindle option with 20,000 / 30,000 / 40,000 RPM for heavy stock removal',
      'Linear M & V needle roller guide ways providing zero stick-slip and ultra-high rigidity',
      'Swiveling work head (0° to 30°) for rapid taper bore setup without dressing angle errors',
      'Diaphragm chuck system designed for repeatable mass-production clamping with zero run-out'
    ],
    specs: [
      { label: 'CNC Controlled Axes', value: '2 Axes (X cross & Z longitudinal)', category: 'Control' },
      { label: 'Max. Internal Diameter (ID)', value: '120 mm', category: 'Capacity' },
      { label: 'Min. Internal Diameter (ID)', value: '6 mm', category: 'Capacity' },
      { label: 'Max. Grinding Depth', value: '150 mm', category: 'Capacity' },
      { label: 'Max. Swing Diameter', value: '300 mm', category: 'Capacity' },
      { label: 'Max. Workpiece Length', value: '400 mm', category: 'Capacity' },
      { label: 'Z Axis Travel (Table)', value: '350 mm', category: 'Axes' },
      { label: 'X Axis Cross Travel', value: '120 mm', category: 'Axes' },
      { label: 'Wheel Head Longitudinal Shift', value: '300 mm', category: 'Axes' },
      { label: 'Spindle Speed (Belt Driven)', value: '20,000 / 30,000 / 40,000 RPM', category: 'Wheel Spindle' },
      { label: 'H.F. High-Frequency Spindle', value: '40,000 to 105,000 RPM', category: 'Wheel Spindle' },
      { label: 'Spindle Motor Power', value: '5.5 kW (Belt) / Variable HF drive', category: 'Wheel Spindle' },
      { label: 'Work Head Swivel Range', value: '0° to 30° adjustable angle', category: 'Work Head' },
      { label: 'Work Head Speed', value: '150 to 1200 RPM (Variable speed motor)', category: 'Work Head' },
      { label: 'Work Head Spindle Nose', value: 'A2-5 Precision Spindle', category: 'Work Head' },
      { label: 'Work Head Motor Power', value: '0.75 kW', category: 'Work Head' },
      { label: 'Floor Space (L x W x H)', value: '2600 x 2600 x 1900 mm', category: 'Physical' },
      { label: 'Machine Weight', value: '4,000 kg', category: 'Physical' }
    ],
    standardAccessories: [
      'Work Head with Induction Motor & Frequency Inverter',
      'Belt Driven Internal Grinding Spindle with Air Mist Lubricator',
      'Dedicated Hydraulic System & Clamping Cylinder',
      'Single Point Diamond Dresser with memorized positions',
      'Fully Enclosed Splash Guard with safety interlocks',
      'Swiveling Work Head Base (0°–30°)',
      'CNC Controller (Fanuc / Siemens / Mitsubishi / Fagor)',
      'Paper Band Magnetic Separator Coolant Filtration'
    ],
    optionalAccessories: [
      'Hydraulic Operated Diaphragm Chuck for bearing cups',
      'Hydraulic 3-Jaw Self-Centering Chuck',
      'Rotary Diamond Dresser for CBN grinding pins',
      'High-Frequency Wheel Spindle up to 105,000 RPM',
      'Closed-Loop Refrigeration Chiller Unit for Spindle',
      'High Efficiency Refrigerant Air Dryer for Spindle Air Purge',
      'In-bore Touch Sensor / Bore Gauge Integration'
    ],
    youtubeId: 'P43-WVV_L_c'
  },
  {
    id: 'universal-cnc',
    name: 'Universal Grinder CNC S380 x 900',
    category: 'universal',
    categoryLabel: 'Multi-Operation Universal Grinding',
    tagline: 'Plunge, Traverse, Face, Internal, Taper & Complex Profile All-In-One',
    description: 'The ultimate toolroom and flexible manufacturing workstation. Features a swiveling work head (0° to 90°), an independent swing-down internal grinding spindle (18,000 RPM), and a massive 380 mm grinding diameter capacity with 950 mm between centers.',
    imageAlt: 'Renuka Universal Grinder CNC Model S380x900',
    accentColor: '#10B981',
    modelsAvailable: ['Universal CNC S380 x 900'],
    keyHighlights: [
      'Universal capability: External OD, Internal ID, Surface Face, Taper, and Profile grinding',
      'Work head swivels 0° to 90° for steep tapers and face grinding',
      'Independent internal grinding attachment with Ø80 mm spindle running at 18,000 RPM',
      'Hydro-Dynamic Microsphere wheel head spindle delivering 30 / 45 m/sec CSS grinding',
      'Heavy-duty cast iron base (5,000 kg) with Turcite-coated hand-scraped guideways'
    ],
    specs: [
      { label: 'CNC Controlled Axes', value: '2 Axes (X cross & Z traverse)', category: 'Control' },
      { label: 'Max. Grinding Length', value: '900 mm', category: 'Capacity' },
      { label: 'Admit Between Centers', value: '950 mm', category: 'Capacity' },
      { label: 'Center Height', value: '190 mm', category: 'Capacity' },
      { label: 'Max. Grinding Diameter', value: '380 mm', category: 'Capacity' },
      { label: 'Max. Component Weight', value: '55 kg', category: 'Capacity' },
      { label: 'Loading Height', value: '1200 mm', category: 'Capacity' },
      { label: 'External Wheel Size', value: 'Ø400 x 40 / 50 mm width', category: 'Wheel Head' },
      { label: 'Spindle Motor Power', value: '2.2 kW / 7.5 kW option', category: 'Wheel Head' },
      { label: 'Spindle Bearing Type', value: 'Hydro-Dynamic Micro Sphere (Ø76)', category: 'Wheel Head' },
      { label: 'Grinding Speed', value: '30 / 45 m/sec (CSS)', category: 'Wheel Head' },
      { label: 'Internal Spindle Dia & Speed', value: 'Ø80 mm spindle / 18,000 RPM', category: 'Internal Attachment' },
      { label: 'Internal Grinding Range', value: 'Ø15 mm to 300 mm ID', category: 'Internal Attachment' },
      { label: 'Work Head Swivel Range', value: '0° to 90° with precision protractor', category: 'Work Head' },
      { label: 'Work Head Center Type', value: 'Live-cum-Dead Center MT4', category: 'Work Head' },
      { label: 'Tailstock Quill & Stroke', value: 'Ø50 mm quill / 50 mm hydraulic stroke (MT4)', category: 'Tailstock' },
      { label: 'Z Axis Slide Stroke', value: '1100 mm', category: 'Axes' },
      { label: 'X Axis Slide Stroke', value: '300 mm', category: 'Axes' },
      { label: 'Floor Space (L x W x H)', value: '4000 x 2300 x 2000 mm', category: 'Physical' },
      { label: 'Machine Weight', value: '5,000 kg', category: 'Physical' }
    ],
    standardAccessories: [
      'Paper Band Magnetic Separator (PBMF) Coolant System',
      'Hydraulically Operated Tailstock with MT4 Center & Ball Bush',
      'Partial / Full Ergonomic Guarding with viewing window',
      'Precision Set of Service Tools & Manuals',
      'CNC Controller (Fanuc, Siemens, Mitsubishi, or Fagor)',
      'Multi-Point Diamond Plate Dresser'
    ],
    optionalAccessories: [
      'Industrial Electrostatic Fume Extractor',
      'In-Process Diameter Gauging System',
      'Automatic / Semi-automatic Wheel Balancing Head',
      'Wheel Loading / Overhead Hoist Crane Attachment',
      'Specialized 3-Jaw & 4-Jaw Scroll Chucks',
      'Custom Internal Grinding Quills & Extensions'
    ],
    youtubeId: 'FKHEkwB4uL4'
  }
];

export const COMMON_FEATURES = [
  {
    title: 'Hydro-Dynamic Microsphere Spindle Bearing',
    description: 'Unlike standard roller bearings that wear down, our wheel head spindle floats entirely on a continuous hydrodynamic oil wedge generated by microspheres. Zero metal-to-metal contact results in zero vibration, perpetual dimensional accuracy, and 45 m/sec CSS operation.'
  },
  {
    title: 'Turcite-B Hand-Scraped Guideways',
    description: 'Flat & V guideways are coated with Turcite-B and hand-scraped by master fitters. This eliminates stick-slip during micro-step feeding (0.001 mm) and provides superior load-carrying capacity for heavy industrial roughing.'
  },
  {
    title: 'CNC Controller Versatility',
    description: 'Configurable with industry-standard CNC platforms: Fanuc 0i-TF Plus, Siemens 828D / 802D, Mitsubishi M80, or Fagor 8055. Full ISO G-code programming with custom grinding macro cycles for plunge, multi-step, traverse, and diamond dressing.'
  },
  {
    title: 'Vibration-Damped Meehanite Cast Iron Bed',
    description: 'Machine bases are poured from high-grade close-grained cast iron and artificially age-treated and stress-relieved to prevent torsional deformation over decades of high-load grinding.'
  },
  {
    title: 'Modular Electrical & Lubrication Architecture',
    description: 'Features quick-disconnect electrical cabinets, automated dual-circuit lubrication for precision ball screws, and independent hydraulic power packs with high-efficiency heat dissipation.'
  }
];
