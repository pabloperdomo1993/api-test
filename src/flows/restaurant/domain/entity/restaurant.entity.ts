import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CityEntity } from './city.entity';

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
}
