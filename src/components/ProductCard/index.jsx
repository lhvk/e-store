import { IconCartOutline } from "../../assets/svg";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { productAdded } from "../../utils";
import { Box } from "../Box";
import { Button } from "../Buttons";
import { CalcDiscount } from "../CalcDiscount";
import { StarRating } from "../StarRating";
import {
  ButtonContainer,
  CardContainer,
  CardFooter,
  CardHeader,
  CardImage,
  OnSaleBadge,
} from "./styles.index";

export function ProductCard({ data: product }) {
  const { incrementCartQuantity } = useShoppingCart();

  return (
    <CardContainer>
      <CardHeader>
        <CardImage
          className="card-img"
          src={product.imageUrl}
        />
        <OnSaleBadge
          display={product.discountedPrice < product.price ? "flex" : "none"}>
          Sale
        </OnSaleBadge>
      </CardHeader>

      <CardFooter>
        <Box mb="8px">
          <h2>{product.title}</h2>
          {StarRating(product.rating, "18px")}
        </Box>

        {CalcDiscount(product.price, product.discountedPrice)}

        <ButtonContainer>
          <Button
            primary
            minWidth="unset"
            onClick={(e) => {
              e.preventDefault();
              incrementCartQuantity(
                product.id,
                product.title,
                product.imageUrl,
                product.price,
                product.discountedPrice
              );
              productAdded(product.title);
            }}>
            <IconCartOutline
              width="32px"
              height="32px"
            />
          </Button>
        </ButtonContainer>
      </CardFooter>
    </CardContainer>
  );
}
