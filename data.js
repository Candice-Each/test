// data.js - External data file

// Region centers data
const regionCenters = {
    "hongkong": { center: [22.3193, 114.1694], zoom: 11 },
    "mainland": { center: [35.8617, 104.1954], zoom: 4 },
    "europe": { center: [50.1109, 10.0173], zoom: 4 },
    "usa": { center: [39.8283, -98.5795], zoom: 4 }
};

// Building data - including all original data and additional buildings
const buildingData = {
    // Hong Kong buildings - 3 buildings
    "building-a": {
        name: "Building A - Hong Kong A",
        location: "Central, Hong Kong",
        region: "hongkong",
        coordinates: [22.2820, 114.1584],
        energyOptimization: 1500,
        energySaving: 12144.12,
        // Operations data
        revenue: 412324,
        revenueChange: 2.031,
        profit: 221324.50,
        profitChange: -52201,
        nps: 90,
        occupancy: 92.8,
        occupancyChange: -1.22,
        // Rental income data
        incomeData: [380000, 370000, 390000, 400000, 410000, 420000, 430000, 440000, 430000, 420000, 410000, 400000],
        // Operation cost data
        costData: [100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000, 210000],
        // Occupancy data
        occupancyData: { occupied: 93, vacant: 7 },
        // Monthly rentals
        rentedByMonth: [6, 7, 7, 7, 8, 7, 7, 7, 7, 7, 7, 7],
        availableByMonth: [1, 2, 4, 4, 3, 4, 4, 5, 4, 4, 4, 4],
        // Renewed contracts
        renewedContracts: [12, 11, 13, 14, 15, 16, 17, 18, 17, 16, 15, 14],
        // Property types
        propertyTypes: [
            { name: "Big Studio", rented: 333, total: 341, percentage: 97.7 },
            { name: "Middle Studio", rented: 228, total: 338, percentage: 67.5 },
            { name: "Smaller Studio", rented: 150, total: 272, percentage: 55.1 },
            { name: "3 Bed Apartment", rented: 339, total: 375, percentage: 90.4 },
            { name: "2 Bed Apartment", rented: 188, total: 200, percentage: 94 },
            { name: "1 Bed Apartment", rented: 330, total: 330, percentage: 100 }
        ],
        // Expiring leases
        expiringLeases: [
            { value: "$124,245", label: "< 30 Days", units: 8 },
            { value: "$245,000", label: "31-70 Days", units: 16 },
            { value: "$321,000", label: "61-90 Days", units: 22 }
        ],
        // Expiring leases chart
        expiringLeasesChart: [
            { value: 8, label: "< 30 Days", color: '#4da8da', cost: 124245 },
            { value: 16, label: "31-70 Days", color: '#2980b9', cost: 245000 },
            { value: 22, label: "61-90 Days", color: '#1c6ea4', cost: 321000 }
        ],
        newLeads: 145,
        newLeadsChange: 41,
        leaseDuration: 15.6,
        // Utilities data - adjusted for stacked bar chart with Electricity and Property Mgmt. Fee being largest
        utilitiesData: {
            electricity: [4200, 4000, 4300, 4100, 4500, 4700, 4900, 5100, 4800, 4600, 4400, 4200],
            gas: [2200, 2100, 2300, 2200, 2400, 2500, 2600, 2700, 2500, 2400, 2300, 2200],
            water: [800, 750, 850, 800, 900, 950, 1000, 1050, 950, 900, 850, 800],
            property: [3800, 3600, 3900, 3700, 4000, 4200, 4400, 4600, 4300, 4100, 3900, 3700]
        }
    },
    "building-b": {
        name: "Building B - Hong Kong B",
        location: "Kowloon, Hong Kong",
        region: "hongkong",
        coordinates: [22.3167, 114.1833],
        energyOptimization: 1200,
        energySaving: 9800.50,
        // Operations data
        revenue: 275000,
        revenueChange: -1.5,
        profit: 125000,
        profitChange: -65000,
        nps: 78,
        occupancy: 85.2,
        occupancyChange: -3.5,
        // Rental income data
        incomeData: [320000, 310000, 300000, 290000, 280000, 270000, 260000, 250000, 240000, 230000, 220000, 210000],
        // Operation cost data
        costData: [120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000, 210000, 220000, 230000],
        // Occupancy data
        occupancyData: { occupied: 85, vacant: 15 },
        // Monthly rentals
        rentedByMonth: [4, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5],
        availableByMonth: [3, 4, 6, 6, 5, 6, 6, 7, 6, 6, 6, 6],
        // Renewed contracts
        renewedContracts: [8, 7, 9, 10, 11, 12, 13, 14, 13, 12, 11, 10],
        // Property types
        propertyTypes: [
            { name: "Big Studio", rented: 210, total: 250, percentage: 84 },
            { name: "Middle Studio", rented: 150, total: 220, percentage: 68.2 },
            { name: "Smaller Studio", rented: 100, total: 180, percentage: 55.6 },
            { name: "3 Bed Apartment", rented: 220, total: 260, percentage: 84.6 },
            { name: "2 Bed Apartment", rented: 120, total: 150, percentage: 80 },
            { name: "1 Bed Apartment", rented: 200, total: 200, percentage: 100 }
        ],
        // Expiring leases
        expiringLeases: [
            { value: "$85,000", label: "< 30 Days", units: 12 },
            { value: "$170,000", label: "31-70 Days", units: 10 },
            { value: "$225,000", label: "61-90 Days", units: 10 }
        ],
        // Expiring leases chart
        expiringLeasesChart: [
            { value: 12, label: "< 30 Days", color: '#4da8da', cost: 85000 },
            { value: 10, label: "31-70 Days", color: '#2980b9', cost: 170000 },
            { value: 10, label: "61-90 Days", color: '#1c6ea4', cost: 225000 }
        ],
        newLeads: 95,
        newLeadsChange: -15,
        leaseDuration: 12.3,
        // Utilities data
        utilitiesData: {
            electricity: [3800, 3600, 3900, 3700, 4000, 4200, 4400, 4600, 4300, 4100, 3900, 3700],
            gas: [2000, 1900, 2100, 2000, 2200, 2300, 2400, 2500, 2300, 2200, 2100, 2000],
            water: [700, 650, 750, 700, 800, 850, 900, 950, 850, 800, 750, 700],
            property: [3500, 3300, 3600, 3400, 3700, 3900, 4100, 4300, 4000, 3800, 3600, 3400]
        }
    },
    "building-c": {
        name: "Building C - Hong Kong C",
        location: "Wan Chai, Hong Kong",
        region: "hongkong",
        coordinates: [22.2793, 114.1729],
        energyOptimization: 1800,
        energySaving: 14200.75,
        // Operations data
        revenue: 398000,
        revenueChange: 1.8,
        profit: 215000,
        profitChange: -48000,
        nps: 88,
        occupancy: 91.5,
        occupancyChange: -0.9,
        // Rental income data
        incomeData: [365000, 465000, 455000, 385000, 395000, 405000, 415000, 425000, 415000, 405000, 395000, 385000],
        // Operation cost data
        costData: [105000, 115000, 125000, 135000, 145000, 155000, 165000, 175000, 185000, 195000, 205000, 215000],
        // Occupancy data
        occupancyData: { occupied: 91, vacant: 9 },
        // Monthly rentals
        rentedByMonth: [5, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6],
        availableByMonth: [2, 3, 5, 5, 4, 5, 5, 6, 5, 5, 5, 5],
        // Renewed contracts
        renewedContracts: [11, 19, 22, 17, 14, 15, 16, 17, 16, 11, 9, 4],
        // Property types
        propertyTypes: [
            { name: "Big Studio", rented: 305, total: 315, percentage: 96.8 },
            { name: "Middle Studio", rented: 205, total: 305, percentage: 67.2 },
            { name: "Smaller Studio", rented: 135, total: 245, percentage: 55.1 },
            { name: "3 Bed Apartment", rented: 315, total: 345, percentage: 91.3 },
            { name: "2 Bed Apartment", rented: 170, total: 185, percentage: 91.9 },
            { name: "1 Bed Apartment", rented: 305, total: 305, percentage: 100 }
        ],
        // Expiring leases
        expiringLeases: [
            { value: "$110,000", label: "< 30 Days", units: 9 },
            { value: "$220,000", label: "31-70 Days", units: 14 },
            { value: "$290,000", label: "61-90 Days", units: 15 }
        ],
        // Expiring leases chart
        expiringLeasesChart: [
            { value: 9, label: "< 30 Days", color: '#4da8da', cost: 110000 },
            { value: 14, label: "31-70 Days", color: '#2980b9', cost: 220000 },
            { value: 15, label: "61-90 Days", color: '#1c6ea4', cost: 290000 }
        ],
        newLeads: 125,
        newLeadsChange: 25,
        leaseDuration: 14.8,
        // Utilities data
        utilitiesData: {
            electricity: [4000, 3800, 4100, 3900, 4200, 4400, 4600, 4800, 4500, 4300, 4100, 3900],
            gas: [2100, 2000, 2200, 2100, 2300, 2400, 2500, 2600, 2400, 2300, 2200, 2100],
            water: [750, 700, 800, 750, 850, 900, 950, 1000, 900, 850, 800, 750],
            property: [3700, 3500, 3800, 3600, 3900, 4100, 4300, 4500, 4200, 4000, 3800, 3600]
        }
    },
    // Mainland China building - 1 building
    "building-d": {
        name: "Building D - Beijing A",
        location: "Beijing, China",
        region: "mainland",
        coordinates: [39.9042, 116.4074],
        energyOptimization: 2200,
        energySaving: 18500.25,
        // Operations data
        revenue: 520000,
        revenueChange: 3.2,
        profit: 280000,
        profitChange: -35000,
        nps: 89,
        occupancy: 93.5,
        occupancyChange: 0.8,
        // Rental income data
        incomeData: [400000, 410000, 420000, 430000, 440000, 450000, 460000, 470000, 480000, 490000, 500000, 510000],
        // Operation cost data
        costData: [110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000, 210000, 220000],
        // Occupancy data
        occupancyData: { occupied: 93, vacant: 7 },
        // Monthly rentals
        rentedByMonth: [7, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8],
        availableByMonth: [1, 1, 3, 3, 2, 3, 3, 4, 3, 3, 3, 3],
        // Renewed contracts
        renewedContracts: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
        // Property types
        propertyTypes: [
            { name: "Big Studio", rented: 360, total: 370, percentage: 97.3 },
            { name: "Middle Studio", rented: 250, total: 360, percentage: 69.4 },
            { name: "Smaller Studio", rented: 170, total: 290, percentage: 58.6 },
            { name: "3 Bed Apartment", rented: 350, total: 385, percentage: 90.9 },
            { name: "2 Bed Apartment", rented: 195, total: 210, percentage: 92.9 },
            { name: "1 Bed Apartment", rented: 345, total: 345, percentage: 100 }
        ],
        // Expiring leases
        expiringLeases: [
            { value: "$145,000", label: "< 30 Days", units: 10 },
            { value: "$275,000", label: "31-70 Days", units: 18 },
            { value: "$350,000", label: "61-90 Days", units: 22 }
        ],
        // Expiring leases chart
        expiringLeasesChart: [
            { value: 10, label: "< 30 Days", color: '#4da8da', cost: 145000 },
            { value: 18, label: "31-70 Days", color: '#2980b9', cost: 275000 },
            { value: 22, label: "61-90 Days", color: '#1c6ea4', cost: 350000 }
        ],
        newLeads: 175,
        newLeadsChange: 48,
        leaseDuration: 16.8,
        // Utilities data
        utilitiesData: {
            electricity: [4500, 4300, 4600, 4400, 4800, 5000, 5200, 5400, 5100, 4900, 4700, 4500],
            gas: [2300, 2200, 2400, 2300, 2500, 2600, 2700, 2800, 2600, 2500, 2400, 2300],
            water: [850, 800, 900, 850, 950, 1000, 1050, 1100, 1000, 950, 900, 850],
            property: [4000, 3800, 4100, 3900, 4200, 4400, 4600, 4800, 4500, 4300, 4100, 3900]
        }
    },
    // Europe building - 1 building
    "building-e": {
        name: "Building E - London A",
        location: "London, UK",
        region: "europe",
        coordinates: [51.5074, -0.1278],
        energyOptimization: 1600,
        energySaving: 13200.80,
        // Operations data
        revenue: 480000,
        revenueChange: 2.8,
        profit: 260000,
        profitChange: -32000,
        nps: 88,
        occupancy: 91.5,
        occupancyChange: 0.3,
        // Rental income data
        incomeData: [370000, 360000, 380000, 390000, 400000, 410000, 420000, 430000, 420000, 410000, 400000, 390000],
        // Operation cost data
        costData: [100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000, 210000],
        // Occupancy data
        occupancyData: { occupied: 92, vacant: 8 },
        // Monthly rentals
        rentedByMonth: [6, 7, 7, 7, 8, 7, 7, 7, 7, 7, 7, 7],
        availableByMonth: [2, 2, 4, 4, 3, 4, 4, 5, 4, 4, 4, 4],
        // Renewed contracts
        renewedContracts: [12, 11, 13, 14, 15, 16, 17, 18, 17, 16, 15, 14],
        // Property types
        propertyTypes: [
            { name: "Big Studio", rented: 340, total: 350, percentage: 97.1 },
            { name: "Middle Studio", rented: 230, total: 340, percentage: 67.6 },
            { name: "Smaller Studio", rented: 155, total: 275, percentage: 56.4 },
            { name: "3 Bed Apartment", rented: 335, total: 370, percentage: 90.5 },
            { name: "2 Bed Apartment", rented: 185, total: 195, percentage: 94.9 },
            { name: "1 Bed Apartment", rented: 325, total: 325, percentage: 100 }
        ],
        // Expiring leases
        expiringLeases: [
            { value: "$130,000", label: "< 30 Days", units: 8 },
            { value: "$250,000", label: "31-70 Days", units: 16 },
            { value: "$325,000", label: "61-90 Days", units: 21 }
        ],
        // Expiring leases chart
        expiringLeasesChart: [
            { value: 8, label: "< 30 Days", color: '#4da8da', cost: 130000 },
            { value: 16, label: "31-70 Days", color: '#2980b9', cost: 250000 },
            { value: 21, label: "61-90 Days", color: '#1c6ea4', cost: 325000 }
        ],
        newLeads: 155,
        newLeadsChange: 42,
        leaseDuration: 15.9,
        // Utilities data
        utilitiesData: {
            electricity: [4200, 4000, 4300, 4100, 4400, 4600, 4800, 5000, 4700, 4500, 4300, 4100],
            gas: [2200, 2100, 2300, 2200, 2400, 2500, 2600, 2700, 2500, 2400, 2300, 2200],
            water: [800, 750, 850, 800, 900, 950, 1000, 1050, 950, 900, 850, 800],
            property: [3800, 3600, 3900, 3700, 4000, 4200, 4400, 4600, 4300, 4100, 3900, 3700]
        }
    },
    // USA building - 1 building
    "building-f": {
        name: "Building F - New York A",
        location: "New York, USA",
        region: "usa",
        coordinates: [40.7128, -74.0060],
        energyOptimization: 2400,
        energySaving: 19800.60,
        // Operations data
        revenue: 550000,
        revenueChange: 3.5,
        profit: 300000,
        profitChange: -25000,
        nps: 92,
        occupancy: 94.8,
        occupancyChange: 1.0,
        // Rental income data
        incomeData: [420000, 430000, 440000, 450000, 460000, 470000, 480000, 490000, 500000, 510000, 520000, 530000],
        // Operation cost data
        costData: [115000, 125000, 135000, 145000, 155000, 165000, 175000, 185000, 195000, 205000, 215000, 225000],
        // Occupancy data
        occupancyData: { occupied: 95, vacant: 5 },
        // Monthly rentals
        rentedByMonth: [7, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8],
        availableByMonth: [1, 1, 3, 3, 2, 3, 3, 4, 3, 3, 3, 3],
        // Renewed contracts
        renewedContracts: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
        // Property types
        propertyTypes: [
            { name: "Big Studio", rented: 370, total: 380, percentage: 97.4 },
            { name: "Middle Studio", rented: 260, total: 370, percentage: 70.3 },
            { name: "Smaller Studio", rented: 175, total: 300, percentage: 58.3 },
            { name: "3 Bed Apartment", rented: 360, total: 395, percentage: 91.1 },
            { name: "2 Bed Apartment", rented: 200, total: 215, percentage: 93.0 },
            { name: "1 Bed Apartment", rented: 350, total: 350, percentage: 100 }
        ],
        // Expiring leases
        expiringLeases: [
            { value: "$155,000", label: "< 30 Days", units: 11 },
            { value: "$285,000", label: "31-70 Days", units: 19 },
            { value: "$365,000", label: "61-90 Days", units: 22 }
        ],
        // Expiring leases chart
        expiringLeasesChart: [
            { value: 11, label: "< 30 Days", color: '#4da8da', cost: 155000 },
            { value: 19, label: "31-70 Days", color: '#2980b9', cost: 285000 },
            { value: 22, label: "61-90 Days", color: '#1c6ea4', cost: 365000 }
        ],
        newLeads: 185,
        newLeadsChange: 50,
        leaseDuration: 17.2,
        // Utilities data
        utilitiesData: {
            electricity: [4800, 4600, 4900, 4700, 5000, 5200, 5400, 5600, 5300, 5100, 4900, 4700],
            gas: [2400, 2300, 2500, 2400, 2600, 2700, 2800, 2900, 2700, 2600, 2500, 2400],
            water: [900, 850, 950, 900, 1000, 1050, 1100, 1150, 1050, 1000, 950, 900],
            property: [4200, 4000, 4300, 4100, 4400, 4600, 4800, 5000, 4700, 4500, 4300, 4100]
        }
    }
};

