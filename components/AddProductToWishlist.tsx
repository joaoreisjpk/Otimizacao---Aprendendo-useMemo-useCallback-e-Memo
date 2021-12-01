export interface AddProductToWishlistProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export default function AddProductToWishlist({onAddToWishList, onRequestClose}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adiciona aos favoritos?
      <button type="button" onClick={onAddToWishList}>Sim</button>
      <button type="button" onClick={onRequestClose}>Não</button>
    </span>
  )
}
