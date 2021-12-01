import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import {AddProductToWishlistProps} from './AddProductToWishlist';

// import AddProductToWishlist from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist')/* .then(mod => mod.AddProductToWishlist) */
}, {
  loading: () => <span>Carregando</span>
}) 

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title:string
  },
  addToWishList: (id: number) => void;
}

function ProductItemComponent({ product, addToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      {/* <button type="button" onClick={() => addToWishList(product.id)}>Favorite</button> */}

      <button type="button" onClick={() => setIsAddingToWishList(true)}>Adicionar aos Favoritos</button>

      {isAddingToWishList && (
        <AddProductToWishlist
          onAddToWishList={() => addToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
})
