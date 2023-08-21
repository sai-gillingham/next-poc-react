import OAuthApiUtils from "../../../../../utils/OAuthApiUtils";
import GraphQLUtils from "../../../../../utils/GraphQLUtils";
import productDetailQueries from "./graphql/queries";

export function callProductDetailData(id) {
    return new GraphQLUtils().sendQuery(
        productDetailQueries.GET_PRODUCT,
        {
            id: id
        }
    )
}
