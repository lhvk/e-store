import { IconStarOutline, IconStarSharp } from "../../assets/svg";
import { Flex } from "../Flex";

const switchRating = (rating, size, reviews) => {
  switch (rating) {
    case (rating = 1):
      return (
        <Flex>
          <IconStarSharp
            width={size}
            height={size}
          />
          ;
          <IconStarOutline
            width={size}
            height={size}
          />
          ;
          <IconStarOutline
            width={size}
            height={size}
          />
          ;
          <IconStarOutline
            width={size}
            height={size}
          />
          ;
          <IconStarOutline
            width={size}
            height={size}
          />
          ;{reviews || null}
        </Flex>
      );

    case (rating = 2):
      return (
        <Flex>
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          {reviews && (
            <Flex
              alignItems="flex-end"
              ml="5px">
              ({reviews || null})
            </Flex>
          )}
        </Flex>
      );

    case (rating = 3):
      return (
        <Flex>
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          {reviews && (
            <Flex
              alignItems="flex-end"
              ml="5px">
              ({reviews || null})
            </Flex>
          )}
        </Flex>
      );

    case (rating = 4):
      return (
        <Flex>
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          {reviews && (
            <Flex
              alignItems="flex-end"
              ml="5px">
              ({reviews || null})
            </Flex>
          )}
        </Flex>
      );

    case (rating = 5):
      return (
        <Flex>
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          <IconStarSharp
            width={size}
            height={size}
          />
          {reviews && (
            <Flex
              alignItems="flex-end"
              ml="5px">
              ({reviews || null})
            </Flex>
          )}
        </Flex>
      );
    default:
      return (
        <Flex>
          <IconStarOutline
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
          <IconStarOutline
            width={size}
            height={size}
          />
        </Flex>
      );
  }
};

export function StarRating(rating, size, reviews) {
  const noDecimal = Math.trunc(rating);
  return switchRating(noDecimal, size, reviews);
}
