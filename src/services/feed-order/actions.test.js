import {
  loadOrder,
  LOAD_ORDER_SUCCESS,
  ORDER_LOADING,
  ORDER_ERROR,
} from "./actions";
import { getOrder } from "../../utils/stellar-burger-api";
import { AppDispatch } from "../hooks";

jest.mock("../../utils/stellar-burger-api", () => ({
  getOrder: jest.fn(),
}));

describe("loadOrder action", () => {
  let dispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatch = jest.fn();
  });

  it("dispatches ORDER_LOADING and LOAD_ORDER_SUCCESS on successful API call", async () => {
    const mockOrderData = {
      orders: [
        {
          _id: "order123",
          name: "Burger Order",
          ingredients: ["ingredient1", "ingredient2"],
        },
      ],
    };

    const mockIngredients = [
      { _id: "ingredient1", name: "Bun", price: 2 },
      { _id: "ingredient2", name: "Patty", price: 5 },
    ];

    getOrder.mockResolvedValueOnce(mockOrderData);

    await loadOrder("order123", mockIngredients)(dispatch);

    const expectedPayload = {
      ...mockOrderData.orders[0],
      ingredients: mockIngredients,
      price: 7, // 2 + 5
    };

    expect(dispatch).toHaveBeenCalledWith({ type: ORDER_LOADING });

    expect(dispatch).toHaveBeenCalledWith({
      type: LOAD_ORDER_SUCCESS,
      payload: expectedPayload,
    });
  });
});
