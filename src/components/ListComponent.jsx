import { FaShoppingBag } from "react-icons/fa";
import { hashTagExtractor } from "../utils";
import CardWithNavTabForList from "./CardsWithNavTabForList";

const ListComponent = ({ data, type }) => {
  const some = hashTagExtractor(data?.stats);

  return <CardWithNavTabForList data={some} />;
};

export default ListComponent;