// Lease expiry timeline table data
const leaseExpiryData = [
    { name: "Jerry Mattedi", orderDate: "19 May, 2024: 10:10 AM", phone: "251-661-5362", location: "New York", registered: "Yes" },
    { name: "Ellanora Vasilov", orderDate: "18 May, 2024 : 3:12 PM", phone: "171-534-1262", location: "Ontario", registered: "No" },
    { name: "Alvis Daen", orderDate: "17 May, 2023 : 2:15 PM", phone: "974-661-5110", location: "Milan", registered: "Yes" },
    { name: "Lissa Shipsey", orderDate: "23 Apr, 2023 : 1:15 PM", phone: "541-661-3042", location: "San Francisco", registered: "Yes" },
    { name: "John Smith", orderDate: "15 Jun, 2024: 9:30 AM", phone: "555-123-4567", location: "Chicago", registered: "Yes" },
    { name: "Emma Johnson", orderDate: "12 Jul, 2024: 2:45 PM", phone: "555-987-6543", location: "Miami", registered: "No" },
    { name: "Michael Brown", orderDate: "10 Aug, 2024: 11:20 AM", phone: "555-456-7890", location: "Seattle", registered: "Yes" },
    { name: "Sarah Davis", orderDate: "05 Sep, 2024: 4:15 PM", phone: "555-789-0123", location: "Boston", registered: "Yes" },
    { name: "Robert Wilson", orderDate: "28 Oct, 2024: 1:30 PM", phone: "555-234-5678", location: "Austin", registered: "No" },
    { name: "Jennifer Taylor", orderDate: "20 Nov, 2024: 10:00 AM", phone: "555-876-5432", location: "Denver", registered: "Yes" },
    { name: "William Anderson", orderDate: "15 Dec, 2024: 3:45 PM", phone: "555-345-6789", location: "Portland", registered: "Yes" },
    { name: "Linda Martinez", orderDate: "08 Jan, 2025: 9:15 AM", phone: "555-654-3210", location: "Phoenix", registered: "No" },
    { name: "David Thompson", orderDate: "30 Jan, 2025: 2:30 PM", phone: "555-789-4561", location: "Las Vegas", registered: "Yes" },
    { name: "Patricia Garcia", orderDate: "22 Feb, 2025: 11:45 AM", phone: "555-321-9876", location: "Atlanta", registered: "Yes" },
    { name: "Richard Miller", orderDate: "15 Mar, 2025: 4:20 PM", phone: "555-654-9871", location: "Detroit", registered: "No" },
    { name: "Jessica Davis", orderDate: "08 Apr, 2025: 10:10 AM", phone: "555-987-3214", location: "Houston", registered: "Yes" },
    { name: "Thomas Wilson", orderDate: "01 May, 2025: 3:15 PM", phone: "555-741-8529", location: "Philadelphia", registered: "Yes" },
    { name: "Susan Moore", orderDate: "24 May, 2025: 1:45 PM", phone: "555-963-2587", location: "San Diego", registered: "No" },
    { name: "Charles Taylor", orderDate: "17 Jun, 2025: 9:30 AM", phone: "555-852-7419", location: "Dallas", registered: "Yes" },
    { name: "Karen Clark", orderDate: "10 Jul, 2025: 2:00 PM", phone: "555-369-2581", location: "San Jose", registered: "Yes" }
];