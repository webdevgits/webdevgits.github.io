/**
 * GAURANG ENTERPRISES - Product Catalog Data
 * Comprehensive catalog for Educational Institutes, GeM Buyers, Wholesale & Retail.
 */

const PRODUCTS = [
    // ---------------- COMPUTER PERIPHERALS ----------------
    {
        id: "comp-01",
        name: "Institutional All-In-One Desktop PC (23.8\" IPS)",
        category: "computers",
        badge: "GeM Verified OEM",
        gemCategory: "Desktop Computers (Q2)",
        gemCode: "GeM Cat: 43211507",
        specs: [
            "Intel Core i5 12th/13th Gen / AMD Ryzen 5",
            "16GB DDR4 RAM, 512GB NVMe M.2 SSD",
            "23.8\" Full HD Anti-Glare IPS Borderless Display",
            "OEM Windows 11 Pro Academic / GeM Standard",
            "3-Year On-Site Manufacturer Warranty"
        ],
        minOrder: "Retail: 1 Unit | Bulk: 20+ Units",
        pricingType: "Institutional Price on Request / GeM L-1",
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "comp-02",
        name: "Multi-Function High-Speed Monochrome Laser Printer",
        category: "computers",
        badge: "School Favorite",
        gemCategory: "Printers (Multi-function Laser)",
        gemCode: "GeM Cat: 43212110",
        specs: [
            "Print, Copy, Color Scan & Network Duplex",
            "Print Speed: Up to 32 ppm, Fast First Print",
            "Automatic Document Feeder (ADF 50 Sheets)",
            "Connectivity: High-Speed USB 2.0, LAN, Wi-Fi Direct",
            "Heavy Monthly Duty Cycle: 30,000 Pages"
        ],
        minOrder: "Retail & GeM PO Eligible",
        pricingType: "Competitive Wholesale & GeM Rate",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "comp-03",
        name: "1000VA (1KVA) Line-Interactive Heavy Duty UPS",
        category: "computers",
        badge: "Lab Essential",
        gemCategory: "Uninterruptible Power Supplies (UPS)",
        gemCode: "GeM Cat: 39121011",
        specs: [
            "Microprocessor controlled AVR with voltage stabilization",
            "Dual 12V 7Ah/9Ah internal heavy-duty batteries",
            "Supports 2-3 standard desktop computers & routers",
            "Overload, discharge, and short circuit protection",
            "Cold start function & audible alarm system"
        ],
        minOrder: "Available in single & 50+ batch units",
        pricingType: "Bulk Tier Pricing Available",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "comp-04",
        name: "Commercial USB Keyboard & Optical Mouse Combo",
        category: "computers",
        badge: "Bulk Stock",
        gemCategory: "Computer Input Devices",
        gemCode: "GeM Cat: 43211706",
        specs: [
            "Spill-resistant layout with laser-etched keys (10M keystrokes)",
            "1000 DPI high-precision optical tracking mouse",
            "Plug & Play 1.8-meter braided/heavy PVC cable",
            "Rupee symbol (₹) key integrated",
            "Ideal for high-frequency student computer labs"
        ],
        minOrder: "Min Wholesale: 10 Sets | Single retail unit",
        pricingType: "Special Batch Discount Available",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "comp-05",
        name: "24-Port Gigabit Rackmount Lab Network Switch",
        category: "computers",
        badge: "Networking",
        gemCategory: "Network Switches",
        gemCode: "GeM Cat: 43222612",
        specs: [
            "24x 10/100/1000 Mbps RJ45 Auto-Negotiation Ports",
            "Energy-efficient Green Ethernet technology",
            "Sturdy 13-inch rack-mountable steel casing",
            "Non-blocking architecture for maximum throughput",
            "Fanless silent operation suitable for classrooms"
        ],
        minOrder: "1 to 20 units per order",
        pricingType: "Govt / GeM Direct Eligible",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "comp-06",
        name: "Full HD 1080p Smart Classroom Web Camera & Mic",
        category: "computers",
        badge: "Online Teaching",
        gemCategory: "Video Conferencing Cameras",
        gemCode: "GeM Cat: 45121517",
        specs: [
            "1080p @ 30 FPS with wide-angle distortion-free glass lens",
            "Built-in dual noise-cancelling microphones (3m pickup)",
            "Universal monitor clip and tripod mounting thread",
            "Compatible with Zoom, Google Meet, MS Teams, OBS",
            "Plug & Play Driverless Setup"
        ],
        minOrder: "Single unit or batch of 50",
        pricingType: "Retail & Wholesale Slabs",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80"
    },

    // ---------------- WHITEBOARDS & PRESENTATION BOARDS ----------------
    {
        id: "board-01",
        name: "Magnetic Ceramic Whiteboard (6x4 Feet / Heavy Duty)",
        category: "boards",
        badge: "Top Seller",
        gemCategory: "Whiteboards / Display Boards",
        gemCode: "GeM Cat: 44111905",
        specs: [
            "Porcelain ceramic/resin coated magnetic steel surface",
            "100% Anti-glare, scratch-proof & zero ghosting after dry-erase",
            "Anodized satin-finish extruded aluminium border frame",
            "ABS engineering plastic rounded safety corners",
            "Includes aluminium pen-tray and wall-mount brackets"
        ],
        minOrder: "Available in 4x3, 5x3, 6x4, 8x4 feet sizes",
        pricingType: "School / College Bulk Discount",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "board-02",
        name: "Dual-Sided Revolving Board with Mobile Stand",
        category: "boards",
        badge: "Multi-Functional",
        gemCategory: "Movable Teaching Boards",
        gemCode: "GeM Cat: 44111909",
        specs: [
            "Side 1: Glossy White Marker Board | Side 2: Chalk Green Board",
            "360-degree rotation lockable at any angle",
            "Heavy tubular steel frame with rust-proof powder coating",
            "4 lockable heavy-duty caster wheels for easy mobility",
            "Ideal for seminars, coaching centers and lecture halls"
        ],
        minOrder: "1 Piece to 100 Pieces",
        pricingType: "GeM & Direct Quotation",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "board-03",
        name: "Non-Magnetic Classroom Green Chalkboard (8x4 Feet)",
        category: "boards",
        badge: "Classic Teaching",
        gemCategory: "Chalkboards & Slates",
        gemCode: "GeM Cat: 44111906",
        specs: [
            "Matt-finish green surface optimized for smooth chalk writing",
            "Zero eye-strain, non-reflective view from any classroom angle",
            "Durable core board with water-resistant backing sheet",
            "Extra-wide heavy aluminium frame for superior structural rigidity",
            "Supplied with duster shelf and full mounting fasteners"
        ],
        minOrder: "Bulk classroom sets (10+ units)",
        pricingType: "Direct Factory Wholesale Price",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "board-04",
        name: "Fabric Pin-up Notice & Display Board (4x3 Feet)",
        category: "boards",
        badge: "Campus Display",
        gemCategory: "Notice Bulletin Boards",
        gemCode: "GeM Cat: 44111907",
        specs: [
            "High-density softboard core with self-healing fabric wrap",
            "Pins insert easily and hold securely without loosening",
            "Available colors: Royal Blue, Maroon, Forest Green",
            "Elegant aluminium frame with concealed wall clamp system",
            "Essential for school corridors, staffrooms & administration"
        ],
        minOrder: "Retail 1 Unit | Bulk 25+ Units",
        pricingType: "Standard Institutional Rate",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "board-05",
        name: "Heavy-Duty Metallic Presentation Podium / Lectern",
        category: "boards",
        badge: "Auditorium Grade",
        gemCategory: "Lecterns & Podiums",
        gemCode: "GeM Cat: 56101701",
        specs: [
            "Rigid CRCA steel construction with scratch-resistant powder coat",
            "Slanted document reading top with paper stopper ridge",
            "Built-in microphone cable grommet and shelf for amplifier/laptop",
            "Optional custom school / university logo plaque engraving",
            "Stable base with levelling floor studs"
        ],
        minOrder: "1 Unit onwards",
        pricingType: "Official GeM Listed Rate",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80"
    },

    // ---------------- TABLES & DUAL DESKS ----------------
    {
        id: "tab-01",
        name: "Dual Student Classroom Desk & Bench Set (Heavy 16-Gauge)",
        category: "tables",
        badge: "Institutional Standard",
        gemCategory: "Dual Desks (Classroom Furniture)",
        gemCode: "GeM Cat: 56101504",
        specs: [
            "Heavy 16/18 Gauge ERW hollow steel tube framework",
            "Top: 18mm Pre-laminated MDF board with 2mm PVC edge-banding",
            "Integrated book shelf underneath with wire-mesh / sheet base",
            "Dual bag hooks on both side frames",
            "Sizes: Primary, Middle, and Senior Secondary standards"
        ],
        minOrder: "Batch of 20 Sets minimum for bulk shipping",
        pricingType: "Tender / Volume Slab Discount",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "tab-02",
        name: "Modular Computer Lab Workstation Table (Dual Seater)",
        category: "tables",
        badge: "IT Lab Setup",
        gemCategory: "Computer Tables & Workstations",
        gemCode: "GeM Cat: 56101702",
        specs: [
            "Dual workstation design with dedicated CPU storage compartments",
            "Built-in sliding keyboard trays with metal ball-bearing channels",
            "Concealed wire raceway & cable grommets for clean IT routing",
            "Water-resistant laminate surface in Teak / Walnut / White finish",
            "Leveling bushes to ensure zero wobble on uneven floors"
        ],
        minOrder: "Custom batches (10 to 100 units)",
        pricingType: "Lab Package Pricing Available",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "tab-03",
        name: "Teacher & Staffroom Office Desk (4x2.5 Feet)",
        category: "tables",
        badge: "Faculty Ready",
        gemCategory: "Office Tables & Desks",
        gemCode: "GeM Cat: 56101703",
        specs: [
            "3-Drawer pedestal with central key lock mechanism",
            "High-grade prelaminated particle board top with scratch resistance",
            "Sturdy steel leg frame powder-coated in classic ivory/black",
            "Footrest bar for added comfort during long evaluation hours",
            "Dimensions: 1200mm (L) x 600mm (W) x 750mm (H)"
        ],
        minOrder: "1 Unit to 50 Units",
        pricingType: "GeM Standard / Retail",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "tab-04",
        name: "Heavy-Duty Steel Almirah & Document Storage (78x36x19\")",
        category: "tables",
        badge: "Records Storage",
        gemCategory: "Steel Storage Almirahs",
        gemCode: "GeM Cat: 56101708",
        specs: [
            "Prime CRCA sheet (20/22 Gauge) with multi-stage phosphate rust treatment",
            "4 adjustable full-width shelves (5 compartments total)",
            "Three-way brass bolting device with unpickable 6-lever lock",
            "High-quality oven-baked enamel finish (Olive Green / Grey)",
            "Mandatory for Exam cell, administrative records & library archives"
        ],
        minOrder: "1 to 25 units",
        pricingType: "Govt PO & Wholesale Ready",
        image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=700&q=80"
    },

    // ---------------- CHAIRS & SEATING ----------------
    {
        id: "chair-01",
        name: "High-Back Ergonomic Breathable Mesh Revolving Chair",
        category: "chairs",
        badge: "Top Ergonomic",
        gemCategory: "Revolving Chairs (Executive)",
        gemCode: "GeM Cat: 56101704",
        specs: [
            "Reinforced Korean breathable mesh back with adjustable lumbar support",
            "High-density molded PU foam seat (45+ density) with fabric cover",
            "Class-4 heavy duty hydraulic gas lift for smooth height adjustment",
            "Sync-tilt mechanism with 90° to 120° reclining tension lock",
            "BIFMA-standard nylon 5-star base with 60mm twin nylon castors"
        ],
        minOrder: "Retail: 1 Chair | Wholesale: 10+ Units",
        pricingType: "Wholesale Slab Discounts",
        image: "https://images.unsplash.com/photo-1580481077195-731b89fed001?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "chair-02",
        name: "Student Training Chair with Built-in Wooden Writing Pad",
        category: "chairs",
        badge: "Coaching / College",
        gemCategory: "Training & Seminar Chairs",
        gemCode: "GeM Cat: 56101705",
        specs: [
            "Sturdy wooden prelaminated flip-up writing pad (Right side)",
            "Heavy 14-gauge oval steel tubing frame with powder coat finish",
            "Ergonomic contoured plastic / cushioned seat and backrest",
            "Under-seat wire basket for student book and bag storage",
            "Ideal for coaching institutes, competitive exam halls & training centers"
        ],
        minOrder: "Minimum 20 Units for bulk batches",
        pricingType: "Special Coaching Institute Rates",
        image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "chair-03",
        name: "Computer Lab & Office Cantilever Visitor Chair",
        category: "chairs",
        badge: "Durable Seating",
        gemCategory: "Visitor Chairs",
        gemCode: "GeM Cat: 56101706",
        specs: [
            "Heavy-duty chrome-plated cantilever tubular steel base",
            "Contoured medium-back mesh for air circulation in air-conditioned labs",
            "Molded armrests for fatigue-free typing posture",
            "Anti-skid floor protector glides to safeguard lab flooring",
            "Stackable design for space-efficient storage when required"
        ],
        minOrder: "Batches of 10 to 100+",
        pricingType: "GeM Direct Purchase Rate",
        image: "https://images.unsplash.com/photo-1589384267710-7a25aec5efd7?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "chair-04",
        name: "Executive Director / Principal High-Back Leatherette Chair",
        category: "chairs",
        badge: "Executive Suite",
        gemCategory: "Executive Director Chairs",
        gemCode: "GeM Cat: 56101707",
        specs: [
            "Premium dual-tone upholstery with plush double-cushion padding",
            "Padded wooden / chrome armrests for superior comfort",
            "Multi-position knee-tilt locking mechanism",
            "Certified Class-4 pneumatic gas piston (tested up to 135 kg)",
            "Designed for Principal chambers, Directors and HOD cabins"
        ],
        minOrder: "1 to 5 pieces",
        pricingType: "Retail & GeM Portal Rate",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=700&q=80"
    },

    // ---------------- SMART CLASSROOM & INTERACTIVE ----------------
    {
        id: "smart-01",
        name: "Interactive Flat Panel Display (IFPD 75\" 4K UHD)",
        category: "smart-class",
        badge: "Smart School",
        gemCategory: "Interactive Touch Panels",
        gemCode: "GeM Cat: 43211902",
        specs: [
            "75-Inch 4K UHD Anti-Glare 4mm Toughened Glass Display (7H hardness)",
            "40-Point Multi-Touch with ultra-fine stylus & finger writing support",
            "Dual OS: Android 13 + Optional Intel Core i5/i7 Windows OPS PC",
            "Integrated 2x 20W stereo speakers & array microphone",
            "Preloaded digital whiteboarding software & screen mirroring"
        ],
        minOrder: "1 to 20 units with wall mount / mobile trolley",
        pricingType: "GeM Custom Bid / BOQ Specialist",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "smart-02",
        name: "Short Throw Smart Classroom Multimedia Projector (4000 Lumens)",
        category: "smart-class",
        badge: "Projection",
        gemCategory: "Multimedia Projectors",
        gemCode: "GeM Cat: 45111601",
        specs: [
            "High brightness 4,000 ANSI Lumens for brightly lit classrooms",
            "WXGA / Full HD 1080p native resolution with 20,000:1 contrast",
            "Lamp Life: Up to 15,000 hours in Eco Mode",
            "Dual HDMI, VGA, Audio in/out, USB Type-A reader",
            "Includes ceiling mount kit and 10-meter active HDMI cabling"
        ],
        minOrder: "Single Unit / Package Supply",
        pricingType: "GeM Portal Listed Price",
        image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: "smart-03",
        name: "Motorized Remote-Controlled Projection Screen (8x6 Feet)",
        category: "smart-class",
        badge: "AV Essential",
        gemCategory: "Projection Screens",
        gemCode: "GeM Cat: 45111605",
        specs: [
            "High-gain matte white fabric with black masking borders for contrast",
            "Ultra-quiet synchronous electric tubular motor with RF remote control",
            "Dual wall and ceiling mount integrated steel casing",
            "Mildew resistant, washable surface with 160° viewing angle",
            "Supplied with inline wired controller and wall-mount brackets"
        ],
        minOrder: "1 Unit onwards",
        pricingType: "Retail & Bulk Rates",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80"
    }
];

// Export to window
window.PRODUCTS = PRODUCTS;
