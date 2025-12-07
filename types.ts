export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  stars: number;
  price: number;
  image: string;
  description: string;
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  logo: string;
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  duration: string;
  stops: number; // 0 for direct
  price: number;
}

export interface Package {
  id: string;
  name: string;
  type: 'Hajj' | 'Umrah';
  duration: string; // e.g., "7 days / 6 nights"
  price: number;
  image: string;
  tags: string[]; // e.g., ["Flight", "Hotel", "Visa"]
  isVIP?: boolean;
  isRamadan?: boolean;
  isPopular?: boolean;
}

export interface Activity {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
}
