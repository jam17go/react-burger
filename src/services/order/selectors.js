export const getOrderState = (state) => {

    return {
        loading: state.order.loading,
        error: state.order.error,
        order: state.order.order,
    }
}