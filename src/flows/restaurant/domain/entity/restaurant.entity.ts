import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CityEntity } from './city.entity';
import { TransactionEntity } from 'src/flows/transaction/domain/entity/transaction.entity';

@Entity('restaurants')
export class RestaurantEntity {

    @PrimaryGeneratedColumn('increment')
    idRestaurant: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    cityId: string;

    @ManyToOne(() => CityEntity, city => city.restaurants)
    @JoinColumn({ name: 'cityId', referencedColumnName: 'code' })
    city: CityEntity;

    @OneToMany(() => TransactionEntity, transaction => transaction.user)
    transactions: TransactionEntity[];
}
