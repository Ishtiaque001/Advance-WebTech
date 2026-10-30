import { Entity, PrimaryGeneratedColumn, Column,
 CreateDateColumn, UpdateDateColumn, 
 TreeLevelColumn} from 'typeorm';

 @Entity()
 export class Products {
    @PrimaryGeneratedColumn()
    id:number;

    @Column() 
    name:string;
    
    @Column({
      nullable:true
    })
    desciption: string;

    @Column({
      type :"decimal",
      precision:10,
       scale: 2
    })
     price : number;

    @Column({ 
    default: 0
    })
    stock: number;

  @Column()
  categoty:string;

  @Column({
   default:true
  })
  isActive: boolean;


  @CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;


    

 }
