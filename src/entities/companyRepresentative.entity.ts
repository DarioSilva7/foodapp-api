import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import { BaseUser } from './baseUser.entity';

import { Company } from './index';
@Entity()
export class CompanyRepresentative {
  @PrimaryColumn('uuid')
  base_user_id: string;

  @OneToOne(() => BaseUser, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'base_user_id' })
  baseUser: BaseUser;

  @ManyToOne(() => Company, (company) => company.representatives, {
    onDelete: 'CASCADE',
  })
  company: Company;
}
