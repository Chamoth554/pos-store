export const products = [
  {
    id: 'p1001',
    name: 'i3 2nd Gen Desktop PC',
    slug: 'i3-2nd-gen-desktop-pc',
    category: 'Desktop PCs',
    description: 'Reliable business desktop for POS billing, data entry, and daily office tasks. Built for steady performance and long uptime.',
    shortDescription: 'Compact and dependable desktop workstation.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80',
    price: 42000,
    oldPrice: 52000,
    stock: 12,
    badge: 'Value',
    features: ['Intel i3 2nd Gen', '8GB RAM', '120GB SSD', 'Business-ready setup', 'Ready for POS installation'],
    specifications: {
      Processor: 'Intel Core i3 2nd Gen',
      Memory: '8GB DDR3 RAM',
      Storage: '120GB SSD',
      Display: 'Supports 19" / 20" monitor',
      Warranty: '3 months hardware support'
    }
  },
  {
    id: 'p1002',
    name: 'i5 4th Gen Desktop PC',
    slug: 'i5-4th-gen-desktop-pc',
    category: 'Desktop PCs',
    description: 'Fast, stable desktop built for busy checkout counters, inventory updates, and multi-window business operations.',
    shortDescription: 'Faster desktop for higher retail volume.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    price: 56000,
    oldPrice: 68000,
    stock: 9,
    badge: 'Popular',
    features: ['Intel i5 4th Gen', '8GB RAM', '240GB SSD', 'Faster multi-tasking', 'Ideal for heavy POS use'],
    specifications: {
      Processor: 'Intel Core i5 4th Gen',
      Memory: '8GB DDR3 RAM',
      Storage: '240GB SSD',
      Display: 'Supports 22" monitor',
      Warranty: '3 months hardware support'
    }
  },
  {
    id: 'p1003',
    name: 'Wireless 2D Barcode Scanner',
    slug: 'wireless-2d-barcode-scanner',
    category: 'Barcode Scanners',
    description: 'Quick wireless scanning for retail checkout, inventory counting, and product lookup. Reliable for fast customer service.',
    shortDescription: 'Fast wireless scanning for busy stores.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    price: 18000,
    oldPrice: 24000,
    stock: 20,
    badge: 'Best Seller',
    features: ['2D barcode support', 'Wireless connectivity', 'Long battery life', 'Retail-friendly design'],
    specifications: {
      Type: '2D Wireless Scanner',
      Connectivity: 'Bluetooth / USB receiver',
      Battery: 'Rechargeable',
      Use: 'Retail, pharmacy, supermarket',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1004',
    name: '80mm Thermal Printer',
    slug: '80mm-thermal-printer',
    category: 'Thermal Printers',
    description: 'High-speed receipt printing system for billing counters, retail stores, and food service kitchens.',
    shortDescription: 'Quick receipt printing with dependable output.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    price: 26000,
    oldPrice: 32000,
    stock: 15,
    badge: 'Popular',
    features: ['80mm printing width', 'Fast receipt output', 'Low maintenance', 'POS compatible'],
    specifications: {
      PrintWidth: '80mm',
      Connectivity: 'USB + serial support',
      Speed: 'Up to 200mm/sec',
      Use: 'Retail billing and kitchen print',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1005',
    name: 'Heavy Duty Cash Drawer',
    slug: 'heavy-duty-cash-drawer',
    category: 'Cash Drawers',
    description: 'Robust cash drawer designed for secure, daily cash management in busy retail environments.',
    shortDescription: 'Secure cash handling for everyday retail.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    price: 17000,
    oldPrice: 22000,
    stock: 11,
    badge: 'Secure',
    features: ['Heavy-duty steel build', 'Multiple compartments', 'Compatible with printer drawer kick'],
    specifications: {
      Material: 'Steel body',
      Compartments: '5 bill + 8 coin',
      Interface: 'RJ11 / RJ12',
      Use: 'Retail, supermarket, cafe',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1006',
    name: '22" LED Monitor',
    slug: '22-inch-led-monitor',
    category: 'Monitors',
    description: 'Clear, sharp business display designed for long use and smooth transactions. Perfect for modern point-of-sale counters.',
    shortDescription: 'Large LED monitor for efficient checkout.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
    price: 24000,
    oldPrice: 30000,
    stock: 18,
    badge: 'Display',
    features: ['22-inch full HD display', 'Slim bezel design', 'Commercial quality', 'Low power usage'],
    specifications: {
      Size: '22 inch',
      Resolution: '1920x1080',
      Panel: 'LED',
      Connectivity: 'HDMI / VGA',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1007',
    name: 'POS Barcode Scanner',
    slug: 'pos-barcode-scanner',
    category: 'Barcode Scanners',
    description: 'Fast wired barcode scanner for retail counters and pharmacies needing quick product lookup.',
    shortDescription: 'Reliable scanner for fast item scans.',
    image: 'https://images.unsplash.com/photo-1597331165473-797aadf2e0d1?auto=format&fit=crop&w=900&q=80',
    price: 13000,
    oldPrice: 18000,
    stock: 22,
    badge: 'Basic',
    features: ['Wired connection', 'Fast scan speed', 'Comfort grip', 'Retail use'],
    specifications: {
      Type: '1D/2D Barcode Scanner',
      Interface: 'USB',
      ScanRate: '300 scans/sec',
      Use: 'Grocery, bakery, pharmacy',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1008',
    name: '58mm Thermal Printer',
    slug: '58mm-thermal-printer',
    category: 'Thermal Printers',
    description: 'Compact and efficient receipt printer suitable for retail counters and small businesses that need lower printing width.',
    shortDescription: 'Compact printer for compact worksites.',
    image: 'https://images.unsplash.com/photo-1555617117-08d3b517c033?auto=format&fit=crop&w=900&q=80',
    price: 22000,
    oldPrice: 28000,
    stock: 14,
    badge: 'Compact',
    features: ['58mm print width', 'Quick receipt output', 'Energy efficient', 'Easy maintenance'],
    specifications: {
      PrintWidth: '58mm',
      Connectivity: 'USB + serial',
      Speed: '180mm/sec',
      Use: 'Mini markets and stores',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1009',
    name: 'Retail Keyboard + Mouse Set',
    slug: 'retail-keyboard-mouse-set',
    category: 'Accessories',
    description: 'Comfortable keyboard and mouse kit for POS counters and office terminals, built for all-day business use.',
    shortDescription: 'Comfortable input setup for long shifts.',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80',
    price: 6500,
    oldPrice: 9000,
    stock: 30,
    badge: 'Accessory',
    features: ['Ergonomic setup', 'USB connectivity', 'Low-noise keys', 'Ideal for retail counters'],
    specifications: {
      Type: 'Keyboard + Mouse combination',
      Connectivity: 'USB',
      Use: 'POS counters and offices',
      Warranty: '3 months'
    }
  },
  {
    id: 'p1010',
    name: 'Thermal Paper Roll 80mm',
    slug: 'thermal-paper-roll-80mm',
    category: 'Accessories',
    description: 'High-quality thermal paper for receipt printers, designed for clear printing and reliable performance.',
    shortDescription: 'Paper roll for smooth receipt printing.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    price: 1200,
    oldPrice: 1600,
    stock: 80,
    badge: 'Consumable',
    features: ['80mm paper width', 'Clear print quality', 'Best for thermal printers'],
    specifications: {
      Size: '80mm x 40mm',
      Material: 'Thermal paper',
      Use: 'Receipts and invoices',
      Warranty: 'N/A'
    }
  },
  {
    id: 'p1011',
    name: 'Barcode Label Set',
    slug: 'barcode-label-set',
    category: 'Accessories',
    description: 'Printed barcode labels for item tagging, shelf labels, and stock organization in retail shops.',
    shortDescription: 'Barcode labels for retail organization.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    price: 950,
    oldPrice: 1400,
    stock: 60,
    badge: 'Inventory',
    features: ['Pre-cut labels', 'Barcode ready', 'Strong adhesive', 'Retail organization'],
    specifications: {
      Type: 'Barcode label sheet',
      Size: 'Various sizes',
      Use: 'Retail tagging and inventory',
      Warranty: 'N/A'
    }
  },
  {
    id: 'p1012',
    name: 'Offline POS Software',
    slug: 'offline-pos-software',
    category: 'POS Software',
    description: 'Powerful offline POS software for billing, inventory, reporting, and product management without internet dependence.',
    shortDescription: 'Complete local billing and inventory software.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    price: null,
    oldPrice: null,
    stock: 999,
    badge: 'Software',
    features: ['Offline billing', 'Stock tracking', 'Sales reports', 'Barcode support'],
    specifications: {
      Platform: 'Windows compatible',
      Functionality: 'Billing, inventory, reports',
      Connectivity: 'Offline mode',
      Support: 'Setup and training available'
    }
  },
  {
    id: 'p1013',
    name: '20" LED Monitor',
    slug: '20-inch-led-monitor',
    category: 'Monitors',
    description: 'Balanced display for comfortable work and clear product visibility, suited to retail counters and shops.',
    shortDescription: 'Practical monitor for business counters.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    price: 21000,
    oldPrice: 26000,
    stock: 16,
    badge: 'Popular',
    features: ['20-inch display', 'Clear visuals', 'Slim profile', 'Office ready'],
    specifications: {
      Size: '20 inch',
      Resolution: '1600x900+',
      Panel: 'LED',
      Connectivity: 'HDMI / VGA',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1014',
    name: 'Customer Display',
    slug: 'customer-display',
    category: 'Accessories',
    description: 'A customer-facing display that improves transparency and speeds up checkout communication in busy stores.',
    shortDescription: 'Display for customer-facing payment details.',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    price: 14000,
    oldPrice: 19000,
    stock: 8,
    badge: 'Retail',
    features: ['Customer-facing display', 'Clear pricing visibility', 'Transaction assistance'],
    specifications: {
      Type: 'Customer display module',
      Interface: 'Serial / USB',
      Use: 'Retail counters',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1015',
    name: 'Barcode Label Printer',
    slug: 'barcode-label-printer',
    category: 'Accessories',
    description: 'Dedicated label printer for product tags, shelf labels, and barcode labeling across your retail operation.',
    shortDescription: 'Efficient labeling printer for stock and goods.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    price: 35000,
    oldPrice: 42000,
    stock: 7,
    badge: 'Labeling',
    features: ['Fast label printing', 'Barcode ready', 'Compact footprint', 'Retail and warehouse use'],
    specifications: {
      Type: 'Thermal label printer',
      PrintWidth: 'Up to 4 inch',
      Use: 'Stock labels and barcode labels',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1016',
    name: 'Mini Thermal Printer',
    slug: 'mini-thermal-printer',
    category: 'Thermal Printers',
    description: 'Compact printing device for cash counters and small shops that need cost-effective receipt solutions.',
    shortDescription: 'Small printer for compact workstations.',
    image: 'https://images.unsplash.com/photo-1555617117-08d3b517c033?auto=format&fit=crop&w=900&q=80',
    price: 18000,
    oldPrice: 22000,
    stock: 13,
    badge: 'Compact',
    features: ['Mini thermal style', 'Low maintenance', 'Fast return print', 'Small footprint'],
    specifications: {
      PrintWidth: '58mm',
      Connectivity: 'USB',
      Use: 'Small billing counters',
      Warranty: '6 months'
    }
  },
  {
    id: 'p1017',
    name: 'POS Networking Cable Kit',
    slug: 'pos-networking-cable-kit',
    category: 'Accessories',
    description: 'Essential cables and adapters for connecting printers, scanners, and desktops in a retail setup.',
    shortDescription: 'Needed connection kit for complete setups.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    price: 4800,
    oldPrice: 6500,
    stock: 24,
    badge: 'Essential',
    features: ['Printer connections', 'Scanner accessories', 'Reliable cable lengths'],
    specifications: {
      Type: 'Cable kit',
      Compatibility: 'POS hardware components',
      Use: 'Retail setup wiring',
      Warranty: 'N/A'
    }
  },
  {
    id: 'p1018',
    name: 'Cash Drawer Lock Kit',
    slug: 'cash-drawer-lock-kit',
    category: 'Accessories',
    description: 'Add-on locking solution for better security and daily cash control in retail counters.',
    shortDescription: 'Improve cash security and control.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    price: 3500,
    oldPrice: 5000,
    stock: 18,
    badge: 'Security',
    features: ['Secure locking', 'Retail safety', 'Easy integration'],
    specifications: {
      Type: 'Locking kit',
      Use: 'Cash drawer security',
      Compatibility: 'Common drawer models',
      Warranty: '3 months'
    }
  },
  {
    id: 'p1019',
    name: 'POS Monitor Stand',
    slug: 'pos-monitor-stand',
    category: 'Accessories',
    description: 'A compact monitor stand that helps create a tidy, comfortable workspace for retail counters.',
    shortDescription: 'Organized display setup for counter workstations.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
    price: 5200,
    oldPrice: 7000,
    stock: 14,
    badge: 'Ergonomic',
    features: ['Adjustable height', 'Space saving', 'Desk organization'],
    specifications: {
      Type: 'Monitor stand',
      Use: 'Retail and office counters',
      Material: 'Steel + plastic',
      Warranty: '3 months'
    }
  },
  {
    id: 'p1020',
    name: 'Barcode Scanner Stand',
    slug: 'barcode-scanner-stand',
    category: 'Accessories',
    description: 'A practical bracket and stand for a barcode scanner, improving scanning comfort and preserving counter space.',
    shortDescription: 'Keep scanners secure and organized.',
    image: 'https://images.unsplash.com/photo-1597331165473-797aadf2e0d1?auto=format&fit=crop&w=900&q=80',
    price: 3200,
    oldPrice: 4400,
    stock: 17,
    badge: 'Convenience',
    features: ['Space saving', 'Stable support', 'Easy setup'],
    specifications: {
      Type: 'Scanner holder',
      Use: 'Retail checkout counters',
      Material: 'Metal frame',
      Warranty: '3 months'
    }
  }
]
