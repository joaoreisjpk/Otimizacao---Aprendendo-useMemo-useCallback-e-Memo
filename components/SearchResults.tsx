import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>,
  addToWishList: (id: number) => void;
}

export default function SearchResults({ results, addToWishList }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      {results.map((product) => (
        <ProductItem key={product.id} product={product} addToWishList={addToWishList} />
      ))}
    </div>
  );
}
