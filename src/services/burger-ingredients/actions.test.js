import { loadIngredients, LOAD_INGREDIENTS_SUCCESS, INGREDIENTS_LOADING, INGREDIENTS_ERROR } from './actions';
import { getBurgerIngredients } from '../../utils/stellar-burger-api';

jest.mock('../../utils/stellar-burger-api', () => ({
  getBurgerIngredients: jest.fn(),
}));

describe('loadIngredients action', () => {
  let dispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatch = jest.fn();
  });

  it('dispatches INGREDIENTS_LOADING and LOAD_INGREDIENTS_SUCCESS on successful API call', async () => {
    const mockIngredients = {
      data: [
        { id: 1, type: 'bun', name: 'Bun 1' },
        { id: 2, type: 'sauce', name: 'Sauce 1' },
        { id: 3, type: 'main', name: 'Main 1' },
      ],
    };

    getBurgerIngredients.mockResolvedValueOnce(mockIngredients);

    await loadIngredients()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: INGREDIENTS_LOADING });

    expect(dispatch).toHaveBeenCalledWith({
      type: LOAD_INGREDIENTS_SUCCESS,
      payload: [
        { groupName: 'Булки', ingredients: [mockIngredients.data[0]] },
        { groupName: 'Соусы', ingredients: [mockIngredients.data[1]] },
        { groupName: 'Начинки', ingredients: [mockIngredients.data[2]] },
      ],
    });
  });
});
