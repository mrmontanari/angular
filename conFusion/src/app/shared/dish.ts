import { Comment } from './comment';
export class Dish {
    id?: string; // ponto d einterrogação para tornar a propriedade opcional e não ter erro de inicialização
    name?: string;
    image?: string;
    category?: string;
    featured?: boolean;
    label?: string;
    price?: string;
    description?: string;
    comments?: Comment[];
    }
