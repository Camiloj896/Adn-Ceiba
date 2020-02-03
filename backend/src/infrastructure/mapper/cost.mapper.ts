import Cost from 'src/domain/services/cost';
import { CostEntity } from './../adapters/repository/entity/cost.entity';

export default class CostMapper {

    public static toDomain(costEntity: CostEntity): Cost {
        return new Cost(
            costEntity.id,
            costEntity.type,
            costEntity.amount,
            costEntity.value,
            new Date(costEntity.createAt),
        );
    }
   
    public static toDomains(costEntity: CostEntity[]): Cost[] {
        const costs = new Array<Cost>();
        costEntity.forEach( costEntity => {
            const cost = this.toDomain(costEntity);
            costs.push(cost)
        });
        return costs;
    }

}