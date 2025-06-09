import { RestaurantEntity } from 'src/flows/restaurant/domain/entity/restaurant.entity';
import { UserEntity } from 'src/flows/user/domain/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('transactions')
export class TransactionEntity {

    @PrimaryGeneratedColumn('increment')
    idTransaction: number;

    @Column('int')
    amount: number;

    @Column('varchar')
    currency: string;

    @Column('varchar')
    description: string;

    @Column('varchar')
    restaurantId: string;

    @Column('varchar')
    userId: string;

    @ManyToOne(() => RestaurantEntity, restaurant => restaurant.transactions)
    @JoinColumn({ name: 'restaurantId', referencedColumnName: 'idRestaurant' })
    restaurant: RestaurantEntity;

    @ManyToOne(() => UserEntity, user => user.transactions)
    @JoinColumn({ name: 'userId', referencedColumnName: 'idUser' })
    user: UserEntity;
}
