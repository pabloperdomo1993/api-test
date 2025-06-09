import { TransactionEntity } from 'src/flows/transaction/domain/entity/transaction.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn('increment')
    idUser: number;

    @Column('varchar')
    names: string;

    @Column('varchar')
    lastNames: string;

    @Column('varchar')
    documentNumber: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    phoneNumber: string;

    @Column('varchar')
    password: string;

    @Column('timestamp', { nullable: true })
    createdAt: Date;

    @Column('timestamp', { nullable: true })
    updatedAt: Date;

    @OneToMany(() => TransactionEntity, transaction => transaction.user)
    transactions: TransactionEntity[];
}
