export interface CardDetailsInfos{
    title: string;
    description?: string;
    cover?: string;
    link?: string;
}

export class CardDetails {
    constructor(
        public id = 0,
        public infos: CardDetailsInfos[] = [] 
    ){}
}