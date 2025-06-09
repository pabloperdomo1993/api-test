import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { RestaurantEntity } from './restaurant.entity';

@Entity('cities')
export class CityEntity {

    @PrimaryColumn()
    code: number;

    @Column('varchar')
    name: string;

    @OneToMany(() => RestaurantEntity, restaurant => restaurant.city)
    restaurants: RestaurantEntity[];
}
