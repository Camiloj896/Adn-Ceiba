import Cost from 'src/domain/dto/cost.dto';

export interface CostRepository {

    getAll(): Promise<Cost[]>;

    /**
   * Returns cost filtered by id
   * @param {string} productId
   * @returns a `cost` object containing the data.
   */
    getCost(id: string): Promise<Cost>;

    createCost(cost: Cost): Promise<Cost>;

    updateCost(id: string, cost: Cost): Promise<Cost>;

    deleteCost(id: string): Promise<Cost>;

}