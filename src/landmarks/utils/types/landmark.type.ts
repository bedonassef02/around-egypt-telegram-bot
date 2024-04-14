export interface Landmark {
  name: string;
  description: string;
  era: string;
  famous_figures: string;
  location: {
    name: string;
    latitude: number;
    longitude: number;
  };
  city: {
    name: string;
  };
  tags: { name: string }[];
  images: string[];
  price: number;
  opening_hours: string;
  cover_image: string;
  is_recommended: boolean;
}
