export default function ErrorOrganizationMiddleware(storeAPI) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            console.log(action);
            console.log(action.type);
            console.log(action.type.includes('REQUEST_FAILURE'));
            if (action.type.includes('REQUEST_FAILURE')) {
                // エラー処理
                console.log("Lets clean up the error data");
                console.log(action.payload.errorData.graphQLErrors);
                
                action.payload.errorData = {
                    simple: {
                        ...action.payload.errorData.graphQLErrors.map((error) => {
                            const fieldsObj = (error.extensions.category === "FormValidation" ? error.extensions.errorDetails.reduce((errorDetail, item) => {
                                return Object.assign(errorDetail, { [item.field]: item.message });
                            }) : null);

                            console.log(fieldsObj);
                                return {
                                    message: error.message,
                                    level: error.extensions.level,
                                    category: error.extensions.category,
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
            }
            return next(action)
        }
    }
}
