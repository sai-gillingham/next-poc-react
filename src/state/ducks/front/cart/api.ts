import GraphQLUtils from "../../../../utils/GraphQLUtils";
import productDetailQueries from "./graphql/mutations";

export function callProductDetailData(id) {
    return new GraphQLUtils().sendQuery(
        productDetailQueries.GET_PRODUCT,
        {
            id: id
        }
    )
}
