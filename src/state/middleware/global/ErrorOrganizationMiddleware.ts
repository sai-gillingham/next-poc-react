import actions from "../../ducks/shared/site_health/actions";
export default function ErrorOrganizationMiddleware(storeAPI) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            if (action.type.includes('REQUEST_FAILURE') && action.payload?.errorData?.graphQLErrors) {
                console.log(action);
                // エラー処理                
                action.payload.errorData = {
                    simple: {
                        ...action.payload.errorData.graphQLErrors.map((error) => {
                            /** @todo: "FormValidation"を環境変数にする */
                            const fieldsObj = (error.extensions.category === "FormValidation" ? error.extensions.errorDetails.reduce((errorDetail, item) => {
                                return Object.assign(errorDetail, { [item.field]: item.message });
                            }) : null);
                                return {
                                    message: error.message,
                                    level: error.extensions.level,
                                    category: error.extensions.category,
                                    type: error.extensions?.type,
                                    fields: fieldsObj,
                                    generalErrorDetail: (error.extensions.category !== "FormValidation" ? error.extensions.errorDetails : null)
                                }
                            }
                        ),
                    },
                    developer: {
                        ...action.payload.errorData
                    }
                }
                console.log(action.payload.errorData);
                /** @todo: "ItemNotFound"を環境変数にする */
                if(action.payload.errorData?.simple[0]?.type === "ItemNotFound") {
                    // 404 アクションを発行
                    console.log("404エラー");
                    storeAPI.dispatch(actions.raise404Error(action.payload.errorData?.simple[0]))
                }
            }
            return next(action)
        }
    }
}
