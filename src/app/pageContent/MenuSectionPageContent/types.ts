export interface IMenuSectionPageContentProps {
  data: {
    name?: string;
    type?: string;
    description?: string;
    weight?: string;
    price?: string;
    variants?: {
      name: string;
      weight: string;
      price: string;
    }[];
  }[];
  opacity?: string;
  title: string;
}