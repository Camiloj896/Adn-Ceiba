import Cost from 'src/domain/services/cost';

export interface CostRepository {

    getAll(): Promise<Cost[]>;

    createCost(cost: Cost): Promise<Cost>;

}